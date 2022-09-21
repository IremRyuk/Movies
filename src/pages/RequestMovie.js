import React, { useState } from "react";
import '../styles/Request Styles/request.css'
export default function RequestMovie(){
    let[inputDate,setInputDate] = useState()
    let[inputName,setInputName] = useState()
    let[inputTextArea,setTextArea] = useState()
    class newMovie {
        constructor(name,description,age) {
            this.name = name
            this.description = description
            this.age = age
        }
    }
    let fromClick = (e) =>{
e.preventDefault()
let sendInfo = new newMovie(inputName,inputTextArea,inputDate)
console.log('info will be sent to Gmail',sendInfo)
alert('Data in console.log(),We Reseived Your Request Thank You.')
    }
return(
    <div className="report">
        <form className="report-form" onSubmit={fromClick}>
        <center><strong className="report-form-p">if you want to see new movie, just text us and we will add your favourite movie as soon as we can</strong></center>
            <center><p className="report-name">Name Of movie</p>
            <input type='text' onChange={(e)=>setInputName(e.target.value)} className="report-form-name" placeholder="Movie Name..." required/>
            <p className="report-form-descr">Describe your movie</p>
            <textarea className="report-textarea" onChange={(e)=>setTextArea(e.target.value)} placeholder="Describe Your Movie..." required/>
            <p className="report-form-date-name">When was your movie released?(Month,Day,Year)</p>
            <input type='date' className="report-form-date" onChange={(e)=>setInputDate(e.target.value)} required/>
            <p className="report-form-submit-name">Click Submit To Send Movie Request</p>
            <input type="submit" className="report-form-submit" value='Submit'/>
            </center>
        </form>
    </div>
)
}