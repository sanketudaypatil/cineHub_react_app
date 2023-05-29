import React from "react";
import { useParams } from "react-router-dom";
import "./style.scss";

import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";
import Similar from "./carousals/Similar";
import Recommendation from "./carousals/Recommendation";
 
const Details = () => {
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/movie/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(
        `/movie/${id}/credits`
    );

    return (
        <div>
            <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
            <Cast data={credits?.cast} loading={creditsLoading} />
            <VideosSection data={data} loading={loading} />
            <Similar mediaType={`movie`} id={id} />
            <Recommendation mediaType={`movie`} id={id} />
        </div>
    );
};

export default Details;