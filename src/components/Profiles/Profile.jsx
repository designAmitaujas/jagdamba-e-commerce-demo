import React from 'react'
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from "react-router";
import Header from "../Header";
import Footer from '../Footer/Footer';

const Profile = () => {
  const navigate = useNavigate();
  return (
    <>
    <Header/>
   


   <div className="bg-light py-3 py-md-5 " style={{marginTop:"90px"}}>
        <div className="container-fluid">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
              <div className="bg-white p-4 p-md-5 rounded shadow-sm">
                <div className="row">
                  <div className="col-12">
                    <div className=" ">
                      <a href="#!">
                        <h2>My Profile Page</h2>
                        
                      </a>
                    </div>
                  </div>
                </div>
                <form onSubmit={() => navigate("/home")}>
               
                  <div className="row gy-3 gy-md-4 overflow-hidden">
                    <div className="col-6">
                      
                      <div className="input-group">
                        <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        id="firstName"
                        placeholder="First Name"
                        required
                      />
                      </div>
                    </div>
                    <div className="col-6">
                      
                      <div className="input-group">
                        <input
                        type="text"
                        className="form-control"
                        name="LastName"
                        id="LastName"
                        placeholder="Last Name"
                        required
                      />
                      </div>
                    </div>

                    <div className="col-12">
                    <div className="input-group px-3 ">
                    <Form.Check
                    type="radio"
                    label="Male"
                    name="radioGroup"
                    id="option1" style={{marginRight:"50px"}}
                    className='px-3 '
                />
                    <Form.Check
                    type="radio"
                    label="Female"
                    name="radioGroup"
                    id="option2"
                    className='px-3'
                />
                </div>
</div>

<div className="col-6">
                      
                      <div className="input-group">
                        <input
                        type="tel"
                        className="form-control"
                        name="number"
                        id="number"
                        placeholder="Mobile Number"
                        required
                      />
                      </div>
                    </div>
                    <div className="col-6">
                      
                      <div className="input-group">
                        <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                      />
                      </div>
                    </div>
                    <div className="col-12">
                      
                      <div className="input-group">
                      <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Address" className="p-2">

</textarea>
                      </div>
                    </div>



                   
                  
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          className="btn btn-primary btn-lg"
                          type="submit"
                        >
                          SAVE CHANGES
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                {/* <div className="row">
                  <div className="col-12">
                    <hr className="mt-5 mb-4 border-secondary-subtle" />
                    <p className="m-0 text-secondary text-center">
                      Create an Account{" "}
                      <Link
                        className="link-primary text-decoration-none"
                        to={"/register"}
                      >
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Profile