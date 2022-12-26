import './styles.scss';
import {
    generateImageUrl,
    dateConvert,
} from 'utils/utils';

const MovieDetails = ({ movie }) => {
    console.log(movie)
    const { title, tagline, status, overview, release_date, poster_path, backdrop_path, vote_average, vote_count, genres, production_countries } = movie;

    return (
        <div
            className='movie-details-container'
            style={{
                backgroundImage: `url(${generateImageUrl(backdrop_path)})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <img
                className="poster"
                src={generateImageUrl(poster_path, 300)}
                alt={`Poster for ${title}`}
            />
            <div className="movie-info">
                <h1 className='movie-title'>{title}</h1>
                <span className='tagline'>{tagline}</span>
                
                {status === "Released" ?
                    <span className='release-date'>Released: {dateConvert(release_date)}</span>
                    :
                    <span className='release-date'>Coming soon</span>
                }
                <span className='rating'>Rating: {vote_average} ({vote_count} votes)</span>
                <dl className='genres'>
                    <dt>Genres:</dt>
                    {genres.map(g => <dd className='genre-item'>{g.name}</dd>)}
                </dl>
                <dl className='countries'>
                    <dt>Countries:</dt>
                    {production_countries.map(c => <dd className='genre-item'>{c.name}</dd>)}
                </dl>
                <p className="overview">{overview}</p>
            </div>
        </div >
    )
}


export default MovieDetails;


