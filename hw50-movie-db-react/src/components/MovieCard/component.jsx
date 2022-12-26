import './styles.scss';
import {
    generateImageUrl,
    dateConvert,
    ratingToStars,
} from 'utils/utils';

import { Card, Rate, Statistic } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const MovieCard = ({ movie }) => {
    const { id, title, release_date, poster_path, vote_average, vote_count } = movie;

    const width = 240;

    return (
        <>
            <Link to={"/details/" + id} className='movie-card'>
                <Card
                    hoverable
                    style={{
                        width: width,
                    }}
                    cover={<img alt={"Poster for " + title} src={generateImageUrl(poster_path, 300)} />}
                    href={"/details/" + id}
                >
                    <Meta title={title} />
                    <Rate disabled allowHalf defaultValue={ratingToStars(vote_average)} />
                    <Statistic value={vote_count} suffix="votes" />
                    Release: {dateConvert(release_date)}

                </Card>
            </Link>
        </>
    )
}


export default MovieCard;


