import MyDropzone from "../Ui/Dropzone";
import './complete-user-profile.css';
import React, { useState } from 'react';
import './Login.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Nav from "../Layout/nav";
import Footer from "../Layout/Footer";

const validationSchema = Yup.object().shape({
  jobTitle: Yup.string().required('Job title is required'),
  educationLevel: Yup.string().required('Education level is required'),
  experienceLevel: Yup.string().required('Experience level is required'),
  skills: Yup.string().required('Skills are required'),
});

const educationLevels = ['1', '2', '3', '4'];
const experienceLevels = ['0-1 years', '1-2 years', '2-3 years', '3+ years'];

const CompleteProfile = () => {
  const [tagsInput, setTagsInput] = useState('');
  const [savedTags, setSavedTags] = useState([]);

  const handleKeyDown = (event, setFieldValue) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const tag = tagsInput.trim();
      if (tag !== '') {
        setSavedTags((prevTags) => {
          const newTags = [...prevTags, tag];
          setFieldValue('skills', newTags.join(', '));
          console.log(newTags)
          return newTags;
        });
        setTagsInput('');
      }
    }
  };

  const tagsHandler = (e) => {
    setTagsInput(e.target.value);
  };

  const initialValues = {
    jobTitle: '',
    educationLevel: '',
    experienceLevel: '',
    skills: '',
  };

  return (
    <>
      <Nav />
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
              {({ setFieldValue }) => (
                <Form className="frm">
                  <div className="form-group">
                    <label htmlFor="jobTitle" className="label">Job Title <span style={{color:'red' , fontSize:'19px'}}>*</span></label>
                    <Field type="text" id="jobTitle" name="jobTitle" className="input-field" placeholder="Enter your job title here" />
                    <ErrorMessage name="jobTitle" component="div" className="error-message" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="educationLevel" className="label">Education Level <span style={{color:'red' , fontSize:'19px'}}>*</span></label>
                    <Field as="select" id="educationLevel" name="educationLevel" className="input-field">
                      <option value="">Select Education Level</option>
                      {educationLevels.map(level => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </Field>
                    <ErrorMessage name="educationLevel" component="div" className="error-message" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="experienceLevel" className="label">Experience Level <span style={{color:'red' , fontSize:'19px'}}>*</span></label>
                    <Field as="select" id="experienceLevel" name="experienceLevel" className="input-field">
                      <option value="">Select Experience Level</option>
                      {experienceLevels.map(level => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </Field>
                    <ErrorMessage name="experienceLevel" component="div" className="error-message" />
                  </div>
                  <div className="Tags title form-group">
                    <label htmlFor="skills" className="label">Skills <span style={{color:'red' , fontSize:'19px'}}>*</span></label>
                    <input
                      type="text"
                      id="tagsInput"
                      className="input-field"
                      value={tagsInput}
                      onKeyDown={(e) => handleKeyDown(e, setFieldValue)}
                      onChange={tagsHandler}
                      placeholder="Enter your skills here"
                    />
                    <ErrorMessage name="skills" component="div" className="error-message" />
                    <div id="tagsContainer" className="tags-container">
                      {savedTags.map((tag, index) => (
                        <span key={index} className="primary tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Field type="hidden" name="skills" value={savedTags.join(', ')} />
                  </div>
                  <button type="submit" className="submit-button">Submit</button>
                </Form>
              )}
            </Formik>
          </div>
          <div className="right">
            <MyDropzone />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default CompleteProfile;
