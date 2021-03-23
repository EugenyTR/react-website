import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/index';

import './index.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Присоединйся к путешествиям ). Получай рассылку наших лучших путешествий.
                </p>
                <p className='footer-subscription-text'>
                   Вы можете отказаться в любой момент
                </p>
                <div className="input-areas">
                    <form>
                        <input
                            type='email'
                            name='emai'
                            placeholder='email'
                            className='footer-input'
                        />
                        <Button buttonStyle='btn--outline'>Подписаться</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>О нас</h2>
                        <Link to='/sign-up'>Как это работает</Link>
                        <Link to='/'>Оплата</Link>
                        <Link to='/'>Доставка</Link>
                        <Link to='/'>Условия сотрудничества</Link>
                        <Link to='/'>Инвестиции</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Всякая всячина</h2>
                        <Link to='/'>Вакансии</Link>
                        <Link to='/'>Жми сюда</Link>
                        <Link to='/'>А теперь сюда</Link>
                        <Link to='/'>А теперь сюда</Link>
                        <Link to='/'>Контакты</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Контакты</h2>
                        <Link to='/'>Вакансии</Link>
                        <Link to='/'>Жми сюда</Link>
                        <Link to='/'>А теперь сюда</Link>
                        <Link to='/'>А теперь сюда</Link>
                        <Link to='/'>Контакты</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className='social-logo'>
                            ETLab <i className='fab fa-typo3' />
                        </Link>
                    </div>
                    <small className="website-rights">ETLab @ 2021</small>
                    <div className="social-icons">
                        <Link to='/' className="social-icon-link facebook" target='_blank' area-label='Facebook'>
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link to='/' className="social-icon-link instagram" target='_blank' area-label='Instagram'>
                            <i className="fab fa-instagram" />
                        </Link>
                        <Link to='/' className="social-icon-link youtube" target='_blank' area-label='Youtube'>
                            <i className="fab fa-youtube" />
                        </Link>
                        <Link to='/' className="social-icon-link twitter" target='_blank' area-label='Twitter'>
                            <i className="fab fa-twitter" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
