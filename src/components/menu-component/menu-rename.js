import React, { useState, useEffect } from "react";
import "./menu-component.css";
import ImageTitleCard from "../image-title-card/image-title-card";
import { PropagateLoader } from "react-spinners";
import productService from "../service/product-service";
import { Link } from "react-router-dom";

const MenuComponent = ({ height, number }) => {
  number = number || 15;
  const [menuData, setMenuData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await productService.getAllProducts();
        console.log(data);

        setMenuData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchData();
  }, [number]);

  return isLoading ? (
    <div className="container mt-5  p-5 d-flex  justify-content-center mb-5">
      <PropagateLoader color="#49ceff" />
    </div>
  ) : (
    <div>
      <div className="menu-container container">
        {menuData &&
          menuData.map((item) => (
            <div className="product-card" key={item.id}>
              <Link to={`/order/${item.id}`}>
                <ImageTitleCard name={item.title} price={item.price} height={height} rate={item.rate} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MenuComponent;
