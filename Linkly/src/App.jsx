import "./App.css";
import ProfileImg from "./assets/profileimg.jpg";
import Instagram from "./assets/instagram.png";
import Linkedin from "./assets/linkedin.png";
import Github from "./assets/github.png";
import { useState, useEffect } from "react";

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/balzaNeli/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <div className="page-wrapper">
      <div className="profile">
        <img src={ProfileImg} className="profileImg" alt="profile" />
        <h1 id="profileH1">
          <strong>Caua Balzaneli</strong>
        </h1>
        <p>Voce, em uma pagina.</p>
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
        <p>Projetos do Github:</p>
      </div>

      <div className="link-section">
        {repos.map((repo) => (
          <a href={repo.html_url} target="_blank" key={repo.id} className="link-card">
            <span>{repo.name}</span>
            <p>{repo.description}</p>
          </a>
        ))}
      </div>

      <div className="footer"></div>
    </div>
  );
}

export default App;