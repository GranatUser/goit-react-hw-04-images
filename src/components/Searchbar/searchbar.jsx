import PropTypes from 'prop-types'
import { SearchbarStyled } from "./searchbar.styled";
import search from "../../images/search.svg"
import React from "react";
export function Searchbar(props) {

    const handleClick = (event) => {
        event.preventDefault();
        const keyWords = event.currentTarget.elements.searchQuery.value.trim();
        props.setKeyWords(keyWords);


    };
    return (
        <SearchbarStyled>
            <form onSubmit={handleClick} className="search-form" id="search-form">
                <div>
                    <button className="search-form__submit" type="submit">
                        <img src={search} alt="Search icon" />
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
Searchbar.propTypes = {
    setKeyWords: PropTypes.func.isRequired
}