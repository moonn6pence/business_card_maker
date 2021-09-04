import React from "react";
import CardAddForm from "../card_add_form/card_add_form";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./editor.module.css";

const Editor = ({ FileUploader, cards, addOrUpdateCard, deleteCard }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Edit Card</h1>
      {Object.keys(cards).map((key) => (
        <CardEditForm
          key={key}
          card={cards[key]}
          updateCard={addOrUpdateCard}
          onDelete={deleteCard}
          FileUploader={FileUploader}
        />
      ))}
      <CardAddForm FileUploader={FileUploader} onSubmit={addOrUpdateCard} />
    </section>
  );
};

export default Editor;
