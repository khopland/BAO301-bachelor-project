import { Chip } from '../Common/Chip'
import { Checkbox } from '../Common/Checkbox'
import { Divider } from '@mui/material'
import React from 'react'

var categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4']
var courseTypes = ['Digital', 'In-Person']
var levels = ['Beginner', 'Intermediate', 'Expert']

const FilterItem = () => {
  return (
    <div className="flex flex-col gap-7 my-2">
      <section>
        <h3 className="text-lg font-semibold mb-3">Level</h3>
        <div className="flex flex-wrap gap-2">
          {levels.map((level) => (
            <React.Fragment key={level}>
              <Chip label={level} />
            </React.Fragment>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-3">Categories</h3>
        <div className="flex flex-col gap-3">
          {categories.map((category, i) => (
            <React.Fragment key={category}>
              <Checkbox label={category} />
              {i < categories.length - 1 && <Divider flexItem />}
            </React.Fragment>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-3">Course types</h3>
        <div className="flex flex-col gap-3">
          {courseTypes.map((type, i) => (
            <React.Fragment key={type}>
              <Checkbox label={type} />
              {i < courseTypes.length - 1 && <Divider flexItem />}
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  )
}

export default FilterItem
