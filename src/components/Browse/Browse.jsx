import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_LIST_API_URL } from "../../utils/constants/API_constants";
import Header from "../Header/Header";
import MainContainer from "./MainContainer";
import useNowPlayingMoviesHook from "../../hooks/useNowPlayingMoviesHook";


const Browse = () => {

    useNowPlayingMoviesHook();

    return <div>
        <Header></Header>
        <MainContainer></MainContainer>
    </div>
}

export default Browse;