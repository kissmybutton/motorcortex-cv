import MotorCortex, { loadPlugin } from "@donkeyclip/motorcortex";
import AnimeDefinition from "@donkeyclip/motorcortex-anime";
import Graphs from "@donkeyclip/motorcortex-graphs";
import MCVideo from "@kissmybutton/motorcortex-video";
const VideoPlugin = MotorCortex.loadPlugin(MCVideo);
const Anime = loadPlugin(AnimeDefinition);
const Graph = loadPlugin(Graphs);

const splitLetter = (titleText, type) => {
  let list = "";
  const letterList = titleText.split("");
  for (let i = 0; i < letterList.length; i++) {
    list += `<div class="${type} ${type}-${i}">${
      letterList[i] === " " ? "&nbsp;" : letterList[i]
    }</div>`;
  }
  return list;
};

const splitWords = (titleText, type) => {
  let list = "";
  const letterList = titleText.split(" ");
  for (let i = 0; i < letterList.length; i++) {
    list += `<div class="${type} ${type}-${i}">${letterList[i]}</div><div class="${type}">&nbsp;</div>`;
  }
  return list;
};

const educationBuilder = (educattion) => {
  let list = "";
  for (let i = 0; i < educattion.length; i++) {
    list += `
      <div class="education-container">
        <div class="education-year outline-text ">
          ${educattion[i].year}
        </div>
        <div class="education-year-line "></div>
        <div class="education-name h2 ltr-move">
          ${educattion[i].name}
        </div>
        <div class="education-title h3 ltr-move">
          ${educattion[i].title}
        </div>
      </div> 
    `;
  }
  return list;
};

const linkBuilder = (links) => {
  let list = "";
  for (let i = 0; i < links.length; i++) {
    list += `
    <div class="link-container">
      <a class="link h2" target="_blank" href="${links[i].url}">${links[i].name}</a>  
      <div class=link-line></div>
    </div>
    `;
  }
  return list;
};

export default class Cv extends MotorCortex.HTMLClip {
  get html() {
    return `
      <div class="wrapper">
        <div class="dev-text">
            DEVELOPER
        </div>
        <div class="hello-wrapper">
            <div class="hello-text secondery-text ft">
                ${splitLetter("Hello", "hello-letter")}
                <div class="hello-letter hello-cycle"></div>
            </div>
            <div class="hello-my-name secondery-text ft">${splitWords(
              "My name is",
              "myname"
            )}</div>
            <div class="dev-name secondery-text ft"><div class="full-name">${
              this.attrs.firstName
            } ${this.attrs.lastName}</div></div>
        </div>
        <div class="name-line"></div>
        <div class="read-ball"></div>
        <div class="video-wrapper">
        <div class="video-container video-container-4" ></div>
        <div class="video-container video-container-3"></div>
        <div class="video-container video-container-2"></div>
        <div class="video-container video-container-1"></div>
          
        </div>
        <div class="title-education-wrapper">
          <div class="title-education-text outline-text ">
              EDUCATION
          </div>
          <div class="title-education-text outline-text ">
              EDUCATION
          </div>
        </div>

        <div class="education-wrapper">
          ${educationBuilder(this.attrs.educattion)}
        </div>
        
        <div class="line-graph-engagement"></div>
        <div class="line-graph-seniority"></div>
        
        <div class="animetitle-holder"></div>

        <div class="bar-chart-bg"></div>
        <div class="bar-chart"></div>

        
        <div class="svg-wrapper">
          <svg height="300" width="450" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape1" height="300" width="450" />
            <rect class="shape2" height="300" width="450" />
          </svg>
        </div>
        <div class="svg-wrapper2">
          <svg height="300" width="450" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape1" height="300" width="450" />
            <rect class="shape2" height="300" width="450" />
          </svg>
        </div>
        <div class="seniority h2">Seniority</div>
        <div class="engagement h2">Engagement</div>
        <div class="soft-skills h2">Soft Skills</div>
        <div class="bar-char-lable-wrapper">
          <div class="bar-char-lable-container">
            <div class="bar-char-color" style="background:#c389f0"> </div>
            <div class="bar-char-name h3">Adaptability </div>
          </div>
          <div class="bar-char-lable-container">
            <div class="bar-char-color" style="background:#788cef"> </div>
            <div class="bar-char-name h3">Teamwork </div>
          </div>
          <div class="bar-char-lable-container">
            <div class="bar-char-color" style="background:#b0c478"> </div>
            <div class="bar-char-name h3">Communication </div>
          </div>
          <div class="bar-char-lable-container">
            <div class="bar-char-color" style="background:#ffa758"> </div>
            <div class="bar-char-name h3">Problem Solving </div>
          </div>
          <div class="bar-char-lable-container">
            <div class="bar-char-color" style="background:#fe8282"> </div>
            <div class="bar-char-name h3">Creativity </div>
          </div>
          <div class="bar-char-lable-container">
            <div class="bar-char-color" style="background:#00a4a7"> </div>
            <div class="bar-char-name h3">Leadership </div>
          </div>
        </div>
        <div class="link-wrapper">
          ${linkBuilder(this.attrs.links)}
        </div>
        <div class="transition"></div>
      </div>
    `;
  }

