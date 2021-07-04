import React from 'react'
import CarouselHeader from "../../components/Carousel";
import LichChieuHome from '../Lichchieu/lichchieuHome';
import MovieTabs from "../Movie";
export default function Home() {
    return (
        <>
            <CarouselHeader/>
            <MovieTabs/>
            <LichChieuHome/>

        </>
    )
}
