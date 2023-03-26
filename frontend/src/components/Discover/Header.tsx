import { FC } from 'react';

interface DiscoverHeaderProps {
  title: string;
  description: string;
}

const DiscoverHeader: FC<DiscoverHeaderProps> = ({ title, description }) => {
  return (
    <>
      <section className="rounded-2xl no-elevate bg-gradient-to-r from-purple-500 to-pink-500 text-on-primary-container flex flex-col gap-5 basis-4/6 px-12 py-16 col-span-4 items-center justify-center">
        <h1 className="text-5xl font-semibold">{title}</h1>
        <p className='text-center	'>{description}</p>
      </section>
    </>
  );
};

export default DiscoverHeader;
