'use strict';

const checkIP = (num) => {
        const pattern = /^((\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5]).){3}(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/;
        return pattern.test(num);
};

export default checkIP;