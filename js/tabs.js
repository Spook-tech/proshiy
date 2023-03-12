document.addEventListener('DOMContentLoaded', function() { 
   // TABS
   const tabsArray = document.querySelectorAll('[data-tab]');
   const contentArray = document.querySelectorAll('[id^="tab-"]');

   if (tabsArray.length > 0) {
      tabsArray.forEach(function(tab) {
         tab.addEventListener('click', function() {
            const tabText = document.querySelector(`#tab-${tab.dataset.tab}`);
            if (!tabText) return;

            clearActiveTab(tabsArray);
            setTabAction(tab, tabText);
         });
      });

      function setTabAction(tab, text) { 
         tab.classList.toggle('_active');
         text.classList.add('_active');
         text.style.height = parseInt(text.dataset.height) + 'px';
      }

      function clearActiveTab(tabs) {
         tabs.forEach(function(tab) {
            tab.classList.remove('_active');
         });
         contentArray.forEach(function(content) {
            content.classList.remove('_active');
         });
      }
   }

});
