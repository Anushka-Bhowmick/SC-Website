import React from 'react';
import Core from '../components/Core';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Events from '../components/Events';
import Goals from '../components/Goals';


const Home = () => {
    return (
        <>
            <Hero />
            <Intro />
            <Goals />
            <Events />
            <Core />
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

