/* Author: 
Ninad Parkar
*/

//To the Top button for all page
var 
buttonUp = document.querySelector('.arrow a'),
hamburger = document.querySelector('.hamburger'),
nav = document.querySelector('nav');

//To migrate at top of page
buttonUp.onclick = (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
};

window.onscroll = () => {scrollFunction()};

//After Scrolling 20px this function will Invoke
var scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        buttonUp.style.display = "block";
    } else {
        buttonUp.style.display = "none";
    }
}

//Hamburger
hamburger.onclick = function() {
  if(nav.style.display == 'block') {
      nav.style.display = 'none';
  }
    else {
      nav.style.display = 'block';
  }
}

//For index page
try {
  var
  closePopUp = document.querySelector('.close_btn_home'),
  popUp = document.querySelector('.modal_home'),
  signUpForm = document.querySelector('.newsletter_signup form'),
  signUp = document.querySelector('.newsletter_signup input[type="submit"]');

  //Preventing form from continuing its usual functionality  
  signUpForm.onclick = (e) => e.preventDefault();

  //This Function will invoke after user clicks on submit
  signUp.onclick = () => {
    var
      firstName = document.getElementById('first_name').value,
      lastName = document.getElementById('last_name').value,
      email = document.getElementById('email').value,
      mobileNumber = document.getElementById('mobile_number').value,
      pass = document.getElementById('password').value,
      confirmPass = document.getElementById('c_password').value,
      popUpMsg = document.querySelector('.modal_message'),
      textV = /^[A-Za-z]+$/,
      emailV = /^[a-zA-Z0-9+_.-]+@[a-zA-Z]+\.[a-zA-Z]+$/,
      numberV = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
      if (!textV.test(firstName)) {
        popUp.style.transform = 'translateY(0)';
        popUpMsg.innerHTML = 'Invalid First Name field';
      }
      else if (!textV.test(lastName)) {
        popUp.style.transform = 'translateY(0)';
        popUpMsg.innerHTML = 'Invalid Last Name field';
      }
      else if (!emailV.test(email)) {
        popUp.style.transform = 'translateY(0)';
        popUpMsg.innerHTML = 'Invalid Email field (For Reference ninadp@prdxn.com)';
      }
      else if (!numberV.test(mobileNumber)) {
        popUp.style.transform = 'translateY(0)';
        popUpMsg.innerHTML = 'Invalid Mobile Number field';
      }
      else if (pass.length <= 8) {
        popUp.style.transform = 'translateY(0)';
        popUpMsg.innerHTML = 'Password Length should be more than 8';
      }
      else if (confirmPass != pass) {
        popUp.style.transform = 'translateY(0)';
        popUpMsg.innerHTML = 'Confirm Password Not Matched with Password';
      }
      else {
        popUp.style.transform = 'translateY(0)';
        popUpMsg.innerHTML = 'Successful !!';
        signUpForm.reset();
      }
    }

    closePopUp.onclick = () => popUp.style.transform = 'translateY(-100%)';
} catch (error) {
  //Skiping the error so that we dont get error while we are using other page.
}

//For News page
try {
  var
  moreNews = document.querySelectorAll('.more_remaining_news'),
  moreNewsSize = moreNews.length,
  showMore = document.querySelector('a[title="Show More"]'),
  video = document.querySelectorAll('.video'),
  playVideo = document.querySelector('.modal_news'),
  closeVideo = document.querySelector('.close_btn_news'),
  video1 = '<iframe width="560" height="315" src="https://www.youtube.com/embed/07d2dXHYb94" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  video2 = '<iframe width="560" height="315" src="https://www.youtube.com/embed/sVPYIRF9RCQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  video3 = '<iframe width="560" height="315" src="https://www.youtube.com/embed/WKiRLpD0xSo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  video4 = '<iframe width="560" height="315" src="https://www.youtube.com/embed/V3fDtsDsGSo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

  //Load More News
  showMore.onclick = () => {
    for(i = 0; i < moreNewsSize; i++) {
      moreNews[i].style.display = 'block';
    }
    showMore.style.display = 'none';
  }

  //To Select which video should be displayed on screen
  video[1].onclick = () => displayVideo(video1);
  video[2].onclick = () => displayVideo(video2);
  video[3].onclick = () => displayVideo(video3);
  video[4].onclick = () => displayVideo(video4);

  //Display Video Modal
  function displayVideo(videoLink) {
    playVideo.style.display = 'block';
    video[0].innerHTML = videoLink;
  }

  //Close Video Modal
  closeVideo.onclick = () => playVideo.style.display = 'none';

  //Slick Slider Implementation for Video Slider
  $('.multi_item').slick({
      arrows: true,
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
} catch (error) {
    //Skiping the error so that we dont get error while we are using other page.
}

//For conference page
try {
  var 
  itemList = document.querySelector('.conference_list').children,
  itemLength = itemList.length,
  lightbox = document.querySelector('.lightbox'),
  lightboxImg = document.querySelector('.lightbox_img'),
  lightboxHeading = document.querySelector('.lightbox_heading'),
  lightboxSubHeading = document.querySelector('.lightbox_sub_heading'),
  lightboxDescription = document.querySelector('.lightbox_caption p'),
  closeLightbox = document.querySelector('.close_lightbox_btn');

  //For Activation of Lightbox
  for(i = 0; i < itemLength; i++) {
    itemList[i].addEventListener('click', function(){
      lightbox.style.display = "block";
      lightboxImg.src = this.childNodes[1].childNodes[1].src;
      lightboxHeading.innerHTML = this.childNodes[3].innerHTML;
      lightboxSubHeading.innerHTML = this.childNodes[5].innerHTML;
      lightboxDescription.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magni tenetur dolorem laborum placeat autem est, distinctio et, odit quo rem dolorum cumque. Ea velit officiis dicta impedit, distinctio dolores.';
    });
  }

  //For Close the Lightbox
  closeLightbox.onclick = () => {
    lightbox.style.display = "none";
  }

} catch (error) {
  //Skiping the error so that we dont get error while we are using other page.
}










