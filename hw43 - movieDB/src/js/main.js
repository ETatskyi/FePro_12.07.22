import { getMoviesByType } from "./utils";
import { renderMoviesToSection } from "./html-templates";

getMoviesByType('popular')
    .then(movies => renderMoviesToSection(movies, "popular"));


getMoviesByType('top_rated')
    .then(movies => renderMoviesToSection(movies, "top_rated"))

getMoviesByType('upcoming')
    .then(movies => renderMoviesToSection(movies, "upcoming"))
