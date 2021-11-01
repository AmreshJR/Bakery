let storeData = [
    {
        ProductID : "Pudding",
        ProductValue: "Wipped Cream, Vanila",
        ProductSrc: "../src/Muffin.jpg"
    },
   
    {
        ProductID : "Muffin",
        ProductValue: "Rs. 100",
        ProductSrc: "../src/Muffin.jpg"
    },
    {
        ProductID : "Muffin",
        ProductValue: "Rs. 100",
        ProductSrc: "../src/Muffin.jpg"
    },
    {
        ProductID : "Muffin",
        ProductValue: "Rs. 100",
        ProductSrc: "../src/Muffin.jpg"
    },
    {
        ProductID : "Pudding",
        ProductValue: "Rs. 100",
        ProductSrc: "../src/Muffin.jpg"
    },
   
    {
        ProductID : "Muffin",
        ProductValue: "Rs. 100",
        ProductSrc: "../src/Muffin.jpg"
    },
    {
        ProductID : "Muffin",
        ProductValue: "Rs. 100",
        ProductSrc: "../src/Muffin.jpg"
    },
    {
        ProductID : "Muffin",
        ProductValue: "Rs. 100",
        ProductSrc: "../src/Muffin.jpg"
    },
    {
        ProductID : "Muffin",
        ProductValue: "Rs. 100",
        ProductSrc: "../src/Muffin.jpg"
    },
    {
        ProductID : "Muffin",
        ProductValue: "Rs. 100",
        ProductSrc: "../src/Muffin.jpg"
    },
]

showCart = (data)=>{
data.forEach(e => {
    let main = document.querySelector(".products"); //Access Product Div
    let newCard= document.createElement("div"); // Create a new div under product
    newCard.className = "product-card"; //Add class name
    let newImg = document.createElement("div"); // create a new div under product-card
    newImg.className = "product-image";
    let srcImg = document.createElement("img");
    srcImg.src=e.ProductSrc;
    let productName = document.createElement("div");
    productName.className = "product-info";
    let productInfo_1= document.createElement("h5");
    productInfo_1.className = "text-head";
    productInfo_1.textContent = e.ProductID;
    productName.appendChild(productInfo_1);
    let productIndo_2=document.createElement("p");
    productIndo_2.className = "text-content";
    productIndo_2.textContent = e.ProductValue;
    productName.appendChild(productIndo_2);
    newImg.appendChild(srcImg);
    newCard.appendChild(newImg);
    newCard.appendChild(productName);
    main.appendChild(newCard);
});
   
}

showCart(storeData);

filter=()=>{
    let val = document.getElementById("filter-search").value;
    console.log(val);
    let main = document.querySelector(".products");
    main.innerHTML="";
  showCart(storeData.filter(e=>{
      if(val == "")
      {     document.getElementById("btn-search").style.display= "none";
          return e}
      else
      {   document.getElementById("btn-search").style.display= "block";
          return e.ProductID == val;}
}))  
}

removeFilter=()=>{
    let main = document.querySelector(".products");
    main.innerHTML="";
    document.getElementById("filter-search").value="";
    showCart(storeData);
    document.getElementById("btn-search").style.display= "none";

}