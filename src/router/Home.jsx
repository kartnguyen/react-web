import { Link } from "react-router-dom";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import { useAppContext } from "../hooks/useAppContext";

const Home = () => {
  const { products } = useAppContext();
  return (
    <div className="home_page">
      <section>
        <div
          className="container title"
          style={{ minHeight: 550 }}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration={500}
        >
          <div className="content">
            <div className="text">
              <h2 style={{ fontSize: 54 }}>
                Niềm hạnh phúc khi cùng nhau thưởng thức bánh
              </h2>
              <p>
                Sự ra đời của{" "}
                <b>
                  <i>KarT&apos;s House</i>
                </b>{" "}
                bắt nguồn từ niềm đam mê bất tận về bánh ngọt của một người đầu
                bếp và tư duy sáng tạo của một nhà thiết kế. Được định hình là
                thương hiệu bánh ngọt chuẩn Pháp,
                <b>
                  <i> KarT&apos;s House </i>
                </b>
                trao tới bạn những chiếc bánh Entremet tinh tế, cùng nhiều loại
                bánh ngọt cao cấp và trên hết - niềm hạnh phúc khi thưởng thức
                bánh cùng những người mà bạn yêu thương.
              </p>
            </div>
            <div className="action">
              <Link to={"products"}>
                <button className="cart">đặt hàng ngay</button>
              </Link>
            </div>
          </div>
          <MDBCarousel fade>
            <MDBCarouselItem
              className="item"
              itemId={1}
              src="./cake/store-1.jpg"
              alt="..."
            />
            <MDBCarouselItem
              className="item"
              itemId={2}
              src="./cake/store-2.jpg"
              alt="..."
            />
            <MDBCarouselItem
              className="item"
              itemId={3}
              src="./cake/store-3.jpg"
              alt="..."
            />
            <MDBCarouselItem
              className="item"
              itemId={4}
              src="./cake/cake-5.jpg"
              alt="..."
            />
          </MDBCarousel>
        </div>
      </section>
      <section>
        <div
          className="container"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration={500}
        >
          <div className="products-title">
            <h2 className="name-products">Danh mục sản phẩm</h2>
            <Link to={"products"}>Xem thêm</Link>
          </div>
          <div className="slider-products owl-carousel owl-theme" />
          <MDBCarousel showControls showIndicators>
            {products.map((product) => (
              <MDBCarouselItem
                key={product.id}
                className="item"
                itemId={product.id}
                src={product.image[0]}
                alt={product.name}
              ></MDBCarouselItem>
            ))}
          </MDBCarousel>
        </div>
      </section>
      <section>
        <div
          className="container title left"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration={500}
        >
          <div className="cake_img">
            <div
              className="img"
              style={{
                backgroundImage: "url(./cake/cake-4.jpg)",
              }}
            />
            <div
              className="img"
              style={{
                backgroundImage: "url(./cake/cake-6.jpg)",
              }}
            />
            <div
              className="img"
              style={{
                backgroundImage: "url(./cake/cake-1.jpg)",
              }}
            />
            <div
              className="img"
              style={{
                backgroundImage: "url(./cake/cake-8.jpg)",
              }}
            />
          </div>
          <div className="text">
            <h2 style={{ color: "#A66D56" }}>Chất lượng</h2>
            <p>
              Để mang lại trải nghiệm đáng nhớ trong từng chiếc bánh, sản phẩm
              của{" "}
              <b>
                <i>KarT&apos;s House</i>
              </b>{" "}
              được làm từ những nguyên liệu được chọn lựa cẩn thận và hoàn thiện
              tỉ mỉ với những tiêu chuẩn cao cấp nhất.
            </p>
          </div>
        </div>
      </section>
      <section style={{ paddingBottom: "4em" }}>
        <div
          className="container title title-up"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration={500}
        >
          <div className="text">
            <h2 style={{ color: "#A66D56" }}>Cho mọi người</h2>
            <p>
              Bánh của{" "}
              <b>
                <i>KarT&apos;s House</i>
              </b>{" "}
              được nghiên cứu để phù hợp với khẩu vị của người Việt và luôn được
              đóng gói chỉnh chu để ai cũng có thể nhận về những niềm vui khi
              bánh được giao tới tận nơi.
            </p>
          </div>
          <div className="cake_img2">
            <div
              className="img"
              style={{
                backgroundImage: "url(./cake/cake-11.jpg)",
              }}
            />
            <div
              className="img"
              style={{
                backgroundImage: "url(./cake/cake-12.jpg)",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
