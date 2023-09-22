import { useState } from "react";
import { products } from "../assets/api";
import { format_price } from "../assets/main";
import { Link } from "react-router-dom";

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterProducts = (cate = "all") => {
    if (cate === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => {
        return product.category.includes(cate);
      });
      setFilteredProducts(filtered);
    }
  };

  return (
    <section className="products_page">
      <div className="container">
        <div className="grid">
          <div className="side_container">
            <div className="side_bar">
              <ul>
                <li className="filter active all">
                  <a href="#" onClick={() => filterProducts()}>
                    All
                  </a>
                </li>
                <li className="filter mood_cake">
                  <a href="#" onClick={() => filterProducts("mc")}>
                    Mood Cake
                  </a>
                </li>
                <li className="filter lover_cake">
                  <a href="#" onClick={() => filterProducts("lc")}>
                    Lover Cake
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="products">
            {filteredProducts.map((item) => (
              <div key={item.id} className="item">
                <Link to={`/products/${item.id}`}>
                  <div
                    className="img"
                    style={{ backgroundImage: `url('${item.image[0]}')` }}
                  ></div>
                </Link>
                <div className="content">
                  <Link to={`/products/${item.id}`}>
                    <h3>{item.name}</h3>
                  </Link>
                  <h4>{format_price(item.price)}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
