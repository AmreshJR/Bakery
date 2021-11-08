let storeData = [
    {
        ProductID: "Chocolate Muffin",
        
            ProductImage_1: "../src/detail/muffin-1.jpg",
            ProductImage_2: "../src/detail/muffin-2.jpg",
            ProductImage_3: "../src/detail/muffin-3.jpg",
        
        ProductDetail: "2 cups all-purpose flour, 1 cup white sugar, ¾ cup chocolate chips, ½ cup unsweetened cocoa powder, 1 teaspoon baking soda, 1 egg, 1 cup plain yogurt, ½ cup milk, 1 teaspoon vanilla extract, ½ cup vegetable oil, ¼ cup chocolate chips"
    },

    {
        ProductID: "Chocolate Pudding Sundaes",
        ProductImage_1:"../src/detail/chocolatepudding-1.jpg",
        ProductImage_2:"../src/detail/chocolatepudding-2.jpg",
        ProductImage_3:"../src/detail/chocolatepudding-3.jpg",
        ProductDetail:"½ cup white sugar, 3 tablespoons unsweetened cocoa powder, ¼ cup cornstarch, ⅛ teaspoon salt, 2 ¾ cups milk, 2 tablespoons butter, room temperature, 1 teaspoon vanilla extract"
    },
    {
        ProductID: "Chocolate Crinkle Cookies",
        ProductImage_1:"../src/detail/crinkle-1.jpg",
        ProductImage_2:"../src/detail/crinkle-2.jpg",
        ProductImage_3:"../src/detail/crinkle-3.jpg",
        ProductDetail:"1 cup unsweetened cocoa powder, 2 cups white sugar, ½ cup vegetable oil, 4 eggs, 2 teaspoons vanilla extract, 2 cups all-purpose flour, 2 teaspoons baking powder, ½ teaspoon salt, ½ cup confectioners sugar"
    },
    {
        ProductID: "Strawaberry Cake",
        ProductImage_1:"../src/detail/scake-1.jpg",
        ProductImage_2:"../src/detail/scake-2.jpg",
        ProductImage_3:"../src/detail/scake-3.jpg",
        ProductDetail:"2 cups white sugar, 1 (3 ounce) package strawberry flavored Jell-O, 1 cup butter, softened, 4 eggs (room temperature), 2 ¾ cups sifted cake flour, 2 ½ teaspoons baking powder, 1 cup whole milk, room temperature, 1 tablespoon vanilla extract, ½ cup strawberry puree made from frozen sweetened strawberries"
    },
    {
        ProductID: "Chocolate Chip Muffins",
        ProductImage_1:"../src/detail/muffinchc-1.jpg",
        ProductImage_2:"../src/detail/muffinchc-2.jpg",
        ProductImage_3:"../src/detail/muffinchc-3.jpg",
        ProductDetail:"2 cups all-purpose flour, ½ cup white sugar, 3 teaspoons baking powder, ½ teaspoon salt, ¾ cup milk, ⅓ cup vegetable oil, 1 egg, ¾ cup mini semi-sweet chocolate chips, 3 tablespoons white sugar, 2 tablespoons brown sugar"
    },

    {
        ProductID: "Sour Cream Cake",
        ProductImage_1:"../src/detail/sour-1.jpg",
        ProductImage_2:"../src/detail/sour-2.jpg",
        ProductImage_3:"../src/detail/sour-3.jpg",
        ProductDetail:"1 ¾ cups white sugar, ½ cup unsalted butter, softened, 4 eggs, beaten, 1 teaspoon vanilla extract, 3 cups all-purpose flour, 1 tablespoon baking powder, 2 teaspoons baking soda, 1 pint sour cream, 1 (12 ounce) bag semisweet chocolate chips"
    },
    {
        ProductID: "Pecan Shortbread Cookies",
        ProductImage_1:"../src/detail/pecan-1.jpg",
        ProductImage_2:"../src/detail/pecan-2.jpg",
        ProductImage_3:"../src/detail/pecan-3.jpg",
        ProductDetail:"1 cup unsalted butter, softened, 1 cup vegetable oil, 1 cup white sugar, 1 cup sifted confectioners' sugar, 2 large eggs, 2 teaspoons vanilla extract, 4 cups all-purpose flour, 1 teaspoon baking soda, 1 teaspoon cream of tartar, 1 teaspoon salt, 1 cup chopped pecans"
    },
    {
        ProductID: "Molten Chocolate Cakes",
        ProductImage_1:"../src/detail/molten-1.jpg",
        ProductImage_2:"../src/detail/molten-2.jpg",
        ProductImage_3:"../src/detail/molten-3.jpg",
        ProductDetail:"1 cup unsalted butter or unsalted margarine, 8 ounces semisweet chocolate chips, or bars, cut into bite-size chunks, 5 large eggs, ½ cup sugar, Pinch of salt, 4 teaspoons flour (or matzo meal, ground in a blender to a fine powder), 8 extra-large paper muffin cups (or use regular paper muffin cups, which will make 12 cakes), 1 (6 ounce) container raspberries, barely moistened and rolled in about ½ cup sugar right before servin"
    
    }
]

