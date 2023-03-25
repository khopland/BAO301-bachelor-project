import { FC } from 'react';

interface CourseDescriptionProps {
  description: string;
}

const CourseDescription: FC<CourseDescriptionProps> = ({ description }) => {
  return (
    <>
      <section className='rounded-2xl no-elevate bg-surface text-on-primary-container flex flex-col gap-2 px-7 py-7'>
        <h3 className='text-xl font-semibold'>Description</h3>
        <p>{ description }</p>
      </section>
    </>
  );
};

export default CourseDescription;
