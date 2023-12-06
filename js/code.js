var state = {
    d: 0
};

function changeDress(elementId, classNameArray) {
    var dress = document.getElementById(elementId);

    if (state.d < classNameArray.length) {
        dress.setAttribute("class", classNameArray[state.d]);
        state.d++;
    } else {
        state.d = 0;
        dress.setAttribute("class", classNameArray[state.d]);
    }
}

function nexthair() {
    changeDress("hairstyles", ["hair1", "hair2", "hair3", "hair4", "hair5"]);
}

function nexttop() {
    changeDress("tops", ["top1", "top2", "top3"]);
}

function nextglove() {
    changeDress("gloves", ["glove1", "glove2", "glove3"]);
}

function nextbottom() {
    changeDress("bottoms", ["bottom1", "bottom2", "bottom3"]);
}

document.getElementById('hairstyleButton').addEventListener('click', nexthair);
document.getElementById('topButton').addEventListener('click', nexttop);
document.getElementById('gloveButton').addEventListener('click', nextglove);
document.getElementById('bottomButton').addEventListener('click', nextbottom);
