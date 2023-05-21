import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { userContext } from '../../UserContext'
import CardWrapper from '../../components/Common/CardWrapper'
import CourseCard from '../../components/Discover/CourseCard'
import { Course } from '../../sharedTypes'
import { Typography } from '@material-tailwind/react'

export const RecommendedCoursesSection = () => {
  const { user } = useContext(userContext)

  const { data: recommendedCourses } = useQuery<Course[]>({
    queryKey: [user?.id],
    queryFn: () =>
      fetch(`/api/recommendation?UserId=${user?.id}`).then((res) => res.json()),
    enabled: !!user,
  })

  return (
    <section className="gap-4 w-full">
      <div>
        <Typography className="text-2xl md:text-3xl font-bold text-on-primary-container md:px-6">
          Recommended for you
        </Typography>
        <Typography variant="paragraph" className="md:px-6 mb-4 mt-3 ">
          We are committed to providing you with a personalized and relevant
          learning experience. We understand that your time is valuable, and
          that's why we carefully recommend courses that align with your unique
          interests, skill set, and career goals.
        </Typography>
      </div>

      <CardWrapper>
        {recommendedCourses?.map((course) => (
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
  )
}
