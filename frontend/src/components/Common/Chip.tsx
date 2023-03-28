import React, { useEffect, useState } from 'react'

interface ChipProps {
  label: string
  icon?: string
  selected?: boolean
  onSelectChange?: (b: boolean) => void
}

export const Chip: React.FC<ChipProps> = ({
  label,
  icon,
  selected = false,
  onSelectChange,
}) => {
  const [isSelected, setSelected] = useState(selected)
  const handleClick = () => {
    console.log(!isSelected)
    setSelected(!isSelected)
    if (onSelectChange) onSelectChange(!isSelected)
  }

  useEffect(() => {
    setSelected(selected)
  }, [selected])

  return (
    <div
      onClick={handleClick}
      className={`${
        isSelected
          ? `bg-secondary-container text-on-secondary-container`
          : `bg-surface-variant text-on-primary-container opacity-50`
      } chip border-outline bg-surface-variant text-on-surface-variant cursor-pointer m-0`}
    >
      {icon && <i className="small">{icon}</i>}
      <span className="text-sm">{label}</span>
    </div>
  )
}
