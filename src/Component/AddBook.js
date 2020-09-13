import React, { Component } from 'react';
import './AddBook.css';
import { Redirect } from 'react-router-dom';

class AddBook extends Component {
    state = { saved: false };
    name = '';
    numPages = 0;
    isNew = false;

    render() {
        const nameChangeHadler = (evt) => {
            this.name = evt.target.value;
        }
        const numPagesChangeHandler = (evt) => {
            this.numPages = evt.target.value;
        }
        const isNewChangeHandler = (evt) => {
            this.isNew = evt.target.value;
        }
        const saveClickHandler = () => {
            this.props.saveClickHandler(
                this.name , 
                this.numPages, 
                this.isNew);
            this.setState({saved : true});          
        }
        if (this.state.saved) {
            return (<Redirect to='/Books' />);
        }
        const element =
            <div>
                <input type="text" onChange={nameChangeHadler} placeholder="Book Name" />
                <br />
                <input type="number" onChange={numPagesChangeHandler} placeholder="Number of pages" />
                <br />
                <label><input type="checkbox" onChange={isNewChangeHandler} />new</label>
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

export default AddBook;