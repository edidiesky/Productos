// import React from "react";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { productData } from "../../data/product";
import ProductCard from "../common/ProductCard";
// const product = [
//   {
//     background: "hsla(206.81564245810057, 89.95%, 60.98%, 1.00)",
//     subimage1:
//       "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e2861c21b5059478eca7d83_blaubeere-1.png",
//     subimage2:
//       "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e2861bf19edde6d808fc650_blaubeere-2.png",
//     image:
//       "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e2c2f7fd2e06746e4a50f05_blueberry.png",
//   },
//   {
//     background: "hsla(14.361702127659573, 100.00%, 63.14%, 1.00)",
//     subimage2:
//       "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e2861bf19edde6d808fc650_blaubeere-2.png",
//     subimage1:
//       "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5d88d8d6249f213cee30a048_fruits-1.png",
//     image:
//       "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e2c2e658c2b172ab3b7acbd_peach.png",
//   },
//   {
//     background: "hsla(87.96116504854368, 50.24%, 59.80%, 1.00)",
//     subimage1:
//       "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5d88e2c7a39a4857976f2c3b_lime.svg",
//     subimage2:
//       "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5d88e2c4a711b1675fb5129e_limete.png",
//     image:
//       "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e2c2f94d2e067c112a50fab_lime.png",
//   },
// ];

const ProductList = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  return (
    <div className="w-full py-16">
      <div className="w-[100%] flex items-start flex-col h-full gap-8 justify-between max-w-custom mx-auto">
        {/* <div className="w-full flex flex-col gap-12">
          <h1 className="text-8xl font-normal">Made with passion</h1>

          <div className="flex md:justify-end">
            <span className="text-xl max-w-[700px] leading-[1.4]">
              Through the years, we've built digital products that millions of
              people use every day on phones, web browsers, tablets, connected
              watches, TVs, kiosks, and voice assistants.
            </span>
          </div>
        </div> */}
        <div ref={containerRef} className="w-full">
          {productData?.slice(0, 3)?.map((data, index) => {
            const targetScale = 1 - (productData.length - 1) * 0.009;
            return (
              <ProductCard
                progress={scrollYProgress}
                targetScale={targetScale}
                range={[index * 0.25, 1]}
                data={data}
                index={index}
                key={`p_${index}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
