import React from 'react'

interface IText {
  text: string;
}

const NoResults = ({text}: IText) => {
  return (
    <div>NoResults</div>
  )
}

export default NoResults