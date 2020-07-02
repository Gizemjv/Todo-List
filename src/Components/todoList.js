import React from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';


export class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.Completed = this.Completed.bind(this);
        this.remove = this.remove.bind(this);
    }
    render() {
        const items = this.props.list.map((item, i) => {
            let task_id = 'task_' + i;
            {
                return (
                    <li key={i} id={task_id} className={item.status}>
                        <span className="title">{item.text}</span>
                        <span className="type" onClick={this.Completed}></span>
                        <span className="delete" onClick={this.remove}></span>
                    </li>

                )
            }
        });
        return (
            <div className="tList">
                <ul>
                    {items}
                </ul>
            </div>

        );
    }

    Completed(e) {
        this.props.CompletedIt(e.target.parentNode.id);
    }
    remove(e) {
        this.props.removeIt(e.target.parentNode.id);
    }



}