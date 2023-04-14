import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import HeroSliderOne from '../components/HeroSliderOne';
import ServiceGridSlider from '../components/ServiceGridSlider';
import Funfact from '../components/Funfact';
import VideoCta from '../components/VideoCta';
import ProjectSlider from '../components/ProjectSlider';
import TeamJob from '../components/TeamJob';
import TestimonialSlider from '../components/TestimonialSlider';
import BlogGrid from '../components/BlogGrid';
import BrandLogoSlider from '../components/BrandLogoSlider';
import Footer from '../components/Footer';


class HomeOne extends Component{
    render(){
        
        return(
            <div>
                
                {/* Navigation bar */}
                <NavBar/>
                
                {/* Hero slider */}
                <HeroSliderOne/>
                
                {/* Service grid slider */}
                <ServiceGridSlider/>
                
                {/* Fun fact */}
                <Funfact/>
                
                {/* Video CTA */}
                <VideoCta/>
                
                {/* Project Slider */}
                <ProjectSlider/>
                
                {/* Team job */}
                <TeamJob/>
                
                {/* Testimonial Slider */}
                <TestimonialSlider/>
                
                {/* Blog grid */}
                <BlogGrid background="grey-bg" />

                {/* Brand logo */}
                <BrandLogoSlider />

                {/* Footer */}
                <Footer/>

            </div>
        )
    }
}


export default HomeOne;