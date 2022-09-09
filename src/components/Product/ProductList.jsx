import "./ProductList.scss";
import * as ReactBootstrap from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cogoToast from "cogo-toast";
import Header from "../Header/Header";
import Cart from "../Cart/Cart";

function GetProductList(props) {
  const [data, setData] = useState([]);
  const [item, setItem] = useState([]);
  // const [isVisible, setIsVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isShowCart, setIsShowCart] = useState(false);

  const total = products.reduce((result, product) => result + product.price, 0);
  // const addProductToBuy = (product) => {
  //   setProducts([...products, {name:product.name, price:product.price}])
  // }

  const handleDeleteProduct = (index) => {
    // for(let i = 0; i < products.length; i++) {
    //   if(products[i].index === index) {
    //     products.splice(i,1);
    //   }
    // }

    products.filter(product => product.index !== index)
    console.log("hahaha");
  }
  useEffect(() => {
    axios
      .get("http://localhost:8089/users/detail", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((respone) => {
        if (respone.data.data.username === "chudat31") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, []);
  

  useEffect(() => {
    axios
      .get("http://localhost:8089/product", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => setData(res.data.data));
  }, [item]);

  // const clickDeleteBtn = () => {
  //   setIsVisible(!isVisible)
  // };
  async function deleteProduct(id) {
    try {
      await axios.delete(`http://localhost:8089/product/delete/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      cogoToast.loading("Deleting...").then(() => {
        cogoToast.success("Deleting successfully");
      });
      window.setTimeout(() => {
        setItem(data);
      }, 3500);
    } catch (e) {
      cogoToast.loading("Deleting...").then(() => {
        cogoToast.error("Something went wrong");
      });
    }
  }

  return (
    <div className="product_list">
      <Header />
      {/* <img
        src="https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      /> */}

      <div className="list_block">
        <h1>
          <i>DANH SÁCH CÁC SẢN PHẨM ĐANG BÁN</i>
        </h1>
        <ReactBootstrap.Table striped bordered hover>
          <thead>
            <tr>
              <td>Tên sản phẩm</td>
              <td>Giá thành</td>
              <td>Chức năng</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                {isAdmin && (
                  <td>
                    <ReactBootstrap.Button
                      onClick={() => {
                        deleteProduct(item.id);
                      }}
                      variant="danger"
                    >
                      Xóa
                    </ReactBootstrap.Button>
                    <ReactBootstrap.Button variant="warning">
                      <Link to={`/productdetail/${item.id}`}>Sửa</Link>
                    </ReactBootstrap.Button>
                  </td>
                )}

                {!isAdmin && (
                  <td>
                    <ReactBootstrap.Button
                      onClick={() => {
                        setProducts([
                          ...products,
                          { index: item.id, name: item.name, price: item.price },
                        ]);
                      }}
                      variant="success"
                    >
                      Thêm vào giỏ hàng
                    </ReactBootstrap.Button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </ReactBootstrap.Table>
      </div>
      <div className="cart">
        {!isAdmin && (
          <ReactBootstrap.Button
            onClick={() => {
              setIsShowCart(!isShowCart);
            }}
            size="lg"
            className="btn rounded-pill"
            variant="primary"
          >
            Giỏ hàng
          </ReactBootstrap.Button>
        )}
      </div>
      <div>
        {isShowCart && (
          <div>
            <h6 style={{ marginLeft: "20px" }}>Tổng tiền: {total}</h6>
            <ul>
              {" "}
              <h4>Sản phẩm đã chọn</h4>
              {products.map((product, index) => (
                <li key={index}>
                  {product.name} - {product.price}{" "}
                  <button onClick={()=>{handleDeleteProduct(product.index)}}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default GetProductList;
