import axios from "axios";
import { BASE_URL, configHeader } from "./config";

export const userServ = {
  postLogin: (dataLogin) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: dataLogin,
      headers: configHeader(),
    });
  },

  postSignUp: (dataSignUp) => {
    return axios({
      url: `${BASE_URL}/api/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data: dataSignUp,
      headers: configHeader(),
    });
  },
};
