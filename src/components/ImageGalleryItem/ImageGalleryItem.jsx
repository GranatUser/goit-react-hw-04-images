import React from "react";
import { ImageGalleryItemStyled } from "./ImageGalleryItem.styled";
import PropTypes from "prop-types";
export function ImageGalleryItem(props) {
    return (
        <ImageGalleryItemStyled>
            <img src={props.url} alt={props.tags} data-img={props.modalImg} />
        </ImageGalleryItemStyled>
       
    );
}
ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    modalImg:PropTypes.string.isRequired,
}