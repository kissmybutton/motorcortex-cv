#   MotorCortex-CV

**Table of Contents**

- [MotorCortex-CV](#motorcortex-cv)
  - [Demo](#demo)
- [Intro / Features](#intro--features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Importing and Loading](#importing-and-loading)
- [Creating Incidents](#creating-incidents)
  - [CV](#cv)
- [Adding Incidents in your clip](#adding-incidents-in-your-clip)
- [Contributing](#contributing)
- [License](#license)
- [Sponsored by](#sponsored-by)

## Demo

[Check it out here](https://kissmybutton.github.io/motorcortex-cv/demo/)

# Intro / Features
With MotorCortex-cv helps you introduce yourself with a clip. It presents between others information about your education and your skills. Using this plugin you can easily create a cv clip.

The Plugin exposes just one Incident:
* CV

# Getting Started
## Installation

```bash
$ npm install --save @kissmybutton/motorcortex-cv
# OR
$ yarn add @kissmybutton/motorcortex-cv
```

## Importing and Loading

```javascript
import { loadPlugin } from "@kissmybutton/motorcortex";
import MCCv from "@kissmybutton/motorcortex-cv";
const CvPlugin = loadPlugin(MCCv);
```

# Creating Incidents

## CV

```javascript
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
In order to create a cv clip you should use CV Incident and parse the information you want like the example above.
What is need ?

| Name      |                Are          | Values |
| --------  | :--------------------------:| -----: |
| fitstname |           your firstname    | string |
| lastname  |            your lastname    | string |
| education  |  a list which contain all your education levels - each level as a single object in the list. Every object should include `year`,`name` and `title`.   | list of objects |
| skillTiming  | the duration of skills slide  | number |
| educationTiming  | the duration of education slide  | number |
| softSkillTiming  | the duration of soft skills slide  | number |
| nextMoveTiming  | the duration of next moves slide  | number |
| skillVideo  | the video of skills slide  | video |
| educationVideo  | the video of education slide  | video |
| softSkillVideo  | the video of soft skills slide  | video |
| nextMoveVideo  | the video of next moves slide  | video |
| videoSize  | the dimensions as an object which indlude `width` and `height`| number |
| skillOverview  | an object which includes `dataSetsTitles`, `seniority` and `engagement` | object |
| dataSetsTitles  | a list of the titles of dataSets  | string |
| seniority  | a list of objects. Every object should include `name` and `values`.  | string |
| engagement  | a list of objects. Every object should include `name` and `values`.  | string |
| softSkillOverview  | an object with the attributes: `adaptability`, `teamwork` ,`communication`, `problemSolving`, `creativity`, `leadership`  | number(%) |
| links |    a list of objects. Every object should include `name` and `url`   | string |

# Adding Incidents in your clip

```javascript
clipName.addIncident(incidentName, startTime);
```

# Contributing 

In general, we follow the "fork-and-pull" Git workflow, so if you want to submit patches and additions you should follow the next steps:
1.	**Fork** the repo on GitHub
2.	**Clone** the project to your own machine
3.	**Commit** changes to your own branch
4.	**Push** your work back up to your fork
5.	Submit a **Pull request** so that we can review your changes

# License

[MIT License](https://opensource.org/licenses/MIT)

# Sponsored by
[![Kiss My Button](https://presskit.kissmybutton.gr/logos/kissmybutton-logo-small.png)](https://kissmybutton.gr)
