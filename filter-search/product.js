let products = [
    {
        id: 1,
        productName: "black leatherjacket",
        category: "upwear",
        img: "./images/black-leather-jacket.jpg",
        desc: "Lorem Lorem Lorem kdjfjdf fkdjfajf fajfajkf flajflasdj fajf ",
    },

    {
        id: 2,
        productName: "brown jacket",
        category: "upwear",
        img: "./images/brown-jacket.jpg",
        desc: "Lorem Lorem Lorem kdjfjdf fkdjfajf fajfajkf flajflasdj fajf ",
    },
    {
        id: 3,
        productName: "comfy gray pants",
        category: "downwear",
        img: "./images/comfy-gray-pants.jpg",
        desc: "Lorem Lorem Lorem kdjfjdf fkdjfajf fajfajkf flajflasdj fajf ",
    },
    {
        id: 4,
        productName: "knitted top",
        category: "upwear",
        img: "./images/knitted-top.jpg",
        desc: "Lorem Lorem Lorem kdjfjdf fkdjfajf fajfajkf flajflasdj fajf ",
    },
    {
        id: 5,
        productName: "pink trouser",
        category: "downwear",
        img: "./images/pink-trousers.jpg",
        desc: "Lorem Lorem Lorem kdjfjdf fkdjfajf fajfajkf flajflasdj fajf ",
    },
    {
        id: 6,
        productName: "short skirt",
        category: "downwear",
        img: "./images/short-skirt.jpg",
        desc: "Lorem Lorem Lorem kdjfjdf fkdjfajf fajfajkf flajflasdj fajf ",
    },
    // {
    //     id: 7,
    //     projectName: "todo list",
    //     category: "reactJs",
    //     img: "./images/white-tshirt.jpg",
    //     desc: "Lorem Lorem Lorem kdjfjdf fkdjfajf fajfajkf flajflasdj fajf ",
    // },

];

const productSection = document.querySelector('#products');

let buttons = document.querySelectorAll(".button-value");
window.addEventListener("DOMContentLoaded", function () {
    display(products);
});


// filter buttons
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {

        let category = e.target.dataset.filter;
        // console.log(category)
        // take category from project
        let productCategory = products.map((item) => {
            if (item.category === category) {
                // console.log(category);
                return `<div class="card">
                <div class="face face1">
                    <div class="content">
                        <div class="image">
                            <img src="${item.img}" alt="expens-budget">
                        </div>
                    </div>
                </div>
                <div class="face face2">
                    <div class="content">
                        <h3>
                            ${item.productName}
                        </h3>
                        <p>${item.desc}</p>
                    </div>
        
                    <div class="btns">
                        <button class="demo-btn btn"><a href="https:google.com" alt="_blank">Demo</a></button>
                        <button class="src-btn btn"><a href="#">Source</a></button>
                    </div>
                </div>
            </div>`;;
            }
        });
        productCategory = productCategory.join("");
        productSection.innerHTML = productCategory;
        if (category === "all") {
            display(products);
        }
    })

});

// display all the cards
function display(productItem) {
    let displayProduct = productItem.map((item) => {
        // console.log(item);
        return `<div class="card">
        <div class="face face1">
            <div class="content">
                <div class="image">
                    <img src="${item.img}" alt="expens-budget">
                </div>
            </div>
        </div>
        <div class="face face2">
            <div class="content">
                <h3>
                    ${item.productName}
                </h3>
                <p>${item.desc}</p>
            </div>
        </div>
    </div>`;
    });
    // console.log(displayProject.join(""))
    displayProduct = displayProduct.join("");
    productSection.innerHTML = displayProduct;
}


// search items using search btn

// const searchInput = document.getElementById("search-input");
// const searchBtn = document.getElementById("search");

// searchBtn.addEventListener("click", function (e) {
//     let inputValue = searchInput.value.toLowerCase();
//     // console.log(inputValue);

//     const filteredProject = projects.filter((element) => {
//         return (element.projectName.toLowerCase().includes(inputValue) || element.desc.toLowerCase().includes(inputValue) || element.category.toLowerCase().includes(inputValue));
//     });
//     // console.log(filteredProject);
//     display(filteredProject);
// });

// usig keyup event
const searchInput = document.getElementById("search-input");
searchInput.addEventListener('keyup', function (e) {
    let inputValue = e.target.value.toLowerCase();
    // console.log(inputValue);

    const filteredProduct = products.filter((element) => {
        return (element.productName.toLowerCase().includes(inputValue) || element.desc.toLowerCase().includes(inputValue) || element.category.toLowerCase().includes(inputValue));
    });
    // console.log(filteredProject);
    display(filteredProduct);
});
