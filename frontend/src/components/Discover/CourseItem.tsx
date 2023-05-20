import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import { convertTimeFormat } from '../../utils'
import ReadMore from '../Common/ReadMore'

interface CourseItemProps {
  id: string
  title: string
  image: string
  description: string
  duration: string
  level: string
  provider: string
  courseType: string
}

const CourseItem: React.FC<CourseItemProps> = ({
  id,
  title,
  image,
  description,
  duration,
  level,
  provider,
  courseType,
}) => {
  return (
    <>
      <Card className="flex-row !bg-background">
        <CardHeader
          shadow={false}
          floated={false}
          className="w-1/5 shrink-0 m-0 rounded-r-none hidden md:inline-block"
        >
          <img
            src={`./src/components/assets/${image
              .toLowerCase()
              .replace(/ /g, '_')}.webp`}
            alt="image"
            className="w-full h-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Link to={`/course/${id}`}>
            <Typography
              variant="h5"
              className="mb-2 text-on-secondary-container"
            >
              {title}
            </Typography>
          </Link>

          <ReadMore limit={120} className="mb-4 text-sm">
            {description}
          </ReadMore>

          <div className="flex gap-3 flex-wrap">
            <p className=" flex items-center gap-1">
              <i className="material-icons text-on-primary-container">
                schedule
              </i>
              <span className="text-xs font-medium text-on-surface-variant self-center">
                {convertTimeFormat(duration)}
              </span>
            </p>
            <p className="flex items-center gap-1">
              <i className="material-icons text-on-primary-container">
                bar_chart
              </i>
              <span className="text-xs font-medium text-on-surface-variant self-center">
                {level}
              </span>
            </p>
            <p className="flex items-center gap-1">
              <i className="material-icons text-on-primary-container">
                storefront
              </i>
              <span className="text-xs font-medium text-on-surface-variant self-center">
                {provider}
              </span>
            </p>
            <p className="flex items-center gap-1">
              <i className="material-icons text-on-primary-container">
                devices
              </i>
              <span className="text-xs font-medium text-on-surface-variant self-center">
                {courseType}
              </span>
            </p>
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default CourseItem
