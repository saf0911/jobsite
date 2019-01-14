import React from 'react'
import Link from 'next/link'

class test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showHideView:'hidden',
    }
}



render() {
    return (

      <div>
        <div className='firstPage'>
          <h1> Looking for a Project Manager? I am here.</h1>
          <h2> Take a peek inside </h2>
          <div className='buttonContainer'>
            <button onClick={this.toggleView.bind(this)} className='binocularButton'>
              <div className={this.state.showHideView}>
                <div className='binocularView'>
                <h6 className='binocluarText'>
                  I am looking for you too
                </h6>
                <a className="resume-download"
                  href='/static/ScottFosterResume.pdf" download="Scott-Foster-Resume'>
                    Download PDF Resume
                </a>
                <Link
                  img='/static/img/linkedin.png'
                  href='https://www.linkedin.com/in/saf0911'>
                  My Linkedin
                </Link>
              </div>
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
              -webkit-background-size: cover;
              -moz-background-size: cover;
              -o-background-size: cover;
            background-size: cover;;
            background-color: rgb(245, 247, 255);


          }

          .buttonContainer {
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
            background-color: rgba(0,0,0,0.2);
            outline: none;
          }

          .show {
            display: absolute;
            opacity: 1;
            height: 75%;
            width: 75%;
          }

          .hidden {
            display: none;
            opacity: 0;
          }

          .binocularView {
            padding: 25%;
            margin: 0;
            transform: scale(5, 5);
            transform: 100s ease-in-out;
            background-attachment: inherit;
            background-image: url('/static/img/DSCF6548.jpg');
            background-size: 100% 75%;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 50%;

          }

          .binocluarText {
            color: black;
            opacity: 1;

          }

          .resume-download {
            text-decoration: none;
            background: #054A25;
            color: white;
            padding: 5px;
            justify-content:flex-start;
          }
      `}</style>
      </div>
    )
}

toggleView() {
    var css = (this.state.showHideView === "hidden") ? "show" : "hidden";
    this.setState({"showHideView":css});
}
}


export default test
