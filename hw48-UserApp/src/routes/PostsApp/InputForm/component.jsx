import './styles.scss';
import { Formik, Field, Form } from 'formik';

const InputForm = ({ submitHandler }) => {
    const usersIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (<>
        <h4>Enter text below to create post</h4>
        <Formik
            initialValues={{
                title: '',
                body: '',
                userId: 0,
            }}
            onSubmit={async (values, { resetForm }) => {
                submitHandler(values)
                // resetForm()
            }}
        >
            <Form className='myForm'>
                <label htmlFor="title">Title</label>
                <Field
                    id="title"
                    name="title"
                    placeholder="Enter title for post"
                    required
                />

                <label htmlFor="body">Text</label>
                <Field
                    as="textarea"
                    id="body"
                    name="body"
                    placeholder="Enter text here"
                    required
                />
                <label htmlFor="userId">Id of user</label>
                <Field
                    as="select"
                    id="userId"
                    name="userId"
                >
                    {
                        usersIds.map(i =>
                            <option
                                key={i}
                                value={i}>
                                {i}
                            </option>)
                    }
                </Field>
                <button type="submit">Create Post</button>
            </Form>
        </Formik>
    </>)

}


export default InputForm;