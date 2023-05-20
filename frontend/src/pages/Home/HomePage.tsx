import { Chip, Typography } from '@material-tailwind/react'
import { Course, User } from '../../sharedTypes'
import { useQuery } from '@tanstack/react-query'
import { userContext } from '../../UserContext'
import { FC, useContext } from 'react'
import ActiveCourseCard from '../../components/Discover/ActiveCourseCard'
import CardWrapper from '../../components/Common/CardWrapper'
import { SegmentSection } from './SegmentSection'
import CourseCard from '../../components/Discover/CourseCard'
import { CategorySection } from './CategorySection'

export const HomePage: FC = () => {
  const { user } = useContext(userContext)

  const { data } = useQuery<User>({
    queryKey: ['users', user?.id],
    enabled: user?.id !== '',
    queryFn: () => fetch(`/api/user/${user?.id}`).then((res) => res.json()),
  })

  const activeCourses =
    data?.enrollments?.reduce(
      (acc, val) => (val.status !== 2 ? acc.concat(val.course) : acc),
      [] as Course[]
    ) ?? []

  const { data: courses } = useQuery<Course[]>({
    queryKey: [''],
    queryFn: () => fetch(`/api/course`).then((res) => res.json()),
  })

  return (
    <main className="container mx-auto p-5 md:p-0 md:pl-[5rem] grid grid-cols-1 gap-20">
      <header
        className="grid grid-cols-1 md:p-10 bg-origin-content bg-none bg-no-repeat bg-right-bottom max-w-4xl
      md:grid-cols-2 md:h-[35rem] md:bg-[url('./src/components/assets/bg-hero.png')]"
      >
        <section>
          <Typography variant="h4" className="text-gray-600">
            Introducing
          </Typography>
          <div className="relative w-fit">
            <Typography className="text-on-primary-container text-4xl font-bold">
              myLearning
            </Typography>
            <Chip
              value="2.0"
              className="absolute top-[-1.5rem] right-[-2rem] text-md bg-tertiary px-2 font-semibold shadow-none"
            ></Chip>
          </div>
          <Typography variant="paragraph" className="mt-4">
            Get ready to embark on an extraordinary journey with Accenture's
            myLearning 2.0, our brand-new learning platform that takes
            professional development to the next level.
          </Typography>
        </section>
      </header>
      <section className="gap-4 w-full">
        <div>
          <Typography className="text-2xl md:text-3xl font-bold text-on-primary-container md:px-6">
            Recommended for you
          </Typography>
          <Typography variant="paragraph" className="md:px-6 mb-4 mt-3 ">
            We are committed to providing you with a personalized and relevant
            learning experience. We understand that your time is valuable, and
            that's why we carefully recommend courses that align with your
            unique interests, skill set, and career goals.
          </Typography>
        </div>

        <CardWrapper>
          {courses?.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.name}
              image={course.categories[0].name}
              category={course.categories[0].name}
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
      </section>

      <SegmentSection className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-surface p-7 rounded-2xl w-full" />

      <section className="gap-4 w-full">
        <div>
          <Typography className="text-2xl md:text-3xl font-bold text-on-primary-container md:px-6">
            Continue learning
          </Typography>
          <Typography
            variant="paragraph"
            className="md:px-6 mb-4 mt-3 max-w-md"
          >
            Keep up the good work! Jump back into your learning journey where
            you left off.
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

      <CategorySection className="grid grid-cols-1 gap-7 bg-surface p-7 rounded-2xl w-full" />

      <section className="gap-4 w-full">
        <div>
          <Typography className="text-2xl md:text-3xl font-bold text-on-primary-container md:px-6">
            Priorities for Accenture
          </Typography>
          <Typography variant="paragraph" className="md:px-6 mb-4 mt-3">
            Priorities are curated channels that contain learning content that
            will help you skill up towards Accenture's goals.
          </Typography>
        </div>

        <CardWrapper>
          {courses?.map((course) => {
            return (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.name}
                image={course.categories[0].name}
                category={course.categories[0].name}
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
            )
          })}
        </CardWrapper>
      </section>
    </main>
  )
}

export default HomePage
