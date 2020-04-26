import React from "react";
import { CSSTransition } from "react-transition-group";
import useToggleState from "../../hooks/useToggleState";
import CardInfo from "./CardInfo";
import classes from "./Card.module.scss";
import "./CardInfo/info.css";

const Card = ({ link, title, src, caption, children }) => {
  const [isShowing, toggleShow] = useToggleState(false);

  return (
    <>
      <div className={classes.Card}>
        <h4>
          <a href={link}>{title}</a>
        </h4>
        <img src={src} alt="" />
        <figcaption id="caption" onClick={toggleShow}>
          {caption}
        </figcaption>
      </div>
      <CSSTransition
        in={isShowing}
        timeout={300}
        classNames="info"
        unmountOnExit
      >
        <CardInfo>{children}</CardInfo>
      </CSSTransition>
    </>
  );
};

export default Card;
