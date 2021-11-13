'use strict';

const checkMac = (num) => {
    const pattern = /^([0-9a-f]{2}(:|-)){5}[0-9a-f]{2}$/i;
    return pattern.test(num);
}

export default checkMac;