import React from 'react';
import './ArticleSection.css';
import FeaturedArticle from './FeaturedArticle'
import rating from './rating'

const rand1 = Math.floor(Math.random() * 11);
const rand2 = Math.floor(Math.random() * 11);
const rand3 = Math.floor(Math.random() * 11);

function ArticleSection ()
{
    return <div className='article-section-div'>
    <div className='text-div'>
    <h1>Featured Articles</h1>
    </div> <div className='featured-articles-div'>
    <FeaturedArticle
     rating ={rating[rand1]}/>
    <FeaturedArticle
     rating ={rating[rand2]}/>
    <FeaturedArticle 
     rating ={rating[rand3]}/>
    </div>
    <button className='big-button'>See all articles</button>
    </div>
}

export default ArticleSection