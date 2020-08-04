import React from "react";
import './ProfileSection.css';
import '../defaults.css';

export default ProfileSection = ()=> {
  return (
    <section class="light-sect">
      <img src="https://avatars2.githubusercontent.com/u/28673457?s=70)](https://github.com/RaphGL" />
      <h3>Rafael Lopes</h3>
      <h4>bad programmer, avid linux user and waste of oxygen</h4>
      <div>
        <a className="github-button" href="https://github.com/raphgl" target="_blank">Follow @RaphGL</a>
      </div>
    </section>
  );
}
