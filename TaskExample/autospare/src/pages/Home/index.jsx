import React from "react";
import Car from "../Car";
import Advertisement from "./Advertisement";
import Store from "./Store";
import Order from "./Order";
import BestSelling from "./BestSelling";
import Choose from "./Choose";
const Home = () => {
  return (
    <>
      <Car />
      <Order />
      <BestSelling />
      <Choose />
      <Advertisement />
      <Store />
    </>
  );
};

export default Home;
