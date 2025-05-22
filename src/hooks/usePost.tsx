import { useState } from "react"
import { api } from "../api";

export const usePost = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const post = (endpoint: string, data: object) => {
        setLoading(true)
        return api
            .post(endpoint, data)
            .then((res) => {
                if (res.status === 201) {
                    setData(res.data)
                }
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return { loading, data, error, post }
}