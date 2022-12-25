import './styles.scss';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

const MyContent = () => (
    <Content id='page-content'>
        <Outlet />
    </Content>
)


export default MyContent;