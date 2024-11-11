// Initialize preferences with default value if none are set.
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.get(['preferences'], (result) => {
      if (!result.preferences) {
        chrome.storage.local.set({ preferences: [] });  // Default: no preferences set
      }
    });
  });
  
  // Listen for preference updates (could be done via popup UI later)
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'updatePreferences') {
      chrome.storage.local.set({ preferences: message.preferences }, () => {
        sendResponse({ status: 'success' });
      });
      return true; // Asynchronous response
    }
  });
  