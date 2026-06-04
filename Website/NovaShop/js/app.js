/* 
   NovaShop - Main Application JS
   Handles core UI logic, navigation, and common components.
*/

document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // Active Link Highlight
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        if (item.getAttribute('href').includes(currentPath) && currentPath !== '/') {
            item.classList.add('active');
        }
    });

    console.log('NovaShop Initialized');
});

// Quick View Modal Logic
function openQuickView(product) {
    let modal = document.getElementById('quick-view-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'quick-view-modal';
        modal.className = 'modal';
        document.body.appendChild(modal);
    }

    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += `<i class="${i < product.rating ? 'fas' : 'far'} fa-star"></i>`;
    }

    modal.innerHTML = `
        <div class="modal-content scale-in">
            <button onclick="closeModal()" style="position: absolute; top: 1.5rem; right: 1.5rem; font-size: 1.5rem; color: var(--text-muted);"><i class="fas fa-times"></i></button>
            <div class="modal-image">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: 20px;">
            </div>
            <div class="modal-info">
                <p class="product-category">${product.category}</p>
                <h2 style="font-size: 2rem; margin-bottom: 1rem;">${product.name}</h2>
                <div class="rating" style="margin-bottom: 1.5rem;">${stars}</div>
                <div class="price-box" style="margin-bottom: 2rem;">
                    <span class="product-price" style="font-size: 1.8rem;">$${product.price}</span>
                    <span class="old-price" style="font-size: 1.2rem;">$${product.oldPrice}</span>
                </div>
                <p class="text-muted" style="margin-bottom: 2rem;">Premium quality materials, sustainable design, and exceptional comfort. This item is designed to elevate your lifestyle with modern technology and timeless style.</p>
                <div style="display: flex; gap: 1.5rem;">
                    <button class="btn btn-primary" onclick="Cart.addItem(${JSON.stringify(product).replace(/"/g, '&quot;')})" style="flex: 1;">Add to Cart</button>
                    <button class="icon-btn" style="border: 1px solid var(--glass-border); border-radius: 12px; width: 50px;"><i class="far fa-heart"></i></button>
                </div>
            </div>
        </div>
    `;
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('quick-view-modal').classList.remove('active');
}

// Wishlist Toggle Logic
function toggleWishlist(btn, productId) {
    const icon = btn.querySelector('i');
    icon.classList.toggle('far');
    icon.classList.toggle('fas');
    btn.classList.toggle('active');

    // In a real app, you'd update local storage or a database
    const wishlistCount = document.querySelector('.badge:not(.cart-count)');
    let count = parseInt(wishlistCount.textContent);
    wishlistCount.textContent = btn.classList.contains('active') ? count + 1 : count - 1;
}

// Component Loader Utility
async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error('Error loading component:', error);
    }
}
