import { useQuery } from '@tanstack/react-query'
import { FC, Fragment } from 'react'
import { Category } from '../../sharedTypes'
import CustomIcon from '../../components/Common/CustomIcon'
import { Typography } from '@material-tailwind/react'

interface CategorySectionProps {
  className?: string
}

export const CategorySection: FC<CategorySectionProps> = ({ className }) => {
  const categoryQuery = useQuery<Category[]>({
    queryKey: ['category'],
    queryFn: () => fetch('/api/category').then((res) => res.json()),
  })

  return (
    <section className={className}>
      <div className="flex flex-col gap-3">
        <Typography className="text-2xl font-semibold text-on-primary-container">
          Dive into a Universe of Categories
        </Typography>
        <Typography className="text-md">
          Accenture's exclusive learning platform invites you on a thrilling
          journey of exploration and growth. With a stunning array of categories
          available, you can seize the opportunity to expand your professional
          skills and evolve your career in ways you've only imagined. Embark on
          a learning journey that transcends traditional boundaries.
        </Typography>

        <Typography className="text-md">
          Indulge your curiosity, discover new interests, or deepen your
          expertise in familiar territories. With myLearning 2.0, every course
          is a new adventure, and every adventure brings you one step closer to
          your career aspirations. Dive into the universe of learning categories
          today, and let's shape the future of your professional journey
          together.
        </Typography>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categoryQuery.data != null ? (
          categoryQuery.data.map((category, i) => (
            <Fragment key={category.id}>
              <div
                className="relative bg-cover bg-no-repeat bg-top rounded-2xl h-32"
                style={{
                  backgroundImage: `url('./src/components/assets/${category.name
                    .toLowerCase()
                    .replace(/ /g, '_')}.webp')`,
                }}
              >
                <div className="w-full h-full flex flex-col justify-center items-center backdrop-blur-[2px] rounded-2xl backdrop-brightness-50"></div>

                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 p-3 rounded-xl bg-gradient-to-tr from-gray-50/20 to-gray-900/20">
                  <CustomIcon
                    name={category.name}
                    color="#fefcf4"
                    className="h-7 w-10"
                  ></CustomIcon>
                </div>

                <Typography className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-base font-semibold mb-2 text-on-primary text-center leading-[1.1rem] w-full">
                  {category.name}
                </Typography>
              </div>
            </Fragment>
          ))
        ) : (
          <></>
        )}
      </div>
    </section>
  )
}
