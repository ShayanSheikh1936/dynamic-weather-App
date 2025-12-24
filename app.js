// const pic = document.getElementById("image");
// // const apiKey = "a1fcc3ed750d43c5bfa193323252212";
// const city = "Sindh, Pakistan";

// const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

// async function weatherApp(url, city) {
    // let response = await fetch(url)
    // let data = await response.json();
    // console.log(data);
    // pic.src = data.current.condition.icon
//     let response = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//         pic.src = data.current.condition.icon;
//         console.log(`Condition: ${data.current.condition.text}`);
//     })
//     .catch((error) => console.log(error));
// }

// weatherApp(url, city);
    // console.log(`Condition: ${data.current.condition.text}`);;

const autoSwipe = document.querySelector(".first-loader");

setTimeout(() => {
    autoSwipe.style.animation= "1.5s loader linear forwards";
}, 8000);

ScrollReveal({
 
    distance : '10px',
    duration : 1500,
    delay : 300,
  });
  ScrollReveal().reveal('.animate-right', {delay : 250, origin: 'right', distance: '20px', reset: true, mobile: false, easing: 'ease'});
  ScrollReveal().reveal('.animate-left', { delay: 250 , origin: 'left', distance: '20px', reset: true, mobile: false});
  ScrollReveal().reveal('.animate-bottom',{ delay: 200 , origin: 'bottom' , reset: true, distance: '30px'});
  ScrollReveal().reveal('.animate-top',{ delay: 300 , origin: 'top', distance: '30px', reset: true});
//   ScrollReveal().reveal('.animate-top-1',{ delay: 200 , origin: 'bottom'});
//   ScrollReveal().reveal('.animate-top-2',{ delay: 300 , origin: 'bottom'});
//   ScrollReveal().reveal('.animate-top-3',{ delay: 400 , origin: 'bottom'});
//   ScrollReveal().reveal('.animate-top-4',{ delay: 500 , origin: 'bottom'});
  ScrollReveal().reveal('.reveal1',{ delay: 300 , reset:true,});
  ScrollReveal().reveal('.reveal2',{ delay: 500 , reset:true, });
  ScrollReveal().reveal('.reveal3',{ delay: 700 , reset:true,});
  ScrollReveal().reveal('.reveal4',{ delay: 900 , reset:true,});
  ScrollReveal().reveal('.clickmore',{ delay: 700 , reset:true, origin: 'bottom' });
  ScrollReveal().reveal('.rotate',{ rotate:{ x: 0, y: 0, z: 100 }, reset: true } );
  ScrollReveal().reveal('.footerSection',{ delay: 200 , origin: 'bottom' , reset: true, distance: '30px', desktop: false });
  ScrollReveal().reveal('.contactSection',{ delay: 200 , origin: 'top' , reset: true, distance: '30px', desktop: false } );

    
