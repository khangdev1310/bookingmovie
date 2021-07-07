import React from 'react'
import CarouselHeader from "../../components/Carousel";
import LichChieuHome from '../Lichchieu/lichchieuHome';
import MovieTabs from "../Movie";
import ApplicationPhone from "../../components/ApplicationPhone";
import SearchMovie from "../../components/SearchMovie/index";
export default function Home() {
    return (
        <>
            <CarouselHeader/>
            <SearchMovie />
            <MovieTabs/>
            <LichChieuHome/>
            <ApplicationPhone />

        </>
    )
}
