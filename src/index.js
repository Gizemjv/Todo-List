import React from 'react';
import ReactDOM from 'react-dom';
import { TodoLogin } from './Components/todoLogin';
import { TodoAdd } from './Components/todoAdd';
import { Detail } from './Components/detail';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './assets/style.scss';
import { TodoList } from './Components/todoList';


class App extends React.Component {

  constructor() {
    super();
    let list = [
      { text: 'Read an article', status: 'passive' },
      { text: 'Try not to fall a sleep', status: 'passive' }];
    let localSList = localStorage.getItem('list');
    if (localSList !== null) {
      localSList = JSON.parse(localSList);
      list = localSList;
    }
    this.state = {
      userD: App.getUserData(),
      list: list
    };
    var InLogged = false;
    var backC = false;
    this.Login = this.Login.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeIt = this.removeIt.bind(this);
    this.CompletedIt = this.CompletedIt.bind(this);
    this.back = this.back.bind(this);
  }

  render() {
    let layout = (<TodoLogin Login={this.Login} />);
    if (this.InLogged === true) {
      layout = (
        <div>
          <TodoAdd addItem={this.addItem} back={this.back} />
          <TodoList list={this.state.list} addItem={this.addItem} removeIt={this.removeIt}
            CompletedIt={this.CompletedIt} />
        </div>
      );
    }
    return (
      <div className="content">
        {layout}
      </div>
    )

  }

  Login(userName) {
    let userData = {
      login: true,
      userName: userName
    };
    this.setState({
      userD: {
        userName: userData.userName,
      }
    });
    userData = JSON.stringify(userData);
    localStorage.setItem('userData', userData);
    this.InLogged = true;
  }

  back(val) {
    this.backC = val;
  }

  static getUserData() {
    let userData = localStorage.getItem('userData');
    userData = JSON.parse(userData);
    if (userData !== null) {
      return { userName: userData.userName };
    }
    else {
      return false;
    }
  }



  addItem(item) {
    let updatedList = this.state.list;
    updatedList.push({ text: item, status: 'passive' });
    this.setState({ list: updatedList });
    this.updateLocalStorage(updatedList);
  }

  updateLocalStorage(updatedList) {
    var updatedList = JSON.stringify(updatedList);
    localStorage.setItem('list', updatedList);
    return true;
  }

  removeIt(task_id) {
    let updatedList = this.state.list;
    updatedList.splice(task_id.replace('task_', ''), 1);
    this.setState({ list: updatedList });
    this.updateLocalStorage(updatedList);
  }

  CompletedIt(task_id) {
    let updatedList = this.state.list;
    let currentStatus = updatedList[task_id.replace('task_', '')].status;
    let newStatus = 'active';
    if (currentStatus === 'active') {
      newStatus = 'passive';
    }
    updatedList[task_id.replace('task_', '')].status = newStatus;
    this.setState({ list: updatedList });
    this.updateLocalStorage(updatedList);
  }
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


