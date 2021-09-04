import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ FileUploader, authService, cardRepository }) => {
  const history = useHistory();
  const historyState = useHistory().state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        if (user) {
          setUserId(user.uid);
        } else {
          history.push("/");
        }
      });
  });

  useEffect(() => {
    if (!userId) {
      return;
    }
    const unsync = cardRepository.sync(userId, (cards) => {
      setCards(cards);
    });
    return () => unsync();
  }, [userId]);

  const onLogout = () => {
    authService.logout();
  };

  const addOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.save(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.delete(userId, card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <section className={styles.container}>
        <Editor
          cards={cards}
          addOrUpdateCard={addOrUpdateCard}
          deleteCard={deleteCard}
          FileUploader={FileUploader}
        />
        <Preview cards={cards} />
      </section>
      <Footer />
    </section>
  );
};

export default Maker;
