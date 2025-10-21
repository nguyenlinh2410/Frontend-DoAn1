import React from "react";
import anh from "../assets/img/anhheader.png";
import "./Header.css";

export default function Hero() {
  return (
    <section className="hero">
      <img src={anh} alt="" />
    </section>
  );
}
