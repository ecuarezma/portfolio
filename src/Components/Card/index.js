import React from "react";
import useToggleState from "../../hooks/useToggleState";
import Modal from "../Modal";
import classes from "./Card.module.scss";

const Card = ({ link, title, src, children }) => {
  const [isShowing, toggleShow] = useToggleState();

  return (
    <>
      <div className={classes.Card}>
        <h4>
          <a href={link}>{title}</a>
        </h4>
        <img src={src} alt="" />
        <figcaption onClick={toggleShow}>{children}</figcaption>
      </div>
      <Modal show={isShowing}>
        <figcaption id="info">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam
          quasi maxime nam, eveniet minus cum tempora optio nisi maiores vero
          repellat sunt, in ipsum asperiores nemo consectetur! Sint, debitis.
        </figcaption>
      </Modal>
    </>
  );
};

export default Card;
