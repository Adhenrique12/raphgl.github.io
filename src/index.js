import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.js";
import ProfileSection from "./components/ProfileSection.js";
import ProjectThumbnail from "./components/ProjectThumbnail.js";
import SectionContainer from "./components/SectionContainer.js"; 
import InfoRect from "./components/InfoRect.js"; // List items array not yet implemented
import Footer from "./components/Footer.js";

function App() {
  return (
    <div>
      <Header />
      <ProfileSection />
      <SectionContainer theme="dark" title="Projects">
        <ProjectThumbnail projectName="My dotfiles" img="#" href="#" />
        <ProjectThumbnail projectName="Dracula/firefox" img="#" href="#" />
        <ProjectThumbnail projectName="Dracula/rofi" img="#" />
        <ProjectThumbnail projectName="Stowit" img="#" href="#" />
      </SectionContainer>
      <SectionContainer theme="light" title="What I Use">
        <InfoRect title="Languages" />
        <InfoRect title="Tools that Make My Life Easier" />
        <InfoRect title="Libraries and Frameworks" />
        <InfoRect title="Software" />
      </SectionContainer>
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
