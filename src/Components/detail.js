import React from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';

export class Detail extends React.Component {

    constructor() {
        super();
        this.back = this.back.bind(this);
    }

    back(){
        this.props.back();
    }

    render() {
        return (
            <div className="detaContainer">
                <div className="imgLogo">
                    <a href="#" alt="todo" title="todo" />
                </div>
                <div className="detail">
                    <h6>What needs to be done?</h6><hr/>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries...
                    </p>
                    <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <Button variant="success" onClick={this.back}></Button>
            </div>

        )
    }


}