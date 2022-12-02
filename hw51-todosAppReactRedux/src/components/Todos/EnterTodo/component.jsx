import React from "react";
import { addToDo } from "../../../store/actions";
import { connect } from "react-redux";
import { Formik, Form, Field } from 'formik'

import './styles.scss';

const EnterTodo = ({ addToDo }) => {

  return (
    <>
      <Formik
        initialValues={{
          todo: '',
        }}
        onSubmit={async (values, {resetForm}) => {
          addToDo(values)
          resetForm()
        }}
      >
        <Form className="enter-wrap">
          <Field
            className="enter"
            id="todo"
            name="todo"
            placeholder="Write your todo here"
            required
          />

          <button type="submit" className='add'>Add Todo</button>
        </Form>
      </Formik>
    </>
  )
}

const mapStateToProps = state => ({
  // todos: state,
  isTodosEmpty: state.length === 0
})

const mapDispatchToProps = {
  addToDo
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterTodo);
