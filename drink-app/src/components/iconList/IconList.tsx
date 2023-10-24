import styles from "./page.module.css";
import { BiDrink, BiCamera } from "react-icons/bi";
import { LuChefHat } from "react-icons/lu";
import { MdOutlineCreate } from "react-icons/md";
// import { AiOutlineHeart } from "react-icons/ai";
import { IoPeopleOutline } from "react-icons/io5";
import IconCard from "../iconCard/IconCard";

const cardsContent = [
  {
    id: 1,
    icon: <BiDrink />,
    title: "Vast Collection",
    text: "Our database offers a wide range of alcoholic beverages, from classic cocktails to rare spirits, catering to all preferences.",
  },
  {
    id: 2,
    icon: <BiCamera />,
    title: "HD Images",
    text: "Enhance your mixology experience with high-quality drink images that inspire creativity and appreciation.",
  },
  {
    id: 3,
    icon: <LuChefHat />,
    title: "Instructions",
    text: "Eliminate guesswork with our step-by-step instructions and ingredient lists to impress friends and family with your mixology skills",
  },
  {
    id: 4,
    icon: <MdOutlineCreate />,
    title: "Create",
    text: "Join our community, share your drink recipes, and get feedback from fellow members.",
  },
  {
    id: 5,
    icon: <IoPeopleOutline />,
    title: "Comunity",
    text: "Save favorites and connect with mixology enthusiasts to share and learn.",
  },
  //   { id: 6, icon: <AiOutlineHeart />, title: "Interaction", text: "" },
];

const IconList = () => {
  return (
    <div className={styles.gridIcons}>
      {cardsContent.map((cd) => (
        <IconCard key={cd.id} icon={cd.icon} title={cd.title} text={cd.text} />
      ))}
    </div>
  );
};

export default IconList;
