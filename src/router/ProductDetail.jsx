import { useParams } from "react-router-dom";
import { format_price } from "../assets/main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../hooks/useAppContext";
import { useState } from "react";

const ProductDetail = () => {
  const [currentImg, setCurrentImg] = useState(product.image[0]);
  
  const { productID } = useParams();
  const { findProductById } = useAppContext();

  const product = findProductById(productID);

  const handleImgSlider = (img) => {
    setCurrentImg(img.img);
  };
  return (
    <section className="products_details_page" style={{ paddingTop: "8em" }}>
      <div className="container">
        <div className="products-container">
          <div className="slider">
            <div
              className="slide cake-img"
              style={{ backgroundImage: `url('${currentImg}')` }}
            />
            <div className="images">
              {product.image.map((img) => (
                <div className="item" key={img}>
                  <div
                    className="cake-img"
                    style={{ backgroundImage: `url('${img}')` }}
                    onClick={() => handleImgSlider({ img })}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="content">
            <h3 className="name">{product.name}</h3>
            <h4 className="sub_title">{product.sub_title}</h4>
            <div className="quantity">
              <div className="buttons_added">
                <button className="minus is-form">
                  <FontAwesomeIcon icon={faMinus} size="1x" />
                </button>
                <span className="input-qty">{product.quantity}</span>
                <button className="plus is-form">
                  <FontAwesomeIcon icon={faPlus} size="1x" />
                </button>
              </div>
              <button className="btn-add">thêm vào giỏ hàng</button>
            </div>
            <h4 className="price">{format_price(product.price)}</h4>
            <p>{product.content}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="related-pro">
          <h2 className="name-products">Các sản phẩm liên quan</h2>
          <div className="related owl-carousel owl-theme" />
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
