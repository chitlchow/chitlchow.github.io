import './Resume.css'

export default function Resume() {
  return (
    <div className="resume-container">
      <header className="resume-header">
        <h1>Chris Chow</h1>
        <p>
          <a href="mailto:chitlchow@gmail.com">chitlchow@gmail.com</a> |
          <a href="https://www.linkedin.com/in/chitlchow/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </header>

      <section>
        <h2>Summary</h2>
        <p>
          Machine Learning Engineer and Python Developer with a foundation in data science and applied machine learning.
          Experienced in designing AI models for image generation and predictive analytics. Skilled in working autonomously
          in startup environments and delivering production-level code. Driven by curiosity and a mission to build impactful,
          data-driven solutions.
        </p>
      </section>

      <section>
        <h2>Education</h2>
        <ul>
          <li>
            <strong>MSc Data Science</strong> – City, University of London (Oct 2022 – Feb 2024)
          </li>
          <li>
            <strong>BBA in Business Analysis</strong> – City University of Hong Kong (Sep 2016 – Jul 2020)
            <ul>
              <li>External Vice President of Executive Committee of Mathematics Society, City University of Hong Kong Students’ Union</li>
              <li>Floor Representative of Prosperity Hall, City University of Hong Kong</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Work Experience</h2>
        <ul>
          <li>
            <strong>Machine Learning Engineer – Nurturing Reads</strong> (June 2024 - Now)
            <ul>
              <li>Founder Engineer for model development in image generation</li>
            </ul>
          </li>
          <li>
            <strong>STEM Instructor – Cobo Academy, Hong Kong</strong> (Sep 2020 – Sep 2022)
            <ul>
              <li>Led business development initiatives teaching and establishing partnerships with more than 20 external parties</li>
              <li>Instructed technology and coding courses tailored to individuals from diverse technical and non-technical backgrounds</li>
              <li>Developed a detection model using Python and OpenCV to recognize 14 road signs and weather signs with over 90% accuracy</li>
            </ul>
          </li>
          <li>
            <strong>Patent Database Assistant – City University of Hong Kong</strong> (Jun 2018 – Aug 2019)
            <ul>
              <li>Generated monthly reports from the patent database to facilitate management operations</li>
              <li>Developed and deployed a data visualization dashboard for executives to streamline patent renewal and sales processes</li>
              <li>Conducted regular maintenance of the database to uphold data integrity across online and internal platforms</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Recipe Site Traffic Prediction</strong> (May 2024)
            <ul>
              <li>Developed and compared models achieving up to 81% precision for identifying recipes with high traffic potential</li>
              <li>Presented data-driven recommendations that increased engagement potential threefold</li>
            </ul>
          </li>
          <li>
            <strong>Reinforcement Learning in Snake Game</strong> (May 2023)
            <ul>
              <li>Designed and tested a Python-based agent for playing Snake, achieving scores of up to 40 points</li>
            </ul>
          </li>
          <li>
            <strong>Predictive Analytics on S&amp;P 500 Time Series using Neural Network</strong> (Apr 2023)
            <ul>
              <li>Developed and trained RNN and LSTM models on a decade of S&amp;P 500 time series data using Python and PyTorch</li>
              <li>Optimized the models to achieve an accuracy that accounts for 90% of the variations</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Certifications</h2>
        <ul>
          <li>Professional Data Scientist – DataCamp, May 2024</li>
          <li>SQL Associate – DataCamp, March 2024</li>
          <li>TensorFlow Developer Certificate – TensorFlow.org, Dec 2023</li>
        </ul>
      </section>

      <section>
        <h2>Skills Summary</h2>
        <p>
          Python, TensorFlow, PyTorch, SQL · Machine Learning, Deep Learning, Predictive Analytics · Image Generation, Time Series Analysis,
          Data Visualization · Git, Jupyter, VS Code, GitHub · Strong communicator and self-starter in collaborative and independent work environments
        </p>
      </section>
    </div>
  )
}

