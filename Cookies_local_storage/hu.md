// Function to show the login form and hide the welcome message if it exists
function showForm() {
    const welcomeMessage = document.getElementById("welcomeMessage");
    if (welcomeMessage) {
        welcomeMessage.style.display = "none";
    }
    const loginForm = document.getElementById("loginForm");
    loginForm.style.display = "block";
}

// Function to hide the login form
function hideForm() {
    const loginForm = document.getElementById("loginForm");
    loginForm.style.display = "none";
}

// Function to delete cookies and show the login form
function deleteCookiesAndShowForm() {
    Cookies.remove('firstname');
    Cookies.remove('email');
    showForm();
}

// Function to show the welcome message or login form based on user login status
function showWelcomeMessageOrForm() {
    const firstname = Cookies.get('firstname');
    const welcomeMessage = document.createElement('h1');
    const logoutLink = document.createElement('a');
    
    if (firstname) {
        // User is logged in
        welcomeMessage.textContent = `Welcome ${firstname}`;
        logoutLink.textContent = "(logout)";
        logoutLink.style.fontStyle = "italic";
        logoutLink.style.fontWeight = "normal";
        logoutLink.style.marginLeft = "10px";
        logoutLink.href = "javascript:void(0);";
        logoutLink.onclick = deleteCookiesAndShowForm;
        welcomeMessage.appendChild(logoutLink);
        document.body.innerHTML = '';
        document.body.appendChild(welcomeMessage);
    } else {
        // User is not logged in
        showForm();
    }
}

// Call showWelcomeMessageOrForm to display either the welcome message or login form on page load
showWelcomeMessageOrForm();






// Function to set cookies and show the welcome message or login form
function setCookiesAndShowWelcomeMessage() {
    // Get the values by their id
    let firstname = document.getElementById("firstname").value;
    let email = document.getElementById("email").value;

    // Set cookies
    Cookies.set('firstname', firstname, { expires: 10 });
    Cookies.set('email', email, { expires: 10 });

    // Call showWelcomeMessageOrForm to display the welcome message or login form
    showWelcomeMessageOrForm();
}

// Function to show the welcome message or login form based on user login status
function showWelcomeMessageOrForm() {
    const firstname = Cookies.get('firstname');
    const welcomeMessage = document.createElement('h1');
    const logoutLink = document.createElement('a');

    if (firstname) {
        // User is logged in
        welcomeMessage.textContent = `Welcome ${firstname}`;
        logoutLink.textContent = "(logout)";
        logoutLink.style.fontStyle = "italic";
        logoutLink.style.fontWeight = "normal";
        logoutLink.style.marginLeft = "10px";
        logoutLink.href = "javascript:void(0);";
        logoutLink.onclick = deleteCookiesAndShowForm;
        welcomeMessage.appendChild(logoutLink);
        document.body.innerHTML = '';
        document.body.appendChild(welcomeMessage);
    } else {
        // User is not logged in
        showForm();
    }
}

// Function to set cookies and show the welcome message or login form when the "Log me in" button is clicked
function setCookies() {
    setCookiesAndShowWelcomeMessage();
}

// Call showWelcomeMessageOrForm to display either the welcome message or login form on page load
showWelcomeMessageOrForm();





// cart task

<!DOCTYPE html>
<html>

<head>
    <title>Shopping Cart</title>
</head>

<body>
    <h1>Available Items</h1>
    <ul id="itemList">
        <!-- Available items will be added here dynamically -->
    </ul>

    <script src="shopping_cart.js"></script>
</body>

</html>


// Check if local storage is available
function isLocalStorageAvailable() {
    try {
        localStorage.setItem("test", "test");
        localStorage.removeItem("test");
        return true;
    } catch (e) {
        return false;
    }
}

// Array of available items
const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

// Function to add an item to the cart
function addItemToCart(item) {
    localStorage.setItem(item, "true");
}

// Function to create the item list and add click handlers
function createStore() {
    const itemList = document.getElementById("itemList");

    availableItems.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        listItem.addEventListener("click", () => {
            addItemToCart(item);
        });
        itemList.appendChild(listItem);
    });
}

// Function to display the cart contents
function displayCart() {
    const cartItemCount = Object.keys(localStorage).length - 1; // Subtract 1 to exclude the "test" item

    if (cartItemCount > 0) {
        const cartMessage = document.createElement("p");
        cartMessage.textContent = `You previously had ${cartItemCount} items in your cart.`;
        document.body.appendChild(cartMessage);
    }
}

