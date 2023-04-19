import axios from "axios";
import { BASE_URL, configHeader } from "./config";

export const carouselServ = {
  getbanner: () => {
    return axios({
      url: `${BASE_URL}/api/QuanLyPhim/LayDanhSachBanner`,
      method: "GET",
      headers: configHeader(),
    });
  },
};
