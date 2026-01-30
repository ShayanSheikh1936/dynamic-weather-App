const verticalSidebar = document.querySelector(".vertical-sidebar")
const errorName = document.querySelector(".error_name")
const pop_show = document.querySelector(".popup_show")
const autoSwipe = document.querySelector(".first-loader");
const errorPanel = document.querySelector(".popup_error_panel")
const inpSearchPlaceholder = document.querySelector(".search")


const apiKey = "a1fcc3ed750d43c5bfa193323252212";
// const cityL =localStorage.getItem("city")
// localStorage.setItem("city",city)
// const url = ;

async function weatherApp(city) {
    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
    let data = await response.json();
    console.log(data);
      let info={
        "country_name":data.location.name,
        "region":data.location.region
      }
    inpSearchPlaceholder.placeholder=`${info.country_name}, ${info.region}`;
    document.querySelector(".location").textContent=`${info.country_name}, ${info.region}`;
}
// weatherApp("london");
isNull=false
isTrue =false
// isUserInp =false
function getWeather(lat, lon) {
   fetch(isTrue?`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`:`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${localStorage.getItem("city")}`)
   .then(response => response.json())
   .then(data => {
       setTimeout(() => {
           autoSwipe.style.animation= "1s loader linear forwards "  
       }, 5000)
     console.log(data)
     inpSearchPlaceholder.placeholder=`${data.location.name}, ${data.location.region}`;
     document.querySelector(".location").textContent=`${data.location.name}, ${data.location.region}`;
   })
   .catch(error =>{
    console.log("failed to fetch")
    errorhandling("failed to fetch")
   });
}
function locationCheck()
{if (navigator.geolocation) {
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
        isTrue = false
        if (localStorage.getItem("city") == null) {
          console.log("lassan");
          if(String(isTrue)==="false")
            {
              Swal.fire({
                title: 'Enter City Name',
                input: 'text',
                inputPlaceholder: 'e.g. Karachi',
                showCancelButton: true,
                confirmButtonText: 'Search',
                icon: 'question',
                inputValidator: (value) => {
                  if (!value) {
                    return 'Please enter a city name!'
                  }
                  if (!/^[a-zA-Z\s]*$/i.test(value.trim())) {
                    return 'Only letters not use number or symbols'
                  }
                }
              }).then((result) => {
                if (result) {
                  const city = result.value.trim(); // ✅ user input saved in variable
                  if (city.length > 0) {
                    console.log("User entered:", city);
                    localStorage.setItem("city",city)
                    // getWeather();
                    weatherApp(city)
                  }
                }
              }); 
            }
        }
        else {
          console.log("lassan");
        }
      }
    );
  } else {
    confirm("Auto geolocation not supported");
    errorhandling(`Auto geolocation not supported`)
    getWeather();
}
}
locationCheck()


function errorhandling(error)
{
  errorName.textContent= error
  errorPanel.classList.add("popup_show")  
}

verticalSidebar.addEventListener("domContentLoaded",()=>{
  document.body.remove("vertical-sidebars")
}
)

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

