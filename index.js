// const mainTab = document.getElementById('main');
// const historyTab = document.getElementById('history');
// const supportTab = document.getElementById('support');
// const aboutTab = document.getElementById('about');
// const mainPage = document.getElementById('main-page');

// function tabClickHandler(tabName) {
//     let htmlPageName = 'Public/main.html';
//     if (tabName === 'main') {
//         mainTab.classList.add('active');
//         historyTab.classList.remove('active');
//         supportTab.classList.remove('active');
//         aboutTab.classList.remove('active');
//     } else if (tabName == 'history') {
//         mainTab.classList.remove('active');
//         historyTab.classList.add('active');
//         supportTab.classList.remove('active');
//         aboutTab.classList.remove('active');
//         htmlPageName = 'Public/history.html';
//     } else if (tabName === 'support') {
//         mainTab.classList.remove('active');
//         historyTab.classList.remove('active');
//         supportTab.classList.add('active');
//         aboutTab.classList.remove('active');
//         htmlPageName = 'Public/support.html';
//     } else if (tabName === 'about') {
//         mainTab.classList.remove('active');
//         historyTab.classList.remove('active');
//         supportTab.classList.remove('active');
//         aboutTab.classList.add('active');
//         htmlPageName = 'Public/about.html';
//     }
//     fetch(htmlPageName)
//         .then(response => response.text())
//         .then(html => {
//             mainPage.innerHTML = html;
//         });
// }

// mainTab.addEventListener('click', function() {
//     tabClickHandler('main');
// });
// historyTab.addEventListener('click', function () {
//     tabClickHandler('history');
// });
// supportTab.addEventListener('click', function () {
//     tabClickHandler('support');
// });
// aboutTab.addEventListener('click', function () {
//     tabClickHandler('about');
// });