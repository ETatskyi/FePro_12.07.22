import './styles.scss';
import { List } from 'antd';
import { generateImageUrl } from 'utils/utils';
import { Link } from 'react-router-dom';

const SearchResultList = ({ list }) => {

    return (
        <List
            className='search-list-container'
            dataSource={list}
            renderItem={({ id, title, poster_path, release_date, overview }) => {

                console.log(release_date)
                return (
                    <List.Item className='search-list-item'>
                        <Link key={id} to={'/details/' + id} >
                            <img
                                className='search-list-movie-poster'
                                width={140}
                                alt="poster"
                                src={generateImageUrl(poster_path, 300)}
                            />
                            <List.Item.Meta
                                title={`${title} ${release_date ? ' (' + release_date.split('-')[0] + ')' : ''}`}
                                description={overview}
                            />
                        </Link >
                    </List.Item>
                )
            }}
        />
    )
}


export default SearchResultList;


