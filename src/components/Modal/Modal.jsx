import { ModalStyled } from './Modal.styled'
import PropTypes from "prop-types"
export function Modal({modalImage,tags}) {
        return (
            <ModalStyled>
                <img src={modalImage} alt={tags} />
            </ModalStyled>
        )
   
}
Modal.propTypes = {
    modalImage: PropTypes.string.isRequired,
    tags:PropTypes.string.isRequired
}