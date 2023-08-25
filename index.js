const firstLine = [
    {
        image: 'img/img6.png',
        title: 'Apple',
        description: 'Apple is one of the most famous smart watches providing company.'
    },
    {
        image: 'img/img7.png',
        title: 'Xiaomi',
        description: 'Xiaomi smart watches are produced by MI company.'
    },
    {
        image: 'img/img8.png',
        title: 'FitBit',
        description: 'FitBit smart watches are best for there health and fitness features.'
    },
]

const fisrtLineBox = document.getElementById("setting-201");

function postInfo() {

    firstLine.map((postInfoData) => {

        const newBox = document.createElement("div");
        newBox.classList.add("col-lg-4");
        newBox.classList.add("col-md-6");
        newBox.classList.add("col-12");
        newBox.classList.add("p-4");
        newBox.innerHTML = `

        <div class="setting-202">
            
            <img src="${postInfoData.image}">

            <div class="d-flex flex-column gap-3">
                <span class="setting-203">${postInfoData.title}</span>
                <p class="setting-204">${postInfoData.description}</p>
            </div>

        </div>
        `

        fisrtLineBox.appendChild(newBox);
    });
}

postInfo();


const secondLineBox = document.getElementById('setting-303');

axios.get('https://fakestoreapi.com/products').then(response => {

    const cards = response.data;

    cards.forEach(data => {
        const card = createCard(data);
        secondLineBox.appendChild(card);
    });

}).catch(error => {
    console.error('AXIOSIS SHECDOMA', error);
});

const bs29 = [];

function createCard(data) {

    const card = document.createElement('div');
    card.classList.add('setting-312');
    card.classList.add('col-md-4')
    card.classList.add('col-12');
    card.classList.add('p-4');

    const inside = document.createElement('div');
    inside.classList.add("setting-304")

    const hoverable = document.createElement('div');
    hoverable.classList.add('setting-306');

    let i = 0;
    const cartButton = document.createElement('button');
    cartButton.classList.add('setting-313');
    cartButton.setAttribute("id", data.id);
    cartButton.addEventListener(
        "click",
        function () {
            if (i == 0) {
                bs29.push("1");
                i++;
                document.getElementById("setting-006").innerHTML = bs29.length;
            } else {
                bs29.pop();
                i--;
                document.getElementById("setting-006").innerHTML = bs29.length;
            }
        },
        false,
    );

    const cartImg = document.createElement('img');
    cartImg.src = 'img/img13.png';
    cartImg.classList.add("setting-310");

    const heartImg = document.createElement('img');
    heartImg.src = 'img/img14.png';
    heartImg.classList.add("setting-311");

    const title = document.createElement('h4');
    title.textContent = data.title;

    const myimg = document.createElement('img');
    myimg.src = 'img/img12.png';
    myimg.classList.add("setting-307");

    const priceBox = document.createElement('div');
    priceBox.classList.add("setting-309");

    const price = document.createElement('p');
    price.classList.add('setting-305');

    const priceover = document.createElement("p");
    priceover.textContent = "$300 ";
    priceover.classList.add("setting-308");
    price.textContent = " $" + data.price;

    const img = document.createElement('img');
    img.src = data.image;

    card.appendChild(inside);
    card.appendChild(hoverable);
    hoverable.appendChild(cartButton);
    cartButton.appendChild(cartImg);
    hoverable.appendChild(heartImg);
    inside.appendChild(img);
    inside.appendChild(title);
    inside.appendChild(myimg);
    inside.appendChild(priceBox);
    priceBox.appendChild(priceover);
    priceBox.appendChild(price);

    return card;
}

createCard;


const thirdLine = [
    {
        image: 'img/img9.png',
        title: 'Hamza Faizi',
        description: 'Don’t waste time, just order! This is the best website to puschase smart watches.',
        imageTwo: 'img/img12.png'
    },
    {
        image: 'img/img10.png',
        title: 'Hafiz Huzaifa',
        description: 'I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.',
        imageTwo: 'img/img12.png'
    }
];

