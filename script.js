window.onscroll = function() {
        var topDiv = document.querySelector('.top_div');
        if (window.scrollY > 0) {
        topDiv.classList.add('shrink');
        } else {
        topDiv.classList.remove('shrink');
        }
};
    

document.getElementById('menu-toggle').addEventListener('click', function () {
    var menuItems = document.getElementById('menu-items');
    menuItems.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", function () {
    const eventsBox = document.querySelector('.events-box');
    const eventDetails = document.querySelectorAll('.event-details');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    let currentIndex = 0;
    const itemsPerPage = 3;
    const totalItems = eventDetails.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    function updateDisplay() {
        eventDetails.forEach((item, index) => {
            if (index >= currentIndex * itemsPerPage && index < (currentIndex + 1) * itemsPerPage) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }

    function goToPage(pageIndex) {
        if (pageIndex >= 0 && pageIndex < totalPages) {
            currentIndex = pageIndex;
            updateDisplay();
        }
    }

    prevButton.addEventListener('click', () => {
        goToPage(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        goToPage(currentIndex + 1);
    });

    updateDisplay();
});

