 
        // Sample product data with subcategories
        const products = [
            {
                id: 1,
                name: "Organic Wheat Seeds",
                category: "seeds",
                subcategory: "cereals",
                price: 249.99,
                image: "Organic Wheat Seeds.jpg",
                description: "High-quality organic wheat seeds perfect for sustainable farming. These seeds are non-GMO and have been tested for high germination rates.",
                features: [
                    "Non-GMO certified",
                    "High germination rate (95%+)",
                    "Suitable for organic farming",
                    "Disease resistant"
                ],
                reviews: [
                    {
                        id: 1,
                        name: "Rajesh Kumar",
                        date: "2023-05-15",
                        rating: 5,
                        comment: "Excellent quality seeds. Germination rate was amazing and the yield was better than expected.",
                        avatar: "https://picsum.photos/seed/user1/100/100.jpg"
                    },
                    {
                        id: 2,
                        name: "Priya Singh",
                        date: "2023-04-22",
                        rating: 4,
                        comment: "Good quality seeds, but took a bit longer to germinate. Overall satisfied with the purchase.",
                        avatar: "https://picsum.photos/seed/user2/100/100.jpg"
                    }
                ]
            },
            {
                id: 2,
                name: "NPK Fertilizer",
                category: "fertilizers",
                subcategory: "chemical",
                price: 187.75,
                image: "NPK Fertiliser.jpg",
                description: "Balanced NPK fertilizer with essential nutrients for healthy plant growth. Suitable for a wide variety of crops.",
                features: [
                    "NPK ratio: 10-10-10",
                    "Slow-release formula",
                    "Suitable for all crops",
                    "5kg bag"
                ],
                reviews: [
                    {
                        id: 1,
                        name: "Amit Patel",
                        date: "2023-06-10",
                        rating: 5,
                        comment: "This fertilizer worked wonders for my crops. The plants are healthier and greener than ever before.",
                        avatar: "https://picsum.photos/seed/user3/100/100.jpg"
                    },
                    {
                        id: 2,
                        name: "Sunita Sharma",
                        date: "2023-05-28",
                        rating: 4,
                        comment: "Good fertilizer, but a bit expensive. Results are visible within a week of application.",
                        avatar: "https://picsum.photos/seed/user4/100/100.jpg"
                    }
                ]
            },
            {
                id: 3,
                name: "Garden Trowel",
                category: "tools",
                subcategory: "handtools",
                price: 129.99,
                image: "Garden Trowel Tool.jpg",
                description: "Durable stainless steel garden trowel with ergonomic handle. Perfect for planting, transplanting, and weeding.",
                features: [
                    "Stainless steel blade",
                    "Ergonomic handle",
                    "Rust resistant",
                    "Lifetime warranty"
                ],
                reviews: [
                    {
                        id: 1,
                        name: "Vikram Mehta",
                        date: "2023-06-05",
                        rating: 5,
                        comment: "Best trowel I've ever used. The handle is very comfortable and the blade is sharp and sturdy.",
                        avatar: "https://picsum.photos/seed/user5/100/100.jpg"
                    }
                ]
            },
            {
                id: 4,
                name: "Organic Pesticide",
                category: "pesticides",
                subcategory: "organic",
                price: 155.50,
                image: "Nutrigrow Festiside.jpg",
                description: "Natural pesticide made from plant extracts. Safe for beneficial insects and the environment.",
                features: [
                    "100% organic ingredients",
                    "Safe for bees and beneficial insects",
                    "Effective against common pests",
                    "1-liter spray bottle"
                ],
                reviews: [
                    {
                        id: 1,
                        name: "Anita Desai",
                        date: "2023-05-30",
                        rating: 4,
                        comment: "Effective against pests and doesn't harm beneficial insects. Very happy with this purchase.",
                        avatar: "https://picsum.photos/seed/user6/100/100.jpg"
                    }
                ]
            },
            {
                id: 5,
                name: "Corn Seeds",
                category: "seeds",
                subcategory: "cereals",
                price: 199.99,
                image: "Corn Seeds.webp",
                description: "Premium sweet corn seeds with high sugar content. Perfect for home gardens and commercial farming.",
                features: [
                    "High sugar content",
                    "Disease resistant",
                    "75 days to maturity",
                    "Non-GMO"
                ],
                reviews: [
                    {
                        id: 1,
                        name: "Rahul Verma",
                        date: "2023-06-12",
                        rating: 5,
                        comment: "Amazing corn seeds! The corn was sweet and juicy. Got a great harvest this season.",
                        avatar: "https://picsum.photos/seed/user7/100/100.jpg"
                    }
                ]
            },
            {
                id: 6,
                name: "Compost Fertilizer",
                category: "fertilizers",
                subcategory: "organic",
                price: 225.50,
                image: "Bio Organic Fertiliser.webp",
                description: "Nutrient-rich organic compost made from decomposed plant matter. Improves soil structure and fertility.",
                features: [
                    "100% organic",
                    "Improves soil structure",
                    "Rich in microorganisms",
                    "10kg bag"
                ],
                reviews: []
            },
            {
                id: 7,
                name: "Pruning Shears",
                category: "tools",
                subcategory: "handtools",
                price: 167.75,
                image: "NPK Fertiliser.jpg",
                description: "Sharp pruning shears with comfortable grip. Ideal for trimming plants, shrubs, and small branches.",
                features: [
                    "Sharp carbon steel blades",
                    "Ergonomic handles",
                    "Safety lock",
                    "Cutting capacity: 20mm"
                ],
                reviews: []
            },
            {
                id: 8,
                name: "Neem Oil Pesticide",
                category: "pesticides",
                subcategory: "organic",
                price: 139.99,
                image: "Insect Soap Pesticides.jpg",
                description: "Natural neem oil pesticide effective against a wide range of pests. Safe for organic farming.",
                features: [
                    "100% cold-pressed neem oil",
                    "Broad-spectrum pest control",
                    "Safe for organic farming",
                    "500ml bottle"
                ],
                reviews: []
            },
            {
                id: 9,
                name: "Tomato Seeds",
                category: "seeds",
                subcategory: "vegetables",
                price: 89.99,
                image: "Tomato Seeds.jpg",
                description: "Heirloom tomato seeds with exceptional flavor. Perfect for home gardens and market gardens.",
                features: [
                    "Heirloom variety",
                    "Rich flavor",
                    "High yield",
                    "Indeterminate growth"
                ],
                reviews: []
            },
            {
                id: 10,
                name: "Liquid Fertilizer",
                category: "fertilizers",
                subcategory: "chemical",
                price: 149.99,
                image: "NPK Fertiliser Powder.webp",
                description: "Concentrated liquid fertilizer for fast nutrient absorption. Suitable for foliar feeding and root application.",
                features: [
                    "Quick absorption",
                    "Concentrated formula",
                    "Suitable for all plants",
                    "1-liter bottle"
                ],
                reviews: []
            },
            {
                id: 11,
                name: "Garden Fork",
                category: "tools",
                subcategory: "handtools",
                price: 249.99,
                image: "Garden fork Tool.jpg",
                description: "Sturdy garden fork with stainless steel tines. Perfect for turning soil, aerating, and lifting plants.",
                features: [
                    "Stainless steel tines",
                    "Hardwood handle",
                    "Rust resistant",
                    "4 tines"
                ],
                reviews: []
            },
            {
                id: 12,
                name: "Insecticidal Soap",
                category: "pesticides",
                subcategory: "organic",
                price: 115.50,
                image: "Insecticidal Soap.jpg",
                description: "Gentle insecticidal soap for controlling soft-bodied insects. Safe for use on vegetables and ornamentals.",
                features: [
                    "Safe for edible plants",
                    "Effective on soft-bodied insects",
                    "No residual effect",
                    "1-liter spray bottle"
                ],
                reviews: []
            },
            {
                id: 13,
                name: "Rice Seeds",
                category: "seeds",
                subcategory: "cereals",
                price: 179.99,
                image: "Rise.jpg",
                description: "High-yield rice seeds suitable for various climatic conditions. Disease resistant and drought tolerant.",
                features: [
                    "High yield variety",
                    "Disease resistant",
                    "Drought tolerant",
                    "Short duration crop"
                ],
                reviews: []
            },
            {
                id: 14,
                name: "Urea Fertilizer",
                category: "fertilizers",
                subcategory: "chemical",
                price: 299.99,
                image: "Organic Fertiliser.jpg",
                description: "High nitrogen urea fertilizer for rapid plant growth. Suitable for all types of crops and soil.",
                features: [
                    "46% nitrogen content",
                    "Rapid growth promoter",
                    "Suitable for all crops",
                    "5kg bag"
                ],
                reviews: []
            },
            {
                id: 15,
                name: "Watering Can",
                category: "tools",
                subcategory: "irrigation",
                price: 349.99,
                image: "watering can.jpg",
                description: "Durable plastic watering can with adjustable spray nozzle. Perfect for garden and indoor plants.",
                features: [
                    "5-liter capacity",
                    "Adjustable spray nozzle",
                    "Ergonomic handle",
                    "UV resistant plastic"
                ],
                reviews: []
            },
            {
                id: 16,
                name: "Herbicide",
                category: "pesticides",
                subcategory: "chemical",
                price: 199.99,
                image: "Insect Soap Pesticides.jpg",
                description: "Effective herbicide for controlling broadleaf weeds in crops. Selective action protects your plants.",
                features: [
                    "Selective herbicide",
                    "Controls broadleaf weeds",
                    "Safe for crops",
                    "500ml concentrate"
                ],
                reviews: []
            },
            {
                id: 17,
                name: "Carrot Seeds",
                category: "seeds",
                subcategory: "vegetables",
                price: 79.99,
                image: "Carrot Seeds.jpg",
                description: "Sweet and crunchy carrot seeds. High yielding variety suitable for home gardens and commercial farming.",
                features: [
                    "Sweet and crunchy",
                    "High yielding",
                    "Rich in vitamins",
                    "70 days to maturity"
                ],
                reviews: []
            },
            {
                id: 18,
                name: "Bone Meal Fertilizer",
                category: "fertilizers",
                subcategory: "organic",
                price: 189.99,
                image: "Grow basket Fertiliser.jpg",
                description: "Organic bone meal fertilizer rich in phosphorus and calcium. Promotes strong root development and flowering.",
                features: [
                    "High phosphorus content",
                    "Promotes root growth",
                    "Organic source",
                    "3kg bag"
                ],
                reviews: []
            },
            {
                id: 19,
                name: "Sprinkler System",
                category: "tools",
                subcategory: "irrigation",
                price: 1299.99,
                image: "Pruning Secateur tool.jpg",
                description: "Automatic sprinkler system for efficient irrigation. Covers up to 500 square meters with adjustable spray patterns.",
                features: [
                    "Automatic operation",
                    "500 sq.m coverage",
                    "Adjustable spray patterns",
                    "Easy installation"
                ],
                reviews: []
            },
            {
                id: 20,
                name: "Fungicide",
                category: "pesticides",
                subcategory: "chemical",
                price: 249.99,
                image: "Neem Oil Pesticides.jpg",
                description: "Broad-spectrum fungicide for controlling fungal diseases in plants. Protects crops from various infections.",
                features: [
                    "Broad-spectrum action",
                    "Controls fungal diseases",
                    "Protective and curative",
                    "1-liter bottle"
                ],
                reviews: []
            }
        ];

        // Subcategories mapping
        const subcategories = {
            seeds: ["cereals", "vegetables", "fruits", "flowers"],
            fertilizers: ["organic", "chemical", "biofertilizers", "micronutrients"],
            tools: ["handtools", "powertools", "irrigation", "protection"],
            pesticides: ["organic", "chemical", "herbicides", "fungicides"]
        };

        // Cart state
        let cart = [];
        let currentProduct = null;
        let currentFilter = 'all';
        let currentSubcategory = 'all';
        let currentSort = 'default';
        let slideIndex = 1;

        // Initialize the app
        document.addEventListener('DOMContentLoaded', function() {
            loadFeaturedProducts();
            loadProducts();
            updateCartUI();
            startCarousel();
        });

        // View management
        function showView(viewName) {
            // Hide all views
            document.querySelectorAll('.view').forEach(view => {
                view.classList.add('hidden');
            });
            
            // Show the selected view
            document.getElementById(`${viewName}-view`).classList.remove('hidden');
            
            // Scroll to top
            window.scrollTo(0, 0);
            
            // Load specific content based on view
            if (viewName === 'products') {
                loadProducts();
            } else if (viewName === 'home') {
                loadFeaturedProducts();
            }
        }

        // Mobile menu toggle
        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        }

        // Cart sidebar toggle
        function toggleCart() {
            const cartSidebar = document.getElementById('cart-sidebar');
            cartSidebar.classList.toggle('translate-x-full');
            loadSidebarCartItems();
        }

        // Handle search keypress
        function handleSearchKeypress(event) {
            if (event.key === 'Enter') {
                searchProducts();
            }
        }

        // Carousel functions
        function startCarousel() {
            setInterval(() => {
                plusSlides(1);
            }, 5000);
        }

        function plusSlides(n) {
            showSlide(slideIndex += n);
        }

        function currentSlide(n) {
            showSlide(slideIndex = n);
        }

        function showSlide(n) {
            let slides = document.getElementsByClassName("carousel-slide");
            let dots = document.getElementsByClassName("carousel-dot");
            
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active");
            }
            
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove("active");
            }
            
            slides[slideIndex-1].classList.add("active");
            dots[slideIndex-1].classList.add("active");
        }

        // Load featured products
        function loadFeaturedProducts() {
            const featuredContainer = document.getElementById('featured-products');
            featuredContainer.innerHTML = '';
            
            // Get first 4 products as featured
            const featuredProducts = products.slice(0, 4);
            
            featuredProducts.forEach(product => {
                const productCard = createProductCard(product);
                featuredContainer.appendChild(productCard);
            });
        }

        // Load all products
        function loadProducts() {
            const productsGrid = document.getElementById('products-grid');
            productsGrid.innerHTML = '';
            
            let filteredProducts = products;
            
            // Apply filter
            if (currentFilter !== 'all') {
                filteredProducts = products.filter(product => product.category === currentFilter);
                
                // Show subcategories
                const subcategoriesContainer = document.getElementById('subcategories-container');
                const subcategoriesList = document.getElementById('subcategories-list');
                subcategoriesContainer.classList.remove('hidden');
                
                subcategoriesList.innerHTML = '';
                
                // Add "All" subcategory button
                const allBtn = document.createElement('button');
                allBtn.className = `subcategory-item px-3 py-1 rounded-lg ${currentSubcategory === 'all' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`;
                allBtn.textContent = 'All';
                allBtn.onclick = () => filterBySubcategory('all');
                subcategoriesList.appendChild(allBtn);
                
                // Add subcategory buttons
                subcategories[currentFilter].forEach(sub => {
                    const subBtn = document.createElement('button');
                    subBtn.className = `subcategory-item px-3 py-1 rounded-lg ${currentSubcategory === sub ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`;
                    subBtn.textContent = sub.charAt(0).toUpperCase() + sub.slice(1);
                    subBtn.onclick = () => filterBySubcategory(sub);
                    subcategoriesList.appendChild(subBtn);
                });
            } else {
                document.getElementById('subcategories-container').classList.add('hidden');
            }
            
            // Apply subcategory filter
            if (currentSubcategory !== 'all') {
                filteredProducts = filteredProducts.filter(product => product.subcategory === currentSubcategory);
            }
            
            // Apply sort
            if (currentSort === 'price-low') {
                filteredProducts.sort((a, b) => a.price - b.price);
            } else if (currentSort === 'price-high') {
                filteredProducts.sort((a, b) => b.price - a.price);
            } else if (currentSort === 'name') {
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            }
            
            filteredProducts.forEach(product => {
                const productCard = createProductCard(product);
                productsGrid.appendChild(productCard);
            });
        }

        // Create product card
        function createProductCard(product) {
            const card = document.createElement('div');
            card.className = 'product-card bg-white rounded-xl shadow overflow-hidden cursor-pointer';
            
            card.innerHTML = `
                <div onclick="showProductDetail(${product.id})">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
                        <button onclick="event.stopPropagation(); addToCart(${product.id})" class="add-to-cart">
                            <i class="fas fa-cart-plus"></i>
                        </button>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-lg mb-1">${product.name}</h3>
                        <p class="text-gray-600 text-sm mb-2 capitalize">${product.category} • ${product.subcategory}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-green-600 font-bold">₹${product.price.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            `;
            
            return card;
        }

        // Show product detail
        function showProductDetail(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            currentProduct = product;
            
            // Update detail view
            document.getElementById('detail-image').src = product.image;
            document.getElementById('detail-name').textContent = product.name;
            document.getElementById('detail-category').textContent = `${product.category.charAt(0).toUpperCase() + product.category.slice(1)} • ${product.subcategory.charAt(0).toUpperCase() + product.subcategory.slice(1)}`;
            document.getElementById('detail-price').textContent = `₹${product.price.toFixed(2)}`;
            document.getElementById('detail-description').textContent = product.description;
            
            // Update features list
            const featuresList = document.getElementById('detail-features');
            featuresList.innerHTML = '';
            product.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresList.appendChild(li);
            });
            
            // Load reviews
            loadProductReviews(product);
            
            // Load related products
            loadRelatedProducts(product.category, product.id);
            
            // Show detail view
            showView('product-detail');
        }

        // Load product reviews
        function loadProductReviews(product) {
            const reviewsList = document.getElementById('reviews-list');
            reviewsList.innerHTML = '';
            
            if (product.reviews.length === 0) {
                reviewsList.innerHTML = '<p class="text-gray-500 text-center py-4">No reviews yet. Be the first to review this product!</p>';
                return;
            }
            
            product.reviews.forEach((review, index) => {
                const reviewItem = document.createElement('div');
                reviewItem.className = 'review-item';
                reviewItem.style.animationDelay = `${index * 0.1}s`;
                
                // Generate star rating HTML
                let starsHtml = '';
                for (let i = 1; i <= 5; i++) {
                    if (i <= review.rating) {
                        starsHtml += '<i class="fas fa-star"></i>';
                    } else {
                        starsHtml += '<i class="far fa-star"></i>';
                    }
                }
                
                reviewItem.innerHTML = `
                    <div class="review-header">
                        <img src="${review.avatar}" alt="${review.name}" class="review-avatar">
                        <div class="review-info">
                            <div class="review-name">${review.name}</div>
                            <div class="review-date">${formatDate(review.date)}</div>
                        </div>
                        <div class="review-rating">
                            ${starsHtml}
                        </div>
                    </div>
                    <div class="review-content">
                        ${review.comment}
                    </div>
                `;
                
                reviewsList.appendChild(reviewItem);
            });
        }

        // Format date for display
        function formatDate(dateString) {
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            return new Date(dateString).toLocaleDateString(undefined, options);
        }

        // Load related products
        function loadRelatedProducts(category, excludeId) {
            const relatedContainer = document.getElementById('related-products');
            relatedContainer.innerHTML = '';
            
            const relatedProducts = products
                .filter(p => p.category === category && p.id !== excludeId)
                .slice(0, 3);
            
            relatedProducts.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card bg-white rounded-lg shadow overflow-hidden cursor-pointer';
                productCard.onclick = () => showProductDetail(product.id);
                
                productCard.innerHTML = `
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover">
                        <button onclick="event.stopPropagation(); addToCart(${product.id})" class="add-to-cart">
                            <i class="fas fa-cart-plus"></i>
                        </button>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold mb-1">${product.name}</h3>
                        <p class="text-green-600 font-bold">₹${product.price.toFixed(2)}</p>
                    </div>
                `;
                
                relatedContainer.appendChild(productCard);
            });
        }

        // Quantity controls
        function increaseQuantity() {
            const quantityInput = document.getElementById('quantity');
            quantityInput.value = parseInt(quantityInput.value) + 1;
        }

        function decreaseQuantity() {
            const quantityInput = document.getElementById('quantity');
            if (parseInt(quantityInput.value) > 1) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
            }
        }

        // Add to cart
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    ...product,
                    quantity: 1
                });
            }
            
            updateCartUI();
            showNotification(`${product.name} added to cart!`);
        }

        // Add to cart from detail view
        function addToCartFromDetail() {
            if (!currentProduct) return;
            
            const quantity = parseInt(document.getElementById('quantity').value);
            const existingItem = cart.find(item => item.id === currentProduct.id);
            
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({
                    ...currentProduct,
                    quantity: quantity
                });
            }
            
            updateCartUI();
            showNotification(`${currentProduct.name} added to cart!`);
        }

        // Update cart UI
        function updateCartUI() {
            // Update cart count
            const cartCount = document.getElementById('cart-count');
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
            
            // Update cart view if visible
            if (!document.getElementById('cart-view').classList.contains('hidden')) {
                loadCartItems();
            }
            
            // Update checkout view if visible
            if (!document.getElementById('checkout-view').classList.contains('hidden')) {
                loadCheckoutItems();
            }
        }

        // Load cart items
        function loadCartItems() {
            const cartItemsContainer = document.getElementById('cart-items');
            cartItemsContainer.innerHTML = '';
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p class="text-gray-500 text-center py-8">Your cart is empty</p>';
                updateCartTotals();
                return;
            }
            
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'flex items-center border-b pb-4 mb-4 cart-item-enter';
                
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
                    <div class="ml-4 flex-1">
                        <h3 class="font-semibold">${item.name}</h3>
                        <p class="text-gray-600">₹${item.price.toFixed(2)} × ${item.quantity}</p>
                    </div>
                    <div class="flex items-center">
                        <button onclick="updateCartItemQuantity(${item.id}, ${item.quantity - 1})" class="text-gray-500 hover:text-gray-700">
                            <i class="fas fa-minus-circle"></i>
                        </button>
                        <span class="mx-2">${item.quantity}</span>
                        <button onclick="updateCartItemQuantity(${item.id}, ${item.quantity + 1})" class="text-gray-500 hover:text-gray-700">
                            <i class="fas fa-plus-circle"></i>
                        </button>
                        <button onclick="removeFromCart(${item.id})" class="ml-4 text-red-500 hover:text-red-700">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `;
                
                cartItemsContainer.appendChild(cartItem);
            });
            
            updateCartTotals();
        }

        // Load sidebar cart items
        function loadSidebarCartItems() {
            const sidebarCartItems = document.getElementById('sidebar-cart-items');
            sidebarCartItems.innerHTML = '';
            
            if (cart.length === 0) {
                sidebarCartItems.innerHTML = '<p class="text-gray-500 text-center py-8">Your cart is empty</p>';
                updateSidebarCartTotal();
                return;
            }
            
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'flex items-center mb-4 pb-4 border-b';
                
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-cover rounded">
                    <div class="ml-3 flex-1">
                        <h4 class="font-semibold text-sm">${item.name}</h4>
                        <p class="text-gray-600 text-sm">₹${item.price.toFixed(2)} × ${item.quantity}</p>
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700">
                        <i class="fas fa-times"></i>
                    </button>
                `;
                
                sidebarCartItems.appendChild(cartItem);
            });
            
            updateSidebarCartTotal();
        }

        // Load checkout items
        function loadCheckoutItems() {
            const checkoutItemsContainer = document.getElementById('checkout-items');
            checkoutItemsContainer.innerHTML = '';
            
            if (cart.length === 0) {
                checkoutItemsContainer.innerHTML = '<p class="text-gray-500">Your cart is empty</p>';
                updateCheckoutTotals();
                return;
            }
            
            cart.forEach(item => {
                const checkoutItem = document.createElement('div');
                checkoutItem.className = 'flex justify-between mb-2';
                
                checkoutItem.innerHTML = `
                    <span>${item.name} × ${item.quantity}</span>
                    <span>₹${(item.price * item.quantity).toFixed(2)}</span>
                `;
                
                checkoutItemsContainer.appendChild(checkoutItem);
            });
            
            updateCheckoutTotals();
        }

        // Update cart totals
        function updateCartTotals() {
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const shipping = subtotal > 0 ? 99.00 : 0;
            const total = subtotal + shipping;
            
            document.getElementById('cart-subtotal').textContent = `₹${subtotal.toFixed(2)}`;
            document.getElementById('cart-total').textContent = `₹${total.toFixed(2)}`;
        }

        // Update sidebar cart total
        function updateSidebarCartTotal() {
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const shipping = subtotal > 0 ? 99.00 : 0;
            const total = subtotal + shipping;
            
            document.getElementById('sidebar-cart-total').textContent = `₹${total.toFixed(2)}`;
        }

        // Update checkout totals
        function updateCheckoutTotals() {
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const shipping = subtotal > 0 ? 99.00 : 0;
            const tax = subtotal * 0.05; // 5% tax
            const total = subtotal + shipping + tax;
            
            document.getElementById('checkout-subtotal').textContent = `₹${subtotal.toFixed(2)}`;
            document.getElementById('checkout-tax').textContent = `₹${tax.toFixed(2)}`;
            document.getElementById('checkout-total').textContent = `₹${total.toFixed(2)}`;
        }

        // Update cart item quantity
        function updateCartItemQuantity(productId, newQuantity) {
            if (newQuantity <= 0) {
                removeFromCart(productId);
                return;
            }
            
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity = newQuantity;
                updateCartUI();
            }
        }

        // Remove from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartUI();
            showNotification('Item removed from cart');
        }

        // Filter products by category
        function filterByCategory(category) {
            currentFilter = category;
            currentSubcategory = 'all';
            
            // Update filter buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('bg-green-500', 'text-white');
                btn.classList.add('bg-gray-200', 'text-gray-800');
            });
            
            event.target.classList.remove('bg-gray-200', 'text-gray-800');
            event.target.classList.add('bg-green-500', 'text-white');
            
            loadProducts();
            showView('products');
        }

        // Filter products by subcategory
        function filterBySubcategory(subcategory) {
            currentSubcategory = subcategory;
            loadProducts();
        }

        // Sort products
        function sortProducts() {
            const sortSelect = document.getElementById('sort-select');
            currentSort = sortSelect.value;
            loadProducts();
        }

        // Search products
        function searchProducts() {
            const searchTerm = document.getElementById('search-input').value.toLowerCase();
            
            if (!searchTerm) {
                loadProducts();
                return;
            }
            
            const productsGrid = document.getElementById('products-grid');
            productsGrid.innerHTML = '';
            
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) || 
                product.category.toLowerCase().includes(searchTerm) ||
                product.subcategory.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm)
            );
            
            if (filteredProducts.length === 0) {
                productsGrid.innerHTML = '<p class="text-gray-500 col-span-full text-center py-8">No products found</p>';
                return;
            }
            
            filteredProducts.forEach(product => {
                const productCard = createProductCard(product);
                productsGrid.appendChild(productCard);
            });
            
            showView('products');
        }

        // Show checkout
        function showCheckout() {
            if (cart.length === 0) {
                showNotification('Your cart is empty');
                return;
            }
            
            showView('checkout');
        }

        // Place order
        function placeOrder() {
            const form = document.getElementById('checkout-form');
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }
            
            // In a real application, you would send the order to a server here
            showNotification('Order placed successfully! Thank you for your purchase.');
            
            // Clear cart
            cart = [];
            updateCartUI();
            
            // Show home view after a delay
            setTimeout(() => {
                showView('home');
            }, 2000);
        }

        // Show notification
        function showNotification(message) {
            const notificationContainer = document.getElementById('notification-container');
            
            const notification = document.createElement('div');
            notification.className = 'notification bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg mb-2';
            notification.textContent = message;
            
            notificationContainer.appendChild(notification);
            
            // Remove notification after animation completes
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }

        // Handle contact form submission
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Message sent successfully! We will get back to you soon.');
            this.reset();
        });
    