
const cn = fetch("https://raw.githubusercontent.com/Dipen-Dedania/static-data/main/india-popular-city.json");

cn.then((response) => {
  return response.json();
}).then((data) => {
    console.log(data)
    const select = document.getElementById("countryDropDown");
for(var i = 0; i < data.city.length; i++) {
    const opt = data.city[i].name;
    let el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.add(el);
}
});


function fetchingTemp(select){
         const city=select.value;
         let weather=fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=9YUHX4EPRZT8SWMDXME7WWCQZ&contentType=json`);
         weather.then((response) => {
              return response.json();
         }).then((data)=>{
            console.log(data);
            console.log(data.currentConditions.temp);
            let temp1=document.getElementById('temp');
            temp1.innerHTML=data.currentConditions.temp+"&#8451";
            let temp2=document.getElementById('icon');
            switch(data.currentConditions.icon){
                case 'clear-day':
                    temp2.innerHTML=`<img src="../icons/01d.png">`
                    break;
                case 'partly-cloudy-day':
                    temp2.innerHTML=`<img src="../icons/02d.png">`
                    break;
                case 'cloudy':
                    temp2.innerHTML=`<img src="../icons/04d.png">`
                    break;
                case 'clear-night':
                    temp2.innerHTML=`<img src="../icons/01n.png">`
                    break;
                default:
                    temp2.innerHTML=`<img src="../icons/unknown.png">`
                    break;
            }

         })
          
        }






 function fetchingCards(){
    let url1 =  fetch('https://raw.githubusercontent.com/Dipen-Dedania/static-data/main/make-your-trip-package.json');
    url1.then((response) => {
        return response.json();
      }).then((element) => {
        console.log(element);
        let cardContainerItem=document.getElementById('cardContainer');
        for(let i=0;i<element.length;i++){
            let divElement=document.createElement('div');
            divElement.setAttribute('class', 'card');
            let divElementPara1=document.createElement('p');
            divElementPara1.setAttribute('class', 'cityName');
            divElementPara1.textContent=element[i].cityName;
            divElement.append(divElementPara1)
            let divElementPara2=document.createElement('p');
            divElementPara2.setAttribute('class', 'tourDate');
            divElementPara2.textContent=element[i].tourDate;
            divElement.append(divElementPara2)
            let divElementPara3=document.createElement('p');
            divElementPara3.setAttribute('class', 'category');
            divElementPara3.textContent=element[i].category;
            divElement.append(divElementPara3)
            let divElementPara4=document.createElement('p');
            divElementPara4.setAttribute('class', 'temp');
            divElementPara4.textContent=element[i].temp;
            divElement.append(divElementPara4)
            let divElementImg1=document.createElement('img');
            divElementImg1.setAttribute('class', 'cityImgage');
            divElementImg1.setAttribute('src',`${element[i].cityImg}`)
            divElement.append(divElementImg1);
            let divElementPara5=document.createElement('p');
            divElementPara5.setAttribute('class', 'tourDate');
            divElementPara5.textContent=element[i].tourDate;
            divElement.append(divElementPara5);
            let divElementPara6=document.createElement('p');
            divElementPara6.setAttribute('class', 'price');
            divElementPara6.textContent=element[i].price;
            divElement.append(divElementPara6);
            let divElementPara7=document.createElement('p');
            divElementPara7.setAttribute('class', 'isBookmark');
            divElementPara7.textContent=element[i].isBookmark;
            divElement.append(divElementPara7);
            cardContainerItem.append(divElement);
            let hr=document.createElement('hr');
            cardContainerItem.append(hr);
        }
    })
}

        


fetchingCards();


let date=document.getElementById('date');
let day=document.getElementById('day');
let mnth=document.getElementById('mnth');

const d=new Date();
date.innerHTML = d.getDate();

const days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Suarday"];
day.innerHTML=days[d.getDay()];

const month=["January", "February", "March", "April", "May", "June","July","August","September","October","November","December"];
mnth.innerHTML=`${month[d.getMonth()]},${d.getFullYear()}`;