import { IMAGES_URL } from "./constants.js";

export const generateImageUrl = (url, width) => `${IMAGES_URL}${width ? 'w' + width : 'original'}${url} `;

export const dateConvert = (date) => new Date(date).toLocaleDateString();

export const ratingToStars = (number) => number / 2;