import pkg from '../package.json';
import Cv from './Incidents/Cv';


export default {
  npm_name: pkg.name, // don't touch this
  version: pkg.version, // don't touch this
  incidents: [
    {
      exportable: Cv,
      name: "Cv",
      originalDims: {
        width: '1280px',
        height: '720px'
      }
    }
  ],
  
};