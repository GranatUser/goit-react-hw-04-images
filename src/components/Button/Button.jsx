import { ButtonStyled } from "./Button.styled";
export function Button({ onLoadMore }) {
    return (
        <ButtonStyled type="button" onClick={onLoadMore}>Load More</ButtonStyled>
    );
}