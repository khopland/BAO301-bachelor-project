import { FC } from 'react';
import 'beercss';

const FilterItem = () => {
  return (
    <div className="flex-col gap-5">
        <div>
            <h1 className='m-2 text-base bold'>Level</h1>
            <a className="chip border">
                <i className="small">done</i>
                <span className='bold'>Expert</span>
            </a>
            <a className="chip border">
                <span className='bold'>Beginner</span>
            </a>
            
        </div>
        <br />
        <div>
            <h1 className='m-2 text-base bold'>Categories</h1>
            <label className='checkbox'>
                <input type="checkbox"></input>
                <span>Cat 01</span>
            </label>
            <div className='small-divider'></div>
            <label className='checkbox'>
                <input type="checkbox"></input>
                <span>Cat 02</span>
            </label>
            <div className='small-divider'></div>
                        <label className='checkbox'>
                <input type="checkbox"></input>
                <span>Cat 03</span>
            </label>
            <div className='small-divider'></div>
            <label className='checkbox'>
                <input type="checkbox"></input>
                <span>Cat 04</span>
            </label>
            <div className='small-divider'></div>
        </div>
        <br />
        <div>
            <h1 className='m-2 text-base bold'>Course types</h1>
            <label className='checkbox'>
                <input type="checkbox"></input>
                <span>Type 01</span>
            </label>
            <div className='small-divider'></div>
            <label className='checkbox'>
                <input type="checkbox"></input>
                <span>Type 02</span>
            </label>
            <div className='small-divider'></div>
                        <label className='checkbox'>
                <input type="checkbox"></input>
                <span>Type 03</span>
            </label>
            <div className='small-divider'></div>
            <label className='checkbox'>
                <input type="checkbox"></input>
                <span>Type 04</span>
            </label>
            <div className='small-divider'></div>
        </div>
    </div>
  );
};

export default FilterItem;
