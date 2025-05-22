import { useEffect, useState } from "react"
import { api } from "../api"
import { ITravelBlog } from "../types"

export const useFetch = (endpoint: string, reload: boolean) => {
    const [data, setData] = useState<ITravelBlog[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        api
            .get(endpoint)
            .then((res) => setData(res.data))
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }, [endpoint, reload])

    return { data, loading, error }
}