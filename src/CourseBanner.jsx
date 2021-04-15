import React from 'react';
import CourseCard from './CourseCard';
function CourseBanner({bgcolor,header,subheader,cards}){
    console.log(bgcolor);
    return(
        <div style={{backgroundColor:bgcolor}} className="course-banner">
            <h1>{header}</h1>
            <h3>{subheader}</h3>
            <div  className="card-container">
            {cards.map((data,idx)=>
                <CourseCard key={idx} {...data} />
            )}

            </div>
            <button className="see-all">See All</button>
        </div>
    )
}

export default CourseBanner;
