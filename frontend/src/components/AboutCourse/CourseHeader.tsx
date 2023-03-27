import { FC } from 'react';

interface CourseHeaderProps {
  title: string;
  description: string;
  image: string;
}

const CourseHeader: FC<CourseHeaderProps> = ({ title, description, image }) => {
  return (
    <>
      <section className="rounded-2xl no-elevate bg-surface text-on-primary-container flex flex-col gap-5 basis-4/6 px-12 py-16 col-span-4 grow shrink">
        <h1 className="text-5xl font-semibold">{title}</h1>
        <p>{description}</p>
      </section>
      <img className="round col-span-3 h-full w-full rounded-2xl basis-2/6 shrink-0 grow-0 max-w-[33.3%]" src={image} alt="Course illustration" />
    </>
  );
};

export default CourseHeader;
