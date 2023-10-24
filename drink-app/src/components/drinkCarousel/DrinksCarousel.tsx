import useRandomDrinks from "../../hooks/useRandomDrinks";
import styles from "./page.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DrinkCard from "../drinkCard/DrinkCard";
import { useEffect, useState } from "react";

const DrinksCarousel = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Set initial window width

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: windowWidth <= 550 ? 1: windowWidth <= 770 ? 4: windowWidth <= 1200 ? 4: windowWidth <= 1600 ? 6: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: -1,
    cssEase: "ease-in-out",
    swipeToSlide: true,
    arrows: false,
    pauseOnHover: false, // Disable pause on hover
  };

  const { data } = useRandomDrinks();
  if (!data || data.drinks.length === 0) {
    return null;
  }

  return (
    <div className={styles.drinksCardsContainer}>
      <Slider {...settings}>
     
        {data?.drinks.map((drink) => (
          <DrinkCard key={drink.idDrink} image={drink.strDrinkThumb} />
        ))}
      </Slider>
    </div>
  );
};

export default DrinksCarousel;
