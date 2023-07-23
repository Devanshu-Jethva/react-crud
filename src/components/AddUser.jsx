import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAddUser } from '../query/userQuery';


export const AddUser = () => {

  const { register, handleSubmit } = useForm()

  var navigate = useNavigate();

  const { data, isLoading, mutate } = useAddUser();

  const submit = async (formdata) => {
    const newUser = {
      name: formdata.name,
      age: formdata.age,
      email: formdata.email,
      isActive: formdata.isActive === "active" ? true : false,
    }

    mutate(newUser)

    if (data?.status === 201) {
      toast.success('🦄 Wow so easy!', {
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


      <form onSubmit={handleSubmit(submit)} className='form'>
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
