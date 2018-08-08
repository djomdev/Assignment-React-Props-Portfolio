import React from 'react';
import SkillList from './components/skillList.js';
import EducationHistory from './components/educationHistory.js';
import WorkHistory from './components/workHistory.js';
import { skills, eduList, jobsList } from './data/datasource.js';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <section>
          <h4>Skills</h4>
          <div className="skills-list">
            {skills.map(function (eachSkill) {
              return <SkillList theSkillList={eachSkill} />
            })}
          </div>
        </section>

        <section>
          <h4>Education</h4>
          <div className="degree-list">
            {eduList.map(function (eachHistory) {
              return <EducationHistory history={eachHistory} />
            })}
          </div>
        </section>


        <section>
          <h4>Work Experience</h4>
          <div className="job-timeline">
            {jobsList.map(function (eachJob) {
              return <WorkHistory jobs={eachJob} />
            })}
          </div>
        </section>

      </div>
    );
  }
}

export default App;
