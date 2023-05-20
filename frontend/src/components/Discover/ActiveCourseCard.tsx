import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Progress,
} from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import { convertTimeFormat } from '../../utils'

interface CourseCardProps {
  id: string
  title: string
  image: string
  description: string
  duration: string
  level: string
  provider: string
  courseType: string
}

function getRandomNumber(): number {
  return Math.floor(Math.random() * 101)
}

const ActiveCourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  image,
  description,
  duration,
  level,
  provider,
  courseType,
}) => (
  <Card className="max-w-[18rem] w-[15rem] overflow-hidden bg-surface flex-shrink-0 flex flex-col justify-between">
    <CardHeader
      floated={false}
      shadow={false}
      color="transparent"
      className="m-0 h-40"
    >
      <img src={image} alt={description} />
    </CardHeader>
    <CardBody className="px-4 pt-4 pb-2">
      <Link to={`/course/${id}`}>
        <Typography className="text-1xl font-semibold text-on-primary-container">
          {title}
        </Typography>
      </Link>
      <section className="grid grid-cols-2 grid-rows-2 gap-5 mt-4">
        <div className="flex gap-1.5">
          <i className="material-icons text-on-secondary-container">schedule</i>
          <span className="text-xs font-semibold self-center text-on-secondary-container">
            {convertTimeFormat(duration)}
          </span>
        </div>
        <div className="flex gap-1.5">
          <i className="material-icons text-on-secondary-container">
            bar_chart
          </i>
          <span className="text-xs font-semibold self-center text-on-secondary-container">
            {level}
          </span>
        </div>
        <div className="flex gap-1.5">
          <i className="material-icons text-on-secondary-container">
            storefront
          </i>
          <span className="text-xs font-semibold self-center text-on-secondary-container">
            {provider}
          </span>
        </div>
        <div className="flex gap-1.5">
          <i className="material-icons text-on-secondary-container">devices</i>
          <span className="text-xs font-semibold self-center text-on-secondary-container line-clamp-1">
            {courseType}
          </span>
        </div>
      </section>
    </CardBody>
    <CardFooter className="px-4 pb-4 pt-2">
      <Progress
        value={getRandomNumber()}
        size="lg"
        className="bg-surface-variant"
        barProps={{
          className: 'bg-on-secondary-container',
        }}
      />
    </CardFooter>
  </Card>
)

export default ActiveCourseCard
