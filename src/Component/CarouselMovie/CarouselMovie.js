import React, { useEffect, useState } from "react";
import { carouselServ } from "../../service/carouselService";
import { Carousel } from "antd";

export default function CarouselMovie() {
  const contentStyle = {
    height: "60vh",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
  };

  const [carousel, setCarousel] = useState();

  useEffect(() => {
    carouselServ
      .getbanner()
      .then((res) => {
        // console.log(res);
        setCarousel(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log("carousel", carousel);
  let renderCarousel = () => {
    return carousel?.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
            className=""
          >
            <img src={item.hinhAnh} className="w-full opacity-0"></img>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container px-0 ">
      <Carousel className="pb-10 pt-0" autoplay>
        {renderCarousel()}
      </Carousel>
    </div>
  );
}