const thirdLineBox = document.getElementById("setting-401");

const swiperBox = [document.getElementById("swiper1"), document.getElementById("swiper2"), document.getElementById("swiper3"), document.getElementById("swiper4"), document.getElementById("swiper5")];

function postInfoTwo() {

    thirdLine.map((postInfoData) => {

        const newBox = document.createElement("div");
        newBox.classList.add("col-lg-6");
        newBox.classList.add("col-12");
        newBox.classList.add("p-4");
        newBox.innerHTML = `

            <div class="setting-202">
            
                <img src="${postInfoData.image}">

                    <div class="d-flex flex-column gap-3">
                        <span class="setting-203">${postInfoData.title}</span>
                        <p class="setting-204 mb-0">${postInfoData.description}</p>
                        <img src="${postInfoData.imageTwo}" width="40%;">
                    </div>

                </div>
                   
            </div>
        `

        swiperBox[0].appendChild(newBox);
    });
}

function postInfoTwo2() {

    thirdLine.map((postInfoData) => {

        const newBox = document.createElement("div");
        newBox.classList.add("col-lg-6");
        newBox.classList.add("col-12");
        newBox.classList.add("p-4");
        newBox.innerHTML = `

            <div class="setting-202">
            
                <img src="${postInfoData.image}">

                    <div class="d-flex flex-column gap-3">
                        <span class="setting-203">${postInfoData.title}</span>
                        <p class="setting-204 mb-0">${postInfoData.description}</p>
                        <img src="${postInfoData.imageTwo}" width="40%;">
                    </div>

                </div>
                   
            </div>
        `

        swiperBox[1].appendChild(newBox);
    });
}

function postInfoTwo3() {

    thirdLine.map((postInfoData) => {

        const newBox = document.createElement("div");
        newBox.classList.add("col-lg-6");
        newBox.classList.add("col-12");
        newBox.classList.add("p-4");
        newBox.innerHTML = `

            <div class="setting-202">
            
                <img src="${postInfoData.image}">

                    <div class="d-flex flex-column gap-3">
                        <span class="setting-203">${postInfoData.title}</span>
                        <p class="setting-204 mb-0">${postInfoData.description}</p>
                        <img src="${postInfoData.imageTwo}" width="40%;">
                    </div>

                </div>
                   
            </div>
        `

        swiperBox[2].appendChild(newBox);
    });
}

function postInfoTwo4() {

    thirdLine.map((postInfoData) => {

        const newBox = document.createElement("div");
        newBox.classList.add("col-lg-6");
        newBox.classList.add("col-12");
        newBox.classList.add("p-4");
        newBox.innerHTML = `

            <div class="setting-202">
            
                <img src="${postInfoData.image}">

                    <div class="d-flex flex-column gap-3">
                        <span class="setting-203">${postInfoData.title}</span>
                        <p class="setting-204 mb-0">${postInfoData.description}</p>
                        <img src="${postInfoData.imageTwo}" width="40%;">
                    </div>

                </div>
                   
            </div>
        `

        swiperBox[3].appendChild(newBox);
    });
}

function postInfoTwo5() {

    thirdLine.map((postInfoData) => {

        const newBox = document.createElement("div");
        newBox.classList.add("col-lg-6");
        newBox.classList.add("col-12");
        newBox.classList.add("p-4");
        newBox.innerHTML = `

            <div class="setting-202">
            
                <img src="${postInfoData.image}">

                    <div class="d-flex flex-column gap-3">
                        <span class="setting-203">${postInfoData.title}</span>
                        <p class="setting-204 mb-0">${postInfoData.description}</p>
                        <img src="${postInfoData.imageTwo}" width="40%;">
                    </div>

                </div>
                   
            </div>
        `

        swiperBox[4].appendChild(newBox);
    });
}

postInfoTwo();
postInfoTwo2();
postInfoTwo3();
postInfoTwo4();
postInfoTwo5();