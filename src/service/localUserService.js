export const localUserServ = {
  get: () => {
    let datajson = localStorage.getItem("USER_INFO");
    return JSON.parse(datajson);
  },
  set: (dataUser) => {
    let datajson = JSON.stringify(dataUser);
    localStorage.setItem("USER_INFO", datajson);
  },
  remove: () => {
    localStorage.removeItem("USER_INFO");
    window.location.assign("/login");
  },
};
