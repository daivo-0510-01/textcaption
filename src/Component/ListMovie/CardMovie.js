import React from "react";
import { Card } from "antd";
import { NavLink } from "react-router-dom";
const { Meta } = Card;

export default function CardMovie({ movie }) {
  return (
    <div>
      <div className="">
        <Card
          hoverable
          style={{
            width: "100%",
          }}
          cover={
            <img
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              className=" h-56  sm:h-60 md:h-72 lg:h-80 "
              alt="example"
              src={movie.hinhAnh}
            />
          }
        >
          <Meta title={movie.tenPhim} />
          <NavLink to={`/detail/${movie.maPhim}`}>
            <button className="text-center  border-2 rounded px-2 mt-2 border-yellow-600 font-medium text-base sm:text-xs md:text-lg text-red-500 hover:text-cyan-500">
              Chi tiết
            </button>
          </NavLink>
        </Card>
      </div>
    </div>
  );
}
