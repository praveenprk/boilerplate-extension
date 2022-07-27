import React from 'react'

const Greeting = ({name}) => {
  return (
    <h6>
      {name ? `Hey ${name}` : `Hi User`}
    </h6>
  )
}

export default Greeting