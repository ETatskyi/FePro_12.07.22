import { API_KEY, MOVIE_URL, IMAGES_URL } from "./constants";

export const getMoviesByType = (type) => {
    return fetch(`${MOVIE_URL}/${type}?api_key=${API_KEY}`)
        .then(r => r.json())
        .then(r => r.results)
}

export const generateImageUrl = (url) => `${IMAGES_URL}${url}`;

export const dateConvert = (date) => new Date(date).toLocaleDateString();

export const ratingToPercent = (number) => number * 10;

export const drawPercentSector = () => {
    for (let canvas of document.querySelectorAll(".percent-sector")) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        const percent = canvas.attributes.percentage.value;
        const perc = percent / 100;
        const h = canvas.clientHeight;
        const w = canvas.clientWidth;
        const centerX = w / 2;
        const centerY = h / 2;

        const ctx = canvas.getContext("2d");
        const startAngle = 0 - Math.PI / 2;
        const endAngle = startAngle + perc * 2 * Math.PI;
        const radius = centerX > centerY ? centerY : centerX;

        const red = 255 * (percent > 50 ? 1 - 2 * (percent - 50) / 100.0 : 1.0);
        const green = 255 * (percent > 50 ? 1.0 : 2 * percent / 100.0);

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX, 0);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.lineTo(centerX, centerY);
        ctx.fillStyle = `rgb(${red},${green},0)`;
        ctx.fill();
    }
}