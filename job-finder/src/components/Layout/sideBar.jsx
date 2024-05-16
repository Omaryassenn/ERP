import Nav from "./nav";
import Footer from "./Footer";
import './sideBar.css';
import React from 'react';
import { Formik, Form, Field } from 'formik';
import FilterIcon from "./FilterIcon";
const SideBar = ({ onExperienceChange })=>{
    return(
        <>
            <div className="sideBar">
                <aside>
                    <span style={{display:'flex' , alignItems:'center'}}><FilterIcon size={32} color="white" /> <h3>  Filters</h3></span>
                    <span>
                        <h3>Years of experience</h3>
                        <Formik
                            initialValues={{
                                range1: false,
                                range2: false,
                                range3: false,
                                range4: false,
                            }}
                            onSubmit={(values) => {
                                console.log(values);
                                // You can perform additional actions here if needed
                            }}
                            >
                            {({ values }) => (
                                <Form>
                                <label>
                                    <Field type="checkbox" name="range1" />
                                    0-1 years
                                </label>
                                <br />
                                <label>
                                    <Field type="checkbox" name="range2" />
                                    1-2 years
                                </label>
                                <br />
                                <label>
                                    <Field type="checkbox" name="range3" />
                                    2-3 years
                                </label>
                                <br />
                                <label>
                                    <Field type="checkbox" name="range4" />
                                    3+ years
                                </label>
                                <br />
                               
                                </Form>
                            )}
                            </Formik>
                            <h3>Education</h3>
                        <Formik
                            initialValues={{
                                doctorate: false,
                                masters: false,
                                bachelors: false,
                                associate: false,
                                diplome:false

                            }}
                            onSubmit={(values) => {
                                console.log(values);
                                // You can perform additional actions here if needed
                            }}
                            >
                            {({ values }) => (
                                <Form>
                                <label>
                                    <Field type="checkbox" name="doctorate" />
                                    0-1 years
                                </label>
                                <br />
                                <label>
                                    <Field type="checkbox" name="masters" />
                                    masters
                                </label>
                                <br />
                                <label>
                                    <Field type="checkbox" name="bachelors" />
                                    bachelors
                                </label>
                                <br />
                                <label>
                                    <Field type="checkbox" name="associate" />
                                    associate
                                </label>
                                <br />
                                <label>
                                    <Field type="checkbox" name="diplome" />
                                    diplome
                                </label>
                                <br />
                                <button type="submit" className="primary">Filter</button>
                                </Form>
                            )}
                            </Formik>
                    </span>
                </aside>
            </div>
            
        </>
    )
}
export default SideBar;