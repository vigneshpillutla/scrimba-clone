import React from 'react';
import colors from './colors.js'
function CourseCard({title,lessons,hours,name,level}){
    const color = colors[Math.floor(Math.random() * colors.length)];
    console.log(color);
    return (
        <div className="course-card">
            <div style={{backgroundColor:color}} className="upper">{title}</div>
            <div className="lower">
                <div className="course-info">
                    <div className="instructor-details">
                        <span>{lessons} lessons | {hours} hours</span>
                        <span>with <b>{name}</b></span>
                    </div>
                    <div className="instructor-pic"></div>
                </div>
                <div className="course-level">{level}</div>
            </div>
        </div>
    )
}

export default CourseCard;