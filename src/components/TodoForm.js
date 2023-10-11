import React, { useState } from 'react';

export default function TodoForm({ onSubmitClick }) {
    const [text, setText] = useState('');

    function onFormSUbmit(e) {
        e.preventDefault();
        onSubmitClick(text);
        setText('');
    }
    return (
        <div className='header'>
            <form onSubmit={onFormSUbmit}>
                <input value={text} onChange={(e) => setText(e.target.value)} type="text" name="todo" placeholder="enter your todo" />
                <button className='addBtn' type="submit">Submit</button>
            </form>
        </div>
    )

}