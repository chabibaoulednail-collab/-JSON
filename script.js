
/* =================================
   التنقل بين صفحات الموقع
================================= */

function showPage(pageId, button) {
    const pages = document.querySelectorAll(".page");
    const selectedPage = document.getElementById(pageId);
  
    if (!selectedPage) return;
  
    pages.forEach(page => {
      page.classList.remove("active");
    });
  
    selectedPage.classList.add("active");
  
    document.querySelectorAll(".nav-btn").forEach(btn => {
      btn.classList.remove("active");
    });
  
    if (button) {
      button.classList.add("active");
    } else {
      document.querySelectorAll(".nav-btn").forEach(btn => {
        if (btn.textContent.trim() === "الرئيسية") {
          btn.classList.add("active");
        }
      });
    }
  
    document.getElementById("nav").classList.remove("open");
  
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  }
  
  /* =================================
     قائمة الهاتف
  ================================= */
  
  function toggleMenu() {
    document.getElementById("nav").classList.toggle("open");
  }
  
  /* =================================
     معلومات الأصناف
  ================================= */
  
  const categories = {
    u15: {
      name: "فئة U15",
      photo: "U15.jpg"
    },
  
    u17: {
      name: "فئة U17",
      photo: "U17.jpg"
    },
  
    u20: {
      name: "فئة U20",
      photo: "U20.jpg"
    },
  
    senior: {
      name: "فئة الأكابر",
      photo: "U25.jpg"
    }
  };
  
  /* مراكز اللاعبين */
  
  const positions = [
    "حارس مرمى",
    "مدافع",
    "مدافع",
    "مدافع",
    "مدافع",
    "وسط ميدان",
    "وسط ميدان",
    "وسط ميدان",
    "وسط ميدان",
    "وسط ميدان",
    "جناح أيمن",
    "جناح أيسر",
    "مهاجم",
    "مهاجم",
    "مدافع",
    "وسط ميدان",
    "حارس مرمى",
    "مهاجم",
    "مدافع",
    "وسط ميدان"
  ];
  
  /* أسماء وصور اللاعبين */
  
  const players = {};
  
  Object.keys(categories).forEach(category => {
  
    players[category] = [];
  
    for (let i = 1; i <= 20; i++) {
  
      const number = String(i).padStart(2, "0");
  
      players[category].push({
        name: "اسم اللاعب " + number,
        position: positions[i - 1],
        photo: `images/${category}-${number}.jpg`
      });
  
    }
  
  });
  
  /* =================================
     حفظ محتوى الأصناف لتجنب إعادة بنائه
  ================================= */
  
  const categoryCache = {};
  
  /* =================================
     عرض الصنف المختار
  ================================= */
  
  function showCategory(categoryId) {
  
    const category = categories[categoryId];
  
    if (!category) return;
  
    const content = document.getElementById("category-content");
  
    if (!content) return;
  
    // إذا كان الصنف معروضاً من قبل نستعمل نفس المحتوى
    if (categoryCache[categoryId]) {
  
      content.innerHTML = categoryCache[categoryId];
  
    } else {
  
      const categoryPlayers = players[categoryId];
  
      const html = `
        <h2 class="squad-title">${category.name}</h2>
  
        <img
          class="group-photo"
          src="${category.photo}"
          alt="الصورة الجماعية ${category.name}"
          loading="lazy"
        >
  
        <h2 class="players-title">قائمة اللاعبين</h2>
  
        <div class="players-grid">
  
          ${categoryPlayers.map(player => `
  
            <div class="player-card">
  
              <img
                src="${player.photo}"
                alt="${player.name}"
                loading="lazy"
              >
  
              <h3>${player.name}</h3>
  
              <p>${player.position}</p>
  
            </div>
  
          `).join("")}
  
        </div>
      `;
  
      categoryCache[categoryId] = html;
      content.innerHTML = html;
  
    }
  
    // التوقف عند بداية قائمة الصنف دون إعادة تحميل الصفحة
    content.scrollIntoView({
      behavior: "auto",
      block: "start"
    });
  
  }
  
  /* =================================
     معرض الصور
  ================================= */
  
  const gallery = [];
  
  for (let i = 1; i <= 18; i++) {
  
    gallery.push({
      photo: `images/gallery${i}.jpg`,
      title: `صورة من نشاطات النادي ${i}`
    });
  
  }
  
  const galleryContainer = document.getElementById("gallery-grid");
  
  galleryContainer.innerHTML = gallery.map(item => `
  
    <img
      src="${item.photo}"
      alt="${item.title}"
      loading="lazy"
    >
  
  `).join("");
  
  /* =================================
     أخبار النادي
  ================================= */
  
  const news = [
  
    {
      photo: "images/news1.jpg",
      title: "أخبار شبيبة أولاد نايل",
      description: "تابعوا آخر أخبار ومستجدات النادي."
    },
  
    {
      photo: "images/news2.jpg",
      title: "مباريات النادي",
      description: "كل جديد حول مباريات مختلف الأصناف."
    },
  
    {
      photo: "images/news3.jpg",
      title: "تدريبات الفريق",
      description: "صور من تدريبات وتحضيرات اللاعبين."
    },
  
    {
      photo: "images/news4.jpg",
      title: "أصناف النادي",
      description: "الاهتمام بالمواهب الشابة وتكوين اللاعبين."
    },
  
    {
      photo: "images/news5.jpg",
      title: "نشاطات النادي",
      description: "أهم النشاطات والفعاليات الرياضية."
    },
  
    {
      photo: "images/news6.jpg",
      title: "إنجازات النادي",
      description: "ذكريات وأهم محطات شبيبة أولاد نايل."
    }
  
  ];
  
  const newsContainer = document.getElementById("news-grid");
  
  newsContainer.innerHTML = news.map(item => `
  
    <article class="news-card">
  
      <img
        src="${item.photo}"
        alt="${item.title}"
        loading="lazy"
      >
  
      <div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
  
    </article>
  
  `).join("");
  
  /* =================================
     تكبير جميع الصور عند الضغط عليها
  ================================= */
  
  const lightbox = document.getElementById("image-lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");
  
  function openLightbox(image) {
  
    if (!image || !image.src) return;
  
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt || "صورة مكبرة";
  
    lightboxCaption.textContent = image.alt || "";
  
    lightbox.classList.add("show");
    document.body.classList.add("lightbox-open");
  
  }
  
  function closeLightbox() {
  
    lightbox.classList.remove("show");
    document.body.classList.remove("lightbox-open");
  
    lightboxImage.src = "";
  
  }
  
  /* الضغط على أي صورة في الموقع */
  
  document.addEventListener("click", function(event) {
  
    const image = event.target.closest("img");
  
    if (!image) return;
  
    if (
      image.closest("#image-lightbox") ||
      image.classList.contains("no-zoom")
    ) {
      return;
    }
  
    if (image.closest("a")) return;
  
    if (image.closest("button")) return;
  
    openLightbox(image);
  
  });
  
  /* الضغط خارج الصورة لإغلاقها */
  
  lightbox.addEventListener("click", function(event) {
  
    if (
      event.target === lightbox ||
      event.target === lightboxImage ||
      event.target === lightboxCaption
    ) {
      closeLightbox();
    }
  
  });
  
  /* الإغلاق بزر Escape */
  
  document.addEventListener("keydown", function(event) {
  
    if (event.key === "Escape") {
      closeLightbox();
    }
  
  });
  