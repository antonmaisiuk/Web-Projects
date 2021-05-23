let walk = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'];
function isValidWalk(walk) {
    let nStep = 0;
    let sStep = 0;
    let wStep = 0;
    let eStep = 0;
    let walkLength = walk.length;
    console.log(walk.length);
    if (walkLength === 10) {
        for (let i = 0; i < 10; i++) {
            if (walk[i] === 'n') {
                nStep++;
            }
            if (walk[i] === 'w') {
                wStep++;
            }
            if (walk[i] === 's') {
                sStep++;
            }
            if (walk[i] === 'e') {
                eStep++;
            }
        }

        if (walk[0] == 'n' || walk[0] == 's') {
            if ((nStep == sStep && wStep == eStep - 1) || (nStep == sStep && eStep == wStep - 1) || (nStep === sStep)) {
                return true;
            }
        } else {
            if ((wStep == eStep && nStep == sStep - 1) || (wStep == eStep && sStep == nStep - 1) || wStep === eStep) {
                return true;
            }
        }
    } else {
        return false;
    }
}

isValidWalk(walk);