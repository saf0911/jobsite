import React from 'react'
import Link from 'next/link'




const Home = () => (

  <div>
        <div className='firstPage'>
          <h1> Looking for a Project Manager? </h1>
          <h2> Take a peek inside </h2>
          <div className='buttonContainer'>
            <button  className='binocularButton'>
              <div className='binocularView'>
                <h1 className='binocluarText'>
                  <span>I am looking for you too</span>
                </h1>
                <a className="resume-download"
                  href="/static/ScottFosterResume.pdf" download="Scott-Foster-Resume">
                    Download PDF Resume
                </a>
                <a
                  className='linkedinButton'
                  href='https://www.linkedin.com/in/saf0911'>

                </a>
              </div>
            </button>
          </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=EB+Garamond|Quicksand');
        @font-face {
          font-family: 'EB Garamond', serif;
          src: url('../static/fonts/ebgaramond/EBGaramond-Regular.ttf') format('truetype')
        }

        h1 {
          text-align: center;
          justify-self: center;
          font-family: 'EB Garamond', serif;
        }

        h2 {
          text-align: center;
          justify-self: center;
          font-family: 'EB Garamond', serif;
        }

        .firstPage {
          height: 100%;
          width: 100%;
          position: fixed;
          background-image: url('/static/img/binoculars-fog-foggy-1136815.jpg');
          background-size: 100%;
          background-color: #272729;
          background-repeat: no-repeat;
        }

        .buttonContainer {
          position: fixed;
          height: 100%;
          width: 100%;
        }

        .binocularButton {
          height: 9%;
          width: 9%
          position: relative;
          color: white;
          cursor: pointer;
          justify-content: center;
          margin-top: 12%;
          margin-left: 40%;
          padding: 10%;
          border-radius: 50%;
          z-index: 1;
          border: 0;
          background-color: rgba(0,0,0,0);
        }


        .binocularView {
          transform: translateX(-50%) scale(0.25);
          background-attachment: inherit;
          background-image: url('/static/img/DSCF6548.jpg');
          background-size: cover;
          position: relative;
          position: fixed;
          top: 10%;
          left: 50%;
          width: 800px;
          height: 700px;
          align-items:top;
          opacity: 0;
          transition: opacity 0.6s, transform 0.6s;
          pointer-events: none;
          border-radius: 50%;
          border: 3px solid #555;

        }

        .binocularButton:hover .binocularView {
          opacity: 1;
          pointer-events: all;
          transform: translateX(-50%) scale(1);
          box-shadow: 20px 20px 60px rgba(0,0,0,0.6);
        }

        .binocluarText {
          position: relative;
          color: black;
          margin-top: 20%;
          margin-left: -53%;
        }

        .binocluarText span {
          display: inline-block;
          background: rgba(255,255,255,0.7);
          padding: 5px 20px;
          border-radius: 4px;
        }

        .resume-download {
          position: relative;
          text-decoration: none;
          background: #054A25;
          color: white;
          margin-top: 10%;
          margin-left: -35%;
          padding: 10px;
          justify-content:flex-start;
        }

        .linkedinButton {
          position: relative;
          background-attachment: inherit;
          background-image: url('/static/img/linkedin.png');
          margin-top: 20%;
          margin-left: -42.5%;
          padding: 7%;
        }
    `}</style>
    </div>

)

export default Home
