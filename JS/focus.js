// Keep clicked link item in navigation focused
// even after click and remove the focus if
// another element is clicked
const nav_itemElList = document.querySelectorAll('.nav-item');

nav_itemElList.forEach(nav_item => {
    nav_item.addEventListener('click', () => {
        // Check if the previous nav item has the class nav-item-focused 
        // If it does have the nav-item-focused class, then remove it
        // Else, add the nav-item-focused class
        document.querySelector('.nav-item-focused')?.classList.remove('nav-item-focused');
        nav_item.classList.add('nav-item-focused');
    });
});