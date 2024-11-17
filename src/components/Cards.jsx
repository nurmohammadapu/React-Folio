import React, { useState } from 'react';
import Card from './Card';

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses,setLikedCourses] = useState([]);

  
    function getCourses(){

        if(category === "All"){
            let allCourses = [];
            console.log(courses);
            Object.values(courses).forEach( array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
            console.log(allCourses);
        }

        else{
            // main sirf specific  category ka data array karunga
            return courses[category];
        }
       
       
       
        
    }

   
    return (
        <div  className="flex flex-wrap justify-center gap-4 mb-4">
          { getCourses().map( (course) => {
            
            return(
                <Card key={course.id} course={course} likedCourses={likedCourses}
                setLikedCourses={setLikedCourses}
                ></Card>
            )
                
           })
        }
        </div>
    );
};

export default Cards;