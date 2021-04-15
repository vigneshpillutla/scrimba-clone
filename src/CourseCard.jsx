import React from 'react';
import colors from './colors.js'
import photos from './photos'
function CourseCard({title,lessons,hours,name,level}){
    const color = colors[Math.floor(Math.random() * colors.length)];
    const photoSrc = (photos.filter(item=>item.name===name))[0]?.src;
    return (
        <div className="course-card">
            <div style={{backgroundColor:color}} className="upper">{title}</div>
            <div className="lower">
                <div className="course-info">
                    <div className="instructor-details">
                        <span>{lessons} lessons | {hours} hours</span>
                        <span>with <b>{name}</b></span>
                    </div>
                    <img className="instructor-pic" src={`https://scrimba.com${photoSrc}`} alt=""/>
                </div>
                <div className="course-level">{level}</div>
            </div>
        </div>
    )
}

export default CourseCard;