import React from 'react';
import './HowItWorks.css';

import iconAssessment from '../assets/icon-assessment.png';
import iconCalendar from '../assets/icon-calendar.png';
import iconMentorship from '../assets/icon-mentorship.png';
import iconFeedback from '../assets/icon-feedback.png';

const stepsData = [
    {
        number: '01',
        icon: iconAssessment,
        title: 'Assessment of needs',
        description: 'Lorem ipsum dolor sit amet hfhk consectetur. Posuere in convallis imperdiet etiam libero vulputate sodales sodales. Pulvinar nec.',
        numberColor: 'blue',
        iconColor: 'white',
        order: 'number-first'
    },
    {
        number: '02',
        icon: iconCalendar,
        title: 'Customized training plan',
        description: 'Lorem ipsum dolor sit amet hfhk consectetur. Posuere in convallis imperdiet etiam libero vulputate sodales sodales. Pulvinar nec.',
        numberColor: 'yellow',
        iconColor: 'white',
        order: 'icon-first'
    },
    {
        number: '03',
        icon: iconMentorship,
        title: 'On-site coaching / mentorship',
        description: 'Lorem ipsum dolor sit amet hfhk consectetur. Posuere in convallis imperdiet etiam libero vulputate sodales sodales. Pulvinar nec.',
        numberColor: 'yellow',
        iconColor: 'white',
        order: 'number-first'
    },
    {
        number: '04',
        icon: iconFeedback,
        title: 'Progress evaluation & feedback',
        description: 'Lorem ipsum dolor sit amet hfhk consectetur. Posuere in convallis imperdiet etiam libero vulputate sodales sodales. Pulvinar nec.',
        numberColor: 'blue',
        iconColor: 'black',
        order: 'icon-first'
    }
];

const HowItWorks = () => {
    return (
        <section className="how-it-works-section">
            <div className="container">
                <h2 className="how-it-works-title">HOW IT WORKS</h2>
                <div className="steps-grid">
                    {stepsData.map((step) => (
                        <div className="step-card" key={step.number}>
                            <div className={`step-header ${step.order}`}>
                                <div className={`step-number-box ${step.numberColor}-bg`}>
                                    {step.number}
                                </div>
                                <div className={`step-icon-box ${step.iconColor}-bg`}>
                                    <img src={step.icon} alt={step.title} />
                                </div>
                            </div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="enroll-now-btn">Enroll Now</button>
            </div>
        </section>
    );
};

export default HowItWorks;