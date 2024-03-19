import logo from './logo.svg';
import './App.css';
const my_details={
  "Name":"Haripriya Banerjee",
  "email":"haripriya891873@gmail.com",
  "tel":"8918737785",

  socialmedia:
    {
      "LinkedInUrl":"https://www.linkedin.com/in/haripriya-banerjee-5a95771a1/",
      "GitHubUrl":"https://github.com/Haripriya-Banerjee"
    },
    
  education:
    {
      "Dptname":"AEIE",
      "CGPA":"8.43",
      "class":"8th sem"
    },
  projects:[
  {
    title:"My_Food_Blog",
    description:"I make a webpage, using HTML&CSS.", 
    url:"https://trusting-wilson-d84047.netlify.app/"
  },
  {
    title:"My_Portfolio", 
    description:"I make this website about me.", 
    url:"https://trusting-villani-f616b8.netlify.app/"
  },
  {
    title:"My_Visit",
    description:"Visit My place",
    url:"https://friendly-wilson-946fba.netlify.app/"
  }
  ],
  imageUrl:"myPhoto.jpg",
  width:"20%",
  height:"20%"
}
function Intro(){
  return(
    <>
      <div>
        <h2 class="head">{my_details.Name}</h2>
        <div class="para">
        <p class="para">Email: {my_details.email}</p>
        <p class="para">Tel No: {my_details.tel}</p>

        </div>
       
      </div>
    </>
  )
}

function App(){
  return(
    <>
    {/* <h1>Welcome</h1> */}
    <Intro/>
    <Education/>
    <Contact/>
    <Image/>
    <Project/>
    </>
  )
}
function Image(){
  return(
    <>
    <div class="col-left">
    <img src={my_details.imageUrl} width={my_details.width} height={my_details.height} class="img_p"></img>
    </div> 
    </>
  )
}
const About=()=>{
  return(
    <div>
      <Image/>
      <Intro/>
    </div>
  );
};
const Contact=()=>{
  return(
    <>
      <div class="conct">
        <h2>Contact Details</h2>
        <p>LinkedIn : <a href={my_details.socialmedia.LinkedInUrl}>LinkedIn Profile</a></p>
        <p>GitHub : <a href={my_details.socialmedia.GitHubUrl}>GitHub Profile</a></p>
      </div>
    </>
  );
}
function Education(){
  return(
    <>
    <div class="edu">
    <h2>Education</h2>
    <p>Department: {my_details.education.Dptname}</p>
    <p>CGPA: {my_details.education.CGPA}</p>
    <p>Class: {my_details.education.class}</p>
    </div>
    
    </>
  );
}
function Project(){
    return (
      my_details.projects.map((project, ind) => (
        <>
        <div class="proj">
          <ul>
            <li>
              <a href = {project.url}>{project.title}</a>: {project.description}
            </li>
          </ul>
        </div>

        </>
      ))
    )
}

export default App;
