# motorcortex-cv

## Installation

```bash
$ npm install --save @kissmybutton/motorcortex-cv
# OR
$ yarn add @kissmybutton/motorcortex-cv
```

## Importing

```javascript
import MotorCortex from "@kissmybutton/motorcortex";
import MCCv from "@kissmybutton/motorcortex-cv";
```

## Loading

```javascript
const CvPlugin = MotorCortex.loadPlugin(MCCv);
```

## API

The Plugin exposes one Incidents:

- the video Cv

### Clip

```javascript
import MotorCortex from "@kissmybutton/motorcortex";
import CvDefinition from "@kissmybutton/motorcortex-youtube";
const CvPlugin = MotorCortex.loadPlugin(CvDefinition);

const newCvClip = new CvPlugin.Cv(
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
    educationVideo: "./clip1.mp4",
    skillVideo:"./clip2.mp4",
    softSkillVideo:"./clip3.mp4",
    nextMoveVideo:"./clip4.mp4",
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
    softSkillOverview:{
      adaptability:90,
      teamwork:87,
      communication:80,
      problemSolving:90,
      creativity:95,
      leadership:70
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
```


Demo:[https://kissmybutton.github.io/motorcortex-cv/demo/](https://kissmybutton.github.io/motorcortex-cv/demo/)

## License

[MIT License](https://opensource.org/licenses/MIT)
[![Kiss My Button](https://presskit.kissmybutton.gr/logos/kissmybutton-logo-small.png)](https://kissmybutton.gr)
