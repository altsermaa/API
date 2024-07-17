import React from 'react'

function Tag({tag, style}) {
  return (
    <div className='py-1 px-2.5 border w-fit rounded-lg mb-4' style={style}>
      {tag}
    </div>
  )
}

export default Tag
