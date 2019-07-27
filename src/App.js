import React from 'react';
import { connect } from "react-redux";
import { assignment1, assignment2 } from './constants';
import './App.css';
import { updateList } from './actions/assignment-1';
import { getTrailersData } from './actions/api';
import { storeApiData } from "./actions/assignment-2";

class App extends React.Component {

  async componentDidMount() {
    const { updateList, getTrailersData, storeApiData } = this.props;
    updateList([101, 102, 103, 104, 105, 106, 107, 108, 109, 110]);

    const response = await getTrailersData();
    if (response) {
      storeApiData(response[1]);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={require("./images/bookmyshow.webp")} className="App-logo" alt="logo" />
          <h2>Assignment</h2>
          <div>
            <button className={"select-button"} onClick={() => this.props.history.push(assignment1)}>Assignment #1</button>
            <button className={"select-button"} onClick={() => this.props.history.push(assignment2)}>Assignment #2</button>
          </div>
        </header>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    updateList: (list) => dispatch(updateList(list)),
    getTrailersData: () => dispatch(getTrailersData()),
    storeApiData: (data) => dispatch(storeApiData(data))
  };
};

export default connect(null, mapDispatchToProps)(App);
