let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartCount = cart.length;
let cartCounter = document.querySelector(".cart-counter");

const productData = [
  {
    image: "images/product/apple.png",
    name: "Apple",
    price: 19.99,
    cart: "Add to Cart",
  },
  {
    image: "images/product/carrot.png",
    name: "Carrot",
    price: 6.0,
    cart: "Add to Cart",
  },
  {
    image: "images/product/banana.png",
    name: "Banana",
    price: 18.0,
    cart: "Add to Cart",
  },
  {
    image: "images/product/red-chili.png",
    name: "Red Chili",
    price: 4.0,
    cart: "Add to Cart",
  },
  {
    image: "images/product/green-lettuce.png",
    name: "Green Lettuce",
    price: 23.0,
    cart: "Add to Cart",
  },
  {
    image: "images/product/tomato.png",
    name: "Tomato",
    price: 12.0,
    cart: "Add to Cart",
  },
  {
    image: "images/product/meat.png",
    name: "Meat",
    price: 40.0,
    cart: "Add to Cart",
  },
  {
    image: "images/product/cucumber.png",
    name: "Cucumber",
    price: 5.0,
    cart: "Add to Cart",
  },
  {
    image: "images/product/beans.png",
    name: "Beans",
    price: 25.0,
    cart: "Add to Cart",
  },
  {
    image: "images/product/green-peas.png",
    name: "Green Peas",
    price: 11.0,
    cart: "Add to Cart",
  },
  {
    image: "images/product/rice.png",
    name: "Rice",
    price: 20.0,
    cart: "Add to Cart",
  },
  {
    image: "images/product/potato.png",
    name: "Potato",
    price: 16.0,
    cart: "Add to Cart",
  },
  {
    image: "images/product/corn.png",
    name: "Corn",
    price: 20.0,
    cart: "Add to Cart",
  },
];

function createProductGrid(allData) {
  let container = document.querySelector(".produce-wrapper");
  container.innerHTML = ""; // Clear the container

  if (allData && allData.length > 0) {
    let htmlString = ""; // Variable to build the HTML content

    allData.forEach((data) => {
      htmlString += ` 
          <div class="produce-cont"> 
              <div class="pro-img">  
                  <img src="${data.image}" alt="${data.name}">  
              </div>  
              <div class="pro-detail">  
                  <p>${data.name}</p>  
                  <p>Price: $${data.price}</p>  

                  <button onclick="addToCart('${data.name}', ${data.price}, '${data.image}')">
                    ${data.cart}
                  </button>  
              </div>
          </div>  
      `;
    });

    container.innerHTML = htmlString; // Update the DOM
  } else {
    console.error("No data exists.");
  }
}




// window.addToCart = function (name, price, image) 

function addToCart (name, price, image) {
  const item = { name, price, image, quantity: 1 };
  const existingItem = cart.find((i) => i.name === name);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push(item);
  }

  cartCount++;
  updateCartCount();
  localStorage.setItem("cart", JSON.stringify(cart));
};




function updateCartCount() {
  const cartIcon = document.querySelector(".cart-icon");
  if (cartIcon) {
    cartIcon.setAttribute("data-count", cartCount);
  }
  updateCartCounter();
}

createProductGrid(productData);
updateCartCount();




const productData2 = [
  {
    image: "images/product/green-capsicum.png",
    name: "Green Capsicum",
    price: 8.99,
    cart: "Add to Cart",
  },
  {
    image: "images/product/mushroom.png",
    name: "Mushroom",
    price: 30.0,
    cart: "Add to Cart",
  },
  {
    image: "images/product/eggplant.png",
    name: "Egg Plant",
    price: 19.0,
    cart: "Add to Cart",
  },
  {
    image: "images/product/corn.png",
    name: "Corn",
    price: 20.0,
    cart: "Add to Cart",
  },
];

function createProductGrid2(allData2) {
  let container = document.querySelector(".newest-wrapper");
  container.innerHTML = "";

  if (allData2 && allData2.length > 0) {
    let htmlString = "";

    allData2.forEach((data) => {
      htmlString += `
                <div class="produce-cont"> 
                    <div class="pro-img">  
                        <img src="${data.image}" alt="${data.name}">  
                    </div>  
                    <div class="pro-detail">  
                        <p>${data.name}</p>  
                        <p>Price: $${data.price}</p>  
                        <button onclick="addToCart('${data.name}', ${data.price}, '${data.image}')">${data.cart}</button>  
                    </div>
                </div>  
            `;
    });
    container.innerHTML = htmlString;
  } else {
    console.log("No data exists.");
  }
}

createProductGrid2(productData2);
updateCartCount();

// Build best seller products
function createProductGrid3(allData) {
  let container = document.querySelector(".seller-wrapper");
  container.innerHTML = ""; // Clear the container

  if (allData && allData.length > 0) {
    let htmlString = ""; // Variable to build the HTML content
    allowedNames = ["Banana", "Carrot", "Meat", "Corn"];

    allData.forEach((data) => {
      if (allowedNames.includes(data.name)) {
        htmlString += ` 
                    <div class="produce-cont"> 
                        <div class="pro-img">  
                            <img src="${data.image}" alt="${data.name}">  
                        </div>  
                        <div class="pro-detail">  
                            <p>${data.name}</p>  
                            <p>Price: $${data.price}</p>  
                            <button onclick="addToCart('${data.name}', ${data.price}, '${data.image}')">${data.cart}</button>  
                        </div>
                    </div>  
                `;
      }
    });

    container.innerHTML = htmlString; // Update the DOM
  } else {
    console.error("No data exists.");
  }
}

createProductGrid3(productData);
updateCartCount();




// Update cart counter on page load
function updateCartCounter() {
  cartCounter.textContent = cart.length;
}

// // Reset cart counter after payment
function resetCartCounter() {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  cartCounter.textContent = 0;
}

// // Event listener for payment completion
document.addEventListener("paymentComplete", resetCartCounter);

// // Initialize counter on page load
// document.addEventListener('DOMContentLoaded', updateCartCounter);
