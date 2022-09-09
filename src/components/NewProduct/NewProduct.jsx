import "./NewProduct.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import cogoToast from "cogo-toast";
import Header from "../Header/Header";

function NewProduct(props) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [madein, setMadein] = useState("");
  const [price, setPrice] = useState("");
  const [release_year, setRelease_year] = useState("");
  const [cert_id, setCert_id] = useState("");

  const addId = (event) => {
    setId(event.target.value);
  };

  const addName = (event) => {
    setName(event.target.value);
  };

  const addBrand = (event) => {
    setBrand(event.target.value);
  };

  const addMadein = (event) => {
    setMadein(event.target.value);
  };

  const addPrice = (event) => {
    setPrice(event.target.value);
  };

  const addRelease_year = (event) => {
    setRelease_year(event.target.value);
  };

  const addCert_id = (event) => {
    setCert_id(event.target.value);
  };

  const attributes = [
    {
      id: id,
      name: "mã sản phẩm",
    },
    {
      id: name,
      name: "tên sản phẩm",
    },
    {
      id: brand,
      name: "nhãn hàng",
    },
    {
      id: madein,
      name: "xuất xứ",
    },
    {
      id: price,
      name: "giá thành",
    },
    {
      id: release_year,
      name: "năm phát hành",
    },
    {
      id: cert_id,
      name: "mã chứng nhận",
    },
  ];

  const addProduct = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "http://localhost:8089/product",
        {
          id,
          name,
          brand,
          madein,
          price,
          release_year,
          cert_id,
        },
        {
          headers: {
            "Content-Type": "application/json",
             Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      cogoToast.loading("Loading...").then(() => {
        cogoToast.success("Successfully");
        setId("");
        setName("");
        setBrand("");
        setMadein("");
        setPrice("");
        setRelease_year("");
        setCert_id("");
      });
    } catch (error) {
      cogoToast.position = "top-right";
      if (attributes.some((attribute) => !attribute.id)) {
        cogoToast.loading("Loading");
        attributes.forEach((attribute) => {
          if (!attribute.id) {
            window.setTimeout(() => {
              cogoToast.error("Vui lòng nhập " + attribute.name);
            }, 3000);
          }
        });
      } else {
        cogoToast.loading("Loading...").then(()=>{
          cogoToast.error("Something went wrong")
        })
      }
    }
  };
  return (
    <div className="add_product">
      <Header />
      <img
        src="https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="form_block">
        <h1>
          <i>THÊM MỚI SẢN PHẨM VÀO KHO HÀNG</i>
        </h1>
        <Form onSubmit={addProduct}>
          <Form.Group className="mb-3" controlId="">
            <Form.Control
              value={id}
              onInput={addId}
              type="number"
              placeholder="Mã sản phẩm"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Control
              value={name}
              onInput={addName}
              type="text"
              placeholder="Tên sản phẩm"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Control
              value={brand}
              onInput={addBrand}
              type="text"
              placeholder="Thương hiệu"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Select onChange={addMadein} value={madein}>
              <option value="Việt Nam">Việt Nam</option>
              <option value="Mỹ">Mỹ</option>
              <option value="Nhật Bản">Nhật Bản</option>
              <option value="Hàn Quốc">Hàn Quốc</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Control
              value={price}
              onInput={addPrice}
              type="text"
              placeholder="Giá thành (VNĐ)"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Control
              value={release_year}
              onInput={addRelease_year}
              type="text"
              placeholder="Năm phát hành"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Control
              value={cert_id}
              onInput={addCert_id}
              type="text"
              placeholder="Mã giấy chứng nhận"
            />
          </Form.Group>

          <Form.Group>
            <Button
              className="btn rounded-pill"
              variant="success"
              type="submit"
            >
              Thêm sản phẩm
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default NewProduct;
