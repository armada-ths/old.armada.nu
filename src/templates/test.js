import React from 'react'

const Page = (props) => {
  return (<>
        <div
            dangerouslySetInnerHTML={{ __html: props.html }}
        />
        {props.children}
    </>)
}

export default Page