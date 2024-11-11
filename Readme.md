# **YouTube Video Filtering Chrome Extension**

This Chrome extension filters YouTube videos on the homepage (or any video feed) based on user preferences and blocked keywords. It helps users refine their YouTube experience by hiding videos that don't match their preferences or contain unwanted keywords. The extension also allows users to add, remove, and update preferences and blocked keywords directly from the popup interface.

### **Key Features**
- **Filter Videos by Preferences**: Show only videos that match user-defined preferences (e.g., topics or interests).
- **Block Videos with Specific Keywords**: Automatically hide videos containing any blocked keywords (e.g., topics or subjects users want to avoid).
- **Dynamic Video Feed Filtering**: As new videos load dynamically (infinite scrolling), the extension automatically filters them based on the user's preferences and blocked keywords.
- **User Customization**: Easily add or remove preferences and blocked keywords through the popup interface.

---

## **Table of Contents**

- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Popup Interface](#popup-interface)
- [Functionality](#functionality)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---

## **Installation**

1. **Download or Clone the Repository**
   - You can either clone this repository or download the ZIP file.
   - If cloning, use the following command:
     ```bash
     git clone https://github.com/adityatiwari212/YouTube-Video-Filtering-Chrome-Extension
     ```

2. **Install the Extension in Chrome**
   - Open Chrome and go to the Extensions page: `chrome://extensions/`
   - Enable **Developer mode** by toggling the switch in the top-right corner.
   - Click **Load unpacked** and select the directory where you downloaded or cloned this repository.

3. **Using the Extension**
   - Once the extension is installed, you should see the extension icon in your browser's toolbar.
   - Click on the icon to open the popup and start customizing your preferences and blocked keywords.

---

## **Usage**

After installation, the extension will automatically start filtering YouTube's homepage and video feeds. Here's how to interact with it:

1. **Set Preferences**: Add topics or interests you want to see in the videos by typing them into the "Enter preference" input field and clicking the "+" button.
2. **Block Keywords**: Add keywords or topics you want to avoid by typing them into the "Enter blocked keyword" input field and clicking the "+" button.
3. **View and Remove Preferences or Blocked Keywords**: View your list of preferences and blocked keywords in the popup and remove any item by clicking the "Remove" button next to it.

The extension will filter the YouTube homepage by checking the video titles against your preferences and blocked keywords. If a video matches a preference, it will be shown; if it contains a blocked keyword, it will be hidden.

---

## **How It Works**

The extension uses the following techniques to filter YouTube videos based on your preferences and blocked keywords:

1. **Content Script**:
   - A `content.js` script runs on the YouTube website and checks all video titles loaded on the homepage and video feeds.
   - It compares each video's title with the list of preferences and blocked keywords stored in Chrome's `localStorage`.
   - Videos that match a preference are shown, and videos containing blocked keywords are hidden.

2. **Popup Interface**:
   - A simple popup interface allows users to input, manage, and remove preferences and blocked keywords.
   - The user’s preferences and blocked keywords are saved in the browser’s `chrome.storage.local` so that they persist across sessions.

3. **Dynamic Filtering with MutationObserver**:
   - The extension listens for changes to the DOM using `MutationObserver` to detect when new videos are loaded dynamically (via infinite scrolling).
   - Every time new videos are loaded, the filtering logic is applied to ensure that only relevant videos are displayed.

---

## **Popup Interface**

The popup interface is where users can interact with the extension, adding and removing preferences and blocked keywords:

1. **Preferences Section**:
   - **Add a Preference**: Enter a preference (e.g., a topic of interest like "gaming") and click the "+" button to add it to the preferences list.
   - **Remove a Preference**: Each added preference has a "Remove" button that allows users to remove it from the list.

2. **Blocked Keywords Section**:
   - **Add a Blocked Keyword**: Enter a keyword (e.g., "politics") and click the "+" button to add it to the blocked keywords list.
   - **Remove a Blocked Keyword**: Each added blocked keyword has a "Remove" button for easy removal.

3. **Real-Time Updates**: As preferences and blocked keywords are updated, the YouTube feed is automatically filtered in real time.

---

## **Functionality**

### **Filtering Logic**
- **Valid Video**: A video is considered valid if its title:
  1. Contains one or more of the user-defined preferences.
  2. Does **not** contain any of the user-defined blocked keywords.
  
- **Blocked Video**: A video is blocked if its title contains any of the blocked keywords or if it doesn't match any of the user-defined preferences.

### **Dynamic Video Feed**
- The extension listens for changes in the DOM (via `MutationObserver`) to handle infinite scrolling. When new videos load, they are automatically checked and filtered based on the current preferences and blocked keywords.

---

## **Development**

If you'd like to contribute to or modify this project, follow these steps:

### **Prerequisites**
- You need a basic understanding of HTML, JavaScript, and Chrome Extensions.
- A development environment with Chrome installed for testing.

### **Running Locally**
To run and develop the extension locally:
1. Clone or download the repository.
2. Navigate to `chrome://extensions/` in Chrome.
3. Enable **Developer mode** and click **Load unpacked**.
4. Select the project folder.

### **Making Changes**
- **Modify the content script**: Make adjustments to the filtering logic in `content.js` to change how videos are filtered.
- **Customize the popup**: Edit `popup.html` and `popup.js` to add features or improve the user interface.
- **Update the extension**: After making changes, click the **Reload** button in `chrome://extensions/` to test your changes.

---

## **Contributing**

We welcome contributions! Feel free to fork the repository, make changes, and create a pull request with your proposed improvements.

### **Guidelines for Contributions**:
- Write clear and concise commit messages.
- Ensure code is well-documented and readable.
- Test your changes before submitting a pull request.

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## **Acknowledgements**

- Thanks to the contributors of the open-source projects that helped build this extension.
- This extension is built using Chrome's **Manifest V2** and content script APIs.

---

**Enjoy the clean and customized YouTube experience!**