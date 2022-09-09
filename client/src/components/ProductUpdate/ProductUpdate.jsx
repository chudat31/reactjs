import "./ProductUpdate.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import cogoToast from "cogo-toast";
import Header from "../Header/Header";

function ProductUpdate() {
  const { id } = useParams();

  const [idx, setIdx] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [madein, setMadein] = useState("");
  const [price, setPrice] = useState("");
  const [release_year, setRelease_year] = useState("");
  const [cert_id, setCert_id] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8089/product/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((respone) => {
        setIdx(respone.data.data.id);
        setName(respone.data.data.name);
        setBrand(respone.data.data.brand);
        setMadein(respone.data.data.madein);
        setPrice(respone.data.data.price);
        setRelease_year(respone.data.data.release_year);
        setCert_id(respone.data.data.cert_id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const updateHandle = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        `http://localhost:8089/product/update/${id}`,
        {
          name,
          brand,
          price,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      cogoToast.loading("Updating...");
      window.setTimeout(() => {
        cogoToast.success("Updating successfully");
      }, 3500);
    } catch (error) {
      cogoToast.loading("Updating...");
      window.setTimeout(() => {
        cogoToast.error("Something went wrong");
      }, 3500);
    }
  };

  return (
    <div className="product_detail">
      <Header />
      <img
        src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        alt=""
      />
      <div className="form_block">
        <h1>
          <i>Thông tin chi tiết về sản phẩm</i>
        </h1>
        <Form>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Mã sản phẩm</Form.Label>
            <Form.Control
              value={idx}
              onInput={(e) => setIdx(e.target.value)}
              type="number"
              placeholder="Mã sản phẩm"
              disabled
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>Tên sản phẩm</Form.Label>
            <Form.Control
              value={name}
              onInput={(e) => setName(e.target.value)}
              type="text"
              placeholder="Tên sản phẩm"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>Nhãn hàng</Form.Label>
            <Form.Control
              value={brand}
              onInput={(e) => setBrand(e.target.value)}
              type="text"
              placeholder="Nhãn hàng"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>Xuất xứ</Form.Label>
            <Form.Control
              value={madein}
              onInput={(e) => setMadein(e.target.value)}
              type="text"
              placeholder="Xuất xứ"
              disabled
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>Giá thành</Form.Label>
            <Form.Control
              value={price}
              onInput={(e) => setPrice(e.target.value)}
              type="text"
              placeholder="Giá thành"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>Năm phát hành</Form.Label>
            <Form.Control
              disabled
              value={release_year}
              onInput={(e) => setRelease_year(e.target.value)}
              type="number"
              placeholder="Năm phát hành"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>Mã chứng nhận</Form.Label>
            {cert_id && (
              <Form.Control
                value={cert_id}
                onInput={(e) => setCert_id(e.target.value)}
                type="number"
                placeholder="Mã chứng nhận"
                disabled
              />
            )}
            {cert_id === null && (
              <Form.Control
                onInput={(e) => setCert_id(e.target.value)}
                type="number"
                placeholder="Chưa được cấp"
                disabled
              />
            )}
          </Form.Group>
          <Button
            onClick={updateHandle}
            className="btn rounded-pill"
            size="lg"
            variant="success"
            type="submit"
          >
            Chỉnh sửa
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ProductUpdate;
