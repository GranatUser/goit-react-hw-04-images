import { OverlayStyled } from "./Overlay.styled";
import React from "react";
import PropTypes from "prop-types";

export class Overlay extends React.Component {
    onKeyDownHandle = (event) => {
        if (event.code === "Escape") {
            this.props.closeModal();
        }
    }
    onClickOverlay = (event) => {
        if (event.target.tagName !== "IMG") {
            this.props.closeModal();
        }
    }
    componentDidMount() {
        window.addEventListener("keydown",this.onKeyDownHandle)
    }
    componentWillUnmount() {
        window.removeEventListener("keydown", this.onKeyDownHandle);
    }
    render() {
         return (
        <OverlayStyled className="overlay" onClick={this.onClickOverlay}>
            {this.props.children}
         </OverlayStyled>
    );
    }
   
}
Overlay.propTypes = {
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.node
}