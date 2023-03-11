import { ModalStyled } from './Modal.styled'

export function Modal({modalImage,tags}) {
        return (
            <ModalStyled>
                <img src={modalImage} alt={tags} />
            </ModalStyled>
        )
   
}