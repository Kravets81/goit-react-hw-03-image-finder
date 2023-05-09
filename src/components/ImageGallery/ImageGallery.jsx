import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export default function ImageGallery({ imageHits, onClick }) {
  return (
    <>
      <ul className={css.imageGallery} onClick={onClick}>
        {imageHits.map((item, index) => (
          <ImageGalleryItem key={`${item.id}-${index}`} item={item} />
        ))}
      </ul>
    </>
  );
}
