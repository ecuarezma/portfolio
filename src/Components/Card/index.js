import React from "react";
import { CSSTransition } from "react-transition-group";
import useToggleState from "../../hooks/useToggleState";

import Loader from "../../Components/Loader";
import CardInfo from "./CardInfo";
import classes from "./Card.module.scss";
import "./CardInfo/info.css";

const Card = ({ link, title, src, caption, isLoading, children }) => {
  const [isShowing, toggleShow] = useToggleState(false);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className={classes.Card}>
        <h4>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h4>
        <div className={classes.image}>
          <img src={src} alt="App" />
        </div>
        <div className={classes.caption}>
          <figcaption>{caption}</figcaption>
          <div className={classes.icon} onClick={toggleShow}>
            <i className="fas fa-info"></i>
          </div>
        </div>
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
