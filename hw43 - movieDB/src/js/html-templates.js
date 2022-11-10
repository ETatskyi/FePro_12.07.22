import { dateConvert, generateImageUrl, ratingToPercent, drawPercentSector } from "./utils"

export const renderMoviesToSection = (movies_array, section_type) => {
    document.querySelector('section.'+section_type).innerHTML += `
    <div class="movies-type-container">
    ${movies_array.map(movie => renderMovie(movie)).join('')}
    </div>`;
    drawPercentSector(section_type);
}

export const renderMovie = ({ id, title, overview, poster_path, popularity, release_date, vote_average }) => (`<div class="movie-card">
    <a href="/movie/${id}" class="movie-poster">
        <img alt="Poster for ${title}" src="${generateImageUrl(poster_path)}">
    </a>
    <a href="/movie/${id}">
        <h3>${title}</h3>
    </a>
    <span class="release-date">${dateConvert(release_date)}</span>
    <div class="rating-frame round absolute">
        <canvas height="40" width="40" class="percent-sector absolute" percentage="${ratingToPercent(vote_average)}">
        </canvas>
        <span class="absolute">${ratingToPercent(vote_average)}%</span>
    </div>
</div>`)