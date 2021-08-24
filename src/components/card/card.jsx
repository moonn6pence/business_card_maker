import React from "react";
import styles from "./card.module.css";

const Card = ({ card }) => {
  const DEFAULT_IMAGE = "/images/default_logo.png";
  const { name, company, title, email, theme, message, fileName, fileURL } =
    card;

  const url = fileURL ? `/images/${fileURL}` : DEFAULT_IMAGE;

  return (
    <li className={`${styles.card} ${getThemes(theme)}`}>
      <img className={styles.avatar} src={url} alt="profile" />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

function getThemes(theme) {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    default:
      throw new Error(`Unknown theme : ${theme}`);
  }
}

export default Card;
