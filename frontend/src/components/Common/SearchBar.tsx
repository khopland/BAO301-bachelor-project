import { FC } from 'react'

export const SearchBar: FC = () => {
  return (
    <>
      <div className="field label border round fill large m-0 before:bg-surface">
        <input type="text font-medium"></input>
        <label className="text-s text-on-surface-variant opacity-50">
          What do you want to learn?
        </label>
        <i>search</i>
      </div>
    </>
  )
}
