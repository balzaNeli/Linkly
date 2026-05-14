import "./App.css";
import ProfileImg from "./assets/profileimg.jpg";
import Instagram from "./assets/instagram.png";
import Linkedin from "./assets/linkedin.png";
import Github from "./assets/github.png";
function App() {
  return (
    <>
      <div className="page-wrapper">
        <div className="profile">
          <img src={ProfileImg} className="profileImg" />
          <h1 id="profileH1">
            <strong>Cauã Balzaneli</strong>
          </h1>
          <p>Você, em uma página.</p>
          <div className="links-media">
            <a href="https://www.instagram.com/balzaneli/">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <img src={Linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/balzaNeli">
              <img src={Github} alt="Github" />
            </a>
          </div>
        </div>

        <div className="link-section"></div>

        <div className="footer"></div>
      </div>
    </>
  );
}

export default App;
