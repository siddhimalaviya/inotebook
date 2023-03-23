
import React from 'react';


const About = (props) => {

  return (
    <>
      <div className='container-fluid'>
        <div className=' row ' >
          <div className="card text-white col-10" style={{backgroundColor: props.mode==='dark' ? "#B42B51" : "#FFFBC1"}}>
            <div className="card-body">
              <p className="card-text display-5" style={{color: props.mode === 'dark'? 'WHITE': 'BLACK'}}>Launch Coming soon...</p>
              <p className="card-title display-3" style={{color: props.mode === 'dark'? 'WHITE': 'BLACK'}}><b> Top <br />Secret <br />For Now</b></p>
            </div>
          </div>
          <div className="card mx-3 text-black col-2" style={{ width: "9rem", backgroundColor: props.mode==='dark' ? "#E63E6D" : "#F3C892"}}>
            <div className="card-body">
              <span className="card-title verticaltext " style={{color: props.mode === 'dark'? 'WHITE': 'BLACK'}}> <b>About Us</b></span>

            </div>
          </div>
        </div>
 
      <hr />




      <h1 className='text-center' style={{color: props.mode === 'dark'? 'WHITE': 'BLACK'}}>You can Add Your Regular Activity</h1>
      <div className="row">
        <div className="card mx-2 text-black col-md-4" style={{ width: "22rem",  backgroundColor:props.mode==='light' ? "#DEFBC2" : "#459D72"  }}>
          <div className='my-2'>
            <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" className="card-img-top" alt="..."  style={{height:"205px"}}/>
            <h1 className=" text-dark  text-dark circle">  Daily Tasks </h1>
          </div>
          <div className="card-body">
            <h2 className="card-title"> <b>Daily Task</b></h2>
            <ul>
              <li className='fs-3'>Warm up</li>
              <li className='fs-3'>Turn in Google Classroom Assignment</li>
              <li className='fs-3'>Reading log</li>
              <li className='fs-3'>Respond to blog comments</li>

            </ul>
          </div>
        </div>
        <div className="card mx-2 text-black col-md-4" style={{ width: "22rem", backgroundColor:props.mode==='light' ? "#DEFBC2" : "#459D72"}}>
          <div className='my-2'>
            <img src="https://cdn.pixabay.com/photo/2021/07/09/13/51/notes-6399119__340.jpg" className="card-img-top rounded-50" alt="..." style={{height:"205px"}} />
            <h1 className=" text-dark  text-dark circle">  First Period </h1>

          </div>
          <div className="card-body">
            <h2 className="card-title"> <b>First Period TO Do's</b></h2>
            <ul>
              <li className='fs-3'>Finish reading Chapter?</li>
            </ul>
          </div>
        </div>
        <div className="card mx-2 text-black col-md-4" style={{ width: "22rem", backgroundColor:props.mode==='light' ? "#DEFBC2" : "#459D72" }}>
          <div className='my-2'>
            <img src="https://media.istockphoto.com/id/1168750663/photo/checklist.jpg?b=1&s=612x612&w=0&k=20&c=hitJruSHCRI7GmhVSiYyo00Va6m3sByhKtZZxmnot7o=" className="card-img-top" alt="..." style={{height:"205px"}} />
            <h1 className=" text-dark  text-dark circle">  Second Period </h1>
          </div>
          <div className="card-body">
            <h2 className="card-title"> <b>Second Period TO Do's</b></h2>
            <ul>
              <li className='fs-3'>Finish Rube GoldBerg machine up</li>
              <li className='fs-3'>Documentation Video</li>
              <li className='fs-3'>Check rubric for guidelines</li>
            </ul>
          </div>
        </div>
        <p></p>
        <hr/>
        <div className="row">
          <div className="card col-md-4 my-2"  style={{color: props.mode === 'dark'? 'white': 'black',backgroundColor: props.mode==='dark' ? "#BF9270" : "#FFEDDB", width: "20rem"}}>
            <div className="card-body">
              <p className="card-title display-3 text-center"><b> What <br />We <br />Do??</b></p>
            </div>
          </div>
          <div className="card col-md-8 my-2 mx-3" style={{color: props.mode === 'dark'? 'WHITE': 'black', backgroundColor: props.mode==='dark' ? "#E3B7A0" : "#EDCDBB"}}>
            <div className="card-body">
              <p className="card-text display-5 fs-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis ratione corporis, distinctio doloremque minus ducimus necessitatibus voluptatem reprehenderit illum pariatur dolore vitae. Magni repellat harum minus assumenda dolor omnis ducimus.</p>
             
            </div>
          </div>
        </div>

      </div>

    </div>
    </>
  )
}

export default About