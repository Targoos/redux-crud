import axios from "axios";

const clientAxios = axios.create({
  baseURL: "http://localhost:4000/",
});

export default clientAxios;

class Http {
  baseUrl = "http://localhost:4000";
  requestOptions = {
    body: {
      token: `${localStorage.getItem("access_token")}`,
    },
  };

  async get(query = "") {
    const request = await fetch(`${this.baseUrl}${query}`, this.requestOptions);
    const response = await request.json();

    return response;
  }
}

export const products = new Http();
