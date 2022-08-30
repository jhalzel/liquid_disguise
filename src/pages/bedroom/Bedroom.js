import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// styles
import "./Bedroom.css";

// components
import SlidingGallery from "../../../components/SlidingGallery";
import Colors from "../../../components/Colors";
import Subheaders from "../../../components/Subheaders";
import FloatingList from "../../../components/FloatingList";
import Closer from "../../../components/Closer";
import Footer from "../../../components/Footer";

// images
import bed1 from "./images/bed1.jpg";
import bed2 from "./images/bed2.png";
import bed3 from "./images/bed3.png";
import bed4 from "./images/bed4.png";
import bed5 from "./images/bed5.png";
import bed6 from "./images/bed6.png";
import bed7 from "./images/bed7.png";
import bed8 from "./images/bed8.png";
import bed10 from "./images/bed10.JPG";
import bed12 from "./images/bed12.png";
import bed14 from "./images/bed14.jpg";

// backgrounds
import blue from "./icons/bluebe.jpg";
import red from "./icons/redbe.jpg";
import green from "./icons/greenbe.jpg";
import gold from "./icons/goldbe.jpg";
import gray from "./icons/graybe.jpg";

//pallets
import pa from "../../../icons/iconmonstr-paintbrush-7.svg";
import pa1 from "./icons/bluebed.png";
import pa2 from "./icons/redbed.png";
import pa3 from "./icons/greenbed.png";
import pa4 from "./icons/goldbed.png";
import pa5 from "./icons/graybed.png";

export default function Bedrooms({ setBack, handleClick, setPage, sub1 }) {
  const location = useLocation();

  //reset background
  useEffect(() => {
    setBack("");
    setPage("Bedrooms");
  }, [location, setBack, setPage]);

  const slidingGal = [bed1, bed2, bed3, bed4, bed5, bed6, bed7, bed8, bed10];

  const backgrounds = ["", blue, red, green, gold, gray];

  const pallets = [pa, pa1, pa2, pa3, pa4, pa5];

  const midGallery = [bed14, bed12];

  const list = [
    <h4>faux finishes</h4>,
    <h4>favorite colors</h4>,
    <h4>patterns</h4>,
    <h4>graphix</h4>,
    <h4>murals</h4>,
    <h4>lettering</h4>,
  ];

  return (
    <>
      <SlidingGallery gallery={slidingGal} />
      <Colors
        handleClick={handleClick}
        paintbrushes={pallets}
        colors={backgrounds}
      />
      {/* subheaders */}
      <Subheaders
        sub1="Wonderful master bedrooms, boudoirs, children's rooms with painting by Liquid Disguise"
        sub2=" Each room to its own personality. Every bedroom can be uniquely designed (maybe with its own theme?). Let your bedrooms tell their very own bed-time stories through custom decorative treatments."
      />
      {
        <section className="bedGallery">
          {midGallery.map((item, index) => {
            return (
              <div key={index}>
                <img src={item} alt="" />
              </div>
            );
          })}
        </section>
      }
      <Subheaders sub2="If you have children, it's great for them to be part of the design and color choices ... so that as the room is transformed, they feel pride and ownership of it. " />
      <Subheaders sub2="Liquid Disguise has even heard from more than one customer that their children took better care of their rooms after a make-over. Call today for a free consultation and estimate. " />
      <Subheaders sub1="Liquid Disguise can transform with: " />
      {
        <section className="bedBottom">
          <FloatingList list={list} />
        </section>
      }
      <Closer sub1={sub1} />
      <Footer />
    </>
  );
}