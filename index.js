const mainTab = document.getElementById('main');
const historyTab = document.getElementById('history');
const supportTab = document.getElementById('support');
const aboutTab = document.getElementById('about');
const mainPage = document.getElementById('main-page');
const historyPage = documet.getElementById('history-page');
const supportPage = document.getElementById('support-page');
const aboutPage = document.getElementById('about-page');

function tabClickHandler(tabName) {
    if (tabName === 'main') {
        mainPage.classList.add('current');
        mainPage.classList.remove('hidden');
        mainTab.classList.add('active');
        historyPage.classList.add('hidden');
        supportPage.classList.add('hidden');
        aboutPage.classList.add('hidden');
        historyTab.classList.remove('active');
        supportTab.classList.remove('active');
        aboutTab.classList.remove('active');
    } else if (tabName == 'history') {
        mainPage.classList.remove('current');
        mainPage.classList.add('hidden');
        mainTab.classList.remove('active');
        historyPage.classList.remove('hidden');
        historyPage.classList.add('current');
        supportPage.classList.add('hidden');
        aboutPage.classList.add('hidden');
        historyTab.classList.add('active');
        supportTab.classList.remove('active');
        aboutTab.classList.remove('active');
    } else if (tabName === 'support') {
        mainPage.classList.remove('current');
        mainPage.classList.add('hidden');
        mainTab.classList.remove('active');
        historyPage.classList.add('hidden');
        historyPage.classList.remove('current');
        supportPage.classList.remove('hidden');
        supportPage.classList.add('current');
        aboutPage.classList.add('hidden');
        historyTab.classList.remove('active');
        supportTab.classList.add('active');
        aboutTab.classList.remove('active');
    } else if (tabName === 'about') {
        mainPage.classList.remove('current');
        mainPage.classList.add('hidden');
        mainTab.classList.remove('active');
        historyPage.classList.add('hidden');
        historyPage.classList.remove('current');
        supportPage.classList.add('hidden');
        supportPage.classList.remove('current');
        aboutPage.classList.remove('hidden');
        aboutPage.classList.add('current');
        historyTab.classList.remove('active');
        supportTab.classList.remove('active');
        aboutTab.classList.add('active');
    }
}

mainTab.addEventListener('click', function() {
    tabClickHandler('main');
});
historyTab.addEventListener('click', function () {
    tabClickHandler('history');
});
supportTab.addEventListener('click', function () {
    tabClickHandler('support');
});
aboutTab.addEventListener('click', function () {
    tabClickHandler('about');
});