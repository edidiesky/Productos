import React from "react";
import { styled } from "styled-components";

const ProductHero = () => {
  return (
    <ProductHeroStyles className="flex fixed min-h-[100vh] py-40 top-0 left-0 h-[100vh] w-screen justify-center items-center">
      <div className="hero_wrapper flex h-full py-40 w-full justify-center items-center gap-24 flex-col">
        <h1 className="w-[85%] mx-auto family2 uppercase text text-center text-white">
          COCONUT
        </h1>
        <div className="hero_info mx-auto flex flex-col gap-12">
          <div className="image_wrappers flex mx-auto flex-col justify-center items-center">
            <img
              src="https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e2c2fa3b0943f1845ba818e_coconut.png"
              className="image_1"
              alt=""
            />
          </div>
          <img
            src="https://assets.website-files.com/5d85edd208e53eed3ae194a2/5d88e2d6a39a48c1ef6f2e93_fruit-5.png"
            alt=""
            className="image image_2"
          />
          <img
            src="https://assets.website-files.com/5d85edd208e53eed3ae194a2/5d88e2d911bed5c49169466e_fruit-6.png"
            alt=""
            className="image image_3"
          />
          <h3
            // style={{ fontWeight: "300" }}
            className="text-2xl font-normal text-center w-[80%] max-w-[600px] mx-auto"
          >
            Creamy, nutty, wild, warm-weather flavor from a far-away beach—real
            coconut blended with cool Greek Yogurt.
          </h3>
        </div>
      </div>
    </ProductHeroStyles>
  );
};

const ProductHeroStyles = styled.div`
  background-color: inherit;
  position: relative;
  padding: 35rem 0;
  .image {
    position: absolute;
    width: 13rem;
    height: 13rem;
    z-index: 1;
    &.image_2 {
      right: 10%;
      bottom: 30%;
      width: 24rem;
      height: 24rem;
      @media (max-width: 780px) {
        width: 12rem;
        height: 12rem;
        bottom: 40%;
        right: 0%;
      }
    }
    &.image_3 {
      left: 25%;
      top: 10%;
      width: 10rem;
      height: 10rem;
      @media (max-width: 780px) {
        left: 10%;
        width: 7rem;
        height: 7rem;
      }
    }
  }
  h3 {
    width: 75%;
    @media (max-width: 780px) {
      width: 95%;
      font-size: 24px;
    }
  }
  .hero_wrapper {
    position: relative;
    position: fixed;
    top: 50%;
    left: 50%;
    font-weight: 800;
    transform: translate(-50%, -35%);
  }
  .hero_info {
    z-index: 10;
    width: 70%;
    padding: 2rem 0;
  }
  .image_wrappers {
    width: 40%;
    @media (max-width: 780px) {
      width: 90%;
    }
    .image_1 {
      width: 55%;
      object-fit: cover;
    }
  }

  h1 {
    width: 70%;
    font-size: 9rem;
    line-height: 0.9;
    z-index: 3;
    font-weight: 800;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 6%;

    @media (max-width: 980px) {
      font-size: 5rem;
      width: 80%;
    }
  }
`;

export default ProductHero;
