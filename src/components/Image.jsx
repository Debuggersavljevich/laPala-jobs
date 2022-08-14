import React from 'react'

const Image = ({url, desc=''}) => {
  return (
    <div className="flex-2 p-2">
        <img src="src\assets\images\insure.svg" alt={desc} />
    </div>
  )
}

export default Image