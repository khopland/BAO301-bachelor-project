import { ReactNode, FC } from 'react';
import 'beercss';

const courseImage = 'src/components/Assets/course-illustration.jpg';


const CourseItem = () => {
  return (
    <>
    <article className="no-padding">
    <div className="grid m-1">
        <div className="s4">
        <img className="responsive" src={courseImage}></img>
        </div>
        <div className="s8">
        <div>
            <h5 className='bold'>AZ-204: Getting started</h5>
            <p>Learn how to implement Azure compute solutions, create Azure Functions, implement and manage web apps, develop solutions and more!</p>
            <nav>
            <button className="border tertiary-border tertiary-text small medium-elevate">Button</button>

            </nav>
        </div>
        </div>
    </div>
    
</article>
    </>
  );
};

export default CourseItem;
