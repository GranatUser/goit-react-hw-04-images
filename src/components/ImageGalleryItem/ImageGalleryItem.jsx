import React from "react";
import { ImageGalleryItemStyled } from "./ImageGalleryItem.styled";
export function ImageGalleryItem(props) {
    return (
        <ImageGalleryItemStyled>
            <img src={props.url} alt={props.tags} data-img={props.modalImg} />
        </ImageGalleryItemStyled>
       
    );
}