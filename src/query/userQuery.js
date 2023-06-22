import axios from "axios"
import { useQuery } from "react-query"

export const getAllusers = async () => {
    return await axios.get("https://node5.onrender.com/user/user")
}

export const useFetchUserData = () => {
    return useQuery("getAllUsers", getAllusers)
}