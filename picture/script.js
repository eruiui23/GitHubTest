var simon = document.getElementById ('simon')
var bruce = document.getElementById ('bruce')
var benpic = document.getElementById('ben-pic')

simon.addEventListener('click', piclink);
bruce.addEventListener('click', piclink);
ben.addEventListener('click', piclink);

function piclink () {
    var allImage = document.querySelectorAll("img");

    for (var i=0;i<allImage.length; i++){
        allImage[i].className = "hide";
    }

    var pic_id = this.attributes["data-img"].value;
    var pic = document.getElementById(pic_id);

    if(pic.className === "hide"){
        pic.className = "";
    } else {
        pic.className = "hide";
    }

}