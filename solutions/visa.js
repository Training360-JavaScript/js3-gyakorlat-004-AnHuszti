'use strict';

const checkVisa = (num) => {
    const pattern = /^4(\d{12}|\d{15})$/;
    return pattern.test(num);
}

export default checkVisa;