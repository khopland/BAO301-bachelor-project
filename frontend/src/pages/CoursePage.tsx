import React, { useContext } from 'react'
import InfoItem from '../components/AboutCourse/InfoItem'
import AboutCourse from '../components/AboutCourse/AboutCourse'
import CourseDescription from '../components/AboutCourse/CourseDescription'
import ProviderDescription from '../components/AboutCourse/ProviderDescription'
import CourseHeader from '../components/AboutCourse/CourseHeader'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Course, Enrollment } from '../sharedTypes'
import { userContext } from '../UserContext'
import { Button, Chip } from '@material-tailwind/react'
import { convertTimeFormat } from '../utils'

const courseDescriptionLong =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt magnam ipsum fugit illum ipsa! Totam labore, obcaecati iure corporis, rerum provident delectus reprehenderit repellendus velit ipsa inventore? Magnam atque error cum dolorem, eaque provident suscipit quidem, nesciunt perspiciatis minima praesentium autem sed quam harum itaque nisi ipsa rerum earum! Nobis.'
export const CoursePage: React.FC = () => {
  const params = useParams()
  const { user, refresh } = useContext(userContext)
  const EnrollmentQuery = useQuery<Enrollment, null>({
    queryKey: ['enrollment', params.courseId, user?.id],
    retry: false,
    queryFn: () =>
      fetch(
        `/api/enrollment/?courseId=${params.courseId}&userId=${user?.id}`
      ).then((res) => res.json()),
  })

  const { isLoading, error, data } = useQuery<Course>({
    queryKey: ['Course', params.courseId],
    queryFn: () =>
      fetch(`/api/course/${params.courseId}`).then((res) => res.json()),
  })

  const addCourse = () => {
    fetch('/api/enrollment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: user?.id,
        courseId: params.courseId,
      }),
    })
      .then((x) => (x.ok ? EnrollmentQuery.refetch() : null))
      ?.then(() => refresh())
  }
  const completeCourse = () => {
    fetch('/api/enrollment/complete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: user?.id,
        courseId: params.courseId,
      }),
    })
      .then((x) => (x.ok ? EnrollmentQuery.refetch() : null))
      ?.then(() => refresh())
  }

  if (isLoading) return <div>Loading...</div>
  if (error || !data) return <div>An error has occurred</div>

  return (
    <>
      <main className="mx-auto md:ml-[5rem] p-5 grid grid-cols-1 md:grid-cols-7 gap-5 auto-rows-max w-100 relative">
        <header className="flex gap-5 md:col-span-7 bg-transparent p-0">
          <CourseHeader
            title={data.name}
            description={data.description}
            image={data.categories[0].name}
          />
        </header>

        <aside className="flex flex-col md:col-span-2 gap-4">
          <AboutCourse>
            <InfoItem type="Type" value={data.type.name} icon="devices" />
            <InfoItem
              type="Duration"
              value={convertTimeFormat(data.duration)}
              icon="schedule"
            />
            <InfoItem type="Language" value={data.language} icon="language" />
            <InfoItem
              type="Level"
              value={
                data.level === 1
                  ? 'Beginner'
                  : data.level === 2
                  ? 'Intermediate'
                  : data.level === 3
                  ? 'Expert'
                  : data.level.toString()
              }
              icon="school"
            />
            <InfoItem
              type="Category"
              value={data.categories[0].name}
              icon="category"
            />
            <InfoItem
              type="Price"
              value={data.price.toString()}
              icon="attach_money"
            />
            <InfoItem
              type="Provider"
              value={data.provider.name}
              icon="storefront"
            />
          </AboutCourse>

          <section className="rounded-2xl no-elevate bg-surface text-on-primary-container flex flex-col gap-6 px-7 py-7">
            <h2 className="text-xl font-semibold">
              Skills you'll learn during this course
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill) => (
                <Chip
                  value={skill.name}
                  className="w-fit bg-secondary-container text-on-secondary-container"
                />
              ))}
            </div>
          </section>
        </aside>

        <section className="md:col-start-3 md:col-end-8 flex flex-col gap-5">
          <CourseDescription
            description={data.description + courseDescriptionLong}
          />
          <ProviderDescription description={data.provider.description} />
        </section>
        {EnrollmentQuery.data == null ? (
          <div className="fixed right-10 bottom-10">
            <Button
              className="flex items-center gap-3 bg-primary-container hover:shadow-primary-container shadow-primary-container text-on-primary-container"
              onClick={(e) => {
                addCourse()
              }}
            >
              <i className="material-icons-round text-xl">library_add</i> Add to
              My Courses
            </Button>
          </div>
        ) : EnrollmentQuery.data?.status !== 2 ? (
          <div className="fixed right-10 bottom-10">
            <Button
              className="flex items-center gap-3 bg-primary-container hover:shadow-primary-container shadow-primary-container text-on-primary-container"
              onClick={(e) => {
                completeCourse()
              }}
            >
              <i className="material-icons-round text-xl">library_add_check</i>{' '}
              Marks as completed
            </Button>
          </div>
        ) : (
          <div className="fixed right-10 bottom-10">
            <Button
              disabled
              className="flex items-center gap-3 bg-primary-container hover:shadow-primary-container shadow-primary-container text-on-primary-container"
            >
              <i className="material-icons-round text-xl">library_add_check</i>
              Course completed
            </Button>
          </div>
        )}
      </main>
    </>
  )
}

export default CoursePage
