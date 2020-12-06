import React from 'react'
import { useStateValue } from './StateProvider'
import "./styles/SearchPage.css"

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    return (
        <div className="searchPage">
            <div className="search__pageheader">
                <h1>{term}</h1>

            </div>
            <div className="search__result">

            </div>
            
        </div>
    )
}

export default SearchPage
