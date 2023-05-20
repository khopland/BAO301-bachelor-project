import { Chip, Typography } from '@material-tailwind/react'
import { userContext } from '../../UserContext'
import { FC, useContext } from 'react'
import { SegmentSection } from './SegmentSection'
import { CategorySection } from './CategorySection'
import { ActiveCoursesSection } from './ActiveCoursesSection'
import { RecommendedCoursesSection } from './RecommendedCoursesSection'
import { PrioritiyCoursesSection } from './PriorityCoursesSection'

export const HomePage: FC = () => {
  const { user } = useContext(userContext)

  return (
    <main className="container mx-auto md:p-0 md:pl-[5rem] grid grid-cols-1 gap-14 md:gap-20">
      <header
        className="grid grid-cols-1 md:p-8 max-w-5xl bg-no-repeat bg-[bottom_left] sm:bg-[bottom]
      md:grid-cols-2 md:h-[37rem] md:bg-[url('./src/components/assets/bg-hero.png')] mx-auto container"
      >
        <section className="pt-10">
          <Typography variant="h4" className="text-gray-600">
            Introducing
          </Typography>
          <div className="relative w-fit">
            <Typography className="text-on-primary-container text-4xl xl:text-5xl font-bold">
              myLearning
            </Typography>
            <Chip
              value="2.0"
              className="absolute top-[-1.5rem] right-[-2rem] text-md bg-tertiary px-2 font-semibold shadow-none"
            ></Chip>
          </div>
          <Typography
            variant="paragraph"
            className="mt-4 leading-6 text-base md:max-w-[17rem] lg:max-w-[25rem]"
          >
            Get ready to embark on an extraordinary journey with Accenture's
            myLearning 2.0, our brand-new learning platform that takes
            professional development to the next level.
          </Typography>
        </section>
      </header>

      {user?.enrollments?.length ?? [].length > 0 ? (
        <ActiveCoursesSection />
      ) : (
        <RecommendedCoursesSection />
      )}

      <SegmentSection className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-surface p-7 rounded-2xl w-full" />
      <PrioritiyCoursesSection />
      <CategorySection className="grid grid-cols-1 gap-7 bg-surface p-7 rounded-2xl w-full" />
    </main>
  )
}

export default HomePage
