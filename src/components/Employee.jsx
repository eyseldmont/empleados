import "../styles/employeeCard.scss"
import Repeat from "../assets/Repeat.svg"
function Employee(){
    return(
        <div className="card-container">
           <img className="card-img" src={`../eysel.jpg`} alt="employee pic"/>
           <div className="card-text">
                <p className="card-name">FirstName LastName</p>
                <p className="card-position">Position</p>
           </div>
           <img className="refresh-icon" src={Repeat}></img>
        </div>
    )



}

export default Employee;