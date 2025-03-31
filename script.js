const menuItems = [
    {
        name: "Bruschetta",
        description: "Fresh tomatoes, basil, and mozzarella on toasted bread",
        price: "$12",
        image: "images/appetizer.jpg"
    },
    {
        name: "Grilled Salmon",
        description: "Served with seasonal vegetables and lemon butter sauce",
        price: "$25",
        image: "images/main_course.jpg"
    },
    {
        name: "Chocolate Lava Cake",
        description: "Rich chocolate cake with a molten center",
        price: "$8",
        image: "images/dessert.jpg"
    }
];

// Function to display the menu
function displayMenu() {
    const menuList = document.getElementById('menuList');
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-image">
            <div>
                <h3>${item.name}</h3>
                <p>${item.description} - ${item.price}</p>
            </div>
        `;
        menuList.appendChild(menuItem);
    });
}

// Carousel functionality
let currentImageIndex = 0;

function showImage(index) {
    const images = document.querySelectorAll('.carousel-image');
    images.forEach((img, i) => {
        img.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextImage() {
    const images = document.querySelectorAll('.carousel-image');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function prevImage() {
    const images = document.querySelectorAll('.carousel-image');
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

// Initialize the carousel and menu
document.addEventListener('DOMContentLoaded', () => {
    displayMenu();
    showImage(currentImageIndex);
});