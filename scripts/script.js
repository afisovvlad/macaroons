document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
}

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
});

const productsElement = document.getElementById('products');

document.getElementById('choice-button').onclick = () => {
    productsElement.scrollIntoView({behavior: "smooth"});
}

document.getElementById('go-products').onclick = () => {
    document.getElementById('products').scrollIntoView({behavior: "smooth"});
}

document.getElementById('go-about').onclick = () => {
    document.getElementById('about').scrollIntoView({behavior: "smooth"});
}

document.getElementById('go-order').onclick = () => {
    document.getElementById('order').scrollIntoView({behavior: "smooth"});
}