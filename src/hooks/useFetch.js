import { useState, useEffect } from 'react'

const useFetch = url => {
    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        const fetchResource = async () => {
            try {
                let data = await (await fetch(url)).json()
                setData(data)
                setLoading(false)
            } catch (error) {
            setLoading(false)
            setError(error)
            }
        }
        fetchResource()
    }, [url])
    return { data, loading, error }
}

export default useFetch
