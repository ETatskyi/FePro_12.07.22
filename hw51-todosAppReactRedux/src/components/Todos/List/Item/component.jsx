import React from "react";
import { connect } from "react-redux";
import { checkToDo, deleteToDo } from "../../../../store/actions";

import './styles.scss';

const Item = ({ todos, id, deleteToDo, checkToDo }) => {
  const value = todos.find(el => el.id == id).value;
  const checked = todos.find(el => el.id == id).checked;

  return (
    <li className={checked ? "item checked" : "item"}>
      <div className="value">
        <input
          className="check"
          type="checkbox"
          onClick={() => checkToDo(id)}
        />
        {value}
      </div>
      <button onClick={() => deleteToDo(id)}>
        x
      </button>
    </li>
  )
}

const mapStateToProps = state => ({
  todos: state,
})

const mapDispatchToProps = {
  deleteToDo,
  checkToDo,
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);
