import { OverlayStyled } from "./Overlay.styled";
import React, { useEffect } from "react";
import PropTypes from "prop-types";

export function Overlay(props) {

    const onClickOverlay = (event) => {
        if (event.target.tagName !== "IMG") {
            props.closeModal();
        }
    }
    useEffect(() => {
        const onKeyDownHandle = (event) => {
            if (event.code === "Escape") {
                props.closeModal();
            }
        }
        window.addEventListener("keydown", onKeyDownHandle);
        return () => {
            window.removeEventListener("keydown", onKeyDownHandle);
        }
    }, [props])

    return (
        <OverlayStyled className="overlay" onClick={onClickOverlay}>
            {props.children}
        </OverlayStyled>
    );


}
Overlay.propTypes = {
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.node
}