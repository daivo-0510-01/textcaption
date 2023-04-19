import axios from "axios";
import { BASE_URL, configHeader } from "./config";

export const MovieServ = {
  getMovie: () => {
    return axios({
      url: `${BASE_URL}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP00`,
      method: "GET",
      headers: configHeader(),
    });
  },
  getDetailMovie: (id) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
      method: "GET",
      headers: configHeader(),
    });
  },
  getMovieTapsByTheater: () => {
    return axios({
      url: `${BASE_URL}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP00`,
      method: "GET",
      headers: configHeader(),
    });
  },
};
