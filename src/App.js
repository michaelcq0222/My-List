import React, { Component } from "react";
import MovieList from "./Components/listElement";
import { connect } from "react-redux";
import * as actions from "./Actions";
import "./styles.css";

class App extends Component {
  componentDidMount() {
    this.props.getlist();
  }

  add = id => {
    this.props.add(id);
  };

  remove = id => {
    this.props.remove(id);
  };

  render() {
    return (
      <div>
        <img
          className="logo"
          src="https://assets.brand.microsites.netflix.io/assets/df87ee0c-c4ea-11e7-8d40-066b49664af6_cm_800w.png?v=23"
        />
        <h2>My List</h2>
        <ul>
          {this.props.ml.map((mv, i) => {
            return (
              <li className="Movie" key={mv.id}>
                <div>
                  <MovieList m={mv} />
                  <button onClick={() => this.remove(i)}>REMOVE</button>
                </div>
              </li>
            );
          })}
        </ul>
        <h2>My Recommendations</h2>
        <ul>
          {this.props.rec.map((mv, i) => {
            return (
              <li className="Movie" key={mv.id}>
                <div>
                  <MovieList m={mv} />
                  <button onClick={() => this.add(i)}>ADD</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ml: state.ml,
    rec: state.rec
  };
};

const mapDispatchToProps = dispatch => {
  return {
    remove: id => {
      dispatch(actions.remove(id));
    },
    add: id => {
      dispatch(actions.add(id));
    },
    getlist: () => {
      dispatch(actions.getlist());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
