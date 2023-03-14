import React from "react";
import { ImageGalleryItemStyled } from "./ImageGalleryItem.styled";
import PropTypes from "prop-types";
export function ImageGalleryItem(props) {
    return (
        <ImageGalleryItemStyled>
            <img onClick={props.openModal} src={props.url} alt={props.tags} data-img={props.modalImg} />
        </ImageGalleryItemStyled>
       
    );
}
ImageGalleryItem.propTypes = {
    openModal: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    modalImg:PropTypes.string.isRequired,
}