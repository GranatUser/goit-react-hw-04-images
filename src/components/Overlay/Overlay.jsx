import { OverlayStyled } from "./Overlay.styled";
import React from "react";
import PropTypes from "prop-types";

export class Overlay extends React.Component {
    onKeyDownHandle = (event) => {
        if (event.code === "Escape") {
            this.props.closeModalKeyDown();
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
        <OverlayStyled className="overlay" onClick={this.props.onClick}>
            {this.props.children}
         </OverlayStyled>
    );
    }
   
}
Overlay.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node
}