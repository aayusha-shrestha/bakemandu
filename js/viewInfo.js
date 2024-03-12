var tabTitle = document.getElementsByClassName('tab__title');
var tabContent = document.getElementsByClassName('tab__content');

function viewInfo(titleName) {
    for(title of tabTitle) {
        title.classList.remove("tab__title--active");
        if (title.classList.contains('tab__title--' + titleName)) {
            title.classList.add("tab__title--active");
        }
    }
    for(content of tabContent) {
        content.classList.remove("tab__content--active");
    }
    document.getElementById(titleName).classList.add("tab__content--active");
}