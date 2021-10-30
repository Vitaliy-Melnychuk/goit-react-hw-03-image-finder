import React from 'react';
import  { ImageGalleryItem }  from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

export const ImageGallery = ({ images, onSelect}) => {
    return (
        <ul className={s.ImageGallery}>
            <ImageGalleryItem images={images} onSelect={onSelect}/>
        </ul>
    );
}
