import React from 'react';
import './Benefits.css';
import benefitsMan from '../assets/benefits-man.png';
import finishFlag from '../assets/finish-flag.png';

const lorem = "Lorem ipsum dolor sit amet bhjhh is consectetur. Dis vitae id scelerisque pharetra vel dolor faucibus vitae. Elit dictum enim in porttitor risus sit.";

const stepsData = [
  { id: 1, title: "Real-world experience", top: '82%', left: '5%' },
  { id: 2, title: "Faster Skill Development", top: '70%', left: '15%' },
  { id: 3, title: "Employee engagement & retention", top: '57%', left: '25%' },
  { id: 4, title: "Increased productivity", top: '46%', left: '38%' },
];

const descriptionsData = [
  { id: 1, text: lorem, top: '92%', left: '-10%', lineOrigin: 'top-left' },
  { id: 2, text: lorem, top: '84%', left: '29%', lineOrigin: 'bottom-right' },
  { id: 3, text: lorem, top: '72%', left: '59%', lineOrigin: 'top-left' },
  { id: 4, text: lorem, top: '14%', left: '22%', lineOrigin: 'top-right' },
  { id: 5, text: lorem, top: '50%', left: '75%', lineOrigin: 'bottom-right' },
  { id: 6, text: lorem, top: '30%', left: '82%', lineOrigin: 'bottom-right' },
  { id: 7, text: lorem, top: '-5%', left: '54%', lineOrigin: 'bottom-right' },
];

const outcomesData = [
  { id: 1, title: "Strengthens Team Bonding", top: '35%', left: '50%' },
  { id: 2, title: "Cost Savings for Employers", top: '25%', left: '60%' },
  { id: 3, title: "Career Growth for Employees", top: '15%', left: '70%', hasFlag: true },
];

const Benefits = () => {
  return (
    <section className="benefits-section">
      <div className="container">
        <h2 className="benefits-title">BENEFITS OF ON JOB TRAINING</h2>
        <div className="benefits-diagram">
          <img src={benefitsMan} alt="Man walking up stairs" className="benefits-man" />

          <div className="benefits-items">
            {stepsData.map(step => (
              <div key={step.id} className="benefit-step" style={{ top: step.top, left: step.left }}>
                {step.title}
              </div>
            ))}

            {outcomesData.map(outcome => (
              <div key={outcome.id} className={`benefit-outcome ${outcome.hasFlag ? 'flag-item' : ''}`} style={{ top: outcome.top, left: outcome.left }}>
                {outcome.title}
              </div>
            ))}

            {descriptionsData.map(desc => (
              <div key={desc.id} className={`benefit-description line-${desc.lineOrigin}`} style={{ top: desc.top, left: desc.left }}>
                <p>{desc.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Benefits;