import { FC, Fragment, useContext } from 'react'
import { ProfileHeader } from '../components/Profile/ProfileHeader'
import CourseList from '../components/Discover/CourseList'
import CourseItem from '../components/Discover/CourseItem'
import { Course, User } from '../sharedTypes'
import { userContext } from '../UserContext'
import ActiveCourseCard from '../components/Discover/ActiveCourseCard'
import { Typography } from '@material-tailwind/react'
import CardWrapper from '../components/Common/CardWrapper'

const CourseSection = ({
  title,
  courses,
}: {
  title: string
  courses: Course[]
}) => {
  if (!courses.length) {
    return null
  }

  return (
    <>
      <Typography className="text-2xl pl-5 md:text-3xl font-bold text-on-primary-container">
        {title}
      </Typography>
      <CardWrapper>
        {courses.map((course) => (
          <ActiveCourseCard
            id={course.id}
            title={course.name}
            image={'src/components/Assets/course-illustration.jpg'}
            description={course.description}
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
    </>
  )
}

export const ProfilePage: FC = () => {
  const { user } = useContext(userContext)

  return (
    <main className="md:ml-[5rem] p-5 grid grid-cols-1 gap-5  mx-auto">
      <ProfileHeader
        name={user?.firstName + ' ' + user?.lastName}
        contact={user?.contact}
        position={user?.position}
        img="src/components/Assets/course-illustration.jpg"
      />
      <section className="grid grid-cols-4 gap-4">
        <div className="bg-surface rounded-2xl flex flex-col gap-2 relative h-fit text-center p-7">
          <Typography className="font-medium text-6xl">
            {user?.enrollments.length}
          </Typography>
          <Typography className="text-on-surface-variant font-medium text-base opacity-80">
            Completed Courses
          </Typography>
        </div>
        <div className="bg-surface rounded-2xl flex flex-col gap-2 relative h-fit text-center p-7">
          <Typography className="font-medium text-6xl">
            {user?.interests.length}
          </Typography>
          <Typography className="text-on-surface-variant font-medium text-base opacity-80">
            Registered Interests
          </Typography>
        </div>
        <div className="bg-surface rounded-2xl flex flex-col gap-2 relative h-fit text-center p-7">
          <Typography className="font-medium text-6xl">
            {user?.skills.length}
          </Typography>
          <Typography className="text-on-surface-variant font-medium text-base opacity-80">
            Registered Skills
          </Typography>
        </div>
      </section>
      {user?.enrollments && (
        <>
          <CourseSection
            title="Active Courses"
            courses={user.enrollments.reduce(
              (acc, val) => (val.status !== 2 ? acc.concat(val.course) : acc),
              [] as Course[]
            )}
          />
          <CourseSection
            title="Completed Courses"
            courses={user.enrollments.reduce(
              (acc, val) => (val.status === 2 ? acc.concat(val.course) : acc),
              [] as Course[]
            )}
          />
        </>
      )}
    </main>
  )
}

export default ProfilePage
