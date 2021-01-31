import React, { useState } from 'react';
import './list.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import List from './List.jsx';

const ToDoList = () => {
    const [item, set] = useState("");
    const [newitem, setNewItem] = useState([]);
    const additem = (event) => {
        set(event.target.value);

    }
    const listofitem = () => {
        setNewItem((preValue) => {
            return [...preValue, item];

        })
        set("");
    }
    return (
        <React.Fragment>
            <div className="main">
                <div className="card">
                    <h1>ToDo List</h1>
                    <input type="text" placeholder="Add an Item" onChange={additem} value={item} />
                    <Button className="btn_add" onClick={listofitem}>
                        <AddCircleIcon style={{ fontSize: 45, color: 'green' }} />
                    </Button>
                    <ol>
                        {
                            newitem.map((val, index) => {
                                return <List key="index" text={val} />;
                            })
                        }
                    </ol>

                </div>
            </div>
        </React.Fragment>
    )

};
export default ToDoList;