const image1 = "assets/birman-cat-breed.jpeg";
const image2 = "assets/second.jpg";
// const image3 ="assets/third.jpeg";
const picturesOfCats = document.getElementById("picturesOfCats");
// const picturesOfCats2 = document.getElementById("picturesOfCats2");
// const picturesOfCats3 = document.getElementById("picturesOfCats3");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentImage = image1;
function imageChange1To2(){
    picturesOfCats.src = image2;
}
next.addEventListener("click", ()=>{
    currentImage = image2;
    imageChange1To2();
})

function imageChange2To1(){
    picturesOfCats.src = image1;
}
prev.addEventListener("click", ()=>{
    currentImage = image1;
    imageChange2To1();
})

// let currentImage2 = image2;
// function imageChange2To3(){
//     picturesOfCats.src = image3;
// }
// next.addEventListener("click", ()=>{
//     currentImage = image3;
//     imageChange2To3();
// })

// function imageChange3To2(){
//     picturesOfCats.src = image2;
// }
// prev.addEventListener("click", ()=>{
//     currentImage = image2;
//     imageChange3To2();
// })
