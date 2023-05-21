import { useQuery } from '@tanstack/react-query'
import { FC, Fragment } from 'react'
import { Segment } from '../../sharedTypes'
import CustomIcon from '../../components/Common/CustomIcon'
import { Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

interface SegmentSectionProps {
  className?: string
}

export const SegmentSection: FC<SegmentSectionProps> = ({ className }) => {
  const segmentQuery = useQuery<Segment[]>({
    queryKey: ['segment'],
    queryFn: () => fetch('/api/segment').then((res) => res.json()),
  })

  return (
    <section className={className}>
      <div className="grid grid-cols-2 gap-4">
        {segmentQuery.data != null ? (
          segmentQuery.data.map((segment, i) => (
            <Fragment key={segment.id}>
              <Link to="/discover" state={{ id: segment.id, type: 'segment' }}>
                <div
                  className="relative bg-[length:500px_500px] bg-no-repeat bg-top rounded-2xl h-28"
                  style={{
                    backgroundImage: `url('./src/components/assets/bg-gradient-${
                      i + 1
                    }.png')`,
                  }}
                >
                  <div className="absolute top-5 left-1/2 transform -translate-x-1/2 p-3 rounded-xl bg-gradient-to-tr from-gray-50/20 to-gray-900/20">
                    <CustomIcon
                      name={segment.name}
                      color="#fefcf4"
                      className="h-7 w-10"
                    ></CustomIcon>
                  </div>

                  <h2 className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-md font-semibold mb-2 text-on-primary text-center w-full">
                    {segment.name}
                  </h2>
                </div>
              </Link>
            </Fragment>
          ))
        ) : (
          <></>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <Typography className="text-2xl font-semibold text-on-primary-container">
          Explore segments
        </Typography>
        <Typography className="text-md">
          Dive into our carefully organized segments, where you'll find a
          multitude of categories containing courses, workshops, and resources
          catering to various industries and skill levels.
        </Typography>
        <Typography className="text-md self-end">
          Whether you're a seasoned professional looking to expand your
          expertise, a fresh graduate starting your career journey, or simply
          passionate about lifelong learning, our extensive catalog caters to
          all your educational needs.
        </Typography>
      </div>
    </section>
  )
}
