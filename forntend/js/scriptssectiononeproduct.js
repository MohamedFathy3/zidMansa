function showTab(tabId) {
    // إزالة الكلاس 'active' من جميع الأزرار
    const buttons = document.querySelectorAll('.tab-buttons button');
    buttons.forEach(button => button.classList.remove('active'));

    // إخفاء جميع القوائم
    const productLists = document.querySelectorAll('.product-list');
    productLists.forEach(list => list.classList.remove('active'));

    // إظهار القائمة المحددة
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.classList.add('active');
    }

    // تمييز الزر المحدد
    const tabButton = document.querySelector(`button[onclick="showTab('${tabId}')"]`);
    if (tabButton) {
        tabButton.classList.add('active');
    }
}
