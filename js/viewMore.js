function viewMore() {
    document.getElementById("view-more-items").style.display = "flex";
    var viewMoreContainer = document.getElementsByClassName("view-more-container");
    for(var i = 0; i < viewMoreContainer.length; i++) {
        viewMoreContainer[i].style.display = "none";
    }
}