  get css() {
    const nameLength = (this.attrs.firstName + this.attrs.lastName).length;
    return `
          .wrapper{
            background:#fff;
            width: 1280px;
            height: 720px;
            font-weight: 900;  
          }
          .h2{
            font-family: 'Poppins', sans-serif;
            font-size: 40px;
            color: #2d2d2d;
            font-weight: 900;
          }
          .h3{
            font-family: 'Poppins', sans-serif;
            font-size: 20px;
            color: #2d2d2d;
          }
          .outline-text{
            font-family: 'Roboto', sans-serif;
            font-size:330px;
            -webkit-text-stroke: 1px #939393;
            color: transparent;
            font-weight: 900;
            text-transform: uppercase;
          }
          .dev-text{
            font-family: 'Roboto', sans-serif;
            font-size:330px;
            -webkit-text-stroke: 1px #939393;
            color: transparent;
            font-weight: 900;
            text-transform: uppercase;
            width:50%;
            word-wrap: break-word;
            line-height:${250}px;
            position:absolute;
            top:0;
            z-index:0;
          }
          .hello-wrapper{
            height: 100%;
            position: absolute;
            top: 36%;
            left: 30%;
          }
          .secondery-text{
            font-weight: 900;
            display:flex;
            font-family: 'Poppins', sans-serif;
            font-size:200px;
            height: 152px;
            line-height: 200px;
            z-index:1;
            white-space: nowrap;
            height: 200px;
            overflow: hidden;
          }
          .hello-cycle{
            width: 60px;
            height: 60px;
            background:#00a4a7;
            border-radius:50%;
            transform: translateY(150%)
          }
          .hello-letter,.myname,.full-name{
            position: relative;
          }
          .name-line{
            position:absolute;
            top: 67%;
            height:2px;
            background:#00a4a7;
          }
          .read-ball{
            position:absolute;
            background:#00a4a7;
            border-radius:50%;
            width: 250px;
            height: 250px;
            left:100%;
            top:100%
          }
          .ft{
            position:relative;
          }
          .title-education-text{
            font-size:235px;
            width: 1280px;
          }
          .title-education-wrapper{
            position: absolute;
            top: 68%;
            display:flex;
            opacity:0;
          }
          .education-tab-wrapper{
            width: 250px;
            height: 250px;
            background:#00a4a7;
            position: absolute;
            top:10%;
            left:50%;
          }
          .video-wrapper{
            position:absolute;
            width:40%;
            height:100%;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
          }
          .video-container{
            background: #1c00ff;
            width: 0%;
            height: 0%;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
          }
          .education-year{
            font-size: 70px;
            -webkit-text-stroke: 3px #939393;
          }
          .education-wrapper{
            position: absolute;
            width: 50%;
            height: 100%;
            left: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            top:100%;
            overflow: hidden;
          }

          .education-container{
            position: relative;
            overflow: hidden;
          }

          .education-year-line{
            height: 2px;
            position: absolute;
            width: 200px;
            background: #00a4a7;
            top: 46px;
          }

          .ltr-move{
            position:relative;
          }
          .animetitle-holder{
            position: absolute;
            top: 40%;
            left: 40%;
          }

          .title-skill-wrapper{
            display: flex;
            writing-mode: vertical-rl;
            position: absolute;
            top: 0;
            left: 40%;
          }
          .title-skill-text{
            font-size:287px;
            height: 720px;
          }

          .transition{
            height: 100%;
            width: 100%;
            left:100%;
            position: absolute;
            background: #00a4a7;
          }
          .lable-cover{
            width: 617px;
            height: 79px;
            position: absolute;
            background: #fff;
            left: 5%;
            top: -1%;
          }
          .lable-cover2{
            width: 617px;
            height: 85px;
            position: absolute;
            background: #fff;
            left: 5%;
            top: 48%;
          }

          .svg-wrapper {
            position: absolute;
            left: 6%;
            top: 5%;
          }

          .svg-wrapper2 {
            position: absolute;
            left: 6%;
            top: 55%;
          }

          .shape1,
          .shape2 {
            stroke-dasharray: 2240;
            stroke-width: 5px;
            fill: transparent;
            stroke: #19f6e8;
            border-bottom: 5px solid black;
          }
          .shape1 {
            stroke-dashoffset: 2240;
          }
          .shape2 {
            stroke-dashoffset: -2240;
          }
          .seniority{
            text-transform: uppercase;
            position: absolute;
            left: 4%;
            top: 1%;
          }
          .engagement{
            text-transform: uppercase;
            position: absolute;
            left: 4%;
            top: 51%;
          }
          .soft-skills{
            text-transform: uppercase;
            position: absolute;
            left: 4%;
            top: 11%;
          }
          .line-graph-engagement{
            position: absolute;
            top: 50%;
          }
          .bar-chart{
            position: absolute;
            top: 0%;
            left: 63%;
            transform: rotate(90deg);
          }
          .bar-chart-bg {
            position: absolute;
            top: 15%;
            left: 2%;
            width: 675px;
            height: 373px;
            background-size: 28px 28px;
            background-image: radial-gradient(circle, #000000 1px, rgb(255 255 255) 1px);
          }
          .bar-char-lable-wrapper{
            width:600px;
            height: 200px;
            position: absolute;
            top: 65%;
            background-size: 28px 28px;
            background-image: radial-gradient(circle, #000000 1px, rgb(255 255 255) 1px);
            overflow: hidden;
          }
          .bar-char-lable-container{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            position: relative;
            left: 2%;
            top: 5%;
            font-weight: 500;
          }
          .bar-char-color{
            width:25px;
            height: 25px;
            margin-right: 12px;
          }
          .link-wrapper{
            position: absolute;
            left: 50%;
            height: 100%;
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: baseline;
          }
          .link-container {
            margin-bottom: 20px;
            position:relative
          }
          .link{
            text-decoration: none;
            position: relative;
            color:#2d2d2d;
            text-transform: uppercase;
            font-size: 70px;
          }
          .link-line {
            content: "";
            position: absolute;
            display: block;
            width: 100%;
            height: 3px;
            left: 0;
            top: 57%;
            background-color: #19f6e8; 
          }

          .dev-name{
            font-size:${Math.floor(500 / 0.22 / nameLength)}px
          }
    
        `;
  }

