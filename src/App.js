import React from "react";
import profilepic from "./images/grad-pic.png";
import usclogo from "./images/PrimShield-Mono_SmallUse_CardOnTrans_RGB.png";
import "./styles/app.css";
// svg of document
import fileword from "./images/file-pdf-regular.svg";
import linkedin from "./images/LinkedIn-Logos/LI-In-Bug.png";

import recletter from "./downloads/fig-letter-rec.pdf";
import casestudy from "./downloads/fig-case-study.pdf";
import resume from "./downloads/angel-resume.pdf";

import legalissues from "./downloads/courses/legal-ethical-issues.pdf";
import introcounseling from "./downloads/courses/intro-school-counseling.pdf";
import counselingprocess from "./downloads/courses/counseling-process.pdf";
import humandevelopment from "./downloads/courses/human-development.pdf";
import counselingtheory from "./downloads/courses/counseling-theory.pdf";
import individualdiff from "./downloads/courses/individual-differences.pdf";
import politics from "./downloads/courses/politics.pdf";
import collaboration from "./downloads/courses/counseling-collaboration.pdf";
import crosscultural from "./downloads/courses/cross-cultural.pdf";
import readiness1 from "./downloads/courses/readiness-1.pdf";
import researchmethods from "./downloads/courses/research-methods.pdf";
import groupcounseling from "./downloads/courses/group-counseling.pdf";
import readiness2 from "./downloads/courses/readiness-2.pdf";
import ccc from "./downloads/courses/connect-climate-classroom.pdf";

