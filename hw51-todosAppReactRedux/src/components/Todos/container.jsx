import TodosComponent from "./component";
import { connect } from "react-redux";

import './styles.scss';

const Todos = ({todos}) => {

  return (
    <TodosComponent
      todos={todos}
    />
  )

}

const mapStateToProps = state => ({
  todos: state,
})

export default connect(mapStateToProps)(Todos);
