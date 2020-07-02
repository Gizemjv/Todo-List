import React from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';
import { TodoAdd } from '../Components/todoAdd';
import { Router, Route, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';

export class TodoLogin extends React.Component {

    constructor() {
        super();
        this.Login = this.Login.bind(this);
    }
    Login() {
        const Username = document.getElementById('username').value;
        const Password = document.getElementById('password').value;
        if (Username == "admin" && Password == "123") {
            this.props.Login(Username);
        }
        else {
            alert('Kullanıcı adı veya şifre hatalı!!');
        }
    }
    render() {
        return (
            <div className="container">
                <div className="imgLogo">
                    <a href="#" alt="todo" title="todo" />
                </div>
                <Form className="loginForm">
                    <FormGroup>
                        <Form.Control className="username" type="text" name="username" id="username" placeholder="Username or E-mail"></Form.Control><hr />
                        <Form.Control className="password" type="password" name="password" id="password" placeholder="Password"></Form.Control>
                    </FormGroup>
                    <Button className="btn btn-success" onClick={this.Login}>LOGIN</Button>
                </Form>
            </div>
           
        )
    }


}