import { FC } from 'react'
import CardWrapper from '../../components/Common/CardWrapper'
import CourseCard from '../../components/Discover/CourseCard'
import { Typography } from '@material-tailwind/react'
import { useQuery } from '@tanstack/react-query'
import { Course } from '../../sharedTypes'

export const PrioritiyCoursesSection: FC = () => {
  const { data: courses } = useQuery<Course[]>({
    queryKey: [],
    queryFn: () => fetch(`/api/course`).then((res) => res.json()),
  })
  return (
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
  )
}
