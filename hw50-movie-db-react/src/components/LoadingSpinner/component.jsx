import './styles.scss';
import { Spin } from 'antd';

const LoadingSpinner = () => {
    return <Spin className='my-spinner' tip="Loading..." size="large" />
}


export default LoadingSpinner;


