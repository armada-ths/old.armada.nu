import React from 'react'

export type Heading = {
    text: string
    level: number
    id: string
}

type Props = {
    headings: Heading[]
}

const SideBarContents = (props: Props) => {
    const { headings } = props
    return (
        <div>
            <h2>Table Of Contents</h2>
            <ul>
                {headings?.map((heading, index) => {
                    const id = heading.id
                    return (
                        <li key={index}>
                            <a href={`#${id}`}>{heading.text}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SideBarContents
