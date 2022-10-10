import { loadPlugin, HTMLClip } from "@donkeyclip/motorcortex";
import Player from "@donkeyclip/motorcortex-player";
import MyPluginDefinition from "../dist/motorcortex-cv.umd";
const MyPlugin = loadPlugin(MyPluginDefinition);

const clip = new HTMLClip({
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

const newCvClip = new MyPlugin.Cv(
  {
    firstName: "Ivan",
    lastName: "Vlachos",
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
    educationTiming: 10000,
    nextMoveTiming: 10000,
    educationVideo:
      "https://github.com/kissmybutton/motorcortex-cv/blob/main/demo/clip1.mp4?raw=true",
    skillVideo:
      "https://github.com/kissmybutton/motorcortex-cv/blob/main/demo/clip2.mp4?raw=true",
    softSkillVideo:
      "https://github.com/kissmybutton/motorcortex-cv/blob/main/demo/clip3.mp4?raw=true",
    nextMoveVideo:
      "https://github.com/kissmybutton/motorcortex-cv/blob/main/demo/clip4.mp4?raw=true",
    videoSize: {
      width: 1920,
      height: 1080,
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
    softSkillOverview: {
      adaptability: 90,
      teamwork: 87,
      communication: 80,
      problemSolving: 90,
      creativity: 95,
      leadership: 70,
    },
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

clip.addIncident(newCvClip, 0);
new Player({ clip, timeFormat: "ms"});
