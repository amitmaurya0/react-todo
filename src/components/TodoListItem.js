import React from 'react'

const TodoListItem = ({ todo, onDeletePress, onCompletePress, index }) => {

    function deleteItem() {
        onDeletePress(index)
    }
    function completeItem() {
        onCompletePress(index)
    }

    return (
        <div onClick={completeItem} className={todo.status ? 'listItem active' : 'listItem '}>
            {todo.name}
            <button onClick={deleteItem} className='close'>X</button>
        </div>
    )
}

export default TodoListItem;