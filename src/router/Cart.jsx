import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <section className="cart_page" style={{ paddingTop: "8em" }}>
      <div className="container cart_obj">
        <div className="information">
          <div className="delivery">
            <h3>Thông tin vận chuyển</h3>
            <div className="list">
              <div className="item">
                <label htmlFor="name">
                  <p>Họ và tên</p>
                  <span className="required" title="required">
                    *
                  </span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="input name"
                  placeholder="Họ và tên"
                />
              </div>
              <div className="item">
                <label htmlFor="phone">
                  <p>Số điện thoại</p>
                  <span className="required" title="required">
                    *
                  </span>
                </label>
                <input
                  type="text"
                  id="phone"
                  className="input phone"
                  placeholder="Số điện thoại"
                />
              </div>
              <div className="item">
                <label htmlFor="email">
                  <p>Email</p>
                  <span className="required" title="required">
                    *
                  </span>
                </label>
                <input
                  type="text"
                  id="email"
                  className="input email"
                  placeholder="Email"
                />
              </div>
              <div className="item">
                <label htmlFor="district">
                  <p>Quận</p>
                  <span className="required" title="required">
                    *
                  </span>
                </label>
                <input
                  type="text"
                  id="district"
                  className="input district"
                  placeholder="Quận"
                />
              </div>
              <div className="item">
                <label htmlFor="address">
                  <p>Địa chỉ</p>
                  <span className="required" title="required">
                    *
                  </span>
                </label>
                <input
                  type="text"
                  id="address"
                  className="input address"
                  placeholder="Địa chỉ"
                />
              </div>
            </div>
          </div>
          <div className="schedule">
            <h3>Đặt lịch giao sau</h3>
            <span>
              <div className="checkbox-wrapper">
                <input className="tgl tgl-skewed" id="cb" type="checkbox" />
                <label
                  className="tgl-btn"
                  data-tg-off="OFF"
                  data-tg-on="ON"
                  htmlFor="cb"
                />
              </div>
            </span>
            <div className="list">
              <div className="item">
                <label htmlFor="dates">
                  <p>Ngày giao hàng</p>
                </label>
                <input type="date" id="dates" className="input dates" />
              </div>
              <div className="item">
                <label htmlFor="note">
                  <p>Ghi chú</p>
                </label>
                <input type="text" id="note" className="input note" />
              </div>
            </div>
          </div>
          <div className="method">
            <h3>Phương thức thanh toán</h3>
            <div className="list">
              <div className="method_item">
                <label htmlFor="item1" className="item">
                  <input
                    type="radio"
                    id="item1"
                    name="method"
                    defaultValue="online_payment"
                  />
                  <label htmlFor="item1" className="check-box" />
                  <p>Thanh toán trực tuyến</p>
                </label>
              </div>
              <div className="method_item">
                <label htmlFor="item2" className="item">
                  <input
                    type="radio"
                    id="item2"
                    name="method"
                    defaultValue="on_delivery"
                  />
                  <label className="check-box" htmlFor="item2" />
                  <p>Thanh toán khi nhận hàng</p>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="order">
          <h3>Giỏ hàng</h3>
          <div className="order_item">
            <div className="cake" />
            <div style={{ marginTop: "auto", marginRight: 16 }}>
              <div className="item">
                <h4>
                  Tổng giá <span className="qty" /> sản phẩm :{" "}
                </h4>{" "}
                <span className="ttbill" style={{ fontWeight: "bold" }} />
              </div>
              <div className="item">
                <div>
                  <h4>Phí vận chuyển : </h4>
                  <p
                    style={{ fontSize: 14, fontStyle: "italic", marginTop: 4 }}
                  >
                    (Free ship khi mua từ 2 sản phẩm)
                  </p>
                </div>
                <span className="ship" style={{ fontWeight: "bold" }} />
              </div>
              <div className="hr-container">
                <div className="hr-line" />
              </div>
              <div className="item">
                <h4>Thành tiền:</h4>{" "}
                <span className="allbill" style={{ fontWeight: "bold" }} />
              </div>
            </div>
          </div>
          <Link className="check_out" to={"checkout"}>
            <button className="confirm">
              Thanh toán
              <div className="triangle-top-right" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
