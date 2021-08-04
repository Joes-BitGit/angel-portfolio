import React from "react";
import profilepic from "./images/profile-pic.jpeg";
import usclogo from "./images/PrimShield-Mono_SmallUse_CardOnTrans_RGB.png";
import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <section className="navbar">
        <nav>
          Angel Figueroa
          <input type="checkbox" id="nav-menu" />
          <label htmlFor="nav-menu" id="nav-icon">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </nav>
      </section>
      <section className="heading">
        <h1 className="name">HELLO, I'M Angel Figueroa</h1>
        <h2 id="title">School Counselor Candidate</h2>
      </section>
      <section className="accolades">
        <img src={profilepic} alt="portfolio of candidate" />
        <p>School Counseling Candidate</p>
        <p>PPS-SC Credential</p>
        <p>BA</p>
        <a href="mailto: af75257@usc.edu">af75257@usc.edu</a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <img src="" alt="linkedin icon" />
        </a>
      </section>
      <section className="usc-program">
        <h3 className="usc-heading">USC Program of Study</h3>
        <p className="usc-text">
          The USC School Counseling program places an emphasis on restorative
          justice, student well-being, college and career readiness,
          trauma-informed practices, and creating culturally competent
          counselors. As students, we completed 100 practicum hours, and 600
          fieldwork hours, with the requirement that we complete these hours in
          at least two different grade levels so that we are prepared to support
          and address our student's emotional and academic needs. The program's
          goal is to prepare candidates to be ethically, and culturally
          competent counselors that are prepared to support students in today's
          world.
        </p>
        <img
          src={usclogo}
          alt="usc logo"
          id="usc-logo"
          width={300}
          height={300}
        />
      </section>
      <section className="about">
        <h3 className="about-heading">About</h3>
        <p className="about-text">
          With a passion for equity, social justice, and education, I envision
          an exciting future in school counseling. Having a strong background
          working with children for over five years, and earning an education in
          both psychology and school counseling, I have both the skill set and
          drive required to work with children of all ages. My theoretical
          approach to school counseling is centered on Solution Focused, Choice
          Theory, and Family Systems. It is my belief that these three theories
          come together and allow us to understand our students and help them
          become empowered and well-adjusted citizens. The areas I work best in
          are, college and career advising, small group implementation, and
          conflict resolution. I would love to work with marginalized, minority
          populations in order to advocate for them and help provide equitable
          access to education and resources. My goal for implementing well-being
          at my school is to promote and advocate for more mindful activities
          throughout the day for both students and staff, as well as build our
          community resources to help supplement the support students receive at
          the school. I am also currently working on a yoga teacher training
          course so that I may also provide free classes to all students.
        </p>
      </section>
      <section className="case-study-app">
        <h3 className="case-heading">Case Study Application</h3>
        <p className="case-text">
          For this case study, I wrote about "Teresa", a 14 year-old freshman
          who has been brought to my attention because of some changes in her
          academics and behavior. She is normally a high-achieving student who
          participates in sports and activities in school. She lives at home
          with both parents who are very supportive and push her to excel in
          school. Through my conversations with Teresa it was noted that she
          experiencing some issues with a childhood best friend, and they are no
          longer on speaking terms. This rupture in their friendship has caused
          Teresa a lot of internal conflict and turmoil and this was trickling
          into her academics and level of participation and engagement. My
          approach for this student would combine Solution-Focused Theory and
          Choice Theory. I would address Teresa's social and emotional
          well-being by helping her work out how she is feeling and then provide
          her with the appropriate coping skills so she can learn how to manage
          her emotions and stress. The next thing I would do is help her develop
          appropriate communication skills so that she can advocate for herself
          and communicate how she is feeling in an effective way so that she can
          ask for help and express what she needs. I would also provide an
          opportunity to mediate a conversation between her and her best friend
          if it is something that she is comfortable with. I would then help her
          academically by creating a plan with her so that she can work on her
          grades and get back on track. I would focus on her resiliency and help
          her feel empowered by highlighting her willingness to work with me and
          I would point out the improvement in her grades when appropriate. ​
        </p>
        <div className="case-study-info">
          You can find intial case study here ➡
          <a href="http://" target="_blank" rel="noopener noreferrer">
            CASE_STUDY
          </a>
        </div>
      </section>
      <section className="key-course-assignments">
        <h3 className="course-heading">Key Course Assignment</h3>
        <h5 className="course-title">Research Methods</h5>
        <p className="course-description">
          A highlight of this class was coming up with my research proposal and
          discovering a passion for research as a whole
        </p>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          DOC
        </a>
        <h5 className="course-title">Group Counseling</h5>
        <p className="course-description">
          A highlight for me was creating a group counseling curriculum and
          being able to implement it in class with my peers.
        </p>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          DOC
        </a>
        <h5 className="course-title">Learning and Individual Differences</h5>
        <p className="course-description">
          A highlight was learning about all of the different learning styles,
          applying them as a student, and also being able to use them during my
          fieldwork to help support students in their learning in real-time
        </p>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          DOC
        </a>
        <h5 className="course-title">
          Counselign for College & Career Readiness
        </h5>
        <p className="course-description">
          A highlight was learning about different methods to counsel students
          for college and career readiness because this is one area I am
          passionate about
        </p>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          DOC
        </a>
      </section>
      <section className="letter-of-rec">
        <h3 className="letters-heading">Letters of Recommedation</h3>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Letter1
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          Letter2
        </a>
      </section>
      <section className="resume">
        <h3 className="resume-heading">Resume</h3>
        <img src="" alt="resume of candidate" />
      </section>
      <section className="work-experience">
        <h3 className="work-heading">Samples of Work</h3>
        <div className="job-1">
          <img src="" alt="poster of job1" />
          <p className="job1-description"></p>
        </div>
        <div className="job-2">
          <img src="" alt="poster of job2" />
          <p className="job2-description"></p>
        </div>
        <div className="job-3">
          <img src="" alt="poster of job3" />
          <p className="job3-description"></p>
        </div>
      </section>
      <section className="footer">
        <h3 className="usc-heading">Contact</h3>
        <p>I'd Love to hear from you!</p>
      </section>
    </div>
  );
}

export default App;
