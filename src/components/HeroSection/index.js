import React from 'react';
import '../../App.css';
import { Button } from '../Button/index';
import './index.css';

import video from '../../videos/video-1.mp4';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={video} autoPlay loop muted />
            <h1>Приключения ждут!</h1>
            <p>Чего же ты ждешь?</p>
            <div className="hero-btns">
                <Button className='btn' buttonStyle='btn--outline' buttonSize='btn-large'>
                    Стартуй
                </Button>
                <Button className='btn' buttonStyle='btn--primary' buttonSize='btn-large'>
                    Смотри, путешевствуй <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
