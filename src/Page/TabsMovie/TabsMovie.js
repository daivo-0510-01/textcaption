import React, { useEffect, useState } from "react";
import { MovieServ } from "../../service/movieService";
import { Tabs } from "antd";
import ChildrenTapMovie from "./ChildrenTapMovie/ChildrenTapMovie";

export default function TabsMovie() {
  const [movieTap, setMovieTap] = useState();

  useEffect(() => {
    MovieServ.getMovieTapsByTheater()
      .then((res) => {
        console.log(res);
        setMovieTap(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let renderMovieTap = () => {
    return movieTap?.map((heThongRap, index) => {
      return {
        key: index,
        label: (
          <div className="flex items-center">
            <img className="w-7 lg:w-10 mr-1" src={heThongRap.logo}></img>
            <p className="text-xl hidden md:block md:text-sm lg:text-lg pl-3">
              {heThongRap.tenHeThongRap}
            </p>
          </div>
        ),
        children: (
          <Tabs
            style={{ height: "400px" }}
            className="overflow-y-auto"
            tabPosition="left"
            defaultActiveKey="1"
            items={heThongRap.lstCumRap.map((cumrap, index) => {
              return {
                key: index,
                label: (
                  <div className="lg:flex text-left ">
                    <img className="w-14 mr-3" src={cumrap.hinhAnh}></img>
                    <div className="">
                      <h3 className="text-xs md:text-sm font-medium">
                        {cumrap.tenCumRap}
                      </h3>
                      <p className="text-red-400 text-xs">Chi tiết ...</p>
                    </div>
                  </div>
                ),
                children: <ChildrenTapMovie cumrap={cumrap} />,
              };
            })}
          />
        ),
      };
    });
  };
  return (
    <div className="container pt-20 pb-20">
      <Tabs
        // style={{ height: "600px" }}
        // className="overflow-y-auto"
        tabPosition="left"
        defaultActiveKey="1"
        items={renderMovieTap()}
      />
    </div>
  );
}
