import { ReactNode, FC } from 'react'
import 'beercss'
interface CoursesProps {
  children: ReactNode
}

const CourseList: FC<CoursesProps> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col">{children}</div>
    </>
  )
}

export default CourseList
