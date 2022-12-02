import { connect } from "react-redux";

import EmptyList from "./EmptyList";
import EnterTodo from "./EnterTodo";
import List from "./List";


import './styles.scss';

const Todos = ({isTodosEmpty }) => {

  return (
    <div className="todos">
      <h1 className="title">Todos</h1>
      <EnterTodo />
      {isTodosEmpty
        ? <EmptyList />
        : (
          <List />
        )
      }
    </div>
  )
}

const mapStateToProps = state => ({
  isTodosEmpty: state.length === 0
})


export default connect(mapStateToProps)(Todos);
