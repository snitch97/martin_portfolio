import "./Profile.css";
const resume = require("../../Documents/SuzukiIwao full-stack Resume.pdf");

function MyProfile() {
  return (
    <div className="profile" id="profile">
      <div className="profile-text">
        <p>Hello! My name is</p>
        <h1>Suzuki Iwao.</h1>
        <h1>I build things for the web.</h1>
        <a href={resume} target="_blank" rel="noreferrer">
          <button>Resume</button>
        </a>
      </div>
    </div>
  );
}

export default MyProfile;
