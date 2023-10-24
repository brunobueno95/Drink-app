import { useQuery } from "@tanstack/react-query";
import RandomDrinksService from "../services/RandomDrinksService";
import { FetchResponseDrinks } from "../services/APIclient";

const useRandomDrinks = () => {
  return useQuery<FetchResponseDrinks, Error>({
    queryKey: ["randomDrink"],
    queryFn: RandomDrinksService.getAll,
    staleTime: 20 * 60 * 1000, //20mnts
  });
};

export default useRandomDrinks;
