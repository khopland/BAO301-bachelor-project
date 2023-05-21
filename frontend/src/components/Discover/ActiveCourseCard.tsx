import React from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Progress,
  Tooltip,
  IconButton,
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
  duration,
  level,
  provider,
  courseType,
}) => (
  <Card className="max-w-[18rem] w-[15rem] overflow-hidden bg-surface flex-shrink-0 flex flex-col justify-around">
    <CardBody className="flex flex-col px-6 pt-6 pb-0 justify-between">
      <Link to={`/course/${id}`}>
        <Typography className="text-lg leading-5 font-semibold text-on-primary-container">
          {title}
        </Typography>
      </Link>
    </CardBody>
    <CardFooter className="px-6 pb-4 pt-2 flex flex-col gap-5">
      <section className="flex w-full justify-between">
        <Tooltip
          className="bg-background py-2 px-4"
          placement="bottom"
          content={
            <>
              <Typography className="text-on-surface-variant font-medium text-xs opacity-80">
                Duration
              </Typography>
              <Typography className="font-medium text-lg mt-[-5px] text-on-primary-container">
                {convertTimeFormat(duration)}
              </Typography>
            </>
          }
        >
          <IconButton
            color="purple"
            className="flex gap-1.5 bg-secondary-container p-1 rounded-lg hover:shadow-none shadow-none"
          >
            <i className="material-icons-round text-on-secondary-container ">
              schedule
            </i>
          </IconButton>
        </Tooltip>
        <Tooltip
          className="bg-background py-2 px-4"
          placement="bottom"
          content={
            <>
              <Typography className="text-on-surface-variant font-medium text-xs opacity-80">
                Level
              </Typography>
              <Typography className="font-medium text-lg mt-[-5px] text-on-primary-container">
                {level}
              </Typography>
            </>
          }
        >
          <IconButton
            color="purple"
            className="flex gap-1.5 bg-secondary-container p-1 rounded-lg hover:shadow-none shadow-none"
          >
            <i className="material-icons-round text-on-secondary-container ">
              bar_chart
            </i>
          </IconButton>
        </Tooltip>
        <Tooltip
          className="bg-background py-2 px-4"
          placement="bottom"
          content={
            <>
              <Typography className="text-on-surface-variant font-medium text-xs opacity-80">
                Course Type
              </Typography>
              <Typography className="font-medium text-lg mt-[-5px] text-on-primary-container">
                {courseType}
              </Typography>
            </>
          }
        >
          <IconButton
            color="purple"
            className="flex gap-1.5 bg-secondary-container p-1 rounded-lg hover:shadow-none shadow-none"
          >
            <i className="material-icons-round text-on-secondary-container ">
              category
            </i>
          </IconButton>
        </Tooltip>
        <Tooltip
          className="bg-background py-2 px-4"
          placement="bottom"
          content={
            <>
              <Typography className="text-on-surface-variant font-medium text-xs opacity-80">
                Provider
              </Typography>
              <Typography className="font-medium text-lg mt-[-5px] text-on-primary-container">
                {provider}
              </Typography>
            </>
          }
        >
          <IconButton
            color="purple"
            className="flex gap-1.5 bg-secondary-container p-1 rounded-lg hover:shadow-none shadow-none"
          >
            <i className="material-icons-round text-on-secondary-container ">
              storefront
            </i>
          </IconButton>
        </Tooltip>
      </section>
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
