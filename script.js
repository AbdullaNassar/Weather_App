// let url =" https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4a6b9f2afbac8f30fd65200e5b01b58b"
// function func(){
//     let cityName=document.getElementById("city");

//     console.log(cityName.value);

//     if(cityName.value=="")
//     {
//         alert("Must type country name")
//     }
//     else 
//     {
//         let url ="https://api.openweathermap.org/data/2.5/weather?q=cairo&appid=4a6b9f2afbac8f30fd65200e5b01b58b"
//         const request= new XMLHttpRequest();
//         request.open("GET",url);
//         request.send();
//         request.onload=function(){
//             if(this.readyState===4 &&this.status===200)
//             {
//                 // console.log(request.responseText);
//                 let jsData= JSON.parse(this.responseText);
//                 // console.log(jsData)
                
//                 let temp=jsData["main"].temp;
//                 let tempCilious=Math.floor(temp-273.15);
//                 let h1= document.createElement("h1");
//                 let x=document.createTextNode(tempCilious);
//                 h1.appendChild(x);
//                 document.body.appendChild(h1);
//             }
//         }
//     }
// }
let cityName=document.getElementById("city");
let weatherIcon=document.getElementById("immg");
// weatherIcon.src="images/clear.png";
console.log(weatherIcon);
// let url ="https://api.openweathermap.org/data/2.5/weather?q=cairo&appid=4a6b9f2afbac8f30fd65200e5b01b58b";
async function checkWeather(){
    if(cityName.value===""){
        alert("type city name")
    }
    else{
        
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=4a6b9f2afbac8f30fd65200e5b01b58b&units=metric`;
        fetch(url)
        .then(response => {
            if (!response.ok) {
                // alert("error");
            // throw new Error('Network response was not OK');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Process the response data
            document.querySelector(".city").innerHTML=data.name;
         document.querySelector(".temp").innerHTML=Math.floor(data.main.temp) +"°C";
         document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
         document.querySelector(".wind").innerHTML=data.wind.speed +" km/h";
         if(data.weather[0].main=="Clouds"){
            weatherIcon.src="images/clouds.png";
         }
         if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/clear.png";
         }
         if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png";
         }
         if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/drizzle.png";
         }
         if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/mist.png";
         }
         document.querySelector(".weather").style.display= "block"
       
        })
        .catch(error => {
            alert("Error!! type correct city");
        });
        // const response = await fetch(url).then();
        // var data=await response.json();
        //  console.log(data);
        // //  console.log( document.querySelector(".city"));
        // // console.log(data.name);
        // // console.log(data.main)
        //   document.querySelector(".city").innerHTML=data.name;
        //  document.querySelector(".temp").innerHTML=Math.floor(data.main.temp) +"°C";
        //  document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        //  document.querySelector(".wind").innerHTML=data.wind.speed +" km/h";
    }
    
}
