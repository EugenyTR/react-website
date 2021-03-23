import React from 'react';
import CardItem from "../CardItem";
import './index.css';

import img9 from '../../images/img-9.jpg';
import img8 from '../../images/img-8.jpg';

function Cards() {
    return (
        <div className="cards">
            <h1>Выбери меня!</h1>
            <div className="cards__container">
                <div className="cards_wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={img9}
                            text="Исследуй скрытый от людских глах водопад"
                            label='Приключения'
                            path='/services'
                        />
                        <CardItem
                            src={img8}
                            text="просто природа"
                            label='Пустыня'
                            path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={img9}
                            text="Исследуй скрытый от людских глах водопад"
                            label='Приключения'
                            path='/services'
                        />
                        <CardItem
                            src={img8}
                            text="просто природа"
                            label='Пустыня'
                            path='/services'
                        />
                        <CardItem
                            src={img8}
                            text="просто природа"
                            label='Пустыня'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
