import React from 'react';
import s from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({images, onSelect}) => {
    return (
        <>
            {images.map( image => {
                return (
                    <li key={image.id} className={s.GalleryItem}>
                        <img src={image.webformatURL} alt="gg" className={s.GalleryItemImage} onClick={() => onSelect(image.largeImageURL)}/>
                    </li>
                );
            })}
        </>
    );
};