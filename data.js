// Parent Categories
const parentCategories = [
  {
    id: 'cfa-level1',
    name: 'CFA Level 1',
    description: 'Chartered Financial Analyst Level 1',
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
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following statements is most accurate? Ethics can be described as:",
    options: ['A set of moral principles that provide guidance for our behavior.', 'A commitment to upholding the law.', 'An individual’s personal opinion about right and wrong.'],
    correctAnswer: 'A set of moral principles that provide guidance for our behavior', // Index of correct option
    back: "",
    correctAnswers: 0,
    incorrectAnswers: 0
  },
  {
    id: 2,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-ethics',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following statements is most accurate? Investment professionals have a special responsibility to act ethically because:",
    options: ['The industry is heavily regulated.', 'They are entrusted to protect clients’ assets.', 'The profession requires compliance with its code of ethics.'],
    correctAnswer: 'They are entrusted to protect clients’ assets.', // Index of correct option
    back: "",
    correctAnswers: 0,
    incorrectAnswers: 0
  },
  
  {
    id: 3,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-ethics',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Stewart has been hired by Goodner Industries, Inc., to manage its pension fund. Stewart’s duty of loyalty, prudence, and care is owed to:",
    options: ['The management of Goodner.', 'The participants and beneficiaries of Goodner’s pension plan.', 'The shareholders of Goodner.'],
    correctAnswer: 'The participants and beneficiaries of Goodner’s pension plan.', // Index of correct option
    back: "",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id: 4,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-quantitative-methods',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "An investor purchased 100 shares of a stock for USD 34.50 per share at the beginning of the quarter. If the investor sold all of the shares for USD 30.50 per share after receiving a USD 51.55 dividend payment at the end of the quarter, the investor’s holding period return is closest to:",
    options: ['−13.0 percent.', '−11.6 percent.', '−10.1 percent.'],
    correctAnswer: ' ', // Index of correct option
    back: "",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id: 5,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-quantitative-methods',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Grupo Ignacia issued 10-year corporate bonds four years ago. The bonds pay an annualized coupon of 10.7 percent on a semiannual basis, and the current price of the bonds is MXN 97.50 per MXN 100 of par value. The YTM of the bonds is closest to:",
    options: ['11.28 percent.', '11.50 percent.', '11.71 percent.'],
    correctAnswer: ' ', // Index of correct option
    back: "",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id: 6,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-quantitative-methods',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following statements is true in the use of Machine Learning (ML):",
    options: ['Some techniques are termed “black box” due to data biases.', 'Human judgment is not needed because algorithms continuously learn from data.', 'Training data can be learned too precisely, resulting in inaccurate predictions when used with different datasets.'],
    correctAnswer: ' ', // Index of correct option
    back: "",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id: 7,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-economics',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "A company has total variable costs of $4 million and fixed costs of $3 million. Based on this information, the company will stay in the market in the long term if total revenue is at least:",
    options: ['$3.0 million.', '$4.5 million.', '$7.0 million.'],
    correctAnswer: ' ', // Index of correct option
    back: "",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id: 8,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-economics',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following statements regarding a country’s political cooperation is most accurate?",
    options: ['If a country is engaged in military conflict, there is a higher cost to cooperation.', 'A country with few internal resources is not likely to rely on political cooperation.', 'Interest prioritization does not determine the depth and nature of political cooperation.'],
    correctAnswer: ' ', // Index of correct option
    back: "",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id: 9,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-economics',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "An executive from Switzerland checks into a hotel room in Spain and is told by the manager that EUR 1 will buy CHF 1.2983. From the executive’s perspective, an indirect exchange rate quote would be:",
    options: ['EUR 0.7702 per CHF1.', 'CHF 0.7702 per EUR1.', 'EUR 1.2983 per CHF1.'],
    correctAnswer: ' ', // Index of correct option
    back: "",
    correctAnswers: 0,
    incorrectAnswers: 0
  },
 
 
];

export { flashcardData, parentCategories, subcategories };