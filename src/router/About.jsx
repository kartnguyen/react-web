import React from "react";
import Chef from "./Chef";

const About = () => {
  return (
    <section className="about_page" style={{ paddingTop: "8em" }}>
      <div className="content container">
        <div className="head">
          <h3>KarT&apos;s House - Nơi Gửi Gắm Hương Vị Tuyệt Vời</h3>
          <div className="head_img">
            <div>
              <div
                className="img"
                style={{
                  backgroundImage: "url(./chef/LF_Chat-luong_Illus.webp)",
                }}
              />
              <h4>Chất lượng</h4>
              <p>
                Để mang lại trải nghiệm đáng nhớ trong từng chiếc bánh, sản phẩm
                của KarT&apos;s House được làm từ những nguyên liệu được chọn
                lựa cẩn thận và hoàn thiện tỉ mỉ với những tiêu chuẩn cao cấp
                nhất.
              </p>
            </div>
            <div>
              <div
                className="img"
                style={{
                  backgroundImage:
                    "url(./chef/LF_Danh-cho-moi-nguoi_Illus.webp)",
                }}
              />
              <h4>Cho mọi người</h4>
              <p>
                Bánh của KarT&apos;s House được nghiên cứu để phù hợp với khẩu
                vị của người Việt và luôn được đóng gói chỉnh chu để ai cũng có
                thể nhận về những niềm vui khi bánh được giao tới tận nơi.
              </p>
            </div>
            <div>
              <div
                className="img"
                style={{
                  backgroundImage: "url(./chef/LF_Su-chan-thanh_Illus.webp)",
                }}
              />
              <h4>Sự chân thành</h4>
              <p>
                Đối với KarT&apos;s House, giá trị lớn nhất mà chúng tôi đề cao
                là sự chân thành. Niềm vui của mọi nguời khi thưởng thức bánh,
                chính là nguồn động lực cho chúng tôi làm việc mỗi ngày.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container chef_infor">
        <div className="about">
          <h3>Đầu Bếp Của Chúng Tôi</h3>
          <p>
            Các đầu bếp của KarT&apos;s House đều đã tốt nghiệp chuyên ngành
            bánh ngọt Pháp (Diplôme de Pâtisserie) tại Le Cordon Bleu - học viện
            ẩm thực hàng đầu thế giới với lịch sử gần 130 năm hình thành. Trải
            qua nhiều vị trí khác nhau tại các chuỗi bánh lớn ở Hà Nội, các đầu
            bếp đã dành trọn tình cảm cho sự tinh tế của bánh ngọt Pháp &amp;
            đặt quyết tâm trở thành một Pastry Chef chuyên nghiệp.
          </p>
        </div>
        <div className="profile">
          <Chef />
        </div>
      </div>
    </section>
  );
};

export default About;
