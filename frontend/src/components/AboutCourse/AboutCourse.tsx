import { ReactNode, FC } from 'react';

interface AboutCourseProps {
  children: ReactNode;
}

const AboutCourse: FC<AboutCourseProps> = ({ children }) => {
  return (
    <>
      <section className='rounded-2xl no-elevate bg-surface text-on-primary-container flex flex-col gap-6 px-7 py-7'>
          <h2 className='text-xl font-semibold'>About this course</h2>
          <div className='flex flex-col gap-7'>
              {children}
          </div>
      </section>
    </>
  );
};

export default AboutCourse;
