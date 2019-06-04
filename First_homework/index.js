'use strict';
const nameCheck = function () {
    let name = prompt('Enter your name', '').split('');
    let support = false;
    for (let i = 0; i < name.length; i++) {
        if (!isNaN(name[i])) {
            support = true;
            break;
        }
    }
    if (support) {
        for (let j = 0; j < name.length; j++) {
            if (j % 2 == 0) {
                name[j] = name[j].toUpperCase();
            }
        }
    } else {
        name.reverse();
    }
    name = name.join('');
    console.log(name);


}
nameCheck();