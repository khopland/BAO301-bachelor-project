import { useEffect, useState } from 'react'

interface CheckboxProps {
  label: string
  selected?: boolean
  onSelectChange?: (b: boolean) => void
}

export const Checkbox: React.FC<CheckboxProps> = ({
  selected = false,
  label,
  onSelectChange,
}) => {
  const [isSelected, setSelected] = useState(selected)
  const handleClick = () => {
    if (onSelectChange) onSelectChange(!isSelected)
    setSelected((b) => !b)
  }
  useEffect(() => {
    setSelected(selected)
  }, [selected])

  return (
    <>
      <label className="checkbox m-0">
        <input
          type="checkbox"
          checked={selected}
          onChange={handleClick}
        ></input>
        <span className="">{label}</span>
      </label>
    </>
  )
}
