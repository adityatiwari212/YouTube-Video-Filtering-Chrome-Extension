// Function to check if a video matches user preferences
function doesVideoMatchPreferences(videoTitle, preferences) {
  return preferences.some(preference => videoTitle.toLowerCase().includes(preference.toLowerCase()));
}

// Function to check if a video contains blocked keywords
function doesVideoContainBlockedKeywords(videoTitle, blockedKeywords) {
  return blockedKeywords.some(keyword => videoTitle.toLowerCase().includes(keyword.toLowerCase()));
}

function filterVideos() {
  chrome.storage.local.get(['preferences', 'blockedKeywords'], (result) => {
    const preferences = result.preferences || [];
    const blockedKeywords = result.blockedKeywords || [];

    const content = document.querySelector('#contents');
    const videoElements = content.querySelectorAll('ytd-rich-item-renderer');

    videoElements.forEach((video) => {
      const titleElement = video.querySelector('#video-title');
      const title = titleElement ? titleElement.textContent : '';

      const isValid = !doesVideoContainBlockedKeywords(title, blockedKeywords) || 
                      doesVideoMatchPreferences(title, preferences);

      if (!isValid) {
        video.style.display = 'none';
      } else {
        video.style.display = ''; // Ensure valid videos are visible
      }
    });
  });
}

// Observe changes to dynamically loaded videos (infinite scrolling)
const observer = new MutationObserver(filterVideos);
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Initial check when the page loads
filterVideos();
