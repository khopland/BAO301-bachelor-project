import { FC, Fragment, useContext } from 'react'
import { ProfileHeader } from '../components/Profile/ProfileHeader'
import CourseList from '../components/Discover/CourseList'
import CourseItem from '../components/Discover/CourseItem'
import { Course, User } from '../shearedTypes'
import { useQuery } from '@tanstack/react-query'
import { userContext } from '../UserContext'

const CourseSection = ({
  title,
  courses,
}: {
  title: string
  courses: Course[]
}) => (
  <section className="col-start-3 mt-4 col-end-8 rounded-2xl no-elevate bg-surface text-on-primary-container flex flex-col gap-3 px-7 py-7">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <CourseList>
      {(courses ?? []).map((course) => (
        <Fragment key={course.id}>
          <CourseItem
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
        </Fragment>
      ))}
    </CourseList>
  </section>
)

export const ProfilePage: FC = () => {
  const { user } = useContext(userContext)

  const { data } = useQuery<User>({
    queryKey: ['users', user?.id],
    enabled: user?.id !== '',
    queryFn: () => fetch(`/api/user/${user?.id}`).then((res) => res.json()),
  })

  return (
    <main className="ml-[5rem] p-5 flex flex-col h-[100vh]">
      <header className="gap-5 col-span-7 bg-transparent p-0">
        <ProfileHeader
          name={'deograsias'}
          img="src/components/Assets/course-illustration.jpg"
        />
      </header>

      <CourseSection
        title="Active Courses"
        courses={
          data?.enrollments?.reduce(
            (acc, val) => (val.status !== 2 ? acc.concat(val.course) : acc),
            [] as Course[]
          ) ?? []
        }
      />
      <CourseSection
        title="Complete Courses"
        courses={
          data?.enrollments?.reduce(
            (acc, val) => (val.status === 2 ? acc.concat(val.course) : acc),
            [] as Course[]
          ) ?? []
        }
      />
    </main>
  )
}

export default ProfilePage
