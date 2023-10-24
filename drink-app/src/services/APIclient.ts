import axios from "axios";
import { Drink } from "./RandomDrinksService";

export interface FetchResponseDrinks{
    drinks: Drink[];
}
const axiosInstance = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1",
});

class APIClient {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance.get<FetchResponseDrinks>(this.endpoint).then((res) => res.data);
  };
}

export default APIClient;
