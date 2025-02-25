import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box-fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that enables businesses
          and individuals to buy and sell products or services over the
          internet. It provides customers with a seamless shopping experience,
          allowing them to browse product catalogs, compare prices, add items to
          a virtual cart, and complete transactions through secure payment
          gateways. E-commerce websites come in various forms, including
          business-to-consumer (B2C), business-to-business (B2B), and
          consumer-to-consumer (C2C) marketplaces. They often include features
          like user accounts, customer reviews, order tracking, and personalized
          recommendations to enhance user engagement.{" "}
        </p>
        <p>
          With the rapid growth of digital commerce, e-commerce websites have
          become essential for businesses looking to expand their reach,
          increase sales, and provide convenient shopping solutions to a global
          audience.
        </p>
      </div>
    </div>
  );
};
