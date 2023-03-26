import { ReactNode, FC } from 'react';

interface FilterMenuProps {
  children: ReactNode;
}

const FilterMenu: FC<FilterMenuProps> = ({ children }) => {
  return (
    <>
      <section className='rounded-2xl no-elevate bg-surface text-on-primary-container flex flex-col gap-6 px-7 py-7'>
          <h2 className='text-xl font-semibold'>Filter</h2>
          <div className='flex flex-col gap-7'>
              {children}
          </div>
      </section>
    </>
  );
};

export default FilterMenu;
