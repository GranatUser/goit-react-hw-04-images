
import { SearchbarStyled } from "./searchbar.styled";
import search from "../../images/search.svg"
export function Searchbar(props){

           return (
          <SearchbarStyled>
        <form onSubmit={props.onSubmit} className="search-form" id="search-form">
    <div>
        <button  className="search-form__submit" type="submit">
            <img src={search} alt="Search icon"/>
        </button>
        <input
        className="search-form__input"
        type="text"
        name="searchQuery"
        autoComplete="off"
        autoFocus
        placeholder="Search images..."
         />
    </div>
   
    </form>
</SearchbarStyled>
    );

 
  
}