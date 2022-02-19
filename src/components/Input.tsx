import React from 'react';

interface Props {
    addTodo: AddTodo
}

function Input({addTodo}: Props) {
    return(
        <>
        <h2>To do:</h2>
        <input type="text"></input>
        <button onClick={(e) => {
            e.preventDefault();
            addTodo('test');
        }}>Add</button>
        </>
    );
}

export default Input;