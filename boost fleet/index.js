const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('open');
};


var qut = document.getElementById('qut');
// var strng = 'Discover Your Home Away From ';
// var len = strng.length ;
var list1 = [
  "Let's Go"
];

let lineIndex = 0;
let charIndex = 0;
let isDeleting = false;

function animateText() {
  const currentLine = list1[lineIndex];
  const currentChar = currentLine[charIndex];

  if (isDeleting) {
    qut.innerText = currentLine.substring(0, charIndex - 1) + '|';
    charIndex--;
  } else {
    qut.innerText = currentLine.substring(0, charIndex + 1) + '|';
    charIndex++;
  }

  if (!isDeleting && charIndex === currentLine.length) {
    isDeleting = true;
    setTimeout(() => { }, 5000); // Delay before starting the next line
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    lineIndex = (lineIndex + 1) % list1.length;
  }
}

if (qut) {
  setInterval(animateText, 200);
}

const slider = document.getElementById('image-slider');
let slideIndex = 0;

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slider.children.length;
  const translateValue = `translateX(${-slideIndex * 100}vw)`;
  slider.style.transform = translateValue;
}
if (slider) {
  setInterval(showNextSlide, 3000);
}

const startAnimation = (entries, observer) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("slide-in-from-right", entry.isIntersecting);
  });
};

const observer = new IntersectionObserver(startAnimation);
const options = { root: null, rootMargin: '0px', threshold: 1 };

const elements = document.querySelectorAll('.text-history');
elements.forEach(el => {
  observer.observe(el, options);
});




const homeLink = document.getElementById('mainpg');
const contactLink = document.querySelector('ul.navbar li:last-child a');
const homeinfo = homeLink.innerText;


window.addEventListener("scroll", function () {
  var scrollTop = window.scrollY;
  var sbHeight = window.innerHeight * (window.innerHeight / document.body.offsetHeight);
  // console.log("scroll top "+scrollTop);
  // console.log("sbheight "+sbHeight);
  if (scrollTop == 0) {
    homeLinkinfo();
  }
  else if (scrollTop >= 300) {
    contactinfo();
  } else {
    homeLinkinfo();
  }
});


function homeLinkinfo() {
  homeLink.innerHTML = "<b>" + homeinfo + "</b>";
  contactLink.innerText = "Contact";
};


contactLink.addEventListener('click', contactinfo());

function contactinfo() {
  contactLink.innerHTML = "<b>Contact</b>";
  homeLink.innerText = homeinfo;
};

homeLinkinfo();


var imgList = [
  'img/gp.jpg',
  'img/pp.jpg',
  'img/ptm.jpg',
  
];

const previous = document.getElementById('previous');
const next = document.getElementById('next');
const imgSrc = document.getElementById('img-change');

var index = 0;
next.addEventListener('click', function () {
  if (index == imgList.length - 1) {
    index = 0;
  }
  else {
    index = index + 1;
  }
  imgSrc.src = imgList[index];

});

previous.addEventListener('click', function () {
  if (index == 0) {
    index = imgList.length - 1;
  }
  else {
    index = index - 1;
  }
  imgSrc.src = imgList[index];

});


var imgList1 = [
  'img/games/1.jpg',
  'img/games/3.jpg',
  'img/games/2.jpg'

];

const previous2 = document.getElementById('previous2');
const next2 = document.getElementById('next2');
const imgSrc2 = document.getElementById('img-change2');

var index2 = 0;
next2.addEventListener('click', function () {
  if (index2 == imgList1.length - 1) {
    index2 = 0;
  }
  else {
    index2 = index2 + 1;
  }
  imgSrc2.src = imgList1[index2];

});

previous2.addEventListener('click', function () {
  if (index2 == 0) {
    index2 = imgList1.length - 1;
  }
  else {
    index2 = index2 - 1;
  }
  imgSrc2.src = imgList1[index2];

});

function shownextslide2() {
  if (index2 == imgList1.length - 1) {
    index2 = 0;
  }
  else {
    index2 = index2 + 1;
  }
  imgSrc2.src = imgList1[index2];
};

setInterval(shownextslide2, 3000);

var imgList3 = [
  'img/ganesh chaaturti/1.jpg',
  'img/ganesh chaaturti/2.jpg'
];

const previous3 = document.getElementById('previous3');
const next3 = document.getElementById('next3');
const imgSrc3 = document.getElementById('img-change3');

var index3 = 0;
next3.addEventListener('click', function () {
  if (index3 == imgList3.length - 1) {
    index3 = 0;
  }
  else {
    index3 = index3 + 1;
  }
  imgSrc3.src = imgList3[index3];

});

previous3.addEventListener('click', function () {
  if (index3 == 0) {
    index3 = imgList3.length - 1;
  }
  else {
    index3 = index3 - 1;
  }
  imgSrc3.src = imgList3[index3];

});


var rulescheckbox = false;

function addToFav() {
  document.getElementById("Fav-inc-selected").style.zIndex = 0;
  document.getElementById("Fav-inc").style.zIndex = -1;
  rulescheckbox = true;
  document.getElementById('nxtbtn').style.opacity=1;
  // console.log(rulescheckbox);
}

// removeFromFav();

function removeFromFav() {
  document.getElementById("Fav-inc-selected").style.zIndex = -1;
  document.getElementById("Fav-inc").style.zIndex = 0;
  rulescheckbox = false;
  document.getElementById('nxtbtn').style.opacity=0.5;
  // console.log(rulescheckbox);

}


// if(rulescheckbox == true){

// }

// const nextbtn = document.getElementById('nxtbtn');


// nextbtn.addEventListener('click', function () {
//   const docs = document.getElementById('docs1');
//   const rules = document.getElementById('rules1');
//   rules.style.display = 'inline-block';
//   docs.style.display = 'none';
// });


// function movenext() { 
//   // console.log("btn clicked");
//   document.getElementById('docs1').style.display='none';
//   document.getElementById('rules1').style.display='flex';
//   document.getElementById('rules1').style.left='0';
//   document.getElementById('latter3').style.display='inline-block';

// }


document.getElementById('dnldbtn').addEventListener('click', function() {
  if(rulescheckbox){
    downloadFile();
  }else{
    alert('You have not accepted terms and conditions');
  }
  console.log('clicked');
});

function downloadFile() {
  var imageUrl = 'img/shivaji maharaj.png';
    var link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'form.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}