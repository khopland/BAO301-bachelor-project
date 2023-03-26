import { ReactNode, FC } from 'react';
import 'beercss';


interface CoursesProps {
  children: ReactNode;
}

const FilterMenu: FC<CoursesProps> = ({ children }) => {
  return (
    <>
      <section className='rounded-2xl no-elevate bg-surface text-on-primary-container flex flex-col gap-2 px-7 py-7'>
            <div className="field label suffix border round fill small">
                <input type="text"></input>
                <label className='text-xs'>Hinted search text</label>
                <i>search</i>
            </div>
            <div className='flex flex-col gap-7'>

              {children}
          </div>
      </section>
    </>
  );
};

export default FilterMenu;
