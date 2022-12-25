import './styles.scss';
import { Layout } from 'antd';
import Logo from 'components/Logo';
import Search from 'components/Search'

const { Header } = Layout;


const MyHeader = () => (
    <Header id='page-header'>
        <div className="header-part left-side">
            <Logo />
        </div>
        <div className="header-part right-side">
            <Search />
        </div>
    </Header>
)


export default MyHeader;