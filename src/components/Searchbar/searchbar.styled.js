import styled from "styled-components";

export const SearchbarStyled = styled.header`
& div {
    display: flex;
}
& img{
  display: block;
  height: 50%;
  width: 50%;
  opacity: 0.5;
}
& img:hover, & img:focus{
    opacity: 1;
}
& .search-form {
    top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

}
& .search-form__submit{
    border: none;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    background-color: transparent;
    position: absolute;
   
}
& .search-form__input{
    display: block;
    border: none;
    border-radius:4px;
    min-width:400px;
    height: 48px;
    padding-left: 48px;
}
& .search-form__submit:hover,
& .search-form__submit:focus {
    cursor: pointer;
}
`