let detailId = localStorage.getItem("detailItemId");

log = () => {
    location.href = "./ComponentLogin/index.html";
}
logout = () => {
    localStorage.setItem("isLogIn", false);
    localStorage.setItem("RememberMe", false);
}
let logStatus = localStorage.getItem("isLogIn");
console.log(logStatus);

if (logStatus == "true") {
    document.getElementById("logIn").style.display = "none";
    document.getElementById("logOut").style.display = "block";
    document.getElementById("mLogin").style.display = "none";
    document.getElementById("mLogout").style.display = "block";
}
else {
    document.getElementById("logIn").style.display = "block";
    document.getElementById("logOut").style.display = "none";
    document.getElementById("mLogin").style.display = "block";
    document.getElementById("mLogout").style.display = "none";
}
let ProductImg;
let detail = storeData.filter(e =>{
    if(e.ProductID == detailId)
    // ProductImg = e.ProductImage
    return e;
})
console.log();
setContent = () =>{
  detail.forEach(e => {
    let main = document.querySelector(".carousel-inner");
    let newDiv_1= document.createElement("div");
    newDiv_1.className = "carousel-item active";
    let image_1 =document.createElement("img");
    image_1.src = e.ProductImage_1;
    let imgDiv = document.createElement("div");
    imgDiv.className = "ImgDiv";
    imgDiv.appendChild(image_1);
    newDiv_1.appendChild(imgDiv);
    let div_1 = document.createElement("div");
    div_1.className = "carousel-caption d-none d-md-block";
    newDiv_1.appendChild(div_1);
    main.appendChild(newDiv_1);

      let newDiv_2 = document.createElement("div");
    newDiv_2.className = "carousel-item";
    let image_2 =document.createElement("img");
    image_2.src = e.ProductImage_2;
    let imgDiv_2 = document.createElement("div");
    imgDiv_2.className = "ImgDiv";
    imgDiv_2.appendChild(image_2);
    newDiv_2.appendChild(imgDiv_2);
    let div_2 = document.createElement("div");
    div_2.className = "carousel-caption d-none d-md-block";
    newDiv_2.appendChild(div_2);
    main.appendChild(newDiv_2);

    let newDiv_3 = document.createElement("div");
    newDiv_3.className = "carousel-item";
    let image_3 =document.createElement("img");
    image_3.src = e.ProductImage_3;
    let imgDiv_3 = document.createElement("div");
    imgDiv_3.className = "ImgDiv";
    imgDiv_3.appendChild(image_3);
    newDiv_3.appendChild(imgDiv_3);
    let div_3 = document.createElement("div");
    div_3.className = "carousel-caption d-none d-md-block";
    newDiv_3.appendChild(div_3);
    main.appendChild(newDiv_3);
  });

  
    
    detail.forEach(e => {
        let main_2 = document.querySelector(".content");
        let newDiv_4 =document.createElement("div");
        let para = document.createElement("p");
        para.textContent = e.ProductDetail;
        newDiv_4.appendChild(para);
        main_2.appendChild(newDiv_4);
    });
   
}
   
setContent();

log = () =>{
    location.href = "./ComponentLogin/index.html";
}