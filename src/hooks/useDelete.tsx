import { useState } from "react"
import { api } from "../api"

export const useDelete = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const deleteData = (endpoint: string) => {
        return api
            .delete(endpoint)
            .then((res) => {
                if (res.status === 201) {
                    console.log("successfully deleted");
                }
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    return { deleteData, loading, error }
}