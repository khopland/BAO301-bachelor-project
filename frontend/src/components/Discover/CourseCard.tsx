import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Popover,
  PopoverHandler,
  PopoverContent,
  IconButton,
} from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import ReadMoreLink from '../Common/ReadMoreLink'
import CustomIcon from '../Common/CustomIcon'
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
  category: string
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  level,
  provider,
  duration,
  courseType,
  image,
  description,
  category,
}) => {
  const [openPopover, setOpenPopover] = useState<Array<boolean>>([
    false,
    false,
    false,
    false,
  ])

  const handleEnter = (index: number) => {
    let newPopoverState = [...openPopover]
    newPopoverState[index] = true
    setOpenPopover(newPopoverState)
  }

  const handleLeave = (index: number) => {
    let newPopoverState = [...openPopover]
    newPopoverState[index] = false
    setOpenPopover(newPopoverState)
  }

  return (
    <Card className="flex flex-shrink-0 justify-between flex-col max-w-[18rem] w-[18rem] overflow-hidden bg-surface">
      <section className="flex flex-col gap-1">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="relative m-0 h-40 bg-cover"
          style={{
            backgroundImage: `url('./src/components/assets/${image
              .toLowerCase()
              .replace(/ /g, '_')}.webp')`,
          }}
        >
          {''}
        </CardHeader>
        <Link to={`/course/${id}`} className="px-4 pt-2.5">
          <Typography className="text-lg font-semibold text-on-primary-container leading-[1.2rem]">
            {title}
          </Typography>
        </Link>
        <CardBody className="px-4 pt-1 pb-0 flex flex-col justify-between gap-2">
          <ReadMoreLink limit={200} courseId={id}>
            {description}
          </ReadMoreLink>
        </CardBody>
      </section>

      <CardFooter className="self-end flex pb-4 pt-0 w-full justify-between ">
        <Popover
          open={openPopover[0]}
          handler={() => setOpenPopover([true, false, false, false])}
          placement="bottom"
        >
          <PopoverHandler
            onMouseEnter={() => handleEnter(0)}
            onMouseLeave={() => handleLeave(0)}
          >
            <IconButton
              color="purple"
              className="flex gap-1.5 bg-secondary-container p-1 rounded-lg hover:shadow-none shadow-none"
            >
              <i className="material-icons-round text-on-secondary-container ">
                schedule
              </i>
            </IconButton>
          </PopoverHandler>
          {openPopover[0] && (
            <PopoverContent
              onMouseEnter={() => handleEnter(0)}
              onMouseLeave={() => handleLeave(0)}
              className="flex flex-col justify-center bg-background border-none"
            >
              <Typography className="text-on-surface-variant font-medium text-xs opacity-80">
                Duration
              </Typography>
              <Typography className="font-medium text-lg mt-[-5px] text-on-primary-container">
                {convertTimeFormat(duration)}
              </Typography>
            </PopoverContent>
          )}
        </Popover>

        <Popover
          open={openPopover[1]}
          handler={() => setOpenPopover([false, true, false, false])}
          placement="bottom"
        >
          <PopoverHandler
            onMouseEnter={() => handleEnter(1)}
            onMouseLeave={() => handleLeave(1)}
          >
            <IconButton
              color="purple"
              className="flex gap-1.5 bg-secondary-container p-1 rounded-lg hover:shadow-none shadow-none"
            >
              <i className="material-icons-round text-on-secondary-container ">
                devices
              </i>
            </IconButton>
          </PopoverHandler>
          {openPopover[1] && (
            <PopoverContent
              onMouseEnter={() => handleEnter(1)}
              onMouseLeave={() => handleLeave(1)}
              className="flex flex-col justify-center bg-background border-none"
            >
              <Typography className="text-on-surface-variant font-medium text-xs opacity-80">
                Course Type
              </Typography>
              <Typography className="font-medium text-lg mt-[-5px] text-on-primary-container">
                {courseType}
              </Typography>
            </PopoverContent>
          )}
        </Popover>

        <Popover
          open={openPopover[2]}
          handler={() => setOpenPopover([false, false, true, false])}
          placement="bottom"
        >
          <PopoverHandler
            onMouseEnter={() => handleEnter(2)}
            onMouseLeave={() => handleLeave(2)}
          >
            <IconButton
              color="purple"
              className="flex gap-1.5 bg-secondary-container p-1 rounded-lg hover:shadow-none shadow-none"
            >
              <i className="material-icons-round text-on-secondary-container ">
                bar_chart
              </i>
            </IconButton>
          </PopoverHandler>
          {openPopover[2] && (
            <PopoverContent
              onMouseEnter={() => handleEnter(2)}
              onMouseLeave={() => handleLeave(2)}
              className="flex flex-col justify-center bg-background border-none"
            >
              <Typography className="text-on-surface-variant font-medium text-xs opacity-80">
                Level
              </Typography>
              <Typography className="font-medium text-lg mt-[-5px] text-on-primary-container">
                {level}
              </Typography>
            </PopoverContent>
          )}
        </Popover>

        <Popover
          open={openPopover[3]}
          handler={() => setOpenPopover([false, false, false, true])}
          placement="bottom"
        >
          <PopoverHandler
            onMouseEnter={() => handleEnter(3)}
            onMouseLeave={() => handleLeave(3)}
          >
            <IconButton
              color="purple"
              className="flex gap-1.5 bg-secondary-container p-1 rounded-lg hover:shadow-none shadow-none"
            >
              <i className="material-icons-round text-on-secondary-container ">
                storefront
              </i>
            </IconButton>
          </PopoverHandler>
          {openPopover[3] && (
            <PopoverContent
              onMouseEnter={() => handleEnter(3)}
              onMouseLeave={() => handleLeave(3)}
              className="flex flex-col justify-center bg-background border-none"
            >
              <Typography className="text-on-surface-variant font-medium text-xs opacity-80">
                Provider
              </Typography>
              <Typography className="font-medium text-lg mt-[-5px] text-on-primary-container">
                {provider}
              </Typography>
            </PopoverContent>
          )}
        </Popover>
      </CardFooter>
    </Card>
  )
}

export default CourseCard
