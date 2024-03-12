var infoTitle = document.getElementsByClassName('infoTitle');
var infoContent = document.getElementsByClassName('infoContent');

function viewInfo(titleName) {
    for(title of infoTitle) {
        title.classList.remove("activeTitle");
        if (title.classList.contains(titleName)) {
            title.classList.add("activeTitle");
        }
    }
    for(content of infoContent) {
        content.classList.remove("activeContent");
    }
    document.getElementById(titleName).classList.add("activeContent");
}