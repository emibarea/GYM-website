import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../Data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";
const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="testimonials" id="testimonials">
      <div className="left-t">
        <span>TESTIMONIALS</span>
        <span className="stroke-text">WHAT THEY</span>
        <span>SAY ABAUT US</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}{" "}
          </span>
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt={testimonialsData[selected].name}
        />
        <div className="arrows">
          <img
            src={leftArrow}
            alt="left arrow"
            onClick={() => {
              selected === 2 || selected === 1
                ? setSelected(selected - 1)
                : setSelected(2);
            }}
          />
          <img
            src={rightArrow}
            alt="right arrow"
            onClick={() => {
              selected < 2 ? setSelected(selected + 1) : setSelected(0);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;