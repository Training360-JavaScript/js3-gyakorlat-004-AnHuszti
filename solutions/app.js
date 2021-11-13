'use strict';

import checkVisa from './visa';
import checkIP from './ip';
import checkMac from './mac';


const checker = {
    rules: {
        visa: checkVisa, 
        ip: checkIP, 
        mac: checkMac
    },
    validate(str, type) {
    return this.rules[type](str)
  }
  };
  export default checker
