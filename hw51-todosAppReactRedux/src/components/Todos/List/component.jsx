import React from "react";
import { connect } from "react-redux";

import Item from "./Item";

import './styles.scss';

const List = ({ todos }) => (
  <ul className="list">
    {todos.map(({ id }) => (
      <Item
        key={id}
        id={id}
      />
    ))}
  </ul>
)

const mapStateToProps = state => ({
  todos: state,
})

export default connect(mapStateToProps)(List);
