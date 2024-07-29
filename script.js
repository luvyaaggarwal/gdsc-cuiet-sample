    window.onscroll = function() {
        var topDiv = document.querySelector('.top_div');
        if (window.scrollY > 0) {
        topDiv.classList.add('shrink-blue');
        } else {
        topDiv.classList.remove('shrink-blue');
        }
    };
document.getElementById('menu-toggle').addEventListener('click', function () {
    var menuItems = document.getElementById('menu-items');
    menuItems.classList.toggle('active');
});