const accrodionContent = document.querySelectorAll(".accordion-content");

// Tüm öğeleri başlangıçta kapalı yap
accrodionContent.forEach(item => {
    let description = item.querySelector(".description");
    description.style.height = "0px";
});

accrodionContent.forEach((item, index) => {
    let header = item.querySelector(".header");
    header.addEventListener("click", function () {
        // Tıklanan öğenin açık olup olmadığını kontrol et
        const isOpen = item.classList.contains("open");

        // Tüm öğeleri kapat
        accrodionContent.forEach(item => {
            item.classList.remove("open");
            let description = item.querySelector(".description");
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-chevron-down", "fa-chevron-right");
        });

        // Tıklanan öğe açıksa kapat, değilse aç
        if (!isOpen) {
            item.classList.add("open");
            let description = item.querySelector(".description");
            description.style.height = `${description.scrollHeight}px`;
            item.querySelector("i").classList.replace("fa-chevron-right", "fa-chevron-down");
        }
    });
});
