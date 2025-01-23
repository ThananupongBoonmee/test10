// App.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'; // สไตล์ CSS สำหรับตกแต่งเพิ่มเติม

function App() {
  return (
    <div className="App">
      <div className="container mt-4">
        {/* Header Section */}
        <header className="text-center mb-5">
          <img
            src="112.jpg"
            className="img-fluid mb-4 rounded"
            alt="แบนเนอร์โปรโมตสาขา"
          />
          <h1 className="display-4">สาขาเทคโนโลยีสารสนเทศ</h1>
          <p className="lead">เรียนรู้เทคโนโลยีสมัยใหม่ พร้อมพัฒนาสู่อนาคต</p>
        </header>

        {/* About Section */}
        <section id="about" className="mb-5">
          <h2 className="text-primary">เกี่ยวกับสาขา</h2>
          <p className="mt-3">
            สาขาเทคโนโลยีสารสนเทศมุ่งเน้นการพัฒนาและประยุกต์ใช้เทคโนโลยีในยุคดิจิทัล
            เพื่อตอบโจทย์ตลาดแรงงานและโลกอนาคต
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
            1. พื้นฐานและการพัฒนาโปรแกรม
การเขียนโปรแกรม (Programming) เช่น Python, Java, C#
พื้นฐานการพัฒนาซอฟต์แวร์และเว็บ (Web Development)
การพัฒนาแอปพลิเคชันบนมือถือ (Mobile Application Development)
2. การจัดการข้อมูล (Data Management)
ฐานข้อมูล (Database) เช่น MySQL, MongoDB
การวิเคราะห์ข้อมูล (Data Analysis) และการจัดการ Big Data
การทำ Data Visualization เพื่อสื่อสารข้อมูลอย่างมีประสิทธิภาพ
3. เทคโนโลยีสมัยใหม่
ปัญญาประดิษฐ์ (Artificial Intelligence - AI) และ Machine Learning
ความปลอดภัยทางไซเบอร์ (Cybersecurity)
ระบบ Internet of Things (IoT)
เทคโนโลยี Cloud Computing เช่น AWS, Azure
4. ระบบเครือข่าย (Networking)
การออกแบบและจัดการระบบเครือข่ายคอมพิวเตอร์
การดูแลและจัดการเซิร์ฟเวอร์ (Server Management)
5. การออกแบบระบบและนวัตกรรม
การวางแผนระบบสารสนเทศสำหรับองค์กร
การออกแบบ UI/UX สำหรับการใช้งานแอปพลิเคชัน
การพัฒนาผลิตภัณฑ์นวัตกรรมทางเทคโนโลยี
6. การฝึกประสบการณ์จริง
การทำโปรเจกต์ในสถานการณ์จริง เช่น การพัฒนาซอฟต์แวร์หรือระบบสำหรับองค์กร
ฝึกงานกับบริษัทในอุตสาหกรรมไอที
            </li>
            <li className="list-group-item">
              ห้องปฏิบัติการทันสมัยและเทคโนโลยีล่าสุด
            </li>
            <li className="list-group-item">
              ผู้เรียนพร้อมทำงานได้ทันทีหลังสำเร็จการศึกษา
            </li>
          </ul>
        </section>

        {/* Promotional Images Section */}
        <section id="gallery" className="mb-5">
          <h2 className="text-primary">ภาพกิจกรรมและเทคโนโลยี</h2>
          <div className="row mt-4">
            <div className="col-md-4 mb-3">
              <img
                src="127.jpg"
                className="img-fluid rounded shadow"
                alt="กิจกรรม "
              />
            </div>
            <div className="col-md-4 mb-3">
              <img
                src="126.jpg"
                className="img-fluid rounded shadow"
                alt="กิจกรรม 2"
              />
            </div>
            <div className="col-md-4 mb-3">
              <img
                src="125.jpg"
                className="img-fluid rounded shadow"
                alt="กิจกรรม 3"
              />
            </div>
            <div className="col-md-4 mb-3">
              <img
                src="128.jpg"
                className="img-fluid rounded shadow"
                alt="กิจกรรม 2"
              />
            </div>
            <div className="col-md-4 mb-3">
              <img
                src="129.jpg"
                className="img-fluid rounded shadow"
                alt="กิจกรรม 2"
              />
            </div>
            <div className="col-md-4 mb-3">
              <img
                src="130.jpg"
                className="img-fluid rounded shadow"
                alt="กิจกรรม 2"
              />
            </div>
            <div className="col-md-4 mb-3">
              <img
                src="131.jpg"
                className="img-fluid rounded shadow"
                alt="กิจกรรม 2"
              />
            </div>
            <div className="col-md-4 mb-3">
              <img
                src="132.jpg"
                className="img-fluid rounded shadow"
                alt="กิจกรรม 2"
              />
            </div>
            <div className="col-md-4 mb-3">
              <img
                src="133.jpg"
                className="img-fluid rounded shadow"
                alt="กิจกรรม 2"
              />
            </div>
            <div className="col-md-4 mb-3">
              <img
                src="134.jpg"
                className="img-fluid rounded shadow"
                alt="กิจกรรม 2"
              />
            </div>
            <div className="col-md-4 mb-3">
              <img
                src="135.jpg"
                className="img-fluid rounded shadow"
                alt="กิจกรรม 2"
              />
            </div>
            <div className="col-md-4 mb-3">
              <img
                src="136.jpg"
                className="img-fluid rounded shadow"
                alt="กิจกรรม 2"
              />
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section id="faculty" className="mb-5">
          <h2 className="text-primary">ทีมคณะจารย์</h2>
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <img
                src="1.jpg"
                className="img-fluid rounded-circle mb-3"
                alt="ดร.สมชาย ใจดี"
              />
              <p>MissMayulee Chailangka
นางสาวมยุลีย์ พงษ์บุพศิริกุล
หัวหน้าสาขางานเทคโนโลยีสารสนเทศ</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="2.jpg"
                className="img-fluid rounded-circle mb-3"
                alt="อาจารย์หญิง สมใจ รักเรียน"
              />
              <p>MissNutthakan Pirom
นางสาวณัฐกานต์ ภิรมณ์
รองหัวหน้าสาขาวิชาเทคโนโลยีสารสนเทศ</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="3.jpg"
                className="img-fluid rounded-circle mb-3"
                alt="อาจารย์ชาย ประหยัด มีค่า"
              />
              <p>MissSawitta Pratoom
นางสาวสวิตตา ประทุม
ครูเทคโนโลยีสารสนเทศ</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="4.jpg"
                className="img-fluid rounded-circle mb-3"
                alt="อาจารย์ชาย ประหยัด มีค่า"
              />
              <p>MissThunyalak Kuntha
นางสาวธัญญลักษณ์ กันธะ
ครูเทคโนโลยีสารสนเทศ</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="5.jpg"
                className="img-fluid rounded-circle mb-3"
                alt="อาจารย์ชาย ประหยัด มีค่า"
              />
              <p>Mr.Paisan N.Lampang
นายไพศาล ณ ลำปาง
ครูเทคโนโลยีสารสนเทศ</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="6.jpg"
                className="img-fluid rounded-circle mb-3"
                alt="อาจารย์ชาย ประหยัด มีค่า"
              />
              <p>MissNarin Phromme
นางสาวนาริน พรมมี
ครูเทคโนโลยีสารสนเทศ</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="8.jpg"
                className="img-fluid rounded-circle mb-3"
                alt="อาจารย์ชาย ประหยัด มีค่า"
              />
              <p>Mr.Tewarit Wongchaya
นายเทวฤทธิ์ วงค์ฉายา
ครูเทคโนโลยีสารสนเทศ</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="9.jpg"
                className="img-fluid rounded-circle mb-3"
                alt="อาจารย์ชาย ประหยัด มีค่า"
              />
              <p>MissWaranya Inchai
นางสาววรัญญา อินชัย
ครูเทคโนโลยีสารสนเทศ</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="10.jpg"
                className="img-fluid rounded-circle mb-3"
                alt="อาจารย์ชาย ประหยัด มีค่า"
              />
              <p>Mr.Natthapong Namkham
นายณัฐพงษ์ นามคำ
ครูเทคโนโลยีสารสนเทศ</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="11.jpg"
                className="img-fluid rounded-circle mb-3"
                alt="อาจารย์ชาย ประหยัด มีค่า"
              />
              <p>MissTanatchanok Kaewyos
นางสาวธนัตชนก แก้วยศ
ครูเทคโนโลยีสารสนเทศ</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="12.jpg"
                className="img-fluid rounded-circle mb-3"
                alt="อาจารย์ชาย ประหยัด มีค่า"
              />
              <p>Mr.Sarayut Phongphaeo
นายศรายุทธ ผ่องแผ้ว
ครูเทคโนโลยีสารสนเทศ</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="13.jpg"
                className="img-fluid rounded-circle mb-3"
                alt="อาจารย์ชาย ประหยัด มีค่า"
              />
              <p>Mr.Surachai Charoensri
นายสุรชัย เจริญศรี
ครูเทคโนโลยีสารสนเทศ</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="14.jpg"
                className="img-fluid rounded-circle mb-3"
                alt="อาจารย์ชาย ประหยัด มีค่า"
              />
              <p>MissThanyarat Mala
นางสาวธัญญรัตน์ มาลา
ครูเทคโนโลยีสารสนเทศ</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="15.jpg"
                className="img-fluid rounded-circle mb-3"
                alt="อาจารย์ชาย ประหยัด มีค่า"
              />
              <p>Mr.Surawes Suwandumrongpon
นายสุรเวศม์ สุวรรณดำรงผล
ครูเทคโนโลยีสารสนเทศ</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="16.jpg"
                className="img-fluid rounded-circle mb-3"
                alt="อาจารย์ชาย ประหยัด มีค่า"
              />
              <p>Methawint Mesathianjant
ว่าที่ร้อยตรีเมธาวิณทร์ เมษาเทียนจันทร์
ครูเทคโนโลยีสารสนเทศ</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="17.jpg"
                className="img-fluid rounded-circle mb-3"
                alt="อาจารย์ชาย ประหยัด มีค่า"
              />
              <p>Mr.Jirawat Jommanee
นายจิรวัฒน์ จอมมณี
นักศึกษาฝึกประสบการณ์วิชาชีพเทคโนโลยีสารสนเทศ</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-5">
          <h2 className="text-primary">การติดต่อ</h2>
          <p className="mt-3">
            ที่อยู่:วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่ , ตำบล ป่าตัน, อำเภอ เมือง, จังหวัด เชียงใหม่
          </p>
          <p>เบอร์โทรศัพท์: 053 213 061</p>
          <p>อีเมล: 
          lannapoly@lannapoly.ac.th</p>
        </section>
      </div>
    </div>
  );
}

export default App;
