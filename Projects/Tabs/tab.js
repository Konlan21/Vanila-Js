document.addEventListener('DOMContentLoaded', () => {
    const defaultTabContent = document.getElementById('history');
    defaultTabContent.classList.add('active'); // Remove dot from class name

    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            displaySelectedTabContent(tabName, tabs);
        });
    });
});

function displaySelectedTabContent(tabName, tabs) {
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabContents.forEach(tabContent => {
        const tabContentId = tabContent.id;
        if (tabContentId === tabName) {
            tabContent.classList.add('active');
        } else {
            tabContent.classList.remove('active');
        }
    });

    tabs.forEach(tab => {
        const dataTab = tab.getAttribute('data-tab');
        if (dataTab === tabName) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}
