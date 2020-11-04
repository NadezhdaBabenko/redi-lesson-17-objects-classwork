// 2 way (create book -> JS/objects)

// let book = {
//     "img": "./imgs/archOfTriumph.jpg",
//     "title": "Arch of Triumph",
//     "author": "Erich Maria Remarque",
//     "rating": "&#9733; &#9733; &#9733; &#9734; &#9734;",
//     "price": {
//         "oldPrice":10,
//         "newPrice":9,
//     },
// };

// let bookBlock = document.getElementById("bookBlock");
// let bookItem = document.createElement('div');
// bookItem.classList = "card";
// bookItem.innerHTML = `
//     <img class="card-img-top" src="${book.img}">
//     <div class="card-body">
//         <div class="card-title">${book.title}</div>
//         <div>Author: <span class="card-author">${book.author}</span></div>
//         <div>Rating: <span class="card-rating"></br>${book.rating}</span></div>
//         <div>Old price: <span class="card-price-old">${book.price.oldPrice}</span> $</div>
//         <div class="text-danger">New price: <span class="card-price-new">${book.price.newPrice}</span> $</div>
//         <a href="#" class="btn btn-primary mt-3 w-100">Buy it now!</a>
//     </div>
// `;
// bookBlock.appendChild(bookItem);


// 3 way (create books row using loop)

let bookBlock = document.getElementById("bookBlock");
for (let i = 0; i < arrBooks.length; i++) {
    createBook(arrBooks[i]);
}

function createBook(book) {
    let bookItem = document.createElement('div');
    bookItem.classList = "card";
    bookItem.innerHTML = `
        <img class="card-img-top" src="${book.img}">
        <div class="card-body">
            <div class="card-title">${book.title}</div>
            <div>Author: <span class="card-author">${book.author}</span></div>
            <div>Rating: <span class="card-rating"></br>${book.rating}</span></div>
            <div>Old price: <span class="card-price-old">${book.price.oldPrice}</span> $</div>
            <div class="text-danger">New price: <span class="card-price-new">${book.price.newPrice}</span> $</div>
            <a href="#" class="btn btn-primary mt-3 w-100">Buy it now!</a>
        </div>
    `;
    bookBlock.appendChild(bookItem);
}



