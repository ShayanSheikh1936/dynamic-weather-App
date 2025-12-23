const pic = document.getElementById("image");
const apiKey = "a1fcc3ed750d43c5bfa193323252212";
const city = "Sindh, Pakistan";

const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

async function weatherApp(url, city) {
    // let response = await fetch(url)
    // let data = await response.json();
    // console.log(data);
    // pic.src = data.current.condition.icon
    let response = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        pic.src = data.current.condition.icon;
        console.log(`Condition: ${data.current.condition.text}`);
    })
    .catch((error) => console.log(error));
}

weatherApp(url, city);
    // console.log(`Condition: ${data.current.condition.text}`);;
