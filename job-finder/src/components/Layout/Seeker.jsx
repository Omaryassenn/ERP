import './Seeker.css'
const Seeker = ()=>{
    return(
        <>
            <div className="Card">
                <h3 className="name">Hagar Hussam</h3>
                <span className="job">
                    <span>
                        <h3>Job title</h3>
                        <p>Software Engineer</p>
                    </span>
                    <span>
                        <h3>Experience</h3>
                        <p>1-2 Years</p>
                    </span>
                </span>
                <span className="Education">
                    <span>
                        <h3>Education</h3>
                        <p>Software Engineer</p>
                    </span>
                    <span>
                        <h3>SKills</h3>
                        <p>1-2 Years</p>
                    </span>
                </span>
                <button className="primary"> Review CV</button>
            </div>
           
        </>
    )

}
export default Seeker