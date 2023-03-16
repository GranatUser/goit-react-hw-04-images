import styled from "styled-components";

export const ModalStyled = styled.div`

 
  animation-name: modalOpenAnim;
  animation-duration: 250ms;
  cursor:default;
  @keyframes modalOpenAnim {
  0% {
      transform:scale(0);
  }

  100% {
     transform:scale(1);
  }
}
  &>img{
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  }
`
