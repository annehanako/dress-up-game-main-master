var state = {
    d: 0
};
function nexthair() {
    console.log("inside fuction nexthair");
    console.log(state.d);
    var dress = document.getElementById("hairstyles");
    if (state.d === 0) {
    dress.setAttribute("class", "hair1");
        state.d++;
    }
    else
        if (state.d === 1) {
    dress.setAttribute("class", "hair2");
            state.d++;
        }
        else
        if (state.d === 2) {
    dress.setAttribute("class", "hair3");
            state.d++;
        }
        else
        if (state.d === 3) {
    dress.setAttribute("class", "hair4");
            state.d++;
        }
        else
            if (state.d === 4) {
        dress.setAttribute("class", "hair5");
                state.d = 0;
            }
}

function nexttop() {
    var dress = document.getElementById("tops");
    if (state.d === 0) {
    dress.setAttribute("class", "top1");
        state.d++;
    }
    else
        if (state.d === 1) {
    dress.setAttribute("class", "top2");
            state.d++;
        }
        else
            if (state.d === 2) {
        dress.setAttribute("class", "top3");
                state.d = 0;
            }
}

function nextglove() {
    var dress = document.getElementById("gloves");
    if (state.d === 0) {
    dress.setAttribute("class", "glove1");
        state.d++;
    }
    else
        if (state.d === 1) {
    dress.setAttribute("class", "glove2");
            state.d++;
        }
        else
            if (state.d === 2) {
        dress.setAttribute("class", "glove3");
                state.d = 0;
            }
}

function nextbottom() {
    var dress = document.getElementById("bottoms");
    if (state.d === 0) {
    dress.setAttribute("class", "bottom1");
        state.d++;
    }
    else
        if (state.d === 1) {
    dress.setAttribute("class", "bottom2");
            state.d++;
        }
        else
            if (state.d === 2) {
        dress.setAttribute("class", "bottom3");
                state.d = 0;
            }
}


