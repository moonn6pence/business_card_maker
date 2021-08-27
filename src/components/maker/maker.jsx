import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  const addOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "Simon",
      company: "DGU",
      theme: "light",
      title: "Front-end engineer",
      email: "shin421179@gmail.com",
      message: "Just do it",
      fileName: "simon",
      fileURL: "simon.png",
    },
    2: {
      id: "2",
      name: "Kevin",
      company: "MCFC",
      theme: "dark",
      title: "Back-end engineer",
      email: "debrunye@gmail.com",
      message: "Go for it",
      fileName: "kevin",
      fileURL: "kevin.png",
    },
    3: {
      id: "3",
      name: "Jack",
      company: "MCFC",
      theme: "colorful",
      title: "Full-stack engineer",
      email: "grealish@gmail.com",
      message: "Life is short, art is long",
      fileName: "jack",
      fileURL: null,
    },
  });

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        if (!user) {
          history.push("/");
        }
      });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <section className={styles.container}>
        <Editor
          cards={cards}
          addOrUpdateCard={addOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </section>
      <Footer />
    </section>
  );
};

export default Maker;
