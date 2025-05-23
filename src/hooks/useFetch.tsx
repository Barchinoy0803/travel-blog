import { useEffect, useState } from "react"
import { api } from "../api"
import { ITravelBlog } from "../types"

export const useFetch = <T = any>(endpoint: string, reload?: boolean, params?: object) => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        api
            .get(endpoint, params)
            .then((res) => setData(res.data))
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }, [endpoint, reload, JSON.stringify(params)])

    return { data, loading, error }
}
