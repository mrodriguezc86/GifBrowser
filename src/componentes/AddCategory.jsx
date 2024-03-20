import PropTypes from "prop-types";
import { useState } from "react";


export const AddCategory = ({onSubmitCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length<= 1) return;
        onSubmitCategory(inputValue)
        //setCategory(category => [inputValue, ...category])
        setInputValue('');
    }

    return(
        <form onSubmit={(event) => onSubmit(event)} aria-label="form">
            <input
                type='text'
                placeholder="Find gifs"
                value={inputValue}
                onChange={onInputChange}
            ></input>
        </form>
    )
}

AddCategory.propTypes = {
    onSubmitCategory: PropTypes.func.isRequired,
}