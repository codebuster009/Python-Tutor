import "./index.css"
import Photo from "../assets/Mentorship.webp"
const CompanyEducation = () => {
    return(
        <div className="course-parent">
        <div>
            <div className="course-title">Concept Understandings </div>
            <div className="course-description">Learn coding, math, science, computer science, and 100+ other subjects with personalized tutoring. Get 1-on-1 online support to build conceptual understanding for your class or course.</div>
            </div>
            <div className="img"><img src={Photo} width={450} height={350} alt="mentor" /></div>
        </div>
    )
}

export default CompanyEducation;