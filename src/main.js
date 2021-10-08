import { name, version } from '../package.json';
import MyHTMLClip from './Incidents/HTMLClip';


export default {
  npm_name: name, // don't touch this
  version: version, // don't touch this
  incidents: [
    {
      exportable: MyHTMLClip,
      name: "MyHTMLClip",
      // define your attributeValidationRules so MotorCortex can automatically validate them on instantiation 
      // also so your Incidents are directly embedable to DonkeyClip
    //   attributesValidationRules: {},
      originalDims: {
        width: '1280px',
        height: '720px'
      }
    }
  ],
  
};