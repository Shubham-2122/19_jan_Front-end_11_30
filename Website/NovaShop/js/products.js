/* 
   NovaShop - Products Data & Display (Enhanced)
*/

const products = [
    {
        id: 1,
        name: "Aura Smart Watch",
        price: 299.99,
        oldPrice: 399.99,
        rating: 5,
        image: "images/product-1.jpg",
        category: "Electronics"
    },
    {
        id: 2,
        name: "Luxe Leather Bag",
        price: 189.50,
        oldPrice: 250.00,
        rating: 4,
        image: "images/product-2.jpg",
        category: "Accessories"
    },
    {
        id: 3,
        name: "Sonic Pro Headphones",
        price: 149.00,
        oldPrice: 199.00,
        rating: 5,
        image: "images/product-3.jpg",
        category: "Electronics"
    },
    {
        id: 4,
        name: "Drift Running Shoes",
        price: 120.00,
        oldPrice: 150.00,
        rating: 4,
        image: "images/product-4.jpg",
        category: "Fashion"
    }
];

function renderProducts(containerId, productList = products) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = productList.map(product => {
        const productJSON = JSON.stringify(product).replace(/"/g, '&quot;');

        let stars = '';
        for (let i = 0; i < 5; i++) {
            stars += `<i class="${i < product.rating ? 'fas' : 'far'} fa-star"></i>`;
        }

        return `
            <div class="product-card scale-in">
                <div class="product-img-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                    
                    <div class="product-overlay">
                        <button class="overlay-btn wishlist-toggle" onclick="toggleWishlist(this, ${product.id})">
                            <i class="far fa-heart"></i>
                        </button>
                        <button class="overlay-btn" onclick="openQuickView(${productJSON})">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>

                    <button class="quick-view-btn" onclick="openQuickView(${productJSON})">
                        Quick View
                    </button>
                </div>

                <div class="product-info">
                    <p class="product-category">${product.category}</p>
                    <h3 class="product-title">${product.name}</h3>
                    
                    <div class="rating">
                        ${stars}
                        <span style="color: var(--text-muted); margin-left: 5px;">(120 reviews)</span>
                    </div>

                    <div class="price-box">
                        <span class="product-price">$${product.price}</span>
                        ${product.oldPrice ? `<span class="old-price">$${product.oldPrice}</span>` : ''}
                    </div>

                    <button class="add-cart-btn" onclick="Cart.addItem(${productJSON})">
                        <i class="fas fa-shopping-bag"></i> Add to Cart
                    </button>
                </div>
            </div>
        `;
    }).join('');
}
