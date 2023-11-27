import axios from "axios";

const api = axios.create({
  baseURL: "https://portaldoexame.com.br",
  headers: {
    Origin: "https://portaldoexame.com.br",
  },
});

export default api;
