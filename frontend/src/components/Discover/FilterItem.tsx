import { Chip } from '../Common/Chip'
import { Checkbox } from '../Common/Checkbox'
import { Divider } from '@mui/material'
import { Fragment, Dispatch, SetStateAction, useState, useEffect } from 'react'
import { QueryBody } from '../../pages/DiscoverPage'
import { useQuery } from '@tanstack/react-query'
import { Category, CourseType } from '../../shearedTypes'

var levels = ['Beginner', 'Intermediate', 'Expert']

type FilterItemProps = {
  setQuery: Dispatch<SetStateAction<QueryBody>>
}

const FilterItem = ({ setQuery }: FilterItemProps) => {
  const categoryQuery = useQuery<Category[]>({
    queryKey: ['category'],
    queryFn: () => fetch('/api/category').then((res) => res.json()),
  })
  const typeQuery = useQuery<CourseType[]>({
    queryKey: ['type'],
    queryFn: () => fetch('/api/type').then((res) => res.json()),
  })

  const [selectedCategory, setSelectedCategory] = useState<string>()
  const [selectedType, setSelectedType] = useState<string>()
  const [selectedLevel, setSelectedLevel] = useState<number>()

  useEffect(() => {
    setQuery((q) => {
      return {
        ...q,
        categoryId: selectedCategory,
        courseTypeId: selectedType,
        level: selectedLevel,
      }
    })
  }, [selectedCategory, selectedType, selectedLevel])

  return (
    <div className="flex flex-col gap-7 my-2">
      <section>
        <h3 className="text-lg font-semibold mb-3">Level</h3>
        <div className="flex flex-wrap gap-2">
          {levels.map((level, i) => (
            <Fragment key={level}>
              <Chip
                label={level}
                selected={selectedLevel == i + 1}
                onSelectChange={(b) => {
                  setSelectedLevel(b ? i + 1 : undefined)
                }}
              />
            </Fragment>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-3">Categories</h3>
        <div className="flex flex-col gap-3">
          {categoryQuery.data != null ? (
            categoryQuery.data.map((category, i) => (
              <Fragment key={category.id}>
                <Checkbox
                  label={category.name}
                  selected={selectedCategory === category.id}
                  onSelectChange={(b) =>
                    setSelectedCategory(b ? category.id : undefined)
                  }
                />
                {i < categoryQuery.data.length - 1 && <Divider flexItem />}
              </Fragment>
            ))
          ) : (
            <></>
          )}
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-3">Course types</h3>
        <div className="flex flex-col gap-3">
          {typeQuery.data != null ? (
            typeQuery.data.map((type, i) => (
              <Fragment key={type.id}>
                <Checkbox
                  label={type.name}
                  selected={selectedType === type.id}
                  onSelectChange={(b) =>
                    setSelectedType(b ? type.id : undefined)
                  }
                />
                {i < typeQuery.data.length - 1 && <Divider flexItem />}
              </Fragment>
            ))
          ) : (
            <></>
          )}
        </div>
      </section>
    </div>
  )
}

export default FilterItem
