import React, { useState } from 'react'
import { useEffect } from 'react';
import { Segment } from 'semantic-ui-react'


export default function About() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    },[]);

    const renderContent = () => (
        <>
        <div className='Parallax_content_heading'>
            <h1 className='Parallax__content__heading__text'>Цветан Стојановски</h1>
            <h2 className='Parallax__content__heading__caption'>Моите достигнувањеа во React</h2>
        </div>
        <div className='Parallax__content__cta'>
            <p>Оваа страница претставува презентација на она што јас до сега го имам достигнато во React. Доколку Ве интересира целиот код можете да го погледате на <a href='https://github.com/Cvetan65/prevoz' target='blank'>GitHub</a></p>
        </div>
        <div className='Parallax__content__cta'>
            <img src='../../assets/UC-2bc7af58-b2f5-4994-bd3e-ed3eef6c0578.jpg' alt='certifi'/>
        </div>
        <div className='Parallax__content__cta'>
            <img src='../../assets/UC-2bc7af58-b2f5-4994-bd3e-ed3eef6c0578.jpg' alt='certifi'/>
        </div>
        </>
    );
    return (
        <>
        <section className="Parallax" >
          <div
            className="Parallax__background1"
            style={{ transform: `translateY( -${offsetY * 0.8}px)` }}
          />
          <div
            className="Parallax__background2"
            style={{ transform: `translateY(${offsetY * 0.5}px)` }}
          />
          <div className="Parallax__content">{renderContent()}</div>
          
        </section>
        <Segment inverted textAlign='center' padded secondary style={{fontSize: '20px'}}>
            Контакт:<br/><br/>
            Phone/Viber/Telegram: +389 76 431 068<br/><br/>
            Email: cvetan1965@gmail.com
        </Segment>
        </>
      );  
}
