import { exp } from "firebase/firestore/pipelines";
import { API_OPTIONS, NOW_PLAYING_LIST_API_URL } from "../utils/constants/API_constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/redux/moviesSlice";


const useNowPlayingMoviesHook = () => {

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        try {
            const res = await fetch(NOW_PLAYING_LIST_API_URL, API_OPTIONS);
            const data = await res.json();
            dispatch(addNowPlayingMovies(data.results));
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
}


export default useNowPlayingMoviesHook;