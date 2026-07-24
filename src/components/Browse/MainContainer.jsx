import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle";


const MainContainer = () => {

    const movies = useSelector((store) => store.movies.nowPlayingMovies);
    if (movies == null) return;
    const { original_title, overview, id } = movies[0];

    return (
        <div>
            <VideoTitle title={original_title} overview={overview}></VideoTitle>
            <VideoBackground movieId={id}></VideoBackground>
        </div >
    )
}

export default MainContainer;