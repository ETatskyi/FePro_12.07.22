import './styles.scss';

import { Link } from 'react-router-dom';

import { Button, Result } from 'antd'

const Error = () => (
    <>
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Link to="/"><Button>Back to Home</Button></Link>}
        />
    </>
)


export default Error;