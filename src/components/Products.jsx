import { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

import arqitel from "../assets/products/arqitel.webm"
import ttr from "../assets/products/ttr.webm"
import yir from "../assets/products/yir.webm"
import yahoo from "../assets/products/yahoo.webm"


const Products = () => {
  const products = [
    {
      title: "Arqitel",
      description: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
      src: arqitel
    },
    {
      title: "YIR 2022",
      description: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: true,
      src: yir
    },
    {
      title: "Yahoo!",
      description: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
      src: yahoo
  },
    {
      title: "TTR",
      description: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
      src: ttr
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {products.map((elem, index) => (
        <Product key={index} mover={mover} count={index} val={elem} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="absolute w-[32rem] h-[23rem] bg-white left-[44%] overflow-hidden"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ y: -pos + "rem", opacity: 1  }}
              className="w-full h-full"
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            >
              <video autoPlay muted loop width="100%" height="100%">
                <source
                  src={product.src}
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;