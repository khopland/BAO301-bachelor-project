import { ReactNode, FC } from 'react'
interface CoursesProps {
  children: ReactNode
}

const CourseList: FC<CoursesProps> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col gap-5">{children}</div>
    </>
  )
}

export default CourseList
