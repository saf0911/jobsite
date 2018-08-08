import React from 'react'
import Link from 'next/link'




const Home = () => (

  <div>
        <div className='firstPage'>
          <h1> Looking for a Project Manager? </h1>
          <h2> Take a peek inside </h2>
          <h4> (Hover over binoculars for more) </h4>
          <div className='buttonContainer'>
            <button  className='binocularButton'>
              <div className='binocularView'>
                <h1 className='binocluarText'>
                  <span>You came to the right place</span>
                </h1>
                <a className="resume-download"
                  href="/static/resume/ScottFosterResume1.pdf" download="ScottFosterResume.pdf">
                    Download PDF Resume
                </a>
                <a
                  className='linkedinButton'
                  href='https://www.linkedin.com/in/saf0911'>
                  <img url='In-2C-94px-R.png' />
                </a>
              </div>
            </button>
          </div>
      </div>

      <style jsx global>{`
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

        h4 {
          text-align: center;
          justify-self: center;
          font-family: 'EB Garamond', serif;
        }

        .firstPage {
          height: 100%;
          width: 100%;
          position: absolute;
          background-image: url('/static/img/binoculars-fog-foggy-1136815.jpg');
          background-size: 100%;
          background-color: #272729;
          background-repeat: no-repeat;
          margin: 0;
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
          border: 3px solid #0D6697;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(4, 1fr);
          grid-column-gap: 10px;
          grid-row-gap: 15px;
          grid-template-areas:
          'binText binText binText  '
          'resume . .'
          'linkedIn . .'
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
          margin-top: 40%

        }

        .binocluarText span {
          display: inline-block;
          // margin-top: 8%;
          margin-left: 45%;
          // padding: 5px 20px;
          border-radius: 4px;
          grid-area: binText;
          // place-self: center;
          font-family: 'EB Garamond', serif;
          font-size: 1.5em;
          justify-self: end;
        }

        .resume-download {
          position: relative;
          display: inline-block;
          border-radius: 4px;
          text-decoration: none;
          background: rgba(17,120,179,0.2);
          background-image: url('/static/img/downloadarrow.jpeg');
          background-size: cover;
          color: black;
          grid-area: resume;
          justify-content: left;
          border: 3px solid #0D6697;
          font-size: 2em;
          font-family: 'EB Garamond', serif;
          width: 50%;
          justify-self: end;
        }

        .resume-download span {
          font-size: 1em;
          text-align: center;
        }

        .linkedinButton {
          display: inline-block;
          position: relative;
          background-size: cover;
          background-image: url('/static/img/linked.png');
          border-radius: 4px;
          justify-self: end;
          grid-area: linkedIn;
          width: 50%;
        }
    `}</style>
    </div>

)

export default Home
