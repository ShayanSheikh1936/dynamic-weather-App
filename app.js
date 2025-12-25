const errorName = document.querySelector(".error_name")
const pop_show = document.querySelector(".popup_show")
const autoSwipe = document.querySelector(".first-loader");
const errorPanel = document.querySelector(".popup_error_panel")

const apiKey = "a1fcc3ed750d43c5bfa193323252212";
const city = "Russia";

// const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

// async function weatherApp(url, city) {
//     let response = await fetch(url)
//     let data = await response.json();
//     console.log(data);
//     // pic.src = data.current.condition.icon;
// }
isTrue = false
function getWeather(lat, lon) {
  fetch(isTrue?`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`:`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
   .then(response => response.json())
   .then(data => {
       setTimeout(() => {
           autoSwipe.style.animation= "1s loader linear forwards "  
       }, 5000)
     console.log(data)
     let info={
      "country_name":data,

     }
   })
   .catch(error =>{
    console.log("failed to fetch")
    errorhandling("failed to fetch")
   });
}
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log(lat, lon);
        isTrue = true
        getWeather(lat, lon);
      },
      (error) => {
        console.error(`location access denied ${error}`);
        errorhandling(`location access denied`)
        getWeather();
      }
    );
  } else {
    confirm("Auto geolocation not supported");
    errorhandling(`Auto geolocation not supported`)
    getWeather();
  }

function errorhandling(error)
{
  errorName.textContent= error
  errorPanel.classList.add("popup_show")  
}

// Auto location Check and get info    
// const popMessage = document.querySelector(".popup_error")

//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const lat = position.coords.latitude;
//         const lon = position.coords.longitude;
//         console.log(lat, lon);
//         getWeather(lat, lon);
//       },
//       (error) => {
//         console.error(`location access denied ${error}`);
//         errorhandling(`location access denied`)
//       }
//     );
//   } else {
//     confirm("Auto geolocation not supported");
//     errorhandling(`Auto geolocation not supported`)
//   }
// function getWeather(lat, lon) {
//    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`)
//     .then(response => response.json())
//     .then(data => {
//         setTimeout(() => {
//             autoSwipe.style.animation= "1s loader linear forwards ";
//         }, 10000);
//       console.log(data);
//     //   showWeather(data);
//     })
//     .catch(error => console.log("jsdg",error));
// }
// // console.log("shaya");
