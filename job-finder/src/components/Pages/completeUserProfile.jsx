import MyDropzone from "../Ui/Dropzone"
import './complete-user-profile.css'
import React from 'react';
import './Login.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Nav from "../Layout/nav";
import Footer from "../Layout/Footer";
import SkillInput from "../Layout/skillInput";
  const validationSchema = Yup.object().shape({
    jobTitle: Yup.string().required('Job title is required'),
    educationLevel: Yup.string().required('Education level is required'),
    experienceLevel: Yup.string().required('Experience level is required'),
  });
  const educationLevels = ['1', '2', '3', '4'];
  
const experienceLevels = ['0-1 years', '1-2 years', '2-3 years', '3+ years'];
const completeProfile = ()=>{
  const initialValues = {
    jobTitle: '',
    educationLevel: '',
    experienceLevel: '',
  };
   return(
    <>
    <Nav></Nav>
    <div className="cntnr">
        
        <main className="main">
            <div className="lft">
            <span>
            <h3>Take a moment to complete your profile.</h3>
            <p>To make it easier for HR professionals to find your profile</p>
        </span>
            <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Handle form submission here
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="frm">
          <div  className="form-group">
            <label htmlFor="jobTitle"  className="label">Job Title</label>
            <Field type="text" id="jobTitle" name="jobTitle" className="input-field"/>
            <ErrorMessage name="jobTitle" component="div"className="error-message"/>
          </div>
          <div  className="form-group">
            <label htmlFor="educationLevel"  className="label">Education Level</label>
            <Field as="select" id="educationLevel" name="educationLevel" className="input-field">
              <option value="">Select Education Level</option>
              {educationLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </Field>
            <ErrorMessage name="educationLevel" component="div" className="error-message"/>
          </div>
          <div  className="form-group">
            <label htmlFor="experienceLevel"  className="label">Experience Level</label>
            <Field as="select" id="experienceLevel" name="experienceLevel" className="input-field">
              <option value="">Select Experience Level</option>
              {experienceLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </Field>
            <ErrorMessage name="experienceLevel" component="div" className="error-message" />
          </div>
          
          <button type="submit" className="submit-button">Submit</button>
        </Form>
      )}
    </Formik>
            </div>
            <div className="right">
                <MyDropzone></MyDropzone>
            </div>
        </main>
    </div>
    <Footer></Footer>
    </>
   ) 
}
export default completeProfile;