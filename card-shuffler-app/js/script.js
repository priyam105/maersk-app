let cardList = [];
let cardListHolder = document.querySelector('.app-item-holder');
for (let i = 1; i < 10; i++) {
    cardList.push(i);
}
cardListHolder.innerHTML = cardList.map((el) => {
    return '<div class="app-items card-' + el + '">' + el + '</div>'
}).join('');

const onSortHandler = () => {
    cardList.sort((x, y) => {
        return x - y;
    });

    cardListHolder.innerHTML = cardList.map((el) => {
        return '<div class="app-items card-' + el + '">' + el + '</div>'
    }).join('');

}
const onShuffleHandler = () => {
    cardList.sort((_x, _y) => {
        return Math.floor(0.5 - Math.random());
    });
    cardListHolder.innerHTML = cardList.map((el) => {
        return '<div class="app-items card-' + el + '">' + el + '</div>'
    }).join('');
}
