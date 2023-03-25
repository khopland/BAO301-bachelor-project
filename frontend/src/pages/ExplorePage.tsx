import React from 'react';
import { Link } from 'react-router-dom';
import 'beercss';

export const ExplorePage: React.FC = () => {
  return (
    <main className="ml-[5rem] p-5 grid grid-cols-7 gap-4 auto-rows-max h-[100vh]">
      <h1 className="text-5xl col-span-4 font-semibold">Explore Page</h1>
      <Link to="/course" className="button responsive row-start-2 col-start-1 col-end-3 p-2">
        Go to demo course
      </Link>
    </main>
  );
};

export default ExplorePage;