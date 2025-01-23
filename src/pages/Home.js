import React from 'react';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2 className="text-center">วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา</h2>
        <p className="text-center">Lanna Polytechnic College of Technology</p>

        {/* Bootstrap Carousel */}
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipM6N7JKQkbgwt40cSHVaZeB_cyxflodi8TRkNnY=s680-w680-h510"
                alt="Tourism Spot 1"
                className="d-block w-100"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipPYr9xUbr4RDRdhA1WOko1FS0KKjcwtfgpKTI9o=s680-w680-h510"
                alt="Tourism Spot 2"
                className="d-block w-100"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipOsDEni2Z6eylQ-opO489k0ObR62aP9frfcpJO6=s680-w680-h510"
                alt="Tourism Spot 3"
                className="d-block w-100"
              />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Information Section */}
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card">
              <img src="https://www.lannapoly.ac.th/web/gallery/20241121-100726.jpg" className="card-img-top" alt="Activity 1" />
              <div className="card-body">
                <h5 className="card-title">แสดงความยินดีต้อนรับผู้อำนวยการ นางสาวนารีรัตน์ ธจิตธรรม</h5>
                <p className="card-text">อาจารย์วุฒิพงศ์ พวงไม้มิ่ง ผู้ช่วยรองผู้อำนวยการฝ่ายกิจการนักศึกษา พร้อมทีมงานแนะแนวการศึกษา</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://www.lannapoly.ac.th/web/gallery/20241119-112909.jpg" className="card-img-top" alt="Activity 2" />
              <div className="card-body">
                <h5 className="card-title">พิธีเปิดการฝึกภาคปกตินักศึกษาวิชาทหารประจำปีการศึกษา 2567</h5>
                <p className="card-text"> เข้าร่วมพิธีเปิดการฝึกภาคปกตินักศึกษาวิชาทหารชั้นปีที่ 4 และ ปีที่ 5 ประจำปีการศึกษา 2567 ณ ศูนย์การฝึกนักศึกษาวิชาทหารมณฑลทหารบกที่ 33</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://www.lannapoly.ac.th/web/gallery/20241119-112515.jpg" className="card-img-top" alt="Activity 3" />
              <div className="card-body">
                <h5 className="card-title">โปลิฯ ลุยต่อ! จัดประชุมชี้แจงและมอบผลการเรียนให้กับผู้ปกครองนักศึกษา ปวช.3 ปวส.2</h5>
                <p className="card-text">วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่ จัดกิจกรรมประชุมผู้ปกครอง และรับผลการเรียน </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
