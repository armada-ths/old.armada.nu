import React, { useState, useEffect, useRef } from 'react'

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
    const [activeId, setActiveId] = useState('') //Used for higlighting the button that is clicked
    const scrollRef = useRef(0) //We check how much we scrolled and we don't want this to spam update on rerender
    //Here we sideload an observer to track which part of the screen we are
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    const id = entry.target.getAttribute('id')! //Get all elements that have ids that check intersections
                    if (entry.isIntersecting) {
                        setActiveId(id)
                        scrollRef.current = window.scrollY //On intersection record the Y-position
                    } else {
                        const diff = scrollRef.current - window.scrollY
                        const isScrollingUp = diff > 0 //If this value is positive then user is scrolling up
                        const currentIndex = headings.findIndex(
                            h => h.id === id
                        ) //Get the index in the array for the current highlighted item
                        const prevEntry = headings[currentIndex - 1]
                        const prevId = prevEntry?.id //Get the previous items id, but set a ? in case we are at the top of the page
                        if (isScrollingUp && prevId) {
                            setActiveId(id)
                        }
                    }
                })
            },
            {
                rootMargin: '0% 0% -75% 0%',
            }
        )

        headings.forEach(heading => {
            const elem = document.getElementById(heading.id) //Get the elements of the headings in the array and observe them
            if (elem) {
                observer.observe(elem)
            }
        })
    }) //Bug fix: Don't add an empty parameter like every tutorial and site tells you to.
    return (
        <div>
            <h2 id='ignore'>Table Of Contents</h2>
            <ul>
                {headings?.map((heading, index) => {
                    const id = heading.id || heading.text.toLowerCase()
                    const activeClass =
                        activeId === id ? 'active' : 'not-active'
                    const indentation = {
                        2: ' indent-1',
                        3: ' indent-2',
                        4: ' indent-3',
                    } //We do this to assign multiple classes and to control the indentations independently
                    const level = heading.level as keyof typeof indentation
                    const paddingClass = indentation[level] ?? '' //If indentation is null then no class is added, otherwise 3 or 4 is added
                    return (
                        <li key={index} onClick={() => setActiveId(id)}>
                            <a
                                href={`#${id}`}
                                className={activeClass + paddingClass}
                            >
                                {heading.text}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SideBarContents
