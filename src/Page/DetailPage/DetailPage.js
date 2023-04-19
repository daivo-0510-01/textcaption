import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieServ } from "../../service/movieService";
import { Tabs } from "antd";
import ChildrenDetail from "./ChildrenDetail/ChildrenDetail";

export default function DetailPage() {
  const [detaiMovie, setDetaiMovie] = useState([]);

  let params = useParams();
  useEffect(() => {
    MovieServ.getDetailMovie(params.id)
      .then((res) => {
        console.log(res);
        setDetaiMovie(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let renderThongTinLichChieu = () => {
    return detaiMovie.heThongRapChieu?.map((hethongrap, index) => {
      return {
        key: index,
        label: (
          <div className="flex items-center mr-0">
            <img className="w-7 md:w-10 lg:w-14" src={hethongrap.logo}></img>
            <p className="text-xl hidden md:block md:text-sm lg:text-lg pl-3">
              {hethongrap.tenHeThongRap}
            </p>
          </div>
        ),
        children: (
          <Tabs
            tabPosition="left"
            defaultActiveKey="1"
            items={hethongrap.cumRapChieu.map((cumrap, index) => {
              return {
                key: index,
                label: (
                  <div className="lg:flex items-center">
                    <img className="w-14 mr-3" src={cumrap.hinhAnh}></img>
                    <div className="text-left w-44 md:w-full lg:w-full ">
                      <h3 className="text-black text-xs  md:text-base lg:text-lg">
                        {cumrap.tenCumRap}
                      </h3>
                      <p className="text-gray-500 py-2 text-xs md:text-base lg:text-lg">
                        {cumrap.diaChi}
                      </p>
                    </div>
                  </div>
                ),
                children: <ChildrenDetail cumrap={cumrap} />,
              };
            })}
          />
        ),
      };
    });
    // console.log("detaiMovie.heThongRapChieu: ", detaiMovie.heThongRapChieu);
  };

  return (
    <div className="container pt-24">
      <div className="flex  text-left">
        <img
          class="h-32 sm:h-32  md:h-48 rounded"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          src={detaiMovie.hinhAnh}
        ></img>
        <div className="ml-10">
          <h2 className="text-lg lg:text-xl font-medium">
            {detaiMovie.tenPhim}
          </h2>
          <p className="mt-3 text-sm md:text-base mb-3">{detaiMovie.moTa}</p>
          <button className="btn btn-primary">
            <a href={detaiMovie.trailer}>Xem trailer</a>
          </button>
        </div>
      </div>

      <div className="py-10 my-10  border-black border-y-2">
        <Tabs
          tabPosition="left"
          defaultActiveKey="1"
          items={renderThongTinLichChieu()}
        />
      </div>
    </div>
  );
}
