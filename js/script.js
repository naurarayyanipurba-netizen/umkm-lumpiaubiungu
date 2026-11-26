document.addEventListener("DOMContentLoaded", function () {
    // 1. Set Otomatis Tahun di Footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Tombol Back to Top
    const backToTopBtn = document.getElementById("backToTop");
    
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });

    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // 3. Efek Interaktif Tombol Order (Mengarahkan langsung ke WhatsApp dengan pesan produk)
    const orderButtons = document.querySelectorAll(".btn-order, .cta-card .btn-pink");
    orderButtons.forEach(button => {
        button.addEventListener("click", function (e) {
            const productName = this.getAttribute("data-product");
            if (productName) {
                e.preventDefault();
                const phone = "6285761030032";
                const message = encodeURIComponent(`Halo, saya ingin memesan ${productName}. Apakah masih tersedia?`);
                window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
            }
        });
    });
});
