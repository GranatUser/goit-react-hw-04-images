import React from "react";
import { ImageGalleryStyled } from "./imageGallery.styled";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
export function ImageGallery(props) {
    return (
        <ImageGalleryStyled onClick={props.onClick}>
            {props.photos !== null && props.photos.map((photo) => {
                return (
                    <ImageGalleryItem key={photo.id} url={photo.webformatURL} modalImg={ photo.largeImageURL} tags={photo.tags} />
                );
            })}
        </ImageGalleryStyled>
    );
}