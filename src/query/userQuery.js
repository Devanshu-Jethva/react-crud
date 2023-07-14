import axios from "axios"
import { useMutation, useQuery } from "react-query"

export const getAllusers = async () => {
    return await axios.get("https://node5.onrender.com/user/user")
}

export const useFetchUsers = () => {
    return useQuery("getAllUsers", getAllusers)
}

export const addUser = async (newUser) => {
    return await axios.post("https://node5.onrender.com/user/user", newUser)
}

export const useAddUser = () => {
    return useMutation("addUser", addUser, {

        onSuccess: (data) => {
            console.log('post data success', data)
            //navigate...
        },
        onError: (error) => {
            console.log('post data error', error)
        }
    })
}