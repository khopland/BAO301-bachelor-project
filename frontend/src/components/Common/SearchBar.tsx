import { Input } from '@material-tailwind/react'
import { Dispatch, FC, SetStateAction } from 'react'

type SearchBarProps = {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}

export const SearchBar: FC<SearchBarProps> = ({ setSearch, search }) => {
  return (
    <>
      <Input
        label="What do you want to learn?"
        onChange={(e) => {
          e.preventDefault()
          setSearch(e.target.value)
        }}
        icon={
          <span className="material-icons-round text-on-surface">search</span>
        }
        size="lg"
        color="deep-purple"
        className="!bg-background "
        containerProps={{
          className: 'bg-surface !text-on-primary-container',
        }}
      />
    </>
  )
}
