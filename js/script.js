// بنمسك الزرار عن طريق الـ id بتاعه
const themeBtn = document.getElementById("theme-btn");

// بنخلي الزرار يستنى ضغطة الماوس (click)
themeBtn.addEventListener("click", function () {
    // بنضيف أو نشيل كلاس dark من الـ body مع كل ضغطة
    document.body.classList.toggle("dark");
});