import React from "react";

const Checkout = () => {
  return (
    <section className="checkout_page" style={{ paddingTop: "8em" }}>
      <>
        <div className="container bank-container" />
        <div className="container product-container">
          <h2>Đơn hàng của bạn</h2>
          <div className="order">
            <div className="order_item">
              <p style={{ textDecoration: "underline" }}>Khách hàng</p>
              <p>
                ${"{"}order["Họ tên"]{"}"}
              </p>
            </div>
            <div className="order_item">
              <p style={{ textDecoration: "underline" }}>Số điện thoại</p>
              <p>
                ${"{"}order["Số điện thoại"]{"}"}
              </p>
            </div>
            <div className="order_item">
              <p style={{ textDecoration: "underline" }}>Địa chỉ giao hàng</p>
              <p>
                ${"{"}order["Địa chỉ nhà"]{"}"}, Quận ${"{"}order["Quận"]{"}"}
              </p>
            </div>
            <div className="order_item">
              <p style={{ textDecoration: "underline" }}>Thời gian</p>
              <p className="time_order">
                ${"{"}order["Ngày yêu cầu"]{"}"}
              </p>
            </div>
            <div className="order_item">
              <p style={{ textDecoration: "underline" }}>Ghi chú</p>
              <p className="notes">
                ${"{"}order["Ghi chú"]{"}"}
              </p>
            </div>
          </div>
          <div className="order_products">
            <p style={{ textDecoration: "underline", marginBottom: 16 }}>
              Đơn hàng
            </p>
          </div>
          <div className="price_item">
            <p style={{ textDecoration: "underline" }}>Thành tiền</p>
            <span style={{ fontWeight: 700 }}>
              ${"{"}formattedPrice{"}"}
            </span>
          </div>
          <button className="submit">
            Xác nhận thanh toán
            <div className="triangle-top-right" />
          </button>
        </div>
      </>
    </section>
  );
};

export default Checkout;
