import React from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './SideDrawer.css';

const SideDrawer = props => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={250}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return createPortal(content, document.getElementById('drawer-portal'));
};

export default SideDrawer;
