import { useState, useEffect } from 'react'
import { window } from 'browser-monads' //npm i browser-monads

/* Credit to joshcawthorne for this React Hook https://gist.github.com/joshcawthorne/0a518b164658510f4eed74d0c4e8d003 */

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    })

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize
}

export default useWindowSize