// countries=["Palestine, gaza","Pakistan, Sindh","China","KeyframeEffect","WebGLBuffer","gfg","FragmentDirective","f","g","fef","shdsd","wett"]
map=[
{name:"Japan, Tokyo", flag:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/1280px-Flag_of_Japan.svg.png"},
{name:"Pakistan, Islamabad",flag:"https://flagcdn.com/w320/pk.png"},
{name:"UAE, Abu Dhabi",flag:"https://flagcdn.com/w320/ae.png"},
{name:"England, London",flag:"https://flagcdn.com/w320/gb.png"},
{name:"india, delhi", flag: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"},
{name: "Saudiarab, Riyadh ", flag: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg"},
{name:"canada, toronto", flag:"https://flagcdn.com/w320/ca.png"},
{name:"china, beijing" ,flag:"https://flagcdn.com/w320/cn.png"},
{name:"russia, moscow" ,flag:"https://flagcdn.com/w320/ru.png"},
{name:"turkey, istanbul" ,flag:"https://flagcdn.com/w320/tr.png"},
{name:"germany, berlin" ,flag:"https://flagcdn.com/w320/de.png"},
{name:"france, paris" ,flag:"https://flagcdn.com/w320/fr.png"},
{name:"italy, roma" ,flag:"https://flagcdn.com/w320/it.png"},
{name:"US, washington" ,flag:"https://flagcdn.com/w320/us.png"},
{name:"egypt, cairo" ,flag:"https://flagcdn.com/w320/eg.png"},
{name:"indonesia, jakarta" ,flag:"https://flagcdn.com/w320/id.png"},
]
const main = document.querySelector(".favorite-container")
// const buttons = document.createElement("button") 

map.forEach((country)=>{
  const buttons = document.createElement("button") 
  const pin = document.createElement("button") 
  const i = document.createElement("i")
  const flag = document.createElement("div") 
  const flagImg = document.createElement("img")
  const text = document.createElement("p") 
  main.append(buttons)
  buttons.className = "country-weather-container"
  buttons.append(pin)
  pin.append(i)
  buttons.append(flag)
  flag.append(flagImg)
  buttons.append(text)
  buttons.addEventListener("click",function(){
    weatherApp(country.name)
  })
  i.className = "fa-solid fa-thumbtack"
  pin.className = "pin"
  // flagImg.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAflBMVEX///+8AC23AAC7ACe7ACm4ABW5ABu4ABC6ACO5ABm7ACi4ABO6ACL46u3sx83NYXG3AAfnvcL14OTiqLH78fPKVGbEOE/9+PnGQFbjrbX35OjnuL/x09jsxszpv8XfoarSc4HXhZHAHj3CK0bbkJvQanm/DzbUeYbemqS/FjiKuKh1AAADpUlEQVR4nO3diXaiMBSA4QJCUFxwQ63WurTavv8LDtSZozZxipiQE/p/D+Dh3hOTS8jy9AQAAAAAAAAAAAAAAAAAAAqT3uplPRwO1y+r3sT2w1g3679usiBMRRIWEpGGQbZ57f/WzMz6272fRN1Oy7vU6nSjxN9v+zPbD1i74aAtutfZuMpMV7QHS9sPWafVMUnim/n4Jw6Tzcr2o9ZkPfe7PybkpOtna9uPW4PlTgQlM1IIxK7pf6H+TtzuRNRaYte3/dgG9ab+vRn5yoo/7dl+dFM+xM8dq1qcfth+eCN6WVIxI4Uka2BTWST3dK2yQCxsh6DbMX0oI4V0YzsIrWbz9sMp8bx21qB6v/dZtkj7v/izMZ3KKHqsKzkLopHtYPQYJVWKErWWaERSRqG+lORJCRuQlF6kMyV5UiLn+5SZ19GaEi//PddHn6xqOX9bnNkO6jHvkfaUeF70bjusRywer15V0rHtwKp79o2kxPP8Z9uhVbbXVat9F+xth1bVW2goJZ4XvtkOrhpj/5yC72bpNjf1zykEc9vhVbEUBlPiecLF6XxPb03/XetgO8D7jc11sCehe0VKbLaZ5A0lth3ivRamm0neUFybtN6ZbiZ5Q9nZDvI+fTMvOtdSt76ZDvRPEcjige0w7zGpo5nkDcWlNV5jHZ9zftZ2aTg2WtafuVTgT0y+/V3y3fnzLM0XJyehOy8973WMOoXYnZlZw69/Zy3PdqhlPdczEhdSVyZma+tOHOpQtnpWVpTR3doOtqRpPdVJIZ7aDrakQ11drEOzbXVVbAXfdrDl1DjsODPwrMxO2F8TbuzcWNc3FOeDsRv7Nhb1TBSctN2YlK1p8uRvTtyYQhmbWIdzS0ROyEmDckJ/ImHckVGfyKhjZbzvKPBeLGP+RMY8m4z5WBnz9jK+7yjwHVDG92IZ6wpkrD9RYJ2SjPVsMtY9KrA+VsY6agXW28vYl6HA/h0Z+7wUDM+2OTPDdsnwvtHUnVedC+wvlpndh+7MZNI1zitQ4FwLGeefKJg6J8e5CvbSxsh5ShvbYT2Gc7dks4PufrZzcP18Ns7xU+G8RwWt54ImjUgJ58cqcc6wAudRq+g4t/xoOwjdlnddHSILnDx87Afcg6DywH0Zopn3ZTxxr4oa9++ocE+TCvd5qayOYbl7345u7LrQ5Ot+wNtH33d+3f2AJ8U9kuLmPZIvzarjy7t13+hvzccZ99ICAAAAAAAAAAAAAAAAACD7A+PaSTdtOrdEAAAAAElFTkSuQmCC")
  flagImg.src=country.flag 
  flagImg.setAttribute("width", "50px")
  // flagImg.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAflBMVEX///+8AC23AAC7ACe7ACm4ABW5ABu4ABC6ACO5ABm7ACi4ABO6ACL46u3sx83NYXG3AAfnvcL14OTiqLH78fPKVGbEOE/9+PnGQFbjrbX35OjnuL/x09jsxszpv8XfoarSc4HXhZHAHj3CK0bbkJvQanm/DzbUeYbemqS/FjiKuKh1AAADpUlEQVR4nO3diXaiMBSA4QJCUFxwQ63WurTavv8LDtSZozZxipiQE/p/D+Dh3hOTS8jy9AQAAAAAAAAAAAAAAAAAAAqT3uplPRwO1y+r3sT2w1g3679usiBMRRIWEpGGQbZ57f/WzMz6272fRN1Oy7vU6nSjxN9v+zPbD1i74aAtutfZuMpMV7QHS9sPWafVMUnim/n4Jw6Tzcr2o9ZkPfe7PybkpOtna9uPW4PlTgQlM1IIxK7pf6H+TtzuRNRaYte3/dgG9ab+vRn5yoo/7dl+dFM+xM8dq1qcfth+eCN6WVIxI4Uka2BTWST3dK2yQCxsh6DbMX0oI4V0YzsIrWbz9sMp8bx21qB6v/dZtkj7v/izMZ3KKHqsKzkLopHtYPQYJVWKErWWaERSRqG+lORJCRuQlF6kMyV5UiLn+5SZ19GaEi//PddHn6xqOX9bnNkO6jHvkfaUeF70bjusRywer15V0rHtwKp79o2kxPP8Z9uhVbbXVat9F+xth1bVW2goJZ4XvtkOrhpj/5yC72bpNjf1zykEc9vhVbEUBlPiecLF6XxPb03/XetgO8D7jc11sCehe0VKbLaZ5A0lth3ivRamm0neUFybtN6ZbiZ5Q9nZDvI+fTMvOtdSt76ZDvRPEcjige0w7zGpo5nkDcWlNV5jHZ9zftZ2aTg2WtafuVTgT0y+/V3y3fnzLM0XJyehOy8973WMOoXYnZlZw69/Zy3PdqhlPdczEhdSVyZma+tOHOpQtnpWVpTR3doOtqRpPdVJIZ7aDrakQ11drEOzbXVVbAXfdrDl1DjsODPwrMxO2F8TbuzcWNc3FOeDsRv7Nhb1TBSctN2YlK1p8uRvTtyYQhmbWIdzS0ROyEmDckJ/ImHckVGfyKhjZbzvKPBeLGP+RMY8m4z5WBnz9jK+7yjwHVDG92IZ6wpkrD9RYJ2SjPVsMtY9KrA+VsY6agXW28vYl6HA/h0Z+7wUDM+2OTPDdsnwvtHUnVedC+wvlpndh+7MZNI1zitQ4FwLGeefKJg6J8e5CvbSxsh5ShvbYT2Gc7dks4PufrZzcP18Ns7xU+G8RwWt54ImjUgJ58cqcc6wAudRq+g4t/xoOwjdlnddHSILnDx87Afcg6DywH0Zopn3ZTxxr4oa9++ocE+TCvd5qayOYbl7345u7LrQ5Ot+wNtH33d+3f2AJ8U9kuLmPZIvzarjy7t13+hvzccZ99ICAAAAAAAAAAAAAAAAACD7A+PaSTdtOrdEAAAAAElFTkSuQmCC")
  flag.classList.add("country-flag","lazyload")
  text.className = "country-name"
  text.textContent = country.name
})
