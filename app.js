// select elements
const toggleBtn = document.querySelector('.toggle');
const closeSideBar = document.querySelector('.cross');
const sideMenu = document.querySelector('aside');

window.addEventListener('DOMContentLoaded', () => {
  showSideBarMenu();
  closeSideBarMenu();
});
// toggle sideBar
const showSideBarMenu = () => {
  toggleBtn.addEventListener('click', () => {
    sideMenu.classList.add('show-sideBar');
  });
};
const closeSideBarMenu = () => {
  closeSideBar.addEventListener('click', () => {
    sideMenu.classList.remove('show-sideBar');
  });
};
