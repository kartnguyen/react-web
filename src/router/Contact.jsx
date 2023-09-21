import React from "react";

const Contact = () => {
  return (
    <section className="contact_page" style={{ paddingTop: "6em" }}>
      <div className="container">
        <div className="contact_form">
          <div className="form">
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
                  required=""
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
                  type="email"
                  id="email"
                  className="input email"
                  required=""
                />
              </div>
              <div className="item">
                <label htmlFor="mess">
                  <p>Lời nhắn cho chúng tôi</p>
                </label>
                <textarea
                  name="mess"
                  id="mess"
                  rows={6}
                  cols={50}
                  defaultValue={""}
                />
              </div>
              <button className="submit"> Gửi </button>
            </div>
            <div className="infor">
              <div className="col">
                <div className="name">
                  <h3>Địa chỉ</h3>
                </div>
                <div className="content">
                  <p>Kart&apos;s House</p>
                  <p>Số 94 Yên Nghĩa, Hà Đông, Hà Nội</p>
                </div>
              </div>
              <div className="col">
                <div className="name">
                  <h3>Điện thoại liên hệ</h3>
                </div>
                <div className="content">
                  <p>024 0994 8888</p>
                  <p>098 888 8888</p>
                </div>
              </div>
              <div className="col">
                <div className="name">
                  <h3>Email</h3>
                </div>
                <div className="content">
                  <p>karthouse@gmail.com</p>
                  <p>thanhnguyen.gt09@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.9180378214455!2d105.75369607588645!3d20.95580639027916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452e853622635%3A0xcce111148ff14001!2zOTQgWcOqbiBOZ2jEqWEsIFBow7ogTMOibSwgSMOgIMSQw7RuZywgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1690648328589!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