// Check if local storage is available
if (isLocalStorageAvailable()) {
    createStore();
    displayCart();
} else {
    alert("Sorry, your browser does not support Web storage. Try again with a better one.");
}


/// 6-index.html
// Check if session storage is available
function isSessionStorageAvailable() {
    try {
        sessionStorage.setItem("test", "test");
        sessionStorage.removeItem("test");
        return true;
    } catch (e) {
        return false;
    }
}

// Array of available items
const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

// Function to add an item to the cart
function addItemToCart(item) {
    sessionStorage.setItem(item, "true");
}

// Function to create the item list and add click handlers
function createStore() {
    const itemList = document.getElementById("itemList");

    availableItems.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        listItem.addEventListener("click", () => {
            addItemToCart(item);
        });
        itemList.appendChild(listItem);
    });
}

// Function to display the cart contents
function displayCart() {
    const cartItemCount = Object.keys(sessionStorage).length - 1; // Subtract 1 to exclude the "test" item

    if (cartItemCount > 0) {
        const cartMessage = document.createElement("p");
        cartMessage.textContent = `You previously had ${cartItemCount} items in your cart.`;
        document.body.appendChild(cartMessage);
    }
}

// Check if session storage is available
if (isSessionStorageAvailable()) {
    createStore();
    displayCart();
} else {
    alert("Sorry, your browser does not support Web storage. Try again with a better one.");
}
The main changes are:

Replaced references to localStorage with sessionStorage.

Updated the check for session storage availability using the isSessionStorageAvailable function.

Now, when you open the HTML file in your browser and click on items to add them to your cart, the cart items will be stored in session storage. If you refresh the page, you will still see the cart message. However, if you open a new tab or browser window, you won't see the cart message because session storage is specific to the current session.





/// 7-index.html



js file
// Check if session storage is available
function isSessionStorageAvailable() {
    try {
        sessionStorage.setItem("test", "test");
        sessionStorage.removeItem("test");
        return true;
    } catch (e) {
        return false;
    }
}

// Array of available items
const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

// Function to get the cart from session storage
function getCartFromStorage() {
    const cartJSON = sessionStorage.getItem("cart");
    return cartJSON ? JSON.parse(cartJSON) : {};
}

// Function to add an item to the cart
function addItemToCart(item) {
    const cart = getCartFromStorage();
    cart[item] = cart[item] ? cart[item] + 1 : 1;
    sessionStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Function to remove an item from the cart
function removeItemFromCart(item) {
    const cart = getCartFromStorage();
    delete cart[item];
    sessionStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Function to clear the entire cart
function clearCart() {
    sessionStorage.removeItem("cart");
    displayCart();
}

// Function to create the item list and add click handlers
function createStore() {
    const availableProducts = document.getElementById("availableProducts");

    availableItems.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        listItem.addEventListener("click", () => {
            addItemToCart(item);
        });
        availableProducts.appendChild(listItem);
    });
}

// Function to display the cart
function displayCart() {
    const cartContainer = document.getElementById("cartContainer");
    cartContainer.innerHTML = '';

    const cart = getCartFromStorage();

    const cartHeader = document.createElement("h2");
    cartHeader.textContent = "Your cart:";
    cartContainer.appendChild(cartHeader);

    const cartList = document.createElement("ul");

    if (Object.keys(cart).length === 0) {
        const emptyCartItem = document.createElement("li");
        emptyCartItem.textContent = "Your cart is empty";
        cartList.appendChild(emptyCartItem);
    } else {
        for (const item in cart) {
            const cartItem = document.createElement("li");
            cartItem.textContent = `${item} x ${cart[item]} `;
            const removeButton = document.createElement("button");
            removeButton.textContent = "(remove)";
            removeButton.addEventListener("click", () => {
                removeItemFromCart(item);
            });
            cartItem.appendChild(removeButton);
            cartList.appendChild(cartItem);
        }
    }

    const clearCartButton = document.createElement("button");
    clearCartButton.textContent = "Clear my cart";
    clearCartButton.addEventListener("click", () => {
        clearCart();
    });

    cartContainer.appendChild(cartList);
    cartContainer.appendChild(clearCartButton);
}

// Check if session storage is available
if (isSessionStorageAvailable()) {
    createStore();
    displayCart();
} else {
    alert("Sorry, your browser does not support Web storage. Try again with a better one.");
}
