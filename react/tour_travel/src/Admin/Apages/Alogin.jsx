import React, { useEffect, useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Alogin() {


    const redirect = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("Aid")){
            redirect("/dash")
        }
    },[])

    const [form,setform]= useState({
        email:"",
        password:""
    })

    const getchange=(e)=>{
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const getsubmit=async(e)=>{
         e.preventDefault();

         try {
            const {email,password} =form
            if(email == "" || password == ""){
                console.log("Email and password field first..|")
                toast.error("Email and password field first..|")
                return false
            }

            const res = await axios.get(`http://localhost:3000/admin?email=${email}`)
            console.log(res.data)

            // email match
            if(res.data.length === 0){
                toast.error("Email does not Match ...! ")
                return false
            }

            const admin = res.data[0]
            console.log(admin)

            // password match
            if(admin.password != password){
                toast.error("Password does not Match..!")
                return false
            }

            console.log("login Successfully")
            localStorage.setItem("Aid",admin.id)
            localStorage.setItem("Aname",admin.name)
            toast.success("Admin login Successfully")
            redirect("/dash")

         } catch (error) {
            console.log("Api data not found",error)
            toast.error("Api Data not Found")
         }
    }



    return (
        <div>
            <MDBContainer fluid>

                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
                            <form onSubmit={getsubmit} action="">
                                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                                    <h2 className="fw-bold mb-2 text-uppercase text-light">Login</h2>
                                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                    <MDBInput value={form.email} name='email' onChange={getchange} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" />
                                    <MDBInput value={form.password} name='password' onChange={getchange} wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" />

                                    <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
                                    <MDBBtn outline className='mx-2 px-5 bg-light text-dark' size='lg'>
                                        Login
                                    </MDBBtn>



                                    <div>
                                        <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a></p>

                                    </div>
                                </MDBCardBody>

                            </form>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </div>
    )
}

export default Alogin
