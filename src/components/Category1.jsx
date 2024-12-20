// import React from 'react'
import React, { useState, useEffect } from "react";
import SlickSlider from "./SlickSlider";
import AddCart from "../components/AddCart";
import Footer from "../components/Footer";
import { Card, Button, Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import {
  FcManager,
  FcBusinesswoman,
  FcMultipleDevices,
  FcRadarPlot,
} from "react-icons/fc";

const Category1 = () => {
  // const [count,setCount]= useState(0)

  // const onClickHandler = () =>{
  //   setCount(count+1)

  // }
  

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        console.log(response);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const [sonu, setSon] = useState(null);

  return (
    <>
      <div>
        <SlickSlider />
      </div>

      <div className="py-5 me-5 container ct-2">
        <div className="sonu">
          <button
            className="btn  bt-css2 mx-2  "
            onClick={() => setSon("men's clothing")}
          >
            {" "}
            <FcManager /> Men
          </button>
          <button
            className="btn bt-css2 mx-2   "
            onClick={() => setSon("women's clothing")}
          >
            {" "}
            <FcBusinesswoman /> Women
          </button>
          <button
            className="btn bt-css2 mx-2   "
            onClick={() => setSon("electronics")}
          >
            {" "}
            <FcMultipleDevices /> Electronics
          </button>
          <button
            className="btn bt-css2 mx-2   "
            onClick={() => setSon("jewelery")}
          >
            {" "}
            <FcRadarPlot /> Jewelery
          </button>
        </div>

        <div className="row">
          {data.length > 0 ? (
            (
              data &&
              data.filter((ele, id) => (ele.category === sonu ? sonu : !sonu))
            ).map((item, ind) => {
              return (
                <div className="col-md-4 p-3" key={ind}>
                  <div>
                    <Card
                      className="card-all"
                      style={{
                        width: "18rem",
                        height: "26rem",
                        margin: "1rem",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        className="card-img"
                        style={{ height: "14rem" }}
                        src={item.image}
                      />
                      <Card.Body>
                        <Card.Title className="text-card">
                          {item.title}
                        </Card.Title>
                        <h2>${item.price}</h2>
                        <div className="bttn-div  ">
                          <AddCart />
                          {/* <Button onClick={onClickHandler} variant="primary" className="bt-css">Add-Cart</Button> */}
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              );
            })
          ) : (
            <Spinner animation="border" role="status" variant="info">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Category1;
