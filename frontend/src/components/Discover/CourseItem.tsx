import { Link } from 'react-router-dom'

const courseImage = 'src/components/Assets/course-illustration.jpg'

interface CourseItemProps {
  id: string
  title: string
  image: string
  description: string
  duration: string
  level: string
  provider: string
  courseType: string
}

const CourseItem: React.FC<CourseItemProps> = ({
  id,
  title,
  image,
  description,
  duration,
  level,
  provider,
  courseType,
}) => {
  return (
    <>
      <article className="m-0 p-0 no-elevate ease-in-out duration-300 relative">
        <button className="absolute top-5 right-0 z-10 text-on-surface-variant circle">
          <i>more_vert</i>
          <div className="dropdown right no-wrap bg-background">
            <a>Item 1</a>
            <a>Item 2</a>
            <a>Item 3</a>
          </div>
        </button>
        <div className="grid bg-background drop-shadow-sm">
          <div className="col-span-4">
            <img
              className="responsive rounded-r-none max-h-[10rem]"
              alt='image of a woman'
              src={image}
            />
          </div>
          <div className="col-span-8 flex flex-col gap-1 py-2 pr-4 place-content-around">
            <Link
              className="justify-start text-lg font-semibold mt-1"
              to={`/course/${id}`}
            >
              {title}
            </Link>
            <p className="text-xs">{description}</p>
            <div className="flex gap-3">
              <p className="my-2 flex items-center gap-1">
                <i className="small opacity-80">schedule</i>
                <span className="text-xs font-medium text-on-surface-variant self-center">
                  {duration}
                </span>
              </p>
              <p className="my-2 flex items-center gap-1">
                <i className="small opacity-80">bar_chart</i>
                <span className="text-xs font-medium text-on-surface-variant self-center">
                  {level}
                </span>
              </p>
              <p className="my-2 flex items-center gap-1">
                <i className="small opacity-80">storefront</i>
                <span className="text-xs font-medium text-on-surface-variant self-center">
                  {provider}
                </span>
              </p>
              <p className="my-2 flex items-center gap-1">
                <i className="small opacity-80">devices</i>
                <span className="text-xs font-medium text-on-surface-variant self-center">
                  {courseType}
                </span>
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default CourseItem
