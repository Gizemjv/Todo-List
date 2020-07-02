import React from 'react';
import { Form, FormGroup, Button, InputGroup } from 'react-bootstrap';
import { TodoList } from './todoList';
import ReactDOM from 'react-dom';
import {Detail} from './detail';

export class TodoAdd extends React.Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.detailC = this.detailC.bind(this);
        this.back = this.back.bind(this);
    }
    render() {
        return (
            <div>
                <div className="imgLogo">
                    <a href="#" alt="todo" title="todo" />
                </div>
                <Form className="addForm" onSubmit={this.addItem}>
                    <FormGroup className="formg">
                        <InputGroup className="inpG">
                            <Form.Control className="WhatN" type="text" name="addInput" id="addInput" placeholder="What needs to be done?"></Form.Control>
                            <div className="ıconP" onClick={this.detailC}/>
                        </InputGroup>

                        <Button variant="success" onClick={this.addItem}></Button>
                    </FormGroup>
                </Form>
            </div>

        )
    }

    addItem() {
        var inp = document.getElementById('addInput');
        var val = inp.value;
        inp.value = '';
        this.props.addItem(val);
    }
    detailC(){
        ReactDOM.render(
            <React.StrictMode>
              <Detail back={this.back}/>
            </React.StrictMode>,
            document.getElementById('root')
          );
    }
    back(){
        this.props.back(true);
    }
}