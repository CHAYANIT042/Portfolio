const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY > 0 );
});



// ลิงค์ไปไฟล์project
window.onload=pageload;
function pageload(){
    var buttonproject =document.getElementById("button1");
    buttonproject.onclick = nextpage; 
}
function nextpage(){
    location.href = "project.html";
}


