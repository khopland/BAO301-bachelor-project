import { Typography } from '@material-tailwind/react'
import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ReadMoreLinkProps {
  courseId?: string
  children: ReactNode
  limit: number
}

const ReadMoreLink: React.FC<ReadMoreLinkProps> = ({
  children,
  limit,
  courseId,
}) => {
  const text = children ? children.toString() : ''

  if (text.length <= limit) {
    return <Typography className="text-base">{text}</Typography>
  }
  return (
    <>
      <Typography className="text-sm">
        {text.slice(0, limit)}...
        <Link to={`/course/${courseId}`}>Read More</Link>
      </Typography>
    </>
  )
}

export default ReadMoreLink
