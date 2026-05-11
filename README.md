# Personal Quote & Affirmation Card Maker

Welcome to your personal affirmation companion! This is a gentle, client-side web application designed to help you collect and reflect on positive thoughts and affirmations.

## 🌟 What This App Does

- **Add affirmations**: Write down positive thoughts, quotes, or affirmations in a simple form
- **Store locally**: All your data is saved to your browser's local storage—nothing leaves your device
- **View cards**: Browse your affirmations as beautiful, colorful cards
- **Show random**: Get a random affirmation when you need encouragement
- **Copy & share**: Easily copy affirmations to share them with others
- **Delete & organize**: Remove affirmations or clear everything with one click

## 🚀 How to Use

1. **Add an Affirmation**:
   - Type your affirmation or positive thought in the text area
   - Optionally add the author's name (or leave it as "You")
   - Optionally add a tag for categorization (e.g., "growth", "self-care")
   - Click "Save Affirmation"

2. **View Your Collection**:
   - Click "View All" to see all your affirmations as cards
   - Each card displays the text, author, and tag

3. **Get Inspired**:
   - Click "Show Random" to see a random affirmation
   - Perfect for a daily dose of encouragement

4. **Manage Your Cards**:
   - **Copy**: Click the copy button on any card to copy it to your clipboard
   - **Delete**: Click the delete button to remove an affirmation
   - **Clear All**: Remove all affirmations at once (you'll be asked to confirm)

## 💾 How Data is Stored

- Your affirmations are stored in **browser local storage** under the key `affirmations_v1`
- Data persists between browser sessions (even after closing and reopening the tab)
- Each affirmation includes:
  - Unique ID
  - Text content
  - Author name
  - Optional tag
  - Creation timestamp

**Important**: Your data is stored **locally on your device only**. It is:
- ✅ Never sent to any server
- ✅ Never shared with anyone
- ✅ Completely private

However, note that:
- Data is browser-specific (different browsers have separate storage)
- Clearing browser data will delete your affirmations
- Affirmations are not synced across devices

## 🌐 Deploying on GitHub Pages

This app is designed to run entirely in the browser with no build step required.

### Option 1: Deploy from the `main` Branch

1. Go to your repository Settings → Pages
2. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
3. Click "Save"
4. Your app will be live at `https://yourusername.github.io/repository-name`

### Option 2: Deploy from the `docs` Folder

1. Create a `docs` folder in your repository
2. Copy `index.html`, `styles.css`, and `app.js` into the `docs` folder
3. Go to Settings → Pages
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ docs`
5. Click "Save"

## 📁 Project Structure

```
personal-card-maker/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── app.js          # Application logic and state management
├── README.md       # This file
├── ARCHITECTURE.md # Technical design details
└── LICENSE         # MIT License
```

## 🎨 Design & UX

- **Mobile-first and responsive**: Works beautifully on phones, tablets, and desktops
- **Accessible**: Semantic HTML and keyboard navigation
- **Gentle and encouraging**: Warm colors, supportive copy, and no distractions
- **Fast**: No external dependencies or heavy frameworks
- **Colorful cards**: Each card gets a unique gradient for visual delight

## 🛠️ Technical Details

- **Pure vanilla JavaScript**: No frameworks, no build tools, no dependencies
- **HTML5**: Semantic markup for accessibility
- **CSS3**: Modern styling with flexbox and grid
- **localStorage API**: Browser-native persistence
- **No external libraries**: Completely self-contained

## 🤝 Contributing

This is a personal project, but ideas and feedback are welcome! Feel free to:
- Report issues
- Suggest features
- Share how you're using the app

## 📜 License

MIT License — feel free to use, modify, and share!

## 💛 Made with Care

This app is built with the intention of helping you remember the good things in life. May it serve as a gentle reminder of your strength, resilience, and worthiness.

---

**Questions or ideas?** Open an issue or send a message. I'd love to hear how you're using this app!
