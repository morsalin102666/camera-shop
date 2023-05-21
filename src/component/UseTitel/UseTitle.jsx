import { useEffect } from "react"

const useTitel = title => {
    useEffect( () => {
        document.title = `${title} - Camera Shop`
    }, [title])
}

export default useTitel