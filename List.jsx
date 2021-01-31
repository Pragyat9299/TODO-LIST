import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './list.css';

const List = (props) => {
    const [line, set] = useState(false);
    const cutit = () => {
        set(true);
    }

    return (
        <React.Fragment>
            <div className="todo_style">
                <span onClick={cutit}>
                    <DeleteIcon className="delete" />
                </span>
                <li style={{ textDecoration: line ? "line-through" : "none" }}>{props.text}</li>
            </div>
        </React.Fragment>
    )

}
export default List;