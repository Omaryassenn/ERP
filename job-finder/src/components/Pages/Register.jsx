import './Login.css'
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Nav from '../Layout/nav';
import { Link } from 'react-router-dom';
import Footer from '../Layout/Footer';
 const Register = () => {
    return(
        <>
        <Nav></Nav>
        <div className='container-lgn' style={{marginTop:'76px'}}>
         {/*  <div className='right-side'>
                <img src={img} alt="" />
            </div>*/ } 
         <div className='left-side'>
            <div className="form-container">
                    <h3 style={{fontSize: '30px' , textAlign:'start'}}>Let's get started!</h3>
                    
                    <Formik
                    initialValues={{ role: '',
                    companyName: '',
                    industry: '',password: '', email: '' , name:'' , address:'' , phone:'' }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.password) {
                        errors.password = ' Password is required';
                        }
                        if (!values.email) {
                        errors.email = 'Email is required';
                        }
                        if (!values.name) {
                            errors.name = 'Name is required';
                            }
                        if (!values.address) {
                            errors.address = 'Address is required';
                            }   
                        if (!values.phone) {
                            errors.phone = 'Phone is required';
                            } 
                        if (values.role === 'HR') {
                            if (!values.companyName) {
                                errors.companyName = 'Company Name is required';
                            }
                            if (!values.industry) {
                                errors.industry = 'Industry is required';
                            }}
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                    }}
                    >
                    {({ isSubmitting , values, handleChange }) => (
                        <Form className='frm'>
                            <div className="form-group">
                            <label htmlFor="Name" className="label">
                            Name <span style={{color:'red' , fontSize:'19px'}}>*</span></label>
                            <Field type="Name" name="Name" id="Name" className="input-field"  placeholder='John Doe'/>
                            <ErrorMessage name="name" component="div" className="error-message" />
                            
                        </div>
                        
                        <div className="form-group">

                            <label htmlFor="email" className="label">
                           Email <span style={{color:'red' , fontSize:'19px'}}>*</span></label>

                            <Field type="email" name="email" id="email" className="input-field" placeholder='JohnDoe@example.com' />
                            <ErrorMessage name="email" component="div" className="error-message" />
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="Address" className="label">
                            Address <span style={{color:'red' , fontSize:'19px'}}>*</span></label>
                            <Field type="text" name="Address" id="Address" className="input-field"  placeholder='Ain-Shams, Cairo, Egypt'/>
                            <ErrorMessage name="address" component="div" className="error-message" />
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="Phone" className="label">
                            Phone <span style={{color:'red' , fontSize:'19px'}}>*</span></label>
                            <Field type="text" name="Phone" id="Phone" className="input-field"  placeholder='Ain-Shams, Cairo, Egypt'/>
                            <ErrorMessage name="phone" component="div" className="error-message" />
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="label">
                            Password <span style={{color:'red' , fontSize:'19px'}}>*</span></label>
                            <Field type="password" name="password" id="password" className="input-field"  placeholder='************'/>
                            <ErrorMessage name="password" component="div" className="error-message" />
                            
                        </div>
                        <div className="form-group">
        <label className="label">Role <span style={{color:'red' , fontSize:'19px'}}>*</span></label>
        <div className="radio-group">
          <label>
            <Field type="radio" name="role" value="HR" onChange={handleChange} />
            HR
          </label>
          <label>
            <Field type="radio" name="role" value="Job Seeker" onChange={handleChange} />
            Job Seeker
          </label>
        </div>
        <ErrorMessage name="role" component="div" className="error-message" />
      </div>
      {values.role === 'HR' && (
        <>
          <div className="form-group">
            <label htmlFor="companyName" className="label">
              Company Name <span style={{color:'red' , fontSize:'19px'}}>*</span>
            </label>
            <Field type="text" name="companyName" id="companyName" className="input-field" placeholder='Company Name'/>
            <ErrorMessage name="companyName" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="industry" className="label">
              Industry <span style={{color:'red' , fontSize:'19px'}}>*</span>
            </label>
            <Field type="text" name="industry" id="industry" className="input-field" placeholder='Industry'/>
            <ErrorMessage name="industry" component="div" className="error-message" />
          </div>
        </>
      )}
                        <button type="submit" disabled={isSubmitting} className="submit-button">
                            Register
                        </button>
                        <p className='create'>Already Have an account? <Link to='/login'>Sign in</Link></p>
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
export default Register;