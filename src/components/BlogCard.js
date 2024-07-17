import React from 'react'
import { format } from 'date-fns';
import Tag from './Tag';

export const BlogCard = ({image, title, date, tags }) => {
  const now = new Date(date);
  const formattedDate = format(now, 'MMMM dd, yyyy');

  return (
    <div className='border rounded p-4 flex flex-col gap-4'>
        <img src={image} className='rounded flex-1' />
        <div className='flex flex-col flex-1 gap-4'>
          <div className='flex gap-2 flex-wrap'>
            {tags.map((tag) => (
             <Tag key={tag} tag={tag} style ={{color: '#6c86fd', background: '#f7f8ff', fontSize: '14px'}} />
            ))}
          </div> 
            <b className='text-2xl'>{title}</b>
            <p className='text-gray-500'>{formattedDate}</p>
        </div>
    </div>
  )
}


