import React, { useEffect, useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
}
    from 'mdb-react-ui-kit';
import Header from '../Comana/Header';
import axios from 'axios';
import { toast } from 'react-toastify';

function EditProfile() {

    const [edit,setedit]=useState({
        id:"",
        name:"",
        email:"",
        password:""
    })

    useEffect(()=>{
        getUser()
    },[])

    const getUser = async()=>{
        const res = await axios.get(`http://localhost:3000/users/${localStorage.getItem("Uid")}`)
        console.log(res.data)
        setedit(res.data)
    }

    const getchange=(e)=>{
        setedit({
            ...edit,
            [e.target.name]:e.target.value
        })
    }

    const getsubmit=async(e)=>{
         e.preventDefault();

         try {
            const res = await axios.put(`http://localhost:3000/users/${edit.id}`,edit)
            console.log(res.data)
            localStorage.setItem("Uname",edit.name)
            toast.success("Edited Profile ...")
         } catch (error) {
            toast.error("Api data not Found")
         }
    }

  return (
    <div>
      <Header />
          <MDBContainer fluid>

                <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                                <form action="" onSubmit={getsubmit}>

                                    <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Edit Profile</p>

                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <MDBIcon fas icon="user me-3" size='lg' />
                                        <MDBInput value={edit.name} onChange={getchange}  name='name' label='Your Name' id='form1' type='text' className='w-100' />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="envelope me-3" size='lg' />
                                        <MDBInput  value={edit.email} onChange={getchange}  name='email' label='Your Email' id='form2' type='email' />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="lock me-3" size='lg' />
                                        <MDBInput value={edit.password}  onChange={getchange}  name='password' label='Password' id='form3' type='password' />
                                    </div>


                                    <MDBBtn className='mb-4' size='lg'>Upadte</MDBBtn>

                                </form>
                            </MDBCol>

                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                            </MDBCol>

                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
    </div>
  )
}

export default EditProfile