function App() {
  return (
    <div className="App">
      <section className="navbar">
        <nav>
          <div className="name">Angelica Figueroa</div>
          <input type="checkbox" id="nav-menu" />
          <label htmlFor="nav-menu" id="nav-icon">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </nav>
      </section>
      <section className="heading">
        <h1 className="name">HELLO, I'M Angelica Figueroa</h1>
        <h2 id="title">M. Ed School Counseling Candidate</h2>

        <img src={profilepic} alt="portfolio of candidate" />
        <p>PPS-SC Credential (Pending)</p>
        <p>BA in Communicative Disorders</p>

        <a href="mailto: figueroaangelica96@gmail.com">
          figueroaangelica96@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/angelica-figueroa-643480211"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="linkedin account for Angelica" width={32} />
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
          My name is Angelica Figueroa. I am dedicated and compassionate with 5+
          years of professional experience in the education system. Working as a
          Teacher Assistant for LAUSD in the South Central Los Angeles area, I
          had the opportunity to interact with many students who have been
          struggling to cope from their tramas which ultimately hinder their
          learning. These students desperately required intensive guidance in
          order to make academic and social progress. Working with these
          students opened my eyes to the fact that students that experience
          emotional and behavioral impairments, their patients, and their
          teachers require guidance and support in order to help these students
          evolve and have not only academic, but life success. Therefore,
          inspired me to pursue a Masters of Education in Counseling at the
          University of Southern California. I am positive that this degree will
          empower me to assist and advocate for students because I believe every
          student should have access to high quality education. I will make it
          my mission to learn effective ways to guide students, their parents,
          and teachers in order for students to have an equitable education
          experience. My counseling philosophy is student-centered and solution
          focused. I believe in a comprehensive counseling program that
          addresses the academic, career, and personal/social development of all
          students.
        </p>
      </section>
      <section className="case-study-app">
        <h3 className="case-heading">Case Study Application</h3>
        <p className="case-text">
          My client was self-referred to the school counselor. My client is a
          female named Violetta. She is 17 years old, Hispanic, and enrolled as
          a Junior in high school. She was born and raised in Los Angeles and
          has been going to the Los Angeles High School Academy for 3 years.
          Violetta has come to therapy for support to address her parents about
          applying to University/ College.
          <br />
          My approach for this student is Solution-Focused Theory. I would
          address Violetta's social and emotional well-being by helping her work
          out how she is feeling and then provide her with the appropriate
          coping skills so she can learn how to manage her emotions and stress.
          The next thing I would do is help her develop appropriate
          communication skills so that she can advocate for herself and
          communicate how she is feeling in an effective way so that she can ask
          for help and express what she needs. ​
        </p>
        <div className="case-study-info">
          You can find intial case study here ➡
          <a href={casestudy} dowload target="_blank" rel="noopener noreferrer">
            CASE STUDY
          </a>
        </div>
      </section>
      <section className="key-course-assignments">
        <h3 className="course-heading">Key Course Assignment</h3>
        <h5 className="course-title">Legal and Ethical Issues in Counseling</h5>
        <p className="course-description">
          I learned how to examine current legal, ethical, and other
          professional issues in the practice of counseling and psychotherapy.
        </p>
        <a href={legalissues} dowload target="_blank" rel="noopener noreferrer">
          <img src={fileword} alt="" width={120} height={120} />
        </a>
        <h5 className="course-title">Introduction to School Counseling</h5>
        <p className="course-description">
          The highlight of this course was learning to recognize the role of a
          professional school counselor and well-being.
        </p>
        <a
          href={introcounseling}
          dowload
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fileword} alt="" width={120} height={120} />
        </a>

        <h5 className="course-title">The Counseling Process</h5>
        <p className="course-description">
          I learned how to engage in the therapeutic process by connecting with
          others and strengthening through role plays.
        </p>
        <a
          href={counselingprocess}
          dowload
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fileword} alt="" width={120} height={120} />
        </a>
        <h5 className="course-title">
          Human Development Theory in School Counseling
        </h5>
        <p className="course-description">
          The highlight of this course was learning about the theory of human
          growth and development across the lifespan.
        </p>
        <a
          href={humandevelopment}
          dowload
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fileword} alt="" width={120} height={120} />
        </a>
        <h5 className="course-title">Theories in Counseling</h5>
        <p className="course-description">
          I learned about a number of different theories that can be applied in
          practices.
        </p>
        <a
          href={counselingtheory}
          dowload
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fileword} alt="" width={120} height={120} />
        </a>
        <h5 className="course-title">Learning and Individual Differences</h5>
        <p className="course-description">
          In this course I learned about the nature of learning and motivation
          in school contexts.
        </p>
        <a
          href={individualdiff}
          dowload
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fileword} alt="" width={120} height={120} />
        </a>
        <h5 className="course-title">Politics of Difference</h5>
        <p className="course-description">
          I learned about interrelationships among race and ethnicity,
          socioeconomic status, ability, gender, sexuality, and other dimensions
          of diversity with the goal of facilitating access and equity in
          various learning settings.
        </p>
        <a href={politics} dowload target="_blank" rel="noopener noreferrer">
          <img src={fileword} alt="" width={120} height={120} />
        </a>
        <h5 className="course-title">
          Counseling and Collaboration in the School Setting
        </h5>
        <p className="course-description">
          In this course, I learned the importance of consultation and
          collaboration in an effort to promote school success and well- being.
        </p>
        <a
          href={collaboration}
          dowload
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fileword} alt="" width={120} height={120} />
        </a>
        <h5 className="course-title">Cross Cultural Counseling</h5>
        <p className="course-description">
          The highlight of this course was learning about different cultures,
          language factors that affect, and cross- cultural counseling
          approaches.
        </p>
        <a
          href={crosscultural}
          dowload
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fileword} alt="" width={120} height={120} />
        </a>
        <h5 className="course-title">
          Counseling for College and Career Readiness 1
        </h5>
        <p className="course-description">
          I learned about theoretical frameworks of individual counseling and
          impacts of college and career readiness.
        </p>
        <a href={readiness1} dowload target="_blank" rel="noopener noreferrer">
          <img src={fileword} alt="" width={120} height={120} />
        </a>
        <h5 className="course-title">Research Methods and Data Analysis</h5>
        <p className="course-description">
          The highlight of this course was being able to create a research
          proposal.
        </p>
        <a
          href={researchmethods}
          dowload
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fileword} alt="" width={120} height={120} />
        </a>
        <h5 className="course-title">Group Counseling</h5>
        <p className="course-description">
          In this course, I learned practical and theoretical concepts of group
          counseling and facilitation in a group counseling session.
        </p>
        <a
          href={groupcounseling}
          dowload
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fileword} alt="" width={120} height={120} />
        </a>
        <h5 className="course-title">
          Counseling for College and career Readiness 2
        </h5>
        <p className="course-description">
          The highlight of this course was becoming familiar with college and
          career readiness.
        </p>
        <a href={readiness2} dowload target="_blank" rel="noopener noreferrer">
          <img src={fileword} alt="" width={120} height={120} />
        </a>
        <h5 className="course-title">
          School Connectedness, Climate, Classroom Management
        </h5>
        <p className="course-description">
          In this course I learned about moving beyond discipline and
          punishment, and utilizing methods in a positive learning environment.
        </p>
        <a href={ccc} dowload target="_blank" rel="noopener noreferrer">
          <img src={fileword} alt="" width={120} height={120} />
        </a>
      </section>
      <section className="letter-of-rec">
        <h3 className="letters-heading">Letter of Recommedation</h3>
        <a href={recletter} dowload target="_blank" rel="noopener noreferrer">
          Download Letter
        </a>
      </section>
      <section className="resume">
        <h3 className="resume-heading">Resume</h3>
        <a href={resume} dowload target="_blank" rel="noopener noreferrer">
          Download resume
        </a>
      </section>

      <section className="footer">
        <h3 className="usc-heading">Contact</h3>
        <p>I'd Love to hear from you!</p>
      </section>
    </div>
  );
}

export default App;
