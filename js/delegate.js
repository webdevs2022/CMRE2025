document.addEventListener("DOMContentLoaded", function () {
    const delegates = document.querySelectorAll(".card-container .card");
    const loadMoreBtn = document.getElementById("load-more-btn");
    const chunkSize = 6;
    let visibleCount = 6;

    // 🔹 Pehle sirf required delegates ko show karo
    function showInitialDelegates() {
        delegates.forEach((card, index) => {
            if (index < visibleCount) {
                card.style.display = "flex";
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.transitionDelay = `${index * 0.2}s`;
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100 * index);
            } else {
                card.style.display = "none";
            }
        });
        updateButtonPosition();
    }

    showInitialDelegates();

    // 🔹 Button ko last delegate ke neeche adjust karna
    function updateButtonPosition() {
        setTimeout(() => {
            let lastVisibleDelegate = delegates[visibleCount - 1];
            if (lastVisibleDelegate) {
                loadMoreBtn.style.position = "relative"; 
                loadMoreBtn.style.marginTop = "20px";
                loadMoreBtn.style.display = "block";
            }
        }, 500);
    }

    // 🔹 "Load More" button click event
    loadMoreBtn.addEventListener("click", function () {
        if (visibleCount >= delegates.length) return;

        loadMoreBtn.classList.add("loading");

        setTimeout(() => {
            let hiddenDelegates = 0;

            for (let i = visibleCount; i < visibleCount + chunkSize && i < delegates.length; i++) {
                delegates[i].style.display = "inherit";
                delegates[i].style.opacity = '0';
                delegates[i].style.transform = 'translateY(30px)';
                delegates[i].style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                delegates[i].style.transitionDelay = `${hiddenDelegates * 0.2}s`;
                setTimeout(() => {
                    delegates[i].style.opacity = '1';
                    delegates[i].style.transform = 'translateY(0)';
                }, 300 * hiddenDelegates);

                hiddenDelegates++;
            }

            visibleCount += hiddenDelegates;

            loadMoreBtn.classList.remove("loading");

            // 🔹 Agar saare delegates show ho gaye to button chhupa do
            if (visibleCount >= delegates.length) {
                setTimeout(() => {
                    loadMoreBtn.style.display = "none";
                }, 1000);
            } else {
                updateButtonPosition();
            }
        }, 1500);
    });
});