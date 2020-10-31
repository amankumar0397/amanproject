var i = 0;
var images = [];
var time = 3000;

images[0] = "img/1.png";
images[1] = "img/2.png";
images[2] = "img/3.png";
images[3] = "img/4.png";

function changeImg(){
    document.slide.src = images[i];
    
    if(i < images.length - 1){
        i++;
    }
    else{
        i = 0;
    }
    setTimeout("changeImg()", time)
}
window.onload = changeImg;


function clickcourses(){
    var click1 = document.getElementById("course-item");
    if(click1.style.display == "none"){
        click1.style.display = "block";
        click1.style.position = "absolute";
        click1.style.padding = "10px";
        click1.style.marginLeft="80px"
        click1.style.boxShadow="2px 2px 4px #000000";
        click1.style.borderRadius=" 0px 8px 0px 8px";
        
    }
    else{
        click1.style.display = "none";
    }
}

function clickjobs(){
    var click1 = document.getElementById("job-item");
    if(click1.style.display == "none"){
        click1.style.display = "block";
        click1.style.position = "absolute";
        click1.style.padding = "10px";
        click1.style.marginLeft="80px"
        click1.style.boxShadow="2px 2px 4px #000000";
        click1.style.borderRadius=" 0px 8px 0px 8px";
        
    }
    else{
        click1.style.display = "none";
    }
}