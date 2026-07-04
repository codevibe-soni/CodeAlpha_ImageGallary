const images = document.querySelectorAll(".images img");

let lightImage = document.querySelector(".lightbox");

let largeImage = document.querySelector(".largeimage");

const closebtn = document.querySelector(".close");

const prevbtn = document.querySelector(".previous");

const nextbtn = document.querySelector(".next");

const navLinks = document.querySelectorAll("nav a");

const imageCards = document.querySelectorAll(".images");

let currentIndx = 0;


// click event
images.forEach((image,index) =>{

image.addEventListener("click",function(){
lightImage.style.display = "flex";
largeImage.src = image.src;
 currentIndx = index;

});
});

prevbtn.addEventListener("click",()=>{

    if( currentIndx === 0){
        currentIndx = images.length-1;
    }else{
    currentIndx--;
    }
     largeImage.src = images[currentIndx].src;

     });

    nextbtn.addEventListener("click",()=>{
       if(currentIndx === images.length-1 ){
        currentIndx = 0;
        }else{
            currentIndx++;
        }
    largeImage.src = images[currentIndx].src;
    });


    closebtn.addEventListener("click",()=>{
        lightImage.style.display = "none";
    })


    navLinks.forEach((link)=>{


        link.addEventListener("click",(e)=>{

            e.preventDefault(); 

           const filter =  link.dataset.filter;

           imageCards.forEach((card)=>{

           const cardFilter = card.dataset.category;

            if(  filter === "all"){
             card.style.display = "block";
            }
            else if(filter === cardFilter ){
            card.style.display = "block";
            }
             else{
                card.style.display = "none";
             }
             });
        });
    });