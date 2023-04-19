import moment from "moment";
import React from "react";
// import { Tabs } from "antd";

export default function ChildrenDetail({ cumrap }) {
  let renderLichChieu = () => {
    return cumrap.lichChieuPhim.map((lichchieu, index) => {
      return (
        <div key={index} className=" text-left pl-0">
          <p className=" text-xs md:text-base lg:text-lg">
            <span className="text-orange-500">
              <br className="hidden sm:block"></br>
              Lịch chiếu:{" "}
            </span>{" "}
            {moment(lichchieu.ngayChieuGioChieu).format("dd-mm-yyyy")}
          </p>
          <p className="text-xs md:text-base lg:text-lg">
            <span className="text-orange-500">Giờ chiếu: </span>{" "}
            {moment(lichchieu.ngayChieuGioChieu).format("HH:mm A")}
          </p>
          <p className="text-xs md:text-base lg:text-lg">
            <span className="text-orange-500 ">Thời lượng: </span>{" "}
            {lichchieu.thoiLuong} phút
          </p>
        </div>
      );
    });
  };
  return <div>{renderLichChieu()}</div>;
}
