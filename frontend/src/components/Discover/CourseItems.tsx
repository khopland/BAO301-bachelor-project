import { ReactNode, FC } from 'react';
import { Link } from 'react-router-dom';
import 'beercss';

const courseImage = 'src/components/Assets/course-illustration.jpg';


const CourseItem = () => {
  return (
    <>
    <div>
        <a className="chip border">
            <i className="small">done</i>
            <span className='bold'>Enabled</span>
        </a>
        <a className="chip border">
            <span className='bold'>Disable</span>
        </a>
        <a className="chip border">
                <i className="small">done</i>
                <span className='bold'>Enabled</span>
        </a>
        <a className="chip border">
                <span className='bold'>Disable</span>
        </a>
    </div>
    <article className="no-padding">
    <div className="grid m-1">
        <div className="s4">
        <img className="responsive" src={courseImage}></img>
        </div>
        <div className="s8">
            <div>
                <h5 className='bold'>AZ-204: Getting started</h5>
                <p>Learn how to implement Azure compute solutions, create Azure Functions, implement and manage web apps, develop solutions and more!</p>
                <br />
                <Link className=' m-2 button float-right' to="/course">
                        Learn more
                </Link>
            </div>
        </div>
    </div>
    </article>

    <article className="no-padding">
    <div className="grid m-1">
        <div className="s4">
        <img className="responsive" src={courseImage}></img>
        </div>
        <div className="s8">
            <div>
                <h5 className='bold'>AZ-204: Getting started</h5>
                <p>Learn how to implement Azure compute solutions, create Azure Functions, implement and manage web apps, develop solutions and more!</p>
                <br />
                <Link className='m-2 button float-right' to="/course">
                        Learn more
                </Link>
            </div>
        </div>
    </div>
    </article>
    </>
  );
};

export default CourseItem;
