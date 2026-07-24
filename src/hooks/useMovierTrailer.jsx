import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/redux/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants/API_constants";


const useMovieTrailer = ({ movieId }) => {
    const dispatchVideo = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS);
        const json = await data.json();

        const trailerData = json.results.filter(item => item.type === "Trailer");
        const trailer = trailerData.length ? trailerData[0] : json.results[0];
        dispatchVideo(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovieVideos();
    }, []);
}


export default useMovieTrailer;