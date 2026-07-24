import { API_OPTIONS } from "../../utils/constants/API_constants";
import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovierTrailer";

const VideoBackground = ({ movieId }) => {

    const videoTrailer = useSelector(state => state.movies.trailerVideo)

    useMovieTrailer({ movieId });

    return (videoTrailer && (
        <div className="w-screen bg-gradient-to-r from-black h-[33rem]">
            <iframe className="w-screen aspect-video h-[33rem]" width="560" height="315"
                src={"https://www.youtube.com/embed/" + videoTrailer['key'] + "?&autoplay=1&mute=1"}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; 
              autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
        </div>
    )

    )
}

export default VideoBackground;