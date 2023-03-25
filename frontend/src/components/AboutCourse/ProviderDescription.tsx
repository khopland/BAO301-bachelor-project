import { FC } from 'react';

interface ProviderDescriptionProps {
  description: string;
}

const ProviderDescription: FC<ProviderDescriptionProps> = ({ description }) => {
  return (
    <section className='rounded-2xl no-elevate bg-surface text-on-primary-container flex flex-col gap-2 px-7 py-7'>
      <h4 className='text-xl font-semibold'>About the provider</h4>
      <p>{ description }</p>
    </section>
  );
};

export default ProviderDescription;
