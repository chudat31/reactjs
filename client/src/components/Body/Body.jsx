import "./Body.scss";
import Carousel from "react-bootstrap/Carousel";
import Background from "./Background";
function Body() {
  return (
    <div className="body">
      <Background />
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.dribbble.com/users/2841600/screenshots/15866662/media/b89b564f0fae8c7daa75231eb9e05b55.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.dribbble.com/users/2841600/screenshots/15866662/media/1555cb185082d7d0e25054389dff5b3f.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.dribbble.com/users/2841600/screenshots/15866662/media/49284e9848e93529152b660cee6f59cd.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <section>
        <h1>Phone</h1>
        <div className="product_list">
          <div className="product_item">
            <img
              src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="product_item_detail">
              <p>Iphone 12</p>
              <p>Price: 15.000.000</p>
            </div>
          </div>
          <div className="product_item">
            <img
              src="https://images.pexels.com/photos/12794493/pexels-photo-12794493.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="product_item_detail">
              <p>Iphone 12 Pro</p>
              <p>Price: 18.000.000</p>
            </div>
          </div>
          <div className="product_item">
            <img
              src="https://images.pexels.com/photos/12794488/pexels-photo-12794488.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="product_item_detail">
              <p>Iphone 12 Pro Max</p>
              <p>Price: 21.000.000</p>
            </div>
          </div>
          <div className="product_item">
            <img
              src="https://images.pexels.com/photos/3707744/pexels-photo-3707744.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="product_item_detail">
              <p>Iphone 13 </p>
              <p>Price: 24.000.000</p>
            </div>
          </div>
          <div className="product_item">
            <img
              src="https://images.pexels.com/photos/12794501/pexels-photo-12794501.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <div className="product_item_detail">
              <p>Iphone 13 Pro </p>
              <p>Price: 27.000.000</p>
            </div>
          </div>
          <div className="product_item">
            <img
              src="https://images.pexels.com/photos/4071887/pexels-photo-4071887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="product_item_detail">
              <p>Iphone 13 Pro Max </p>
              <p>Price: 27.000.000</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;
