# Flashcard App - Setup & Features Guide

## New Features Added

### 1. **Cloud Sync (Optional Cloud Storage)**
Your flashcards can now be synced across all devices. Choose between local storage (default) or cloud storage.

#### How to Enable Cloud Sync:

1. **Create a Firebase Project:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add Project"
   - Follow the setup steps
   - Enable "Realtime Database" (choose free tier)
   - Enable "Authentication" → "Anonymous Sign-in"

2. **Get Your Firebase Credentials:**
   - In Firebase Console, go to Settings (⚙️) → Project Settings
   - Find your **API Key**, **Project ID**, and **Database URL** (format: `https://YOUR-PROJECT.firebaseio.com`)

3. **Configure in the App:**
   - Click the **⚙️ Settings** button (top-right of navigation)
   - Click "Enable Cloud Sync"
   - Fill in your Firebase credentials:
     - **Firebase API Key**: Your API key from Firebase
     - **Database URL**: `https://your-project.firebaseio.com`
     - **Project ID**: Your project ID
   - Click "Save Configuration"
   - Optionally click "Test Connection" to verify

4. **Cloud Sync Features:**
   - Data automatically syncs to the cloud when you create/edit/delete cards
   - On any device with the same configuration, your data will be available
   - You can export/import data as JSON backup without Firebase

#### Data Management:
- **Export Data**: Save all flashcards as a JSON file (backup)
- **Import Data**: Restore from a JSON backup (replaces all current data)

---

### 2. **Multiple Card Types**

You can now create two types of flashcards:

#### A. **Question & Answer (Default)**
- Simple two-sided cards (Question on front, Answer on back)
- Supports math ($LaTeX$), HTML formatting, and rich content
- You type your answer and compare with the correct answer

#### B. **Multiple Choice**
- Question with 4 options (A, B, C, D)
- Click to select your answer
- The app shows the correct answer with explanation
- Perfect for exams or tests

#### How to Create Each Type:

**Question & Answer:**
1. Click "Create Card" tab
2. Select "Question & Answer" (default)
3. Fill in:
   - Parent Category
   - Subcategory
   - Front (Question)
   - Back (Answer)
4. Click "Save Card"

**Multiple Choice:**
1. Click "Create Card" tab
2. Click "Multiple Choice" button
3. Fill in:
   - Parent Category
   - Subcategory
   - Question
   - Option A, B, C, D
   - Correct Answer (select A, B, C, or D)
   - Explanation (optional) - shown when answer is revealed
4. Click "Save Card"

---

## How to Use

### Study Mode:
1. Go to **Active Recall** tab
2. Select a category or subcategory from the sidebar
3. Study Mode Options:
   - **All Cards**: Study all cards in category
   - **New Only**: Study cards you haven't reviewed yet
   - **Missed Cards**: Review cards you got wrong

4. Reading a Card:
   - *Q&A cards*: Type your answer, click "Show Answer"
   - *Multiple Choice cards*: Click your answer, click "Show Answer"

5. Rate Your Answer:
   - ✓ Perfect: You got it completely right
   - ✓ Good: You got it mostly right
   - ~ Partial: You got some of it right
   - ✗ Wrong: You got it wrong

6. The app uses **spaced repetition** - harder cards appear more frequently

---

## Tips

- **Math Support**: Use `$algebra$` for inline math or `$$display$$` for display math
- **HTML Support**: You can use HTML tags like `<strong>`, `<em>`, `<u>` in any card
- **Backup Regularly**: Export your data periodically as a JSON file
- **Multiple Devices**: With cloud sync enabled, open the same page on any device and your data syncs automatically
- **No Account Needed**: Cloud sync doesn't require login - anonymous access only

---

## Troubleshooting

**Cloud sync isn't working:**
- Make sure Firebase configuration is correct
- Check that your Database URL and API Key are accurate
- Click "Test Connection" to verify your Firebase setup

**Cards not syncing:**
- Refresh the page after enabling cloud sync
- Check browser console (F12) for error messages

**Lost data:**
- If you enabled cloud sync and lost local data, click "Import Data" to recover a JSON backup
- Always keep regular backups!

---

## Questions?

Refer to the tips in the app (blue info boxes) for formatting help with math and HTML.
