import MotorCortex from "@donkeyclip/motorcortex";
// import Player from "@donkeyclip/motorcortex-player";
import MyPluginDefinition from "../dist/bundle.umd.js";
const MyPlugin = MotorCortex.loadPlugin(MyPluginDefinition);

const clip = new MotorCortex.HTMLClip({
  html: `<div class="container">
        
        <div id="htmlclip"></div>

     
    </div>`,
  css: `
        .container{
            width: 1280px,
            height: 720px
        }
        
    `,
  host: document.getElementById("clip"),
  containerParams: {
    width: "1280px",
    height: "720px",
  },
});

const newHTMLClip = new MyPlugin.MyHTMLClip(
  {
    firstName: "Ivan",
    lastName: "Vlachos",
    educationTime: 10000,
    educattion: [
      {
        year: "2015-2017",
        name: "Epal Kordeliou",
        title: "Computer Technician",
      },
      {
        year: "2017-2019",
        name: "Iek Monastiriou",
        title: "Game Developer/Web designer",
      },
      { year: "2019-2020", name: "Gabishlagya", title: "Flat Desing" },
    ],
    skillTiming: 10000,
    softSkillTiming: 10000,
    educationVideo: "./videotest.mp4",
    videoSize: {
      width: 960,
      height: 540,
    },
    skillOverview: {
      dataSetsTitles: ["CSS", "JS", "Python", "C#"],
      seniority: [
        {
          name: "2016",
          values: [45, 12, 60, 20],
        },
        {
          name: "2017",
          values: [24, 67, 60, 20],
        },
        {
          name: "2018",
          values: [50, 72, 60, 50],
        },
        {
          name: "2019",
          values: [66, 80, 55, 45],
        },
        {
          name: "2020",
          values: [81, 86, 60, 20],
        },
        {
          name: "2021",
          values: [92, 90, 30, 20],
        },
      ],
      engagement: [
        {
          name: "2016",
          values: [45, 12, 60, 20],
        },
        {
          name: "2017",
          values: [24, 67, 60, 20],
        },
        {
          name: "2018",
          values: [50, 72, 60, 50],
        },
        {
          name: "2019",
          values: [66, 80, 55, 45],
        },
        {
          name: "2020",
          values: [81, 86, 60, 20],
        },
        {
          name: "2021",
          values: [92, 90, 30, 20],
        },
      ],
    },
    softSkillOverview:{
      adaptability:90,
      teamwork:87,
      communication:80,
      problemSolving:90,
      creativity:95,
      leadership:70
    },
    nextMoveTiming: "10000",
    links: [
      { name: "cv link", url: "randomurl" },
      { name: "linkedin", url: "randomurl" },
      { name: "portofolio", url: "randomurl" },
    ],
  },
  {
    selector: "#htmlclip",
  }
);

clip.addIncident(newHTMLClip, 0);
document.getElementById("play").onclick = function (e) {
  console.log("eeeeeee")
  clip.play();
};
let a = 0

document.getElementById("vol").onclick = function (e) {
  console.log(a++%2)
  clip.setVolume(a++%2)
};
// const player = new Player({ clip, timeFormat: "ms", pointerEvents: true });
