import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UpdateUser = () => {

  const id = useParams().id

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: async () => {
      const res = await axios.get("https://node5.onrender.com/user/user/" + id)
      console.log(res.data.data);
      return (
        {
          name: res.data.data.name,
          email: res.data.data.email,
          age: res.data.data.age,
        }
      )
    }
  })


  const updateUser = async (data) => {

    const newUser = {
      name: data.name,
      age: data.age,
      email: data.email,
      isActive: data.isActive === "active" ? true : false,
    }

    const res = await axios.put("https://node5.onrender.com/user/user/" + id, newUser)
    console.log(res);
    if (res.status == 200) {
      toast.success('Data updated successfully...', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/getallusers")
    }
  }




  return (
    <>
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


      <form onSubmit={handleSubmit(updateUser)} className='form'>
        <div className='mb-3'>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            {...register("name")}
          />

        </div>

        <div>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            {...register("email")}
          />

        </div>

        <div className='mb-3'>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            {...register("age")}
          />

        </div>

        <div className='mb-3'>
          <label htmlFor="active">isActive :</label>
          <input type="radio" id='active' value="active" name='status' {...register("isActive")}></input>
          <label htmlFor="notActive">isNotActive :</label>
          <input type="radio" id='notActive' value="notActive" name='status' {...register("isActive")}></input>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

    </>
  )
}
