import React from 'react'
import 'beercss'
import InfoItem from '../components/AboutCourse/InfoItem'
import AboutCourse from '../components/AboutCourse/AboutCourse'
import CourseDescription from '../components/AboutCourse/CourseDescription'
import ProviderDescription from '../components/AboutCourse/ProviderDescription'
import CourseHeader from '../components/AboutCourse/CourseHeader'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Chorse } from '../shearedTypes'

const courseImage = '../src/components/Assets/course-illustration.jpg'
const courseDescriptionLong =
  'Learn how to implement Azure compute solutions, create Azure Functions, implement and manage web apps, develop solutions utilizing Azure storage, implement authentication and authorization, and secure their solutions by using KeyVault and Managed Identities. Students will also learn how to connect to and consume Azure services and third-party services, and include event- and message-based models in their solutions. The course also covers monitoring, troubleshooting, and optimizing Azure solutions. Audience Profile Students in this course are interested in Azure development or in passing the Microsoft Azure Developer Associate certification exam.'

export const CoursePage: React.FC = () => {
  let params = useParams()

  const { isLoading, error, data } = useQuery<Chorse>({
    queryKey: ['Course', params.courseId],
    queryFn: () =>
      fetch(`/api/course/${params.courseId}`).then((res) => res.json()),
  })

  if (isLoading) return <div>Loading...</div>
  if (error || !data) return <div>An error has occurred</div>

  return (
    <>
      <main className="ml-[5rem] p-5 grid grid-cols-7 gap-5 auto-rows-max h-[99vh] w-100 relative">
        <header className="flex gap-5 col-span-7 bg-transparent p-0">
          <CourseHeader
            title={data.name}
            description={data.description}
            image={courseImage}
          />
        </header>

        <aside className="col-span-2">
          <AboutCourse>
            <InfoItem type="Type" value={data.type.name} icon="devices" />
            <InfoItem type="Duration" value={data.duration} icon="schedule" />
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
        </aside>

        <section className="col-start-3 col-end-8 flex flex-col gap-5">
          <CourseDescription description={courseDescriptionLong} />
          <ProviderDescription description={data.provider.description} />
        </section>
        <button className="square round extend medium-elevate fixed right-10 bottom-10 bg-primary text-on-primary">
          <i>add</i>
          <span>Add to my courses</span>
        </button>
      </main>
    </>
  )
}

export default CoursePage
