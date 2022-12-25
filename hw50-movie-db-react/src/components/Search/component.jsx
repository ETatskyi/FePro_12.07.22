import './styles.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

const Search = () => {
    const redirect = useNavigate();

    const submitHandler = async (values, { resetForm }) => {
        const query = values.searchField;

        redirect(`/search/${query}`);

        resetForm();
    }

    const initialSearch = {
        searchField: '',
    }

    const validation = Yup.object({
        searchField: Yup.string()
            .required(`Search couldn't be empty`)
            .min(3, 'At least three symbols required')
    })

    return (
        <Formik
            onSubmit={submitHandler}
            initialValues={initialSearch}
            validationSchema={validation}
        >
            <Form
                id='search-form'
            >
                <div className='controls-container'>
                    <Field
                        className="controls-input"
                        id="searchField"
                        name="searchField"
                        placeholder="🔎 Search movie here"
                    />
                    <ErrorMessage name="searchField" component={err => <span className='form-error'>{err.children}</span>} />
                </div>
                <button type="submit" className='controls-button submit-button'>Go!</button>
            </Form>
        </Formik>
    )
}


export default Search;