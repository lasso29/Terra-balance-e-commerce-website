document.addEventListener('DOMContentLoaded', () => {
  // ✅ Clear cart on homepage
  localStorage.removeItem('cart');

  // ====== FEATURED PRODUCTS (12 items) ======
  const featuredProducts = [
    {
      name: 'Organic Plantain Bunch',
      price: 1500,
      category: 'Produce',
      description: 'Freshly harvested plantain, naturally ripened.',
      image: './images/plaintain.webp'
    },
    {
      name: 'Goat Milk (1L)',
      price: 2000,
      category: 'Dairy',
      description: 'Creamy and nutritious milk from grass-fed goats.',
      image: './images/goat-milk.jpg'
    },
    {
      name: 'Live Chicken',
      price: 3500,
      category: 'Livestock',
      description: 'Healthy local chicken raised without antibiotics.',
      image: './images/chicken-rear.jpg'
    },
    {
      name: 'Dried Snail (500g)',
      price: 2500,
      category: 'Protein',
      description: 'Sun-dried, crunchy snails packed with nutrients.',
      image: './images/dried-snail.jpg'
    },
    {
      name: 'Fresh Cassava (10kg)',
      price: 1800,
      category: 'Roots',
      description: 'Ready to be processed into garri, fufu, or starch.',
      image: './images/fresh-cassava.webp'
    },
    {
      name: 'Smoked Catfish',
      price: 3000,
      category: 'Seafood',
      description: 'Delicious, hand-smoked catfish with rich flavor.',
      image: './images/smoked-catfish.jpg'
    },
    {
      name: 'Organic Corn (10kg)',
      price: 1200,
      category: 'Produce',
      description: 'Freshly harvested organic corn with high yield potential.',
      image: './images/organic-corn.png'
    },
    {
      name: 'Pig Feed (20kg)',
      price: 5000,
      category: 'Livestock',
      description: 'Nutrient-rich feed for healthy pig growth.',
      image: './images/pig-feed.jpg'
    },
    {
      name: 'Fresh Eggs (12 pack)',
      price: 800,
      category: 'Poultry',
      description: 'Farm fresh eggs delivered from healthy layers.',
      image: './images/eggs.webp'
    },
    {
      name: 'Cassava Flour (2kg)',
      price: 1700,
      category: 'Flour',
      description: 'Smooth and fine cassava flour for local meals.',
      image: './images/cassava-flour.webp'
    },
    {
      name: 'Chicken Meat (1kg)',
      price: 2200,
      category: 'Meat',
      description: 'Well-cut fresh chicken meat ready to cook.',
      image: './images/chicken-meat.png'
    },
    {
      name: 'Plantain Chips (500g)',
      price: 1000,
      category: 'Snacks',
      description: 'Crispy plantain chips with a touch of salt.',
      image: './images/plantain-chips.jpg'
    }
  ];

  const grid = document.getElementById('product-grid');
  const searchInputs = document.querySelectorAll('#search-input');

  // ====== RENDER PRODUCTS ======
  function renderProducts(products) {
    if (!grid) return;

    grid.innerHTML = '';
    if (products.length === 0) {
      grid.innerHTML = '<p class="text-center text-gray-500 col-span-full">No products found.</p>';
      return;
    }

    products.forEach((product, index) => {
      const card = document.createElement('div');
      card.className = "bg-white rounded shadow-md overflow-hidden hover:shadow-lg transition duration-300";
      card.innerHTML = `
        <a href="products.html?id=${index}">
          <img src="${product.image}" alt="${product.name}" class="w-full h-56 object-cover">
          <div class="p-4">
            <span class="text-xs text-white bg-green-600 px-2 py-1 rounded-full">${product.category}</span>
            <h3 class="mt-2 text-lg font-bold">${product.name}</h3>
            <p class="text-gray-600 text-sm mb-2">${product.description}</p>
            <p class="text-green-700 font-semibold text-lg">₦${product.price.toLocaleString()}</p>
            <p class="text-sm text-gray-400 mt-2">Click to view more</p>
          </div>
        </a>
      `;
      grid.appendChild(card);
    });
  }

  // Initial render (show only 12)
  renderProducts(featuredProducts.slice(0, 12));

  // ====== SEARCH FUNCTION ======
  searchInputs.forEach(input => {
    input.addEventListener('input', () => {
      const term = input.value.toLowerCase();
      const filtered = featuredProducts.filter(product =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
      );
      renderProducts(filtered.slice(0, 12)); // Still limit to 12
    });
  });

  // ====== HERO CAROUSEL ======
  const slides = document.querySelectorAll('.carousel-slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? '1' : '0';
      slide.style.zIndex = i === index ? '1' : '0';
    });
    currentSlide = index;
  }

  function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
  }

  if (slides.length) {
    setInterval(nextSlide, 6000);
    showSlide(0);
  }

  // ====== SCROLL-IN ANIMATION ======
  const sections = document.querySelectorAll('.slide-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));

  // ====== MOBILE MENU TOGGLE ======
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });
  }

  // ====== ACCOUNT MENU TOGGLE ======
  const accountBtn = document.getElementById('account-btn');
  const accountMenu = document.getElementById('account-menu');

  if (accountBtn && accountMenu) {
    accountBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      accountMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!accountBtn.contains(e.target)) {
        accountMenu.classList.add('hidden');
      }
    });
  }
});
