import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MWFkMjgzNjc1MDAxN2NiMzJkOGVjZTk2ZmJlOTZjOSIsInN1YiI6IjY0NzJjOThkNWNkMTZlMDBkYzNkYjY2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qcDYiNYNGgcu62a5Fvia2K38lhGMpWoPxUk8ir8OTJo" ,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};