import { FC, useContext, useState } from 'react'
import { ProfileHeader } from '../../components/Profile/ProfileHeader'
import { Course } from '../../sharedTypes'
import { userContext } from '../../UserContext'
import ActiveCourseCard from '../../components/Discover/ActiveCourseCard'
import { Chip, Spinner, Typography } from '@material-tailwind/react'
import CardWrapper from '../../components/Common/CardWrapper'
import { AddInterests } from './AddInterests'

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
      <Typography className="text-2xl pl-5 md:text-2xl font-bold text-on-primary-container">
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
  const { user, loading } = useContext(userContext)
  if (loading) {
    return (
      <div>
        <Spinner color="purple" className="h-6 w-6" />
      </div>
    )
  }
  return (
    <main className="container mx-auto p-5 md:p-0 md:pl-[5rem] grid grid-cols-1 gap-5">
      <ProfileHeader
        name={`${user?.firstName} ${user?.lastName}`}
        contact={user?.contact}
        position={user?.position}
        img="src/components/Assets/course-illustration.jpg"
      />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-surface p-5 rounded-2xl flex flex-col gap-4">
          <Typography className="text-lg md:text-xl font-bold text-on-secondary-container">
            Skills
          </Typography>
          <div className="flex flex-wrap gap-2">
            {user?.skills?.map((skill, i) => (
              <Chip
                key={i}
                value={skill.name}
                className="w-fit bg-secondary-container text-on-secondary-container"
              />
            ))}
          </div>
        </div>
        <div className="bg-surface p-5 rounded-2xl flex flex-col gap-2">
          <div className="flex justify-between">
            <Typography className="text-lg md:text-xl font-bold text-on-secondary-container">
              Interests
            </Typography>
            <AddInterests />
          </div>

          <div className="flex flex-wrap gap-2">
            {user?.interests?.map((interest, i) => (
              <Chip
                key={i}
                value={interest.name}
                className="w-fit bg-secondary-container text-on-secondary-container"
              />
            ))}
          </div>
        </div>
      </section>

      {user?.enrollments && (
        <>
          <CourseSection
            title="Your Active Courses"
            courses={user.enrollments.reduce(
              (acc, val) => (val.status !== 2 ? acc.concat(val.course) : acc),
              [] as Course[]
            )}
          />
          <CourseSection
            title="Your Completed Courses"
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
