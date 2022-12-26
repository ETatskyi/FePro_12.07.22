import './styles.scss';

import { Tabs } from 'antd';

import MoviesSection from 'components/MovieSection/component';

const Sections = ({ size }) => {
    return (
        <Tabs
            id='movie-sections-tabs'
            defaultActiveKey="1"
            type="card"
            size={size}
            items={[
                {
                    label: `Popular`,
                    key: '1',
                    children: <MoviesSection type={'popular'} />,
                },
                {
                    label: `Top rated`,
                    key: '2',
                    children: <MoviesSection type={'top_rated'} />,
                },
                {
                    label: `Upcoming`,
                    key: '3',
                    children: <MoviesSection type={'upcoming'} />,
                },
            ]}
        />
    )
}


export default Sections;