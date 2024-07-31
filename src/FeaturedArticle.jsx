import React from 'react';
import './FeaturedArticle.css';
import {faker} from '@faker-js/faker'

//const rating = faker.number.int({ min: 41, max: 49 }) / 10 //Featured articles and tutorials wont be rated below 4

function FeaturedArticle (props)
{
    return <div className='article-div'>
    <img src={faker.image.urlLoremFlickr({category: 'cats'})} alt="Article" style={{ width: '320px', height:'180px' }}/>
    <h2>{faker.hacker.verb()} {faker.hacker.adjective()} {faker.hacker.noun()}</h2>
    <p>{faker.hacker.phrase()}</p>
    <div className='rating-author-div'>
    <p style={{width: '17%'}}>⭐{props.rating}</p>
    <p style={{width: '83%', textAlign:'right'}}>{faker.person.fullName()}</p>
    </div>
    </div>
}

export default FeaturedArticle