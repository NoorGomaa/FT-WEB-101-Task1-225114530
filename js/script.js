// 1. زرار الوضع الليلي
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

// 2. الترحيب بالزائر والتحقق من الإيميل
const contactForm = document.getElementById("contact-form");
const greetingMsg = document.getElementById("greeting-msg");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const visitorName = document.getElementById("visitor-name").value.trim();
    const visitorEmail = document.getElementById("email").value.trim();

    if (visitorEmail === "") {
        greetingMsg.textContent = "Please enter your email address first!";
        return;
    }

    const displayName = visitorName !== "" ? visitorName : "Visitor";
    greetingMsg.textContent = "Hello, " + displayName + "! Thanks for visiting.";
});

// 3. تكبير الصورة الشخصية عند الضغط عليها
const profileImg = document.getElementById("profile-img");

profileImg.addEventListener("click", function () {
    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";

    const largeImg = document.createElement("img");
    largeImg.src = profileImg.src;
    largeImg.alt = profileImg.alt;
    largeImg.className = "lightbox-img";

    overlay.appendChild(largeImg);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", function () {
        overlay.remove();
    });
});

// 4. تحريك طبقات الخلفية بنعومة عند السكرول
window.addEventListener("scroll", function () {
    document.documentElement.style.setProperty("--scroll-y", window.scrollY + "px");
});