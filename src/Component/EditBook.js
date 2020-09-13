import React, { Component } from 'react';
import './AddBook.css';
import { Redirect } from 'react-router-dom';

class EditBook extends Component {
    state = { saved: false };
    constructor(props) {
        super(props);
        const book = this.props.getBookAfterEdit();
        console.log(book);
        this.name = book.name;
        this.numPages = book.numPages;
        this.isNew = book.isNew;
    }

    render() {
        const nameChangeHadler = (evt) => {
            this.name = evt.target.value;
        }
        const numPagesChangeHandler = (evt) => {
            this.numPages = evt.target.value;
        }
        const isNewChangeHandler = (evt) => {
            this.isNew = evt.target.checked;
        }
        const saveClickHandler = () => {
            this.props.setBookAfterEdit(this.name, this.numPages, this.isNew);
            this.setState({ saved: true });
        }
        if (this.state.saved) {
            return (<Redirect to='/Books' />);
        }
        const element =
            <div>
                <input type="text" onChange={nameChangeHadler} defaultValue={this.name} />
                <br />
                <input type="number" onChange={numPagesChangeHandler} defaultValue={this.numPages} />
                <br />
                <label><input type="checkbox" onChange={isNewChangeHandler} defaultChecked={this.isNew}/>new</label>
                <br />
                <button onClick={saveClickHandler}>Save</button>
            </div>

        return (
            <div className="AddBook">
                <h2>Add Book</h2>
                {element}
            </div>
        );
    }
}

export default EditBook;