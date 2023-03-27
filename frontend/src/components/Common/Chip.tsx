import React, { useState } from 'react'

interface ChipProps {
  label: string
  icon?: string
}

export const Chip: React.FC<ChipProps> = ({ label, icon }) => {
  const [isSelected, setSelected] = useState(false)
  const handleClick = () => {
    setSelected(!isSelected)
  }

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
