import "./ProductDetail.scss";
import { useRef, useState } from "react";
import axios from "axios";
import cogoToast from "cogo-toast";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../Header/Header.jsx";
function ProductDetail() {
  const nameRef = useRef();

  const [isSearch, setIsSearch] = useState("No");

  const [nameEnter, setNameEnter] = useState("");

  const [id, setId] = useState();

  const [name, setName] = useState("");

  const [brand, setBrand] = useState("");

  const [madein, setMadein] = useState("");

  const [price, setPrice] = useState();

  const [release_year, setRelease_year] = useState();

  const [cert_id, setCert_id] = useState();

  const handleSubmit = () => {
    axios
      .get(`http://localhost:8089/product/search/${nameEnter}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((respone) => {
        cogoToast.loading("Searching...");
        window.setTimeout(() => {
          cogoToast.success("Successfully");
          setIsSearch(true);
          setId(respone.data.data.id);
          setName(respone.data.data.name);
          setBrand(respone.data.data.brand);
          setMadein(respone.data.data.madein);
          setPrice(respone.data.data.price);
          setRelease_year(respone.data.data.release_year);
          setCert_id(respone.data.data.cert_id);
          setNameEnter("");
          nameRef.current.focus();
        }, 3500);
      })
      .catch((e) => {
        cogoToast.loading("Searching...");
        window.setTimeout(() => {
          setIsSearch(false);
          setNameEnter("");
          nameRef.current.focus();
        }, 3500);
      });
  };

  return (
    <div className="search container-fluid">
      <Header />
      <h1>
        <i>Tìm kiếm thông tin sản phẩm</i>
      </h1>
      <Form className="d-flex">
        <Form.Control
          value={nameEnter}
          ref={nameRef}
          onInput={(e) => setNameEnter(e.target.value)}
          type="search"
          placeholder="Tên sản phẩm"
          className="me-2"
          aria-label="Search"
        />
        <Button onClick={handleSubmit} variant="success">
          Search
        </Button>
      </Form>
      {isSearch === true && (
        <div className="infomation">
          <h4>Mã sản phẩm: {id} </h4>
          <h5>Tên sản phẩm: {name} </h5>
          <h5>Nhãn hàng: {brand} </h5>
          <h5>Xuất xứ: {madein} </h5>
          <h5>Giá thành: {price} </h5>
          <h5>Năm phát hành: {release_year} </h5>
          <h5>Mã chứng nhận: {cert_id} </h5>
        </div>
      )}
      {isSearch === false && <h3>No item was found</h3>}
      {isSearch === "No" && <h3>Please enter product you want to find</h3>}
    </div>
  );
}

export default ProductDetail;
