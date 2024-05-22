import './Login.css'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Footer from '../Layout/Footer';
import Nav from '../Layout/nav';

import { Link } from 'react-router-dom';
 const Login = () => {
    return(
        <>
        <Nav></Nav>
        <div className='container-lgn'>
         {/*  <div className='right-side'>
                <img src={img} alt="" />
            </div>*/ } 
         <div className='left-side'>
            <div className="form-container">
                    <h3 style={{fontSize: '30px' , textAlign:'start'}}>Welcome back!</h3>
                    
                    <Formik
                    initialValues={{ password: '', email: '' }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.password) {
                        errors.password = 'Required';
                        }
                        if (!values.email) {
                        errors.email = 'Required';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                    }}
                    >
                    {({ isSubmitting }) => (
                        <Form className='frm'>
                        <div className="form-group">

                            <label htmlFor="email" className="label">
                           Email <span style={{color:'red' , fontSize:'19px'}}>*</span></label>

                            <Field type="email" name="email" id="email" className="input-field" placeholder='JohnDoe@example.com' />
                            <ErrorMessage name="email" component="div" className="error-message" />
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="label">
                            Password <span style={{color:'red' , fontSize:'19px'}}>*</span></label>
                            <Field type="password" name="password" id="password" className="input-field"  placeholder='************'/>
                            <ErrorMessage name="password" component="div" className="error-message" />
                            
                        </div>
                        <button  type="submit" disabled={isSubmitting} className="submit-button">
                          <Link to='/completeprofile' style={{color:'white'}}>Login</Link>  
                        </button>
                        <p className='create'>Don't have an account?<Link to="/register"> Create one</Link>
                            </p>
                        </Form>
                    )}
                    </Formik>
                </div>
                    </div>
        </div>
        <Footer></Footer>
        </>  
    )
};
export default Login;