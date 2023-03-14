import React from "react";
import { ImageGalleryStyled } from "./imageGallery.styled";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types"
export function ImageGallery(props) {
    return (
        <ImageGalleryStyled >
            {props.photos !== null && props.photos.map((photo) => {
                return (
                    <ImageGalleryItem openModal={props.openModal} key={photo.id}
                        url={photo.webformatURL} modalImg={photo.largeImageURL} tags={photo.tags} />
                );
            })}
        </ImageGalleryStyled>
    );
}
ImageGallery.propTypes = {
    openModal: PropTypes.func.isRequired,
    photos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired
    }).isRequired).isRequired
}