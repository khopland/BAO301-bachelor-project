import React from 'react';
import { Link } from 'react-router-dom';
import DiscoverHeader from '../components/Discover/Header';
import FilterMenu from '../components/Discover/FilterMenu'
import FilterItems from '../components/Discover/FiltereItems'
import Courses from '../components/Discover/Courses'
import CoursesItem from '../components/Discover/CourseItems'
import 'beercss';

const title = 'Discover new courses'
const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ducimus distinctio, maiores, vel suscipit neque animi velit natus libero exercitationem, dignissimos omnis perferendis voluptate sed autem. In eaque excepturi dolorem.'

export const ExplorePage: React.FC = () => {
  return (
    <main className="ml-[5rem] p-5 grid grid-cols-7 gap-5 auto-rows-max h-[99vh] w-100 relative">

      <header className='gap-5 col-span-7 bg-transparent p-0'>
        <DiscoverHeader title={title} description={description} />
      </header>

      <aside className='col-span-2'>
        <FilterMenu>
          <FilterItems />
        </FilterMenu>
      </aside>

      <section className='col-start-3 col-end-8 flex flex-col gap-5'>
        <Courses>
          <CoursesItem />
        </Courses>
      </section>

    </main>
  );
};

