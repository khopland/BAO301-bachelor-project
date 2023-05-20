import { Typography } from '@material-tailwind/react'
import { FC } from 'react'

interface CourseHeaderProps {
  title: string
  description: string
  image: string
}

const CourseHeader: FC<CourseHeaderProps> = ({ title, description, image }) => {
  return (
    <>
      <section className="rounded-2xl no-elevate bg-surface text-on-primary-container flex flex-col gap-5 basis-4/6 px-12 py-12 col-span-4 grow shrink">
        <Typography className="text-3xl md:text-4xl font-semibold">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </section>
      <img
        className="round col-span-3 h-full w-full rounded-2xl basis-2/6 shrink-0 grow-0 max-w-[33.3%] object-cover hidden md:block"
        src={`../src/components/assets/${image
          .toLowerCase()
          .replace(/ /g, '_')}.webp`}
        alt="Course illustration"
      />
    </>
  )
}

export default CourseHeader
