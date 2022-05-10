let scrollTopBtn = document.getElementById('topBtn');

window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = 'block';
    }
    else {
        scrollTopBtn.style.display = 'none';
    }
}

function gotoTop() {
    document.body.scrollTop
    document.documentElement.scrollTop = 0;
}

// for coutup animation 
const counters = document.querySelectorAll('.count');
// // Main function
// for (let n of counters) {
//     const updateCount = () => {
//         const target = + n.getAttribute('data-target');
//         const count = + n.innerText;
//         const speed = 10000; // change animation speed here
//         const inc = target / speed;
//         if (count < target) {
//             n.innerText = Math.ceil(count + inc);
//             setTimeout(updateCount, 1);
//         } else {
//             n.innerText = target;
//         }
//     }
//     updateCount();
// }

// for api call
function coronaCases(value) {
    const country = value.toLowerCase();
    let url = "https://corona.lmao.ninja/v3/covid-19/countries/" + country;

    fetch(url).then((res) => res.json()).then((data) => {
        let arr = [];
        arr.push(data);
        console.log(arr);
        let todayCases = document.getElementById('today_cases');
        let todayDeath = document.getElementById('today_death');
        let todayRecover = document.getElementById('today_recover');
        let totalCases = document.getElementById('total_cases');
        let totalDeaths = document.getElementById('total_death');
        let totalRecover = document.getElementById('total_recover');
        let myCountry = document.getElementById('country');
        myCountry.append(`${country}`);
        todayCases.append(`${arr[0].todayCases}`);
        todayDeath.append(`${arr[0].todayDeaths}`);
        todayRecover.append(`${arr[0].todayRecovered}`);
        totalCases.append(`${arr[0].cases}`);
        totalDeaths.append(`${arr[0].deaths}`);
        totalRecover.append(`${arr[0].recovered}`);
    }).catch((err) => {
        console.log(err);
    });
}


function getYourLocation() {
    fetch('https://api.geoapify.com/v1/ipinfo?apiKey=4ecdecc81ab24e70b148670b523ee2b9', {
        method: 'GET'
    })
        .then(function (response) { return response.json(); })
        .then(function (json) {
            // console.log(json.country.name)

            getYourCountry(json);
        });

}

function getYourCountry(data) {
    countryName = data.country.name;
    coronaCases(countryName);
}
getYourLocation();