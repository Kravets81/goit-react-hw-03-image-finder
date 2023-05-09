import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
const modalElement = document.querySelector('#modal__root');

export default class Modal extends Component {
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClic = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    console.log(this.props.image);
    return createPortal(
      <div className={css.overlay} onClick={this.handleBackdropClic}>
        <div className={css.modal}>
          <img src={this.props.image} alt="img" />
        </div>
      </div>,
      modalElement
    );
  }
}