  get fonts() {
    return [
      {
        type: `google-font`,
        src: `https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap`,
      },
      {
        type: `google-font`,
        src: `https://fonts.googleapis.com/css2?family=Poppins:wght@500;900&display=swap`,
      },
    ];
  }

  buildTree() {
    const educationOutTime = this.attrs.educationTiming + 3000;
    const skillTimingOut = educationOutTime + this.attrs.skillTiming;
    const softSkillTimingOut =
      skillTimingOut + this.attrs.softSkillTiming - 2000;
    const colors = ["#ffa758", "#00a4a7", "#788cef", "#fe8282"];
    const dataSets = this.attrs.skillOverview.dataSetsTitles.map((e, i) => {
      return {
        title: e,
        color: colors[i],
      };
    });

    const engagement = {
      title: " ",
      maxValue: 100,
      interval: 4,
      unit: "%",
      hover: false,
      dataSets: dataSets,
      data: this.attrs.skillOverview.engagement,
    };

    const seniority = {
      title: " ",
      maxValue: 100,
      interval: 4,
      unit: "%",
      hover: false,
      dataSets: dataSets,
      data: this.attrs.skillOverview.seniority,
    };

    const barChartData = {
      title: "Soft Skills",
      subtitle: " ",
      showGrid: true,
      maxValue: 100,
      data: [
        {
          name: "Adaptability",
          value: this.attrs.softSkillOverview.adaptability,
          color: "#c389f0",
        },
        {
          name: "Teamwork",
          value: this.attrs.softSkillOverview.teamwork,
          color: "#788cef",
        },
        {
          name: "Communication",
          value: this.attrs.softSkillOverview.communication,
          color: "#b0c478",
        },
        {
          name: "Problem Solving",
          value: this.attrs.softSkillOverview.problemSolving,
          color: "#ffa758",
        },
        {
          name: "Creativity",
          value: this.attrs.softSkillOverview.creativity,
          color: "#fe8282",
        },
        {
          name: "Leadership",
          value: this.attrs.softSkillOverview.leadership,
          color: "#00a4a7",
        },
      ],
    };

    const educationVideo = new VideoPlugin.Clip(
      {
        sources: [this.attrs.educationVideo],
        ...this.attrs.videoSize,
        startFrom: 0,
        audio: false,
      },
      {
        selector: ".video-container-1",
      }
    );

    const educationPlayback = new VideoPlugin.Playback({
      selector: "!#video",
      duration: this.attrs.educationTiming,
    });

    educationVideo.addIncident(educationPlayback, 0);

    //skill

    const skillVideo = new VideoPlugin.Clip(
      {
        sources: [this.attrs.skillVideo],
        ...this.attrs.videoSize,
        startFrom: 0,
        audio: false,
      },
      {
        selector: ".video-container-2",
      }
    );

    const skillPlayback = new VideoPlugin.Playback({
      selector: "!#video",
      duration: this.attrs.skillTiming,
    });

    skillVideo.addIncident(skillPlayback, 0);

    //soft

    const softSkillVideo = new VideoPlugin.Clip(
      {
        sources: [this.attrs.softSkillVideo],
        ...this.attrs.videoSize,
        startFrom: 0,
        audio: false,
      },
      {
        selector: ".video-container-3",
      }
    );

    const softSkillPlayback = new VideoPlugin.Playback({
      selector: "!#video",
      duration: this.attrs.softSkillTiming,
    });

    softSkillVideo.addIncident(softSkillPlayback, 0);

    //blabla

    const nextMoveVideo = new VideoPlugin.Clip(
      {
        sources: [this.attrs.nextMoveVideo],
        ...this.attrs.videoSize,
        startFrom: 0,
        audio: false,
      },
      {
        selector: ".video-container-4",
      }
    );

    const nextMovePlayback = new VideoPlugin.Playback({
      selector: "!#video",
      duration: this.attrs.nextMoveTiming,
    });

    nextMoveVideo.addIncident(nextMovePlayback, 0);

    const svgShapeOne = new Anime.Anime(
      {
        animatedAttrs: {
          strokeDashoffset: 1955,
          strokeDasharray: 2240,
        },
      },
      {
        duration: 2500,
        selector: ".shape1",
        easing: "easeOutQuart",
      }
    );

    const svgShapeTwo = new Anime.Anime(
      {
        animatedAttrs: {
          strokeDashoffset: -789,
          strokeDasharray: 2240,
        },
      },
      {
        duration: 2500,
        selector: ".shape2",
        easing: "easeOutQuart",
      }
    );

    const devText = new Anime.Anime(
      {
        animatedAttrs: {
          left: `0px`,
        },
        initialValues: {
          left: `-640px`,
        },
      },
      {
        duration: 1000,
        selector: ".dev-text",
        easing: "easeOutQuart",
      }
    );
    const helloLetterReveal = new Anime.Anime(
      {
        animatedAttrs: {
          top: "0%",
        },
        initialValues: {
          top: "100%",
        },
      },
      {
        duration: 200,
        selector: ".hello-letter",
        delay: `@stagger(0, 250)`,
        easing: "easeOutQuart",
      }
    );
    const helloTextTransform = new Anime.Anime(
      {
        animatedAttrs: {
          transform: {
            scale: 0.5,
          },
          top: "5%",
          left: "-5%",
        },
        initialValues: {
          top: "35%",
          left: "25%",
          transform: {
            scale: 1,
          },
        },
      },
      {
        duration: 1000,
        selector: ".hello-wrapper",
        easing: "easeOutQuart",
      }
    );

    const helloOpacity = new Anime.Anime(
      {
        animatedAttrs: {
          opacity: 1,
          top: "0%",
        },
        initialValues: {
          opacity: 0,
          top: "100%",
        },
      },
      {
        duration: 300,
        selector: ".myname",
        delay: `@stagger(0, 250)`,
        easing: "easeOutQuart",
      }
    );

    const helloFullName = new Anime.Anime(
      {
        animatedAttrs: {
          opacity: 1,
          top: "0%",
        },
        initialValues: {
          opacity: 0,
          top: "100%",
        },
      },
      {
        duration: 500,
        selector: ".full-name",
        easing: "easeOutQuart",
      }
    );

    const nameLineLeft = new Anime.Anime(
      {
        animatedAttrs: {
          left: "21%",
        },
        initialValues: {
          left: "100%",
        },
      },
      {
        duration: 600,
        selector: ".name-line",
        easing: "easeOutQuart",
      }
    );
    const nameLineWidth = new Anime.Anime(
      {
        animatedAttrs: {
          width: this.attrs.firstName.length * 80 + "px",
        },
        initialValues: {
          width: this.attrs.firstName.length * 280 + "px",
        },
      },
      {
        duration: 600,
        selector: ".name-line",
        easing: "easeOutQuart",
      }
    );

    const redBallIn = new Anime.Anime(
      {
        animatedAttrs: {
          left: "82%",
          top: "68%",
        },
        initialValues: {
          left: "100%",
          top: "100%",
        },
      },
      {
        duration: 1500,
        selector: ".read-ball",
        easing: "easeOutQuart",
      }
    );

    const redBallLeftTransition = new Anime.Anime(
      {
        animatedAttrs: {
          left: "-30%",
          top: "-60%",
        },
        initialValues: {
          left: "82%",
          top: "68%",
        },
      },
      {
        duration: 1000,
        selector: ".read-ball",
        easing: "easeOutQuart",
      }
    );

    const redBallLeftSize = new Anime.Anime(
      {
        animatedAttrs: {
          width: "800px",
          height: "800px",
        },
      },
      {
        duration: 500,
        selector: ".read-ball",
        easing: "easeOutQuart",
      }
    );

    const redBallLeftSizeZero = new Anime.Anime(
      {
        animatedAttrs: {
          width: "200px",
          height: "200px",
        },
      },
      {
        duration: 500,
        selector: ".read-ball",
        easing: "easeOutQuart",
      }
    );

    const helloTextTransitionLeft = new Anime.Anime(
      {
        animatedAttrs: {
          left: "200%",
        },
      },
      {
        duration: 700,
        selector: ".ft,.name-line",
        easing: "easeOutQuart",
        delay: `@stagger(0, 250)`,
      }
    );

    const devTextOut = new Anime.Anime(
      {
        animatedAttrs: {
          left: "-50%",
        },
      },
      {
        duration: 1000,
        selector: ".dev-text",
        easing: "easeOutQuart",
      }
    );

    const educationTextIn = new Anime.Anime(
      {
        animatedAttrs: {
          opacity: 1,
          transform: {
            scale: 1,
          },
        },
        initialValues: {
          opacity: 0,
          transform: {
            scale: 1.5,
          },
        },
      },
      {
        duration: 1000,
        selector: ".title-education-wrapper",
      }
    );

    const educationTextOut = new Anime.Anime(
      {
        animatedAttrs: {
          top: "-100%",
        },
        initialValues: {
          top: "68%",
        },
      },
      {
        duration: 1000,
        selector: ".title-education-wrapper",
      }
    );

    const educationTextMove = new Anime.Anime(
      {
        animatedAttrs: {
          left: "0%",
        },
        initialValues: {
          left: "-100%",
        },
      },
      {
        duration: 10000,
        repeats: Math.floor(this.attrs.educationTiming / 10000),
        selector: ".title-education-wrapper",
      }
    );
    const videoContainerWidth = new Anime.Anime(
      {
        animatedAttrs: {
          width: "100%",
        },
        initialValues: {
          left: "0%",
        },
      },
      {
        duration: 200,
        selector: ".video-container",
      }
    );

    const videoContainerHeight = new Anime.Anime(
      {
        animatedAttrs: {
          height: "100%",
        },
        initialValues: {
          height: "0.1%",
        },
      },
      {
        duration: 300,
        selector: ".video-container",
      }
    );

    const educationWrapper = new Anime.Anime(
      {
        animatedAttrs: {
          top: "0%",
        },
        initialValues: {
          top: "100%",
        },
      },
      {
        duration: 500,
        selector: ".education-wrapper",
      }
    );

    const educationLtrMove = new Anime.Anime(
      {
        animatedAttrs: {
          left: "0%",
        },
        initialValues: {
          left: "-100%",
        },
      },
      {
        duration: 350,
        selector: ".ltr-move",
        delay: `@stagger(0, 350)`,
        easing: "easeOutQuart",
      }
    );

    const educationContainerOut = new Anime.Anime(
      {
        animatedAttrs: {
          left: "-100%",
        },
        initialValues: {
          left: "0%",
        },
      },
      {
        duration: 550,
        selector: ".education-container",
        delay: `@stagger(0, 350)`,
        easing: "easeOutQuart",
      }
    );

    const videoWrapperZero = new Anime.Anime(
      {
        animatedAttrs: {
          left: "40%",
          width: "0%",
        },
        initialValues: {
          left: "0%",
          width: "40%",
        },
      },
      {
        duration: 800,
        selector: ".video-wrapper",
        easing: "easeOutQuart",
      }
    );

    const lineGraphSeniority = new Graph.LineGraph(
      {
        data: seniority,
        trace: {
          toggle: false,
          scale: 5.5,
        },
        legend: true,
        Grid: "lines",
        palette: {
          background: "#fff",
          accent: "#19f6e8",
          primary: "#ffffff42", //grames
          font: "#2d2d2d",
          secondary: "#2d2d2d", //background color
          tertiary: "#19f6e8",
          quaternary: "#F00",
          quinary: "#19f6e8",
          senary: "#fff",
        },
        timings: {
          intro: 4000,
          static: this.attrs.skillTiming - 8000,
          outro: 4000,
        },
        font: {
          size: ".8rem",
        },
      },
      {
        selector: ".line-graph-seniority",
        containerParams: {
          width: "712px",
          height: "384px",
        },
      }
    );

    const lineGraphEngagement = new Graph.LineGraph(
      {
        data: engagement,
        trace: {
          toggle: false,
          scale: 5.5,
        },
        legend: true,
        Grid: "lines",
        palette: {
          background: "#fff",
          accent: "#19f6e8",
          primary: "#ffffff42", //grames
          font: "#2d2d2d",
          secondary: "#2d2d2d", //background color
          tertiary: "#19f6e8",
          quaternary: "#F00",
          quinary: "#19f6e8",
          senary: "#fff",
        },
        timings: {
          intro: 4000,
          static: this.attrs.skillTiming - 8000,
          outro: 4000,
        },
        font: {
          size: ".8rem",
        },
      },
      {
        selector: ".line-graph-engagement",
        containerParams: {
          width: "712px",
          height: "384px",
        },
      }
    );

    const barChart = new Graph.BarChartSimple(
      {
        data: barChartData,
        timings: {
          intro: 1000,
          static: this.attrs.softSkillTiming - 2000,
          outro: 1000,
        },
        palette: {
          background: "#fff0",
          accent: "#fff0",
          primary: "#2d2d2d",
          tertiary: "#19f6e8",
          font: "#fff0",
          secondary: "#fff0",
        },
        font: {
          size: ".8rem",
        },
      },
      {
        selector: ".bar-chart",
        containerParams: {
          width: "484px",
          height: "870px",
        },
      }
    );

    const videoWrapperTransition = new Anime.Anime(
      {
        animatedAttrs: {
          left: "60%",
          width: "40%",
        },
        initialValues: {
          left: "60%",
          width: "0%",
        },
      },
      {
        duration: 800,
        selector: ".video-wrapper",
        easing: "easeOutQuart",
      }
    );

    const videoConOneOpacity = new Anime.Anime(
      {
        animatedAttrs: {
          opacity: 0,
        },
      },
      {
        duration: 1,
        selector: ".video-container-1",
        easing: "easeOutQuart",
      }
    );

    const transitionLeft = new Anime.Anime(
      {
        animatedAttrs: {
          left: "0%",
        },
        initialValues: {
          left: "100%",
        },
      },
      {
        duration: 500,
        selector: ".transition",
      }
    );
    const transitionWidth = new Anime.Anime(
      {
        animatedAttrs: {
          width: "0%",
        },
        initialValues: {
          width: "100%",
        },
      },
      {
        duration: 500,
        selector: ".transition",
      }
    );

    const videoWrapperTop = new Anime.Anime(
      {
        animatedAttrs: {
          top: "-100%",
        },
        initialValues: {
          top: "0%",
        },
      },
      {
        duration: 1500,
        selector: ".video-wrapper",
        easing: "easeOutQuart",
      }
    );

    const videoWrapperChangeleft = new Anime.Anime(
      {
        animatedAttrs: {
          left: "0%",
        },
        initialValues: {
          left: "60%",
        },
      },
      {
        duration: 1,
        selector: ".video-wrapper",
        easing: "easeOutQuart",
      }
    );

    const videoConThreeOpacity = new Anime.Anime(
      {
        animatedAttrs: {
          opacity: 0,
        },
      },
      {
        duration: 1,
        selector: ".video-container-3",
        easing: "easeOutQuart",
      }
    );

    const videoWrapperBtTin = new Anime.Anime(
      {
        animatedAttrs: {
          top: "0%",
        },
        initialValues: {
          top: "100%",
        },
      },
      {
        duration: 1500,
        selector: ".video-wrapper",
        easing: "easeOutQuart",
      }
    );

    const seniorityTextIn = new Anime.Anime(
      {
        animatedAttrs: {
          left: "4%",
        },
        initialValues: {
          left: "-100%",
        },
      },
      {
        duration: 1500,
        selector: ".seniority,.engagement",
        easing: "easeOutQuart",
      }
    );

    const svgShapeOneOut = new Anime.Anime(
      {
        animatedAttrs: {
          strokeDashoffset: 2240,
          strokeDasharray: 2240,
        },
      },
      {
        duration: 1500,
        selector: ".shape1",
        easing: "easeOutQuart",
      }
    );

    const svgShapeTwoOut = new Anime.Anime(
      {
        animatedAttrs: {
          strokeDashoffset: -2240,
          strokeDasharray: 2240,
        },
      },
      {
        duration: 1500,
        selector: ".shape2",
        easing: "easeOutQuart",
      }
    );

    const videoConTwoOpacity = new Anime.Anime(
      {
        animatedAttrs: {
          opacity: 0,
        },
      },
      {
        duration: 1,
        selector: ".video-container-2",
        easing: "easeOutQuart",
      }
    );

    const seniorityTextOut = new Anime.Anime(
      {
        animatedAttrs: {
          left: "-100%",
        },
        initialValues: {
          left: "4%",
        },
      },
      {
        duration: 1000,
        selector: ".seniority",
        easing: "easeOutQuart",
      }
    );

    const engagementTextOut = new Anime.Anime(
      {
        animatedAttrs: {
          top: "100%",
        },
        initialValues: {
          top: "51%",
        },
      },
      {
        duration: 700,
        selector: ".engagement",
        easing: "easeOutQuart",
      }
    );

    const barChartBgIn = new Anime.Anime(
      {
        animatedAttrs: {
          width: "675px",
        },
        initialValues: {
          width: "0px",
        },
      },
      {
        duration: 700,
        selector: ".bar-chart-bg",
        easing: "easeOutQuart",
      }
    );

    const softSkillTextIn = new Anime.Anime(
      {
        animatedAttrs: {
          top: "5%",
        },
        initialValues: {
          top: "100%",
        },
      },
      {
        duration: 700,
        selector: ".soft-skills",
        easing: "easeOutQuart",
      }
    );

    const barCharLableWrapperIn = new Anime.Anime(
      {
        animatedAttrs: {
          width: "600px",
        },
        initialValues: {
          width: "0px",
        },
      },
      {
        duration: 700,
        selector: ".bar-char-lable-wrapper",
        easing: "easeOutQuart",
      }
    );

    const barCharLablecontainerIn = new Anime.Anime(
      {
        animatedAttrs: {
          left: "4%",
        },
        initialValues: {
          left: "-100%",
        },
      },
      {
        duration: 500,
        selector: ".bar-char-lable-container",
        easing: "easeOutQuart",
        delay: `@stagger(0, 500)`,
      }
    );

    const softSkillTextOut = new Anime.Anime(
      {
        animatedAttrs: {
          left: "100%",
        },
        initialValues: {
          left: "4%",
        },
      },
      {
        duration: 700,
        selector: ".soft-skills",
        easing: "easeOutQuart",
      }
    );

    const barCharLablecontainerOut = new Anime.Anime(
      {
        animatedAttrs: {
          width: "0px",
        },
      },
      {
        duration: 500,
        selector:
          ".bar-char-lable-container,.bar-char-lable-wrapper,.bar-chart-bg",
        easing: "easeOutQuart",
        delay: `@stagger(0, 500)`,
      }
    );

    const linkIn = new Anime.Anime(
      {
        animatedAttrs: {
          top: "0%",
        },
        initialValues: {
          top: "-100%",
        },
      },
      {
        duration: 700,
        selector: ".link-container",
        easing: "easeOutQuart",
      }
    );

    const linkLine = new Anime.Anime(
      {
        animatedAttrs: {
          width: "100%",
        },
        initialValues: {
          width: "0%",
        },
      },
      {
        duration: 700,
        selector: ".link-line",
        easing: "easeOutQuart",
      }
    );

    this.addIncident(devText, 0);
    this.addIncident(helloLetterReveal, 0);
    this.addIncident(redBallIn, 0);
    this.addIncident(helloTextTransform, 1000);
    this.addIncident(helloOpacity, 1300);
    this.addIncident(helloFullName, 1800);
    this.addIncident(nameLineLeft, 1500);
    this.addIncident(nameLineWidth, 2000);
    this.addIncident(redBallLeftTransition, 2600);
    this.addIncident(redBallLeftSize, 2600);
    this.addIncident(helloTextTransitionLeft, 2600);
    this.addIncident(devTextOut, 2600);
    this.addIncident(redBallLeftSizeZero, 3100);
    this.addIncident(educationTextIn, 2600);
    this.addIncident(educationTextMove, 3000);
    this.addIncident(videoContainerWidth, 2800);
    this.addIncident(educationVideo, 2800);
    this.addIncident(videoContainerHeight, 3000);
    this.addIncident(educationWrapper, 2800);
    this.addIncident(educationLtrMove, 3300);
    this.addIncident(educationTextOut, educationOutTime);
    this.addIncident(educationContainerOut, educationOutTime);
    this.addIncident(videoWrapperZero, educationOutTime);
    this.addIncident(videoWrapperTransition, educationOutTime + 800);
    this.addIncident(videoConOneOpacity, educationOutTime + 800);
    this.addIncident(skillVideo, educationOutTime + 800); //skill video
    this.addIncident(lineGraphSeniority, educationOutTime + 600);
    this.addIncident(lineGraphEngagement, educationOutTime + 600);
    this.addIncident(seniorityTextIn, educationOutTime);
    this.addIncident(svgShapeOne, educationOutTime);
    this.addIncident(svgShapeTwo, educationOutTime);
    this.addIncident(svgShapeOneOut, skillTimingOut);
    this.addIncident(svgShapeTwoOut, skillTimingOut);
    this.addIncident(videoConTwoOpacity, skillTimingOut);
    this.addIncident(softSkillVideo, skillTimingOut); //softskill video
    this.addIncident(seniorityTextOut, skillTimingOut + 600);
    this.addIncident(softSkillTextIn, skillTimingOut + 600);
    this.addIncident(engagementTextOut, skillTimingOut + 600);
    this.addIncident(barChartBgIn, skillTimingOut + 600);
    this.addIncident(barCharLableWrapperIn, skillTimingOut + 600);
    this.addIncident(barCharLablecontainerIn, skillTimingOut + 1000);
    this.addIncident(barChart, skillTimingOut + 600);
    this.addIncident(transitionLeft, softSkillTimingOut + 1800);
    this.addIncident(transitionWidth, softSkillTimingOut + 2101);
    this.addIncident(videoWrapperTop, softSkillTimingOut + 1800);
    this.addIncident(softSkillTextOut, softSkillTimingOut + 1800);
    this.addIncident(barCharLablecontainerOut, softSkillTimingOut + 1800);
    this.addIncident(videoWrapperChangeleft, softSkillTimingOut + 3301);
    this.addIncident(videoConThreeOpacity, softSkillTimingOut + 3301);
    this.addIncident(videoWrapperBtTin, softSkillTimingOut + 3303);
    this.addIncident(nextMoveVideo, softSkillTimingOut + 3303);
    this.addIncident(linkIn, softSkillTimingOut + 3303);
    this.addIncident(linkLine, softSkillTimingOut + 4003);
  }
}
