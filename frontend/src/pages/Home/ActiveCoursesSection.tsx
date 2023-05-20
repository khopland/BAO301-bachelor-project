import { Typography } from '@material-tailwind/react'
import { FC, useContext } from 'react'
import CardWrapper from '../../components/Common/CardWrapper'
import ActiveCourseCard from '../../components/Discover/ActiveCourseCard'
import { Course } from '../../sharedTypes'
import { userContext } from '../../UserContext'

export const ActiveCoursesSection: FC = () => {
  const { user } = useContext(userContext)

  const activeCourses =
    user?.enrollments?.reduce(
      (acc, val) => (val.status !== 2 ? acc.concat(val.course) : acc),
      [] as Course[]
    ) ?? []

  return (
    <section className="gap-4 w-full">
      <div>
        <Typography className="text-2xl md:text-3xl font-bold text-on-primary-container md:px-6">
          Continue learning
        </Typography>
        <Typography variant="paragraph" className="md:px-6 mb-4 mt-3 max-w-md">
          Keep up the good work! Jump back into your learning journey where you
          left off.
        </Typography>
      </div>
      <CardWrapper>
        {activeCourses.map((course) => (
          <ActiveCourseCard
            key={course.id}
            id={course.id}
            title={course.name}
            image={'src/components/Assets/course-illustration.jpg'}
            description={''}
            duration={course.duration}
            level={
              course.level === 1
                ? 'Beginner'
                : course.level === 2
                ? 'Intermediate'
                : course.level === 3
                ? 'Expert'
                : course.level.toString()
            }
            provider={course.provider.name}
            courseType={course.type.name}
          />
        ))}
      </CardWrapper>
    </section>
  )
}
