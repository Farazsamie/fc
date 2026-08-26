import { flashcardData, parentCategories, subcategories } from './data.js';

// State management
let currentCardIndex = 0;
let currentCategory = null;
let filteredCards = [];
let isFlipped = false;

// DOM elements
const cardFront = document.getElementById('cardFront');
const cardBack = document.getElementById('cardBack');
const cardElement = document.querySelector('.flashcard');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const markCorrectBtn = document.getElementById('markCorrectBtn');
const markIncorrectBtn = document.getElementById('markIncorrectBtn');
const categorySelect = document.getElementById('parentCategoryInput');
const subcategorySelect = document.getElementById('subcategoryInput');
const cardsContainer = document.getElementById('cardsContainer');

// Initialize the app
function init() {
  populateCategories();
  loadCards();
  setupEventListeners();
}

// Populate category dropdown
function populateCategories() {
  const categories = [...new Set(flashcardData.map(card => card.category))];
  categorySelect.innerHTML = '<option value="">-- All Categories --</option>' +
    categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
}

// Update subcategory dropdown based on selected category
function updateSubcategoryDropdown() {
  const selectedCategory = categorySelect.value;
  let subcategories = [];
  
  if (selectedCategory) {
    subcategories = [...new Set(
      flashcardData
        .filter(card => card.category === selectedCategory)
        .map(card => card.subcategory)
    )];
  }
  
  subcategorySelect.innerHTML = '<option value="">-- All Subcategories --</option>' +
    subcategories.map(subcat => `<option value="${subcat}">${subcat}</option>`).join('');
  
  loadCards();
}

// Load cards based on filters
function loadCards() {
  const selectedCategory = categorySelect.value;
  const selectedSubcategory = subcategorySelect.value;
  
  filteredCards = flashcardData.filter(card => {
    if (selectedCategory && card.category !== selectedCategory) return false;
    if (selectedSubcategory && card.subcategory !== selectedSubcategory) return false;
    return true;
  });
  
  currentCardIndex = 0;
  isFlipped = false;
  displayCard();
}

// Display current card
function displayCard() {
  if (filteredCards.length === 0) {
    cardFront.textContent = 'No cards available';
    cardBack.textContent = '';
    return;
  }
  
  const card = filteredCards[currentCardIndex];
  cardFront.innerHTML = card.front;
  cardBack.innerHTML = card.back;
  
  // Re-render MathJax if available
  if (window.MathJax) {
    MathJax.typesetPromise().catch(err => console.log('MathJax error:', err));
  }
  
  updateButtonStates();
}

// Update button states
function updateButtonStates() {
  prevBtn.disabled = currentCardIndex === 0;
  nextBtn.disabled = currentCardIndex === filteredCards.length - 1;
  
  // Show card counter
  const counter = document.getElementById('cardCounter');
  if (counter) {
    counter.textContent = `Card ${currentCardIndex + 1} of ${filteredCards.length}`;
  }
}

// Flip card
function flipCard() {
  isFlipped = !isFlipped;
  if (cardElement) {
    cardElement.classList.toggle('flipped');
  }
}

// Navigate to previous card
function previousCard() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    isFlipped = false;
    cardElement?.classList.remove('flipped');
    displayCard();
  }
}

// Navigate to next card
function nextCard() {
  if (currentCardIndex < filteredCards.length - 1) {
    currentCardIndex++;
    isFlipped = false;
    cardElement?.classList.remove('flipped');
    displayCard();
  }
}

// Mark card as correct
function markCorrect() {
  const card = filteredCards[currentCardIndex];
  const originalCard = flashcardData.find(c => c.id === card.id);
  if (originalCard) {
    originalCard.correctAnswers++;
  }
  nextCard();
}

// Mark card as incorrect
function markIncorrect() {
  const card = filteredCards[currentCardIndex];
  const originalCard = flashcardData.find(c => c.id === card.id);
  if (originalCard) {
    originalCard.incorrectAnswers++;
  }
  nextCard();
}

// Setup event listeners
function setupEventListeners() {
  if (cardElement) {
    cardElement.addEventListener('click', flipCard);
  }
  
  if (prevBtn) prevBtn.addEventListener('click', previousCard);
  if (nextBtn) nextBtn.addEventListener('click', nextCard);
  if (markCorrectBtn) markCorrectBtn.addEventListener('click', markCorrect);
  if (markIncorrectBtn) markIncorrectBtn.addEventListener('click', markIncorrect);
  
  if (categorySelect) categorySelect.addEventListener('change', updateSubcategoryDropdown);
  if (subcategorySelect) subcategorySelect.addEventListener('change', loadCards);
}

// Export for use in other scripts
export { flashcardData, currentCardIndex, filteredCards, parentCategories, subcategories };