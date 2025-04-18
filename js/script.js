// htmlcss progress circular bar 
let htmlProgress = document.querySelector(".kotlin"),
  htmlValue = document.querySelector(".kotlin-progress");

let htmlStartValue = 0,
  htmlEndValue = 95,
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;

  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${
    htmlStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// javasript progress circular bar 
let javascriptProgress = document.querySelector(".java"),
  javascriptValue = document.querySelector(".java-progress");

let javascriptStartValue = 0,
  javascriptEndValue = 90,
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;

  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
    javascriptStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// php progress circular bar 
let phpProgress = document.querySelector(".dart"),
  phpValue = document.querySelector(".dart-progress");

let phpStartValue = 0,
  phpEndValue = 80,
  phpspeed = 30;

let progressphp = setInterval(() => {
  phpStartValue++;

  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${
    phpStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (phpStartValue == phpEndValue) {
    clearInterval(progressphp);
  }
}, phpspeed);

// reactjs progress circular bar 
let reactProgress = document.querySelector(".uiux"),
  reactValue = document.querySelector(".uiux-progress");

let reactStartValue = 0,
  reactEndValue = 90,
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;

  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${
    reactStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  modalViews.forEach((modalView) => {
    modalView.classList.remove("active-modal");
  });
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

//close nav when clicked in responsive
document.querySelectorAll('.navbar-nav .nav-link').forEach(item => {
  item.addEventListener('click', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse).toggle();
    }
  });
});

/*let currentImages = [];
let currentIndex = 0;

function openSlider(images,appName) {
  currentImages = images;
  currentIndex = 0;
  document.getElementById("sliderImage").src = currentImages[currentIndex];
  document.getElementById("appTitle").textContent = appName;
  document.getElementById("sliderDialog").showModal();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  document.getElementById("sliderImage").src = currentImages[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  document.getElementById("sliderImage").src = currentImages[currentIndex];
}
let startX = 0;

const sliderImage = document.getElementById("sliderImage");*/

// Touch start
/*sliderImage.addEventListener("touchstart", function (e) {
  startX = e.touches[0].clientX;
});*/

// Touch end
/*sliderImage.addEventListener("touchend", function (e) {
  let endX = e.changedTouches[0].clientX;
  let diff = startX - endX;

  if (diff > 50) {
    nextImage(); // Swipe left
  } else if (diff < -50) {
    prevImage(); // Swipe right
  }
});*/



document.addEventListener('DOMContentLoaded', function() {
  const readMoreButtons = document.querySelectorAll('.post .read-more-btn'); // More specific selector
  const imageDialog = document.getElementById('imageDialog');
  const currentImage = document.getElementById('currentImage');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const closeButton = document.querySelector('.close-button');
  let imageList = [];
  let currentIndex = 0;

  // Function to open the dialog and load images
  readMoreButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();

      // Find the parent .post element and get the data-images attribute
      const postElement = this.closest('.post');
      if (postElement && postElement.dataset.images) {
        imageList = postElement.dataset.images.split(',');
        currentIndex = 0;
        currentImage.src = imageList[currentIndex];
        imageDialog.style.display = 'block';
      } else {
        console.error("No 'data-images' attribute found on the parent .post element.");
      }
    });
  });

  // Next button functionality
  nextButton.addEventListener('click', function() {
    currentIndex++;
    if (currentIndex >= imageList.length) {
      currentIndex = 0;
    }
    currentImage.src = imageList[currentIndex];
  });

  // Previous button functionality
  prevButton.addEventListener('click', function() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = imageList.length - 1;
    }
    currentImage.src = imageList[currentIndex];
  });

  // Close button functionality
  closeButton.addEventListener('click', function() {
    imageDialog.style.display = 'none';
  });

  // Close the dialog if the user clicks outside the modal
  window.addEventListener('click', function(event) {
    if (event.target === imageDialog) {
      imageDialog.style.display = 'none';
    }
  });
  imageDialog.style.display = 'none';
});