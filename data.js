// Parent Categories
const parentCategories = [
  {
    id: 'cfa-level1',
    name: 'CFA Level 1',
    description: 'CFA Level 1 - Chartered Financial Analyst',
    createdAt: new Date().toISOString()
  }
];

// Subcategories
const subcategories = [
  { id: 'cfa-l1-ethics', name: 'Ethical and Professional Standards', parentId: 'cfa-level1' },
  { id: 'cfa-l1-quantitative-methods', name: 'Quantitative Methods', parentId: 'cfa-level1' },
  { id: 'cfa-l1-economics', name: 'Economics', parentId: 'cfa-level1' },
  { id: 'cfa-l1-financial-statement', name: 'Financial Statement Analysis', parentId: 'cfa-level1' },
  { id: 'cfa-l1-corporate-issuers', name: 'Corporate Issuers', parentId: 'cfa-level1' },
  { id: 'cfa-l1-equity-investments', name: 'Equity Investments', parentId: 'cfa-level1' },
  { id: 'cfa-l1-fixed-income', name: 'Fixed Income', parentId: 'cfa-level1' },
  { id: 'cfa-l1-derivatives', name: 'Derivatives', parentId: 'cfa-level1' },
  { id: 'cfa-l1-alternative-investments', name: 'Alternative Investments', parentId: 'cfa-level1' },
  { id: 'cfa-l1-portfolio-management', name: 'Portfolio Management', parentId: 'cfa-level1' }
];

// Flashcards - each includes category, subcategory, and type
const flashcardData = [
  {
    id: 1,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-ethics',
    type: 'flashcard', // flashcard or multiple-choice
    front: "What is the primary responsibility of CFA charterholders?",
    back: "To act with integrity and in the best interest of clients",
    correctAnswers: 0,
    incorrectAnswers: 0
  },
  {
    id: 2,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-quantitative-methods',
    type: 'multiple-choice',
    front: "What is the mean of the following dataset: 2, 4, 6, 8, 10?",
    options: ['4', '5', '6', '7'],
    correctAnswer: 2, // Index of correct option
    back: "The mean is 6: (2+4+6+8+10)/5 = 30/5 = 6",
    correctAnswers: 0,
    incorrectAnswers: 0
  },
  {
    id: 3,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-economics',
    type: 'flashcard',
    front: "Define GDP",
    back: "Gross Domestic Product - the total monetary value of all finished goods and services produced within a country in a specific time period",
    correctAnswers: 0,
    incorrectAnswers: 0
  },
  {
    id: 4,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-financial-statement',
    type: 'multiple-choice',
    front: "Which financial statement shows a company's financial position at a specific point in time?",
    options: ['Income Statement', 'Balance Sheet', 'Cash Flow Statement', 'Statement of Changes in Equity'],
    correctAnswer: 1, // Index of correct option
    back: "The Balance Sheet (or Statement of Financial Position) shows assets, liabilities, and equity at a specific date",
    correctAnswers: 0,
    incorrectAnswers: 0
  },
  {
    id: 5,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-quantitative-methods',
    type: 'flashcard',
    front: "Solve: $x^2 - 5x + 6 = 0$",
    back: "x = 2 or x = 3",
    correctAnswers: 0,
    incorrectAnswers: 0
  }
];

export { flashcardData, parentCategories, subcategories };