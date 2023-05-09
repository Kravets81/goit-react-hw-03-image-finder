import React, { Component } from 'react';
import Modal from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = e => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { id, webformatURL, largeImageURL } = this.props.item;

    return (
      <li key={id} className={css.galleryItem}>
        <img
          onClick={this.toggleModal}
          className={css.ImageGalleryItemImage}
          src={webformatURL}
          alt="img"
        />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal} image={largeImageURL} />
        )}
      </li>
    );
  }
}
