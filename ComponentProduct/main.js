let storeData = [
    {
        ProductID: "Chocolate Muffin",
        ProductValue: "Calling all chocoholics! These tender chocolate muffins with a double hit of chocolate make a delicious breakfast.",
        ProductSrc: "../src/Muffin.jpg"
    },

    {
        ProductID: "Chocolate Pudding Sundaes",
        ProductValue: "This chocolate pudding is silky-smooth and intensely chocolate — a world apart from instant or store bought.",
        ProductSrc: "../src/Pudding.png"
    },
    {
        ProductID: "Chocolate Crinkle Cookies",
        ProductValue: "Crisp on the outside and fudgy on the inside, these chocolate crinkle cookies are like brownies in cookie form.",
        ProductSrc: "../src/Chocolate-Crinkle-Cookies.jpg"
    },
    {
        ProductID: "Strawaberry Cake",
        ProductValue: "Jam-packed with fresh strawberries, this strawberry cake is one of the simplest, most delicious cakes you’ll ever make.",
        ProductSrc: "../src/Strawberry-Cake.jpg"
    },
    {
        ProductID: "Chocolate Chip Muffins",
        ProductValue: "A kid favorite, these chocolate chip muffins taste like chocolate chip cookies in muffin form.",
        ProductSrc: "../src/ChocoMuffins.jpg"
    },

    {
        ProductID: "Sour Cream Cake",
        ProductValue: "Rich and tender from the addition of sour cream, and jam-packed with chocolate chips, this is loved by all.",
        ProductSrc: "../src/sourCake.jpg"
    },
    {
        ProductID: "Pecan Shortbread Cookies",
        ProductValue: "Rolled in coarse sugar, these sophistic pecan shortbread cookies are long on buttery, nutty flavor.",
        ProductSrc: "../src/pecan.jpg"
    },
    {
        ProductID: "Molten Chocolate Cakes",
        ProductValue: "Molten chocolate cakes also known as lava cakes, are rich individual chocolate cakes with oozing molten centers.",
        ProductSrc: "../src/Lava.jpg"
    }
];



// logInStatus = () =>{
//     if(isLogIn == true){
//         let dom = document.querySelector("html");
//         dom.style.display="none";
//         console.log("hello");
//         location.href="../ComponentLogin/index.html";
//     }
// }

// logInStatus();

showCart = (data) => {
    data.forEach(e => {
        let main = document.querySelector(".products"); //Access Product Div
        let newCard = document.createElement("div"); // Create a new div under product
        newCard.className = "product-card"; //Add class name
        let newImg = document.createElement("div"); // create a new div under product-card
        newImg.className = "product-image";
        let srcImg = document.createElement("img");
        srcImg.src = e.ProductSrc;
        let productName = document.createElement("div");
        productName.className = "product-info";
        let productInfo_1 = document.createElement("h5");
        productInfo_1.className = "text-head";
        productInfo_1.textContent = e.ProductID;

        let productIndo_2 = document.createElement("p");
        productIndo_2.className = "text-content";
        productIndo_2.textContent = e.ProductValue;
        productName.appendChild(productIndo_2);
        newImg.appendChild(srcImg);
        newCard.appendChild(newImg);
        newCard.appendChild(productInfo_1);
        newCard.appendChild(productName);
        main.appendChild(newCard);
    });

}

showCart(storeData);

filter = () => {
    let val = document.getElementById("filter-search").value;
    console.log(val);
    let main = document.querySelector(".products");
    main.innerHTML = "";
    showCart(storeData.filter(e => {
        if (val == "") {
            document.getElementById("btn-search").style.display = "none";
            return e
        }
        else {
            document.getElementById("btn-search").style.display = "block";
            let result = e.ProductID.toLowerCase();
            return result.includes(val.toLowerCase());
        }
    }))
}

removeFilter = () => {
    let main = document.querySelector(".products");
    main.innerHTML = "";
    document.getElementById("filter-search").value = "";
    showCart(storeData);
    document.getElementById("btn-search").style.display = "none";

}
for (var item of document.querySelectorAll(".text-head")) {
    item.addEventListener("click", function (e) {
        e = e || window.event;
        var target = e.target || e.srcElement,
            text = target.textContent || target.innerText;
        localStorage.setItem("detailItemId", text);
        window.open("./detail.html");
    }, false);
}

