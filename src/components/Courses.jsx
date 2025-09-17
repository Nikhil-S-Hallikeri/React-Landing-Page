import React from 'react';
import './Courses.css';
import corseImage from '../assets/course.png';

const courseData = [
  { id: 1, title: 'Data Science', duration: '3 Months', salary: '4LPA - 6LPA' },
  { id: 2, title: 'Web Development', duration: '6 Months', salary: '3LPA - 5LPA' },
  { id: 3, title: 'Cyber Security', duration: '4 Months', salary: '5LPA - 7LPA' },
  { id: 4, title: 'UI/UX Design', duration: '2 Months', salary: '2.5LPA - 4LPA' },
  { id: 5, title: 'Artificial Intelligence', duration: '8 Months', salary: '6LPA - 10LPA' },
  { id: 6, title: 'Cloud Computing', duration: '5 Months', salary: '5LPA - 8LPA' },
  { id: 7, title: 'Blockchain Development', duration: '6 Months', salary: '7LPA - 12LPA' },
  { id: 8, title: 'Mobile App Development', duration: '4 Months', salary: '3LPA - 6LPA' },
  { id: 9, title: 'DevOps Engineering', duration: '6 Months', salary: '6LPA - 9LPA' }
];


const CourseCard = ({ title, duration, salary }) => (
  <div className="course-container">
    <div className="course-card">
      <div className="card-image-placeholder"></div>
      <h4>{title}</h4>
      <div className="card-details">
        <span>🕒 {duration}</span>
        <span>₹ {salary}</span>
      </div>
    </div>
    <p className='para'>Lorem ipsum dolor sit amet consectetur. he Lorem fermentum djs aeneans lacinia.</p>
    <button className="enroll-btn">Enroll</button>
  </div>
);

const Courses = () => {
  return (
    <section className="courses-section container">
      <h2>COURSES WE OFFER</h2>
      <div className="courses-grid">
        {courseData.map(course => (
          <CourseCard
            key={course.id}
            title={course.title}
            duration={course.duration}
            salary={course.salary}
          />
        ))}
      </div>
    </section>
  );
};

export default Courses;