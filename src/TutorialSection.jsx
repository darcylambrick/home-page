import React from 'react';
import './TutorialSection.css';
import FeaturedTutorial from './FeaturedTutorial';
import rating from './rating'

const rand4 = Math.floor(Math.random() * 11);
const rand5 = Math.floor(Math.random() * 11);
const rand6 = Math.floor(Math.random() * 11);

function TutorialSection ()
{
    return <div className='tutorial-section-div'>
    <div className='text-div'>
    <h1>Featured tutorials</h1>
    </div> <div className='featured-tutorials-div'>
    <FeaturedTutorial 
     rating ={rating[rand4]}/>
    <FeaturedTutorial 
     rating ={rating[rand5]}/>
    <FeaturedTutorial 
     rating ={rating[rand6]}/>
    </div>
    <button className='big-button'>See all tutorials</button>
    </div>
}

export default TutorialSection