import './styles.scss';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Content from 'components/Content';

const BasicLayout = () => (
    <Layout>
        <Header />
        <Content>
            {/* <Outlet /> */}
        </Content>
        <Footer />
    </Layout>
)


export default BasicLayout;