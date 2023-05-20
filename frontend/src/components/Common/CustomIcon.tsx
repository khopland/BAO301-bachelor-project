import React, { useEffect, useState } from 'react'

interface CustomIconProps {
  name: string
  color?: string
  className?: string
}

const CustomIcon: React.FC<CustomIconProps> = ({
  name,
  color = 'black',
  className = '',
}) => {
  const [Icon, setIcon] =
    useState<React.ComponentType<{ fill?: string; className?: string }>>()

  useEffect(() => {
    const formattedName = name.toLowerCase().replace(/ /g, '_')
    import(`../assets/icons/${formattedName}.svg`)
      .then((icon) => {
        setIcon(() => icon.ReactComponent)
      })
      .catch((error) => {
        console.error(`Error loading icon: ${name}`, error)
      })
  }, [name])

  return Icon ? <Icon fill={color} className={className} /> : null
}

export default CustomIcon
