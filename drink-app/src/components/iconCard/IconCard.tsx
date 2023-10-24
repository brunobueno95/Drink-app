import { ReactNode } from "react";
import styles from "./page.module.css";

interface Props {
  icon: ReactNode;
  title: string;
  text: string;
}

const IconCard = ({ icon, title, text }: Props) => {
  return (
    <div className={styles.bulletPoint}>
      <div>
        <div className={styles.icon}>{icon}</div>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.txtContent}>{text}</p>
    </div>
  );
};

export default IconCard;
