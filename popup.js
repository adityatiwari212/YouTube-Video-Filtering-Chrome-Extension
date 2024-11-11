document.addEventListener('DOMContentLoaded', () => {
  // Load preferences and blocked keywords from storage when the popup opens
  chrome.storage.local.get(['preferences', 'blockedKeywords'], (result) => {
    const preferences = result.preferences || [];
    const blockedKeywords = result.blockedKeywords || [];
    displayPreferences(preferences);
    displayBlockedKeywords(blockedKeywords);
  });

  // Handle the "+" button click event for preferences
  document.getElementById('addPreference').addEventListener('click', () => {
    const preferenceInput = document.getElementById('preferenceInput');
    const preference = preferenceInput.value.trim().toLowerCase();  // Convert to lowercase

    if (preference) {
      // Add the preference to the list stored in chrome storage
      chrome.storage.local.get(['preferences'], (result) => {
        const preferences = result.preferences || [];
        if (!preferences.includes(preference)) {
          preferences.push(preference);
          chrome.storage.local.set({ preferences: preferences }, () => {
            displayPreferences(preferences); // Update the displayed list
            preferenceInput.value = ''; // Clear the input box
          });
        } else {
          alert('Preference already exists!');
        }
      });
    } else {
      alert('Please enter a valid preference');
    }
  });

  // Handle the "+" button click event for blocked keywords
  document.getElementById('addBlockedKeyword').addEventListener('click', () => {
    const blockedKeywordInput = document.getElementById('blockedKeywordInput');
    const blockedKeyword = blockedKeywordInput.value.trim().toLowerCase();  // Convert to lowercase

    if (blockedKeyword) {
      // Add the blocked keyword to the list stored in chrome storage
      chrome.storage.local.get(['blockedKeywords'], (result) => {
        const blockedKeywords = result.blockedKeywords || [];
        if (!blockedKeywords.includes(blockedKeyword)) {
          blockedKeywords.push(blockedKeyword);
          chrome.storage.local.set({ blockedKeywords: blockedKeywords }, () => {
            displayBlockedKeywords(blockedKeywords); // Update the displayed list
            blockedKeywordInput.value = ''; // Clear the input box
          });
        } else {
          alert('Blocked keyword already exists!');
        }
      });
    } else {
      alert('Please enter a valid blocked keyword');
    }
  });
});

// Display the preferences list in the popup
function displayPreferences(preferences) {
  const preferencesList = document.getElementById('preferencesList');
  preferencesList.innerHTML = ''; // Clear the current list

  preferences.forEach(preference => {
    const li = document.createElement('li');
    li.textContent = preference;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');
    removeBtn.addEventListener('click', () => removePreference(preference));
    li.appendChild(removeBtn);
    preferencesList.appendChild(li);
  });
}

// Display the blocked keywords list in the popup
function displayBlockedKeywords(blockedKeywords) {
  const blockedKeywordsList = document.getElementById('blockedKeywordsList');
  blockedKeywordsList.innerHTML = ''; // Clear the current list

  blockedKeywords.forEach(keyword => {
    const li = document.createElement('li');
    li.textContent = keyword;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');
    removeBtn.addEventListener('click', () => removeBlockedKeyword(keyword));
    li.appendChild(removeBtn);
    blockedKeywordsList.appendChild(li);
  });
}

// Remove a preference from the list
function removePreference(preference) {
  chrome.storage.local.get(['preferences'], (result) => {
    const preferences = result.preferences || [];
    const index = preferences.indexOf(preference);
    if (index !== -1) {
      preferences.splice(index, 1);
      chrome.storage.local.set({ preferences: preferences }, () => {
        displayPreferences(preferences); // Update the displayed list
      });
    }
  });
}

// Remove a blocked keyword from the list
function removeBlockedKeyword(blockedKeyword) {
  chrome.storage.local.get(['blockedKeywords'], (result) => {
    const blockedKeywords = result.blockedKeywords || [];
    const index = blockedKeywords.indexOf(blockedKeyword);
    if (index !== -1) {
      blockedKeywords.splice(index, 1);
      chrome.storage.local.set({ blockedKeywords: blockedKeywords }, () => {
        displayBlockedKeywords(blockedKeywords); // Update the displayed list
      });
    }
  });
}
