
catalog = [
    {
        id:1,
        category: 'Резинотехнические детали',
        name: 'Манжета клапанов (фторкаучук)',
        price: [
            '640.',
            '00'
        ],
        available: 35,
        sale: false,
        saleprice: [],
        new: false,
        popular: true,
        img: "img/card1.jpg"
    },

    {
        id:2,
        category: 'Другое',
        name: 'Полумуфта стартера',
        price: [
            '17 269.',
            '80'
        ],
        available: 19,
        sale: false,
        saleprice: [],
        new: false,
        popular: true,
        img: "img/card2.jpg"
    },

    {
        id:3,
        category: 'Прокладки',
        name: 'Прокладка крышки коллектора выпуска (металлографит)',
        price: [
            '202.',
            '00'
        ],
        available: 32,
        sale: false,
        saleprice: [],
        new: false,
        popular: true, 
        img: "img/card3.jpg"

    },

    {
        id:4,
        category: 'Прокладки',
        name: 'Прокладка турбокомпрессора и коллектора (металлографит)',
        price: [
            '521.',
            '90'
        ],
        available: 1,
        sale: false,
        saleprice: [],
        new: false,
        popular: true,
        img: "img/card4.jpg"
    },

    {
        id:5,
        category: 'Прокладки',
        name: 'Комплект прокладок двигателя',
        price: [
            '22 194.',
            '60'
        ],
        available: 19,
        sale: false,
        saleprice: [],
        new: false,
        popular: true,
        img: "img/card5.jpg"

    },

    {
        id:6,
        category: 'Прокладки',
        name: 'Прокладка крышки цилиндра',
        price: [
            '2 970.',
            '00'
        ],
        available: 0,
        sale: false,
        saleprice: [],
        new: false,
        popular: true,
        img: "img/card6.jpg"
    },

    {
        id:7,
        category: 'Резинотехнические детали',
        name: 'Амортизатор',
        price: [
            '26.',
            '40'
        ],
        available: 2,
        sale: true,
        saleprice: [
            '24.',
            '99'],
        new: false,
        popular: true,
        img: "img/card7.jpg"
    },

    {
        id:8,
        category: 'Головка блока',
        name: 'Боек',
        price: [
            '1.',
            '00'
        ],
        available: 0,
        sale: false,
        saleprice: [],
        new: false,
        popular: true,
        img: null
    },

    {
        id:9,
        category: 'Тестовый',
        name: 'не популярный, новый, распродажа',
        price: [
            '22 194.',
            '60'
        ],
        available: 2,
        sale: true,
        saleprice: [
            '9 999.',
            '99'
        ],
        new: true,
        popular: false
    },

    {
        id:10,
        category: 'Тестовый',
        name: 'не популярный, новый',
        price: [
            '22 194.',
            '60'
        ],
        available: 999,
        sale: false,
        saleprice: [],
        new: true,
        popular: false
    }
]



const card = document.querySelector('.cardlist');

const popularcard = catalog.filter(catalog => catalog.popular === true).map (i => i) // массив популярных
const newcard = catalog.filter(catalog => catalog.new === true).map (i => i) // массив новых
const sale = catalog.filter(catalog => catalog.sale === true).map (i => i) // массив новых

newcatalog = catalog;

photo = 'img/1.jpg'


const changecatalog = () => {
card.innerHTML = newcatalog.filter((item,idx) => idx<8).map(i => 
`<li class="card">
<div>
        <div class='cardinfo'>
            <a href="#" class="card-category">${i.category}</a>
            <a href="#" class="card-name">${i.name}</a>
        </div>
        <div class='cardphotozise'>
            <img class="card-img" src="${i.img !=null ? i.img : photo}" alt="Pict">
        </div>
        <div class='oldprice'>
        ${i.sale === true ? `
            <h3 class="card-price oldprice-style">${i.price[0]}</h3>
            <h3 class="card-cent oldprice-style">${i.price[1]}</h3>
            <h3 class="card-price card-price-R oldprice-style">₽</h3>` 
            : ``}
        </div>
        <div>
            <h3 class="card-price ${i.sale === false ? '' : 'saletextcolor'}">${i.sale === false ? i.price[0] : i.saleprice[0]}</h3>
            <h3 class="card-cent ${i.sale === false ? '' : 'saletextcolor'}">${i.sale === false ? i.price[1] : i.saleprice[1]}</h3>
            <h3 class="card-price card-price-R card-price-R-size${i.sale === false ? '' : 'saletextcolor'}">₽</h3>
        </div>
        <div class="card-pricecount">
            ${i.available > 0 ?  '<p class=card-pricecount-available>' + i.available + '<p class=card-pricecount-available-position>' + ' шт.' : '<p class=card-pricecount-available-position> нет в наличии </p>'} 
            <div class="count">
                ${i.available > 0 ? `
                    <p class="count-btn card-btn-downs">-</p>
                    <input class="count-number" type="number" value="1">
                    <p class="count-btn card-btn-up">+</p>
                    ` : ''}
            </div>
            <div class="card-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
            </div>
        </div>
        <div class='wishlist'>
            <div class='wishlist-item'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/></svg>
                <p class='wishlist-item-p'>В избранное</p>
            </div>
            <div class='wishlist-item'>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-bar-chart" viewBox="0 0 16 16"><path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"/></svg>
                <p class='wishlist-item-p'>Сравнить</p>
            </div>
        </div>
</div>
</li>
`).join('');
}
changecatalog();

cardhover = document.querySelectorAll('.card');

getInput = () => {
minus = document.querySelectorAll('.card-btn-downs');
plus= document.querySelectorAll('.card-btn-up');
input = document.querySelectorAll('input');

input.forEach( el => {
    el.addEventListener('keypress',
        function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
            }
        });
    el.addEventListener('blur', 
        function(e) {
            max = e.path[2].children[0].innerHTML
            el.value = el.value
            if (el.value === '') { 
                el.value = 1
            } else if (el.value == 0) {
                el.value = 1
            } else if (el.value > max) {
                el.value = max
            }
        });
});

minus.forEach( el => {
    el.addEventListener('click', 
    function (e) {
        e.preventDefault();
        if (el.parentNode.querySelector('input').value > '1') {
            el.nextElementSibling.stepDown ()
        }
    }
    )
})

available = document.querySelectorAll('.card-pricecount-available')

plus.forEach( (el) => {
    el.addEventListener('click', 
    function (e) {
    e.preventDefault();
    max = e.path[2].children[0].innerHTML
    if (el.parentNode.querySelector('input').value != max) {
    el.previousElementSibling.stepUp();
    }
    }
    )
})

cardBtn = document.querySelectorAll('.card-btn');
cardBtn.forEach ((item) => {
    item.addEventListener('click', () => {
        index = item
        document.querySelector('.modal').classList.add('active');
        setTimeout(() => {
            document.querySelector('.modal').classList.remove('active');
          }, "500")
    })
  })
}

getInput()

changelist = () => {
    changecatalog();
    getInput()
}

btnpopular.addEventListener ('click', () => {
    newcatalog = popularcard;
    changelist();
    btnpopular.classList.add('active');
    btnnew.classList.remove('active');
    btnsale.classList.remove('active');
    
});

btnnew.addEventListener ('click', () => {
    newcatalog = newcard;
    changelist();
    btnnew.classList.add('active');
    btnpopular.classList.remove('active');
    btnsale.classList.remove('active');
    
    
});

btnsale.addEventListener ('click', () => {
    newcatalog = sale;
    changelist();
    btnsale.classList.add('active');
    btnpopular.classList.remove('active');
    btnnew.classList.remove('active');
});








