import { ReactNode, FC } from 'react'

interface FilterMenuProps {
  children: ReactNode
}

const FilterMenu: FC<FilterMenuProps> = ({ children }) => {
  return (
    <>
      <section className="rounded-2xl no-elevate bg-surface text-on-primary-container flex flex-col  px-7 py-7">
        <h2 className="text-xl font-semibold mb-2">Filters</h2>
        <p className="text-xs">
          Not finding what you’re looking for? Try applying some filters to
          narrow it down!
        </p>
        <div className="flex flex-col gap-7">{children}</div>
      </section>
    </>
  )
}

export default FilterMenu
