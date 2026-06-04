/* 
   NovaShop - Cart Logic (Functional)
*/

const Cart = {
    items: JSON.parse(localStorage.getItem('novashop_cart')) || [],

    addItem(product) {
        const existing = this.items.find(item => item.id === product.id);
        if (existing) {
            existing.quantity += 1;
        } else {
            this.items.push({ ...product, quantity: 1 });
        }
        this.save();
        this.updateUI();
        alert(`${product.name} added to cart!`);
    },

    updateQuantity(id, delta) {
        const item = this.items.find(i => i.id === id);
        if (item) {
            item.quantity += delta;
            if (item.quantity < 1) {
                this.items = this.items.filter(i => i.id !== id);
            }
            this.save();
            this.renderCartPage();
            this.updateUI();
        }
    },

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.save();
        this.renderCartPage();
        this.updateUI();
    },

    save() {
        localStorage.setItem('novashop_cart', JSON.stringify(this.items));
    },

    updateUI() {
        const cartCount = document.querySelectorAll('.cart-count');
        const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.forEach(el => el.textContent = totalItems);
    },

    calculateTotals() {
        const subtotal = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal > 500 ? 0 : 20.00;
        const total = subtotal + shipping;
        return { subtotal, shipping, total };
    },

    renderCartPage() {
        const container = document.getElementById('cart-items-container');
        const summary = document.getElementById('cart-summary-container');
        if (!container) return;

        if (this.items.length === 0) {
            container.innerHTML = `
                <div class="empty-cart-container fade-in-up">
                    <i class="fas fa-shopping-basket empty-cart-icon"></i>
                    <h2>Your cart is empty</h2>
                    <p class="text-muted">Looks like you haven't added anything yet.</p>
                    <a href="products.html" class="btn btn-primary" style="margin-top: 2rem;">Start Shopping</a>
                </div>
            `;
            if (summary) summary.style.display = 'none';
            document.querySelector('.cart-page-container').style.gridTemplateColumns = '1fr';
            return;
        }

        container.innerHTML = `
            <div class="cart-items-wrapper fade-in-left">
                <div class="cart-header">
                    <span>Product</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Subtotal</span>
                    <span></span>
                </div>
                ${this.items.map(item => `
                    <div class="cart-item-row">
                        <div class="cart-item-info">
                            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                            <div>
                                <h4 style="margin: 0;">${item.name}</h4>
                                <p class="text-muted" style="font-size: 0.8rem; margin: 0;">${item.category}</p>
                            </div>
                        </div>
                        <div style="font-weight: 600;">$${item.price}</div>
                        <div class="cart-qty-controls">
                            <button onclick="Cart.updateQuantity(${item.id}, -1)"><i class="fas fa-minus" style="font-size: 0.75rem;"></i></button>
                            <span style="font-weight: 700; min-width: 20px; text-align: center;">${item.quantity}</span>
                            <button onclick="Cart.updateQuantity(${item.id}, 1)"><i class="fas fa-plus" style="font-size: 0.75rem;"></i></button>
                        </div>
                        <div style="font-weight: 700; color: var(--primary-color);">$${(item.price * item.quantity).toFixed(2)}</div>
                        <button onclick="Cart.removeItem(${item.id})" style="color: #ef4444;"><i class="fas fa-trash-alt"></i></button>
                    </div>
                `).join('')}
            </div>
        `;

        if (summary) {
            const { subtotal, shipping, total } = this.calculateTotals();
            summary.style.display = 'block';
            summary.innerHTML = `
                <div class="cart-summary fade-in-up">
                    <h3 style="margin-bottom: 2rem;">Order Summary</h3>
                    <div class="summary-row">
                        <span>Subtotal</span>
                        <span style="font-weight: 600;">$${subtotal.toFixed(2)}</span>
                    </div>
                    <div class="summary-row">
                        <span>Estimated Shipping</span>
                        <span style="font-weight: 600;">${shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div class="summary-row">
                        <span>Tax</span>
                        <span style="font-weight: 600;">$0.00</span>
                    </div>
                    
                    <div class="coupon-box">
                        <input type="text" class="coupon-input" placeholder="Coupon Code">
                        <button class="btn btn-outline" style="padding: 0.6rem 1rem;">Apply</button>
                    </div>

                    <div class="summary-row summary-total">
                        <span>Total</span>
                        <span>$${total.toFixed(2)}</span>
                    </div>
                    
                    <a href="checkout.html" class="btn btn-primary" style="width: 100%; justify-content: center; margin-top: 2rem; padding: 1.2rem;">
                        Proceed to Checkout <i class="fas fa-arrow-right"></i>
                    </a>
                    
                    <div style="display: flex; justify-content: center; gap: 1rem; margin-top: 2rem; color: var(--text-muted); font-size: 1.2rem;">
                        <i class="fab fa-cc-visa"></i>
                        <i class="fab fa-cc-mastercard"></i>
                        <i class="fab fa-cc-paypal"></i>
                        <i class="fab fa-cc-apple-pay"></i>
                    </div>
                </div>
            `;
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    Cart.updateUI();
    Cart.renderCartPage();
});
