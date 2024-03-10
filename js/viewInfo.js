var infoTitle = document.getElementsByClassName('infoTitle');
var infoContent = document.getElementsByClassName('infoContent');
function viewInfo (titleName) {
    for(title of infoTitle) {
        title.classList.remove("activeTitle");
    }
    for(content of infoContent) {
        content.classList.remove("activeContent");
    }
    document.getElementById(titleName).classList.add("activeTitle")
    document.getElementById(titleName).classList.add("activeContent");
}