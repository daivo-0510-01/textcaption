import { Tabs } from "antd";
import moment from "moment/moment";
import React, { Fragment } from "react";

export default function ChildrenTapMovie({ cumrap }) {
  let renderMovieInTabs = () => {
    return cumrap.danhSachPhim.map((movie, index) => {
      return {
        key: index,
        label: (
          <Fragment>
            <div className=" my-1">
              <div className="flex">
                <img
                  style={{
                    width: "50px",
                    height: "60px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  src={movie.hinhAnh}
                ></img>
                <div>
                  <h1 className="ml-3 text-xs md:text-sm  font-medium text-left text-green-700">
                    {movie.tenPhim}
                  </h1>
                  <p className="text-orange-400 text-xs md:text-sm text-left ml-3">
                    {cumrap.diaChi}
                  </p>

                  <div className="md:grid grid-cols-2 text-left gap-x-2 ml-3">
                    {movie.lstLichChieuTheoPhim
                      ?.slice(0, 4)
                      .map((lichchieu, index) => {
                        return (
                          <p className="text-xs font-medium" key={index}>
                            {moment(lichchieu.ngayChieuGioChieu).format(
                              "hh:mm A"
                            )}
                          </p>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        ),
      };
    });
  };
  return (
    <div>
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        items={renderMovieInTabs()}
      />
    </div>
  );
}
