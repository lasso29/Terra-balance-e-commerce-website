// Run all code after DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {
  // ====== PRODUCT RENDERING ======
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
    }
  ];

  const grid = document.getElementById('product-grid');
  if (grid) {
    featuredProducts.forEach((product, index) => {
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

  // ====== HERO CAROUSEL AUTO-SLIDE ======
  const slides = document.querySelectorAll('.carousel-slide');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? '1' : '0';
      slide.style.zIndex = i === index ? '1' : '0';
    });
    current = index;
  }

  function nextSlide() {
    const next = (current + 1) % slides.length;
    showSlide(next);
  }

  if (slides.length) {
    setInterval(nextSlide, 6000); // Every 6 seconds
    showSlide(0); // Start on first
  }

  // ====== SLIDE-UP SECTIONS ON SCROLL ======
  const sections = document.querySelectorAll('.slide-up');
  const options = { threshold: 0.2 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, options);

  sections.forEach(section => observer.observe(section));

  // ====== MOBILE MENU TOGGLE ======
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      console.log('Menu toggle clicked');
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

const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
