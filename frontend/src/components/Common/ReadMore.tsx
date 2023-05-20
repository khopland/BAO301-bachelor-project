import { Typography } from '@material-tailwind/react'
import React, { useState, ReactNode } from 'react'

interface ReadMoreProps {
  children: ReactNode
  className?: string
  limit: number
}

const ReadMore: React.FC<ReadMoreProps> = ({ children, limit, className }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const text = children ? children.toString() : ''

  if (text.length <= limit) {
    return <Typography className="text-base">{text}</Typography>
  }

  return (
    <>
      <Typography className={className}>
        {isExpanded ? `${text} ` : `${text.slice(0, limit)}...  `}
        <button
          className="text-on-primary-container hover:underline inline"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </Typography>
    </>
  )
}

export default ReadMore
