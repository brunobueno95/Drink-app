import APIClient from "./APIclient";

export interface Drink {
  idDrink: string;
  strDrinkThumb: string;
}

export default new APIClient("/search.php?s=");
