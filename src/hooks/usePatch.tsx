import { useState } from "react"
import { ITravelBlog } from "../types"
import { api } from "../api"

export const usePatch = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const patchData = (endpoint: string, data: ITravelBlog) => {
        setLoading(true)
        return api
            .put(endpoint, data)
            .then((res) => {
                if (res.status === 201) {
                    console.log('success');
                }
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    return {patchData, loading, error}
}