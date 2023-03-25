import { FC } from 'react';

interface CourseHeaderProps {
  title: string;
  description: string;
  image: string;
}

const CourseHeader: FC<CourseHeaderProps> = ({ title, description, image }) => {
  return (
    <>
      <section className="rounded-2xl no-elevate bg-surface text-on-primary-container flex flex-col gap-5 basis-4/6 px-12 py-16 col-span-4">
        <h1 className="text-5xl font-semibold">{title}</h1>
        <p>{description}</p>
      </section>
      <img className="round col-span-3 h-[100%] w-[100%] rounded-2xl basis-2/6" src={image} alt="Course illustration" />
    </>
  );
};

export default CourseHeader;
