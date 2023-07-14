import { Delete, Edit, RemoveRedEye } from '@mui/icons-material'
import { CircularProgress, IconButton } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GetUser } from './GetUser'
import { useFetchUsers } from '../query/userQuery'

export const GetAllUsers = () => {

  const { data, isLoading, isError } = useFetchUsers();
  console.log(data);
  const getAllUsers = async () => {
    if (data?.status === 200) {
      toast.success('Data fetched successfully....', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  useEffect(() => {

    getAllUsers()

  }, [isLoading])

  const deleteUser = async (id) => {
    const res = await axios.delete("https://node5.onrender.com/user/user/" + id)
    if (res.status === 204) {
      toast.success("record deleted....", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      getAllUsers();
    }
  }


  return (
    <div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <br />
      <button className='btn btn-outline-dark' onClick={getAllUsers}>Get Data</button>
      <br />
      <br />




      {
        isLoading ? <CircularProgress /> :

          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Age</th>
                <th scope="col">IsActive</th>
                <th scope="col">Action</th>
                <th scope="col">See User</th>
                <th scope="col">Update</th>
              </tr>
            </thead>
            <tbody>
              {
                data?.data?.data?.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user._id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.age}</td>
                      <td>{user.isActive ? "Active" : "In Active"}</td>
                      <td>
                        <button type='button' className='btn btn-outline-danger btn-sm' onClick={() => { deleteUser(user._id) }}>
                          <IconButton aria-label="delete">
                            <Delete fontSize='small' />
                          </IconButton>
                        </button>
                      </td>
                      <td>
                        <Link to={`/getuser/${user._id}`} className='btn btn-outline-info'>
                          <RemoveRedEye />
                        </Link>
                      </td>
                      <td>
                        <Link to={`/updateuser/${user._id}`} className='btn btn-outline-success'>
                          <Edit />
                        </Link>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
            <tfoot>
              <Link to={`/adduser`} className='btn btn-primary'>+ NEW USER</Link>
            </tfoot>
          </table>
      }
    </div>
  )
}
