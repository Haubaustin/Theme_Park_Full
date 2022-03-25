import React from "react";

const SearchBar = (props) => {
    return (
        <div>
        <form onSubmit={props.onSubmit1}>
            <input
                type='text'
                name='search'
                value={props.value1}
                placeholder="Search Parks"
                onChange={props.onChange}
            />
            <button type="submit">
                Search
            </button>
        </form>
        <form onSubmit={props.onSubmit2}>
            <input 
                type='number'
                name='budget'
                value={props.value2}
                placeholder="What's you're budget?"
                onChange={props.onCheck}
                />
            <button type="submit">
                Search
            </button>
        </form>
        </div>
    )
}

export default SearchBar