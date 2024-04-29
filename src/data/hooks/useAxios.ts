import { useEffect, useState } from "react"

export default function useAxios(configRequest: { axiosIntance: any; method: any; url: any; othersConfig?: {} | undefined }) {
const {axiosIntance, method, url, othersConfig = {} } = configRequest
const [data, setData] = useState<any>()
const [loading, setLoading] = useState(true)
const [error, setError] = useState('')


useEffect(()=>{
    const fetchData = async () => {
        try {
            const res = await axiosIntance[method.toLowerCase()](url, {
                ...othersConfig,
            })
            setData(res.data)
        } catch(err: any) {
            console.log(err.message)
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    fetchData()


},[])

return [data,loading,error]
}
