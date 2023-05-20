import { Typography } from '@material-tailwind/react'
import { ReactNode, FC } from 'react'

interface FilterMenuProps {
  children: ReactNode
}

const FilterMenu: FC<FilterMenuProps> = ({ children }) => {
  return (
    <>
      <section className="rounded-2xl no-elevate bg-surface text-on-primary-container flex flex-col px-5 pb-5 pt-0 md:pt-5">
        <Typography variant="h4">Filters</Typography>
        <Typography variant="small">
          Not finding what you're looking for? Try applying some filters to
          narrow it down!
        </Typography>
        <div className="flex flex-col">{children}</div>
      </section>
    </>
  )
}

export default FilterMenu
