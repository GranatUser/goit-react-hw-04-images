import { LoaderStyled } from "./Loader.styled";
export function Loader() {
    return (
        <LoaderStyled  className="lds-ellipsis"><div></div><div></div><div></div><div></div></LoaderStyled>
    );
}