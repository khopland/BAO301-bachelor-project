import { Dispatch, FC, SetStateAction } from 'react'

type SearchBarProps = {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}

export const SearchBar: FC<SearchBarProps> = ({ setSearch, search }) => {
  return (
    <>
      <div className="field label border round fill large m-0 before:bg-surface">
        <input
          type="text font-medium"
          value={search}
          onChange={(e) => {
            e.preventDefault()
            setSearch(e.target.value)
          }}
        />
        <label className="text-s text-on-surface-variant opacity-50">
          What do you want to learn?
        </label>
        <i>search</i>
      </div>
    </>
  )
}
