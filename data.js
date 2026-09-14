
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
    options: ['A set of moral principles that provide guidance for our behavior', 'A commitment to upholding the law.', 'An individual’s personal opinion about right and wrong.'],
    correctAnswer: 'A set of moral principles that provide guidance for our behavior', // Index of correct option
    back: " Ethics can be described as a set of moral principles that provide guidance for our behavior; these may be moral principles shared by a community or societal group.",
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
    back: " Investment professionals have a special responsibility because clients entrust them to protect the clients’ assets.",
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
    back: "Under Standard III(A) Loyalty, Prudence, and Care, members and candidates who manage a company’s pension fund owe these duties to the participants and beneficiaries of the pension plan, not the management of the company or the company’s shareholders.",
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
    back: "Applying Equation 2, the holding period return is −10.1%, calculated as follows: R = (3,050 − 3,450 + 51.55)/3,450 = −10.1%. The holding period return comprised of a dividend yield of 1.49% (=51.55/3,450) and a capital loss of −11.59% (= −400/3,450).",
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
    back: "The YTM is calculated by solving for the RATE spreadsheet function with the following inputs: number of periods of 12 (=6×2), coupon payments of 5.35 (=10.7/2), PV of −97.50, and FV of 100. The resulting solution for RATE of 5.64 percent is in semiannual terms, so multiply by 2 to calculate annualized YTM of 11.28 percent. B is incorrect, as 11.50 percent is the result if the number of periods used is eight, instead of 12. C is incorrect, as 11.71 percent is the result if the number of periods used is 6, instead of 12.",
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
    back: "Overfitting occurs when the ML model learns the input and target dataset too precisely. In this case, the model has been “overtrained” on the data and is treating noise in the data as true parameters. An ML model that has been overfitted is not able to accurately predict outcomes using a different dataset and might be too complex.",
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
    back: "A company will stay in the market in the long term if total revenue is equal to, or greater than, total cost. Because total costs are $7 million ($4 million variable costs and $3 million fixed costs), the company will stay in the market in the long term if total revenue equals at least $7 million.",
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
    back: "If a country is engaged in military conflict, there is a higher cost to cooperation. B is incorrect because a country with few internal resources is likely to rely on political cooperation. C is incorrect because interest prioritization does determine the depth and nature of political cooperation.",
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
    back: "An indirect quote takes the foreign country as the price currency and the domestic country as the base currency. To get Swiss francs— which is the executive’s domestic currency—as the base currency, the quote must be stated as EUR/ CHF. Using the manager’s information, the indirect exchange rate is (1/1.2983) = 0.7702.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },
 
  {
    id: 10,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-corporate-issuers',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following organizational forms provides for the least owner liability of business debts?",
    options: [' General partnership.', 'Private limited company.', 'Sole proprietorship.'],
    correctAnswer: ' ', // Index of correct option
    back: "In both the sole proprietorship and general partnership forms of organization, the owners are personally liable for all debts assumed by the company. In a private limited company, owner (shareholder) liability is limited to the value of their ownership stake.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id: 11,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-corporate-issuers',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Keown Corporation is experiencing liquidity challenges. As an analyst, you note three recent trends related to Keown’s working capital:",
    options: ['An increase in average days sales outstanding is a drag on liquidity.', 'An increase in days of inventory on hand is a drag on liquidity.', 'An increase in credit limits by lenders is a pull on liquidity.'],
    correctAnswer: ' ', // Index of correct option
    back: "The increase in credit limits is not a pull on liquidity but is in fact the opposite: it provides liquidity. A is incorrect, because an increase in days sales outstanding is a drag on liquidity as it results in slower or delayed cash inflows. B is incorrect, because higher days of inventory on hand is a drag on liquidity as it extends the cash conversion cycle. ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id: 12,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-corporate-issuers',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Companies selling in markets with many competitors and little or no product differentiation are often ____________; in contrast, companies selling differentiated products with few competitors tend to have ____________.",
    options: ['Crowdsourcing; bundling.', 'Price takers; pricing power.', 'Omnichannel; direct sales.'],
    correctAnswer: ' ', // Index of correct option
    back: "Markets with many competitors and homogeneous products are characterized by having perfect or near-perfect competition market structures, with prices determined by market supply and demand.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id: 13,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-financial-statement',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "For its fiscal year-end, Sublyme Corporation reported net income of USD 200 million and a weighted average of 50,000,000 common shares outstanding. There are 2,000,000 convertible preferred shares outstanding that paid an annual dividend of USD 5. Each preferred share is convertible into two shares of the common stock. The diluted EPS is closest to:",
    options: ['USD 3.52.', 'USD 3.65.', 'USD 3.70.'],
    correctAnswer: ' ', // Index of correct option
    back: "Diluted EPS = (Net income)/(Weighted average number of shares outstanding + New common shares that would have been issued at conversion)= USD 200,000,000/[50,000,000 + (2,000,000×2)] = USD 3.70. The diluted EPS assumes that the preferred dividend is not paid and that the shares are converted at the beginning of the period.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id: 14,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-financial-statement',
    type: 'multiple-choice', // flashcard or multiple-choice 
    front: "Eric’s Used Book Store prepares its financial statements in accordance with IFRS. later marked down to GBP 550,000. One of the books, however, was later discovered to be a rare collectible item, and the inventory is now worth an estimated GBP 3 million. The inventory is most likely reported on the balance sheet at: ",
    options: ['GBP 550,000', 'GBP 1,000,000', 'GBP 3,000,000'],
    correctAnswer: ' ', // Index of correct option
    back: "Under IFRS, the reversal of write- downs is required if net realizable value increases. The inventory will be reported on the balance sheet at GBP 1,000,000. The inventory is reported at the lower of cost or net realizable value.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id: 15,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-financial-statement',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "In the current year, Michaels Company has a carrying amount of USD 3,500,000 and tax base of USD 5,000,000 for accounts receivable. Michaels will most likely recognize:",
    options: ['A deferred tax asset', 'A deferred tax liability', 'No deferred tax asset or liability'],
    correctAnswer: ' ', // Index of correct option
    back: "Because the carrying amount is less than the tax base for this asset, this difference is a temporary difference that will result in a deferred tax asset. B is incorrect because a deferred tax liability would apply if the carrying amount was greater than the asset base. C is incorrect because this is not a permanent difference thus there will be either a deferred tax asset or deferred tax liability.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },
 
  {
    id: 16, 
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-equity-investments',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following statements about exchange-traded funds is most correct?",
    options: ['Exchange-traded funds are not backed by any assets.', 'The investment companies that create exchange- traded funds are financial intermediaries.', 'The transaction costs of trading shares of exchange-traded funds are substantially greater than the combined costs of trading the underlying assets of the fund.'],
    correctAnswer: ' ', // Index of correct option
    back: "The investment companies that create exchange-traded funds (ETFs) are financial intermediaries. ETFs are securities that represent ownership in the assets held by the fund. The transaction costs of trading shares of ETFs are substantially lower than the combined costs of trading the underlying assets of the ETF.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },
 
  {
    id: 17,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-equity-investments',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Security market indexes are:",
    options: ['Constructed and managed like a portfolio of securities.', 'Simple interchangeable tools for measuring the returns of different asset classes.', ' Valued on a regular basis using the actual market prices of the constituent securities.'],
    correctAnswer: ' ', // Index of correct option
    back: "Security market indexes are constructed and managed like a portfolio of securities.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },
 
  {
    id: 18  ,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-equity-investments',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "With respect to the efficient market hypothesis, if security prices reflect only past prices and trading volume information, then the market is:",
    options: ['Weak-form efficient.', 'Strong-form efficient', 'Semi-strong-form efficient'],
    correctAnswer: ' ', // Index of correct option
    back: "The weak-form efficient market hypothesis is defined as a market where security prices fully reflect all market data, which refers to all past price and trading volume information.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },
 
  {
    id: 19,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-fixed-income',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Exceptions to the maturity effect exist for bonds that have:",
    options: ['Long maturities, make small coupon payments, and trade at a discount.', 'Short maturities, have high coupon rates, and trade at a discount.', ' Long maturities, have high coupon rates, and trade at a premium.'],
    correctAnswer: ' ', // Index of correct option
    back: "Exceptions to the maturity effect are rare and occur only for low-coupon (but not zero- coupon) long-term bonds trading at a discount. B is incorrect because the maturity effect holds for bonds that have short maturities and high coupons. C is incorrect because the maturity effect always holds on bonds priced at a premium above par value.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },
 
  {
    id: 20,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-fixed-income',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Assume that today (t = 0) the current US five-year Treasury note trades at a price equal to the bond’s face value of USD 50,000,000. The security buyer takes delivery of the US Treasury note today and pays the security seller USD 50,000,000. Assume a repo term of 45 days (and 360 days in a year) and a repo rate of 0.375%. If the buyer agrees to return the five-year Treasury note 45 days from today (t = T) to the seller, the repurchase price is closest to:",
    options: ['USD 50,015,625', 'USD 50,023,438', 'USD 50,187,500'],
    correctAnswer: ' ', // Index of correct option
    back: "USD 50,023,438 is calculated as: USD 50,000,000 × [1 + (0.375% × 45/360)] = USD 50,023,438. In effect, the security seller borrows USD 50,000,000 on a short-term basis at a low cost, with interest (USD 23,438) paid at maturity, because the loan is collateralized by the US Treasury note. A is incorrect because a repo term of 30 days, as opposed to 45 days, is incorrectly used: USD 50,000,000 × [1 + (0.375% × 30/360)] = USD 50,015,625. C is incorrect because the repo term and number of days in a year are not used: USD 50,000,000 × (1 + 0.375%) = USD 50,187,500.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },
 
  {
    id: 21,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-fixed-income',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following statements regarding securitized products is correct?",
    options: ['Credit tranching offers credit protection for the equity tranche in a securitization.', 'Pass-through securities are the simplest securitized structure and involve issuers retaining the underlying assets.', 'In a true securitization, the underlying pool of assets is removed from the balance sheet and transferred into an independent legal entity that issues securities backed by these assets.'],
    correctAnswer: ' ', // Index of correct option
    back: " In a true securitization, the specific pool of assets is removed from the balance sheet and transferred into a separate and independent legal entity that then issues securities backed by these pooled assets. A is incorrect because credit tranching offers credit protection for the more senior bond classes in a securitization not the equity tranche. B is incorrect because covered bonds, not pass- through securities, are the simplest securitization structure, which involves the issuer retaining the underlying assets on its balance sheet.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },
 
  {
    id: 22,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-derivatives',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "If a corporate issuer enters into a centrally cleared OTC derivative contract, which of the following risks is likely of most concern to the issuer and other participants in this market?",
    options: ['Interest rate risk', 'Counterparty credit risk', 'Systemic risk'],
    correctAnswer: ' ', // Index of correct option
    back: "Because all the credit risk is taken on by the CCP, all participants in this market are most concerned that the CCP is able to satisfy its obligations to all contracts. A is incorrect because interest rate risk is an underlying risk that can be hedged or managed with certain OTC derivative contracts. B is incorrect because the CCP assumes the credit risk from all parties to the contracts.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },
 
  {
    id: 23,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-derivatives',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following responses is closest to the one-year futures price of a stock with a spot price (S0) of €125 and an annual dividend of €2.50 paid at maturity if the risk-free rate is 1%?",
    options: ['€123.75', '€122.50', '€126.25'],
    correctAnswer: ' ', // Index of correct option
    back: "The no arbitrage futures price for an underlying asset with known benefits, such as a dividend, may be determined using the following equation: f0(T) = [S0 − PV0(I)] (1 + r)T. First, solve for the present value of the dividend PV0(I) as follows: €2.48 = (€2.50/1.01). Substitute PV0(I) into the original equation to solve for f0(T): f0(T) = €123.75 = (€125 − €2.48)(1.01). ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },
 
  {
    id: 24,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-derivatives',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following statements best describes a shareholder’s claim in terms of an option payoff?",
    options: ['Shareholder payoff resembles the payoff of a put option on firm value.', 'Shareholder payoff resembles the payoff of a covered call option on firm value.', 'Shareholder payoff resembles the payoff of a call option on firm value.'],
    correctAnswer: ' ', // Index of correct option
    back: "When considering shareholder claims in option terms, the shareholder payoff resembles a call option on firm value.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },
 
  {
    id: 25,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-alternative-investments',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following statements most correctly describes why commodity investments are thought to provide a hedge against inflation?",
    options: ['The returns on commodity investing are driven by commodity price changes, and inflation partially reflects these changes.', 'Commodity prices increase after inflation rates increase.', 'Expectations of higher inflation cause commodity prices to increase.'],
    correctAnswer: ' ', // Index of correct option
    back: "Commodity prices are a significant portion of consumer prices because commodities include aspects of everyday life, such as food and energy, and thus consumer price inflation will incorporate the effects of commodity price changes. By investing in commodities, an investor is, at least partially, hedged against the inflation that occurs with rising commodity prices. B is incorrect because inflation and commodity prices do not move together, but instead, changes in the inflation rate lag behind changes in commodity prices. C is incorrect because in this case, commodity price increases occur before inflation changes.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },
 
  {
    id: 26,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-alternative-investments',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following parties is responsible for the portfolio management of a fund of hedge funds?",
    options: ['Accredited investor.', 'General partner.', 'Limited partner.'],
    correctAnswer: ' ', // Index of correct option
    back: "The general partner is responsible for choosing the hedge funds in a fund of hedge funds. A and C are incorrect because they refer to customers or investors in the fund.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },
 
  {
    id: 27,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-alternative-investments',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "A cryptocurrency miner can earn new digital assets by:",
    options: ['Solving complex algorithm puzzles to validate blocks of transactions onto a blockchain network based on a PoS protocol.', 'Staking his own cryptocurrencies to validate blocks of transactions onto a blockchain network based on a PoW protocol.', 'Validating and locking transactions onto a blockchain irrespective of the consensus protocol adopted by the particular network.'],
    correctAnswer: ' ', // Index of correct option
    back: "Under both PoW and PoS consensus protocols, the validation of the transactions, or “mining,” always comes with rewards. A successful miner that validates the transactions obtains new digital assets—either a cryptocurrency or a token. For blockchain networks based on the PoW protocol, the miner earns his digital assets by solving complex algorithm puzzles to validate blocks of transactions onto a blockchain network. For blockchain networks based on the PoS protocol, the miner earns his digital assets by staking his own to validate and attest to the new blocks of transactions.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },
 
  {
    id: 28,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-portfolio-management',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "With respect to the portfolio management process, the asset allocation is determined in the:",
    options: ['Planning step.', 'Feedback step.', 'Execution step.'],
    correctAnswer: ' ', // Index of correct option
    back: "The client’s objectives and constraints are established in the investment policy statement and are used to determine the client’s target asset allocation, which occurs in the execution step of the portfolio management process.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },
 
  {
    id: 29,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-portfolio-management',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "A client who is a director of a publicly listed corporation is required by law to refrain from trading that company’s stock at certain points of the year when disclosure of financial results are pending. In preparing a written investment policy statement (IPS) for this client, this restriction on trading:",
    options: ['Is irrelevant to the IPS.', 'Should be included in the IPS.', 'Makes it illegal for the portfolio manager to work with this client.'],
    correctAnswer: ' ', // Index of correct option
    back: "When a client has a restriction in trading, such as this obligation to refrain from trading, the IPS “should note this constraint so that the portfolio manager does not inadvertently trade the stock on the client’s behalf.”",
    correctAnswers: 0,
    incorrectAnswers: 0
  },
 
  {
    id: 30,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-portfolio-management',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following is the correct sequence of events for risk governance and management that focuses on the entire enterprise? Establishing:",
    options: ['Risk tolerance, then risk budgeting, and then risk exposures.', 'Risk exposures, then risk tolerance, and then risk budgeting.', 'Risk budgeting, then risk exposures, and then risk tolerance.'],
    correctAnswer: '', // Index of correct option
    back: "In establishing a risk management system, determining risk tolerance must happen before specific risks can be accepted or reduced. Risk tolerance defines the appetite for risk. Risk budgeting determine how or where the risk is taken and quantifies the tolerable risk by specific metrics. Risk exposures can then be measured and compared against the acceptable risk.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },
 
  {
    id: 31,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-ethics',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following statements is most accurate? Standards of conduct:",
    options: ['are a necessary component of any code of ethics.', 'serve as a general guide regarding proper conduct by members of a group.', 'serve as benchmarks for the minimally acceptable behavior required of members of a group.'],
    correctAnswer: 'serve as benchmarks for the minimally acceptable behavior required of members of a group.', // Index of correct option
    back: "serve as benchmarks for the minimally acceptable behavior required of members of a group.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id: 32,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-ethics',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following statements best completes the following sentence? Professionals use their specialized knowledge and skills:",
    options: ['in service to others.', 'to advance their careers.', 'for the exclusive benefit of their employers.'],
    correctAnswer: 'in service to others.', // Index of correct option
    back: "in service to others.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },


   {
    id: 33,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-ethics',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following statements is most accurate? A profession’s code of ethics:",
    options: ['publicly communicates the shared principles and expected behaviors of a profession’s members.', 'includes standards of conduct or specific benchmarks for behavior.', 'ensures that all members of a profession will act ethically at all times.'],
    correctAnswer: 'publicly communicates the shared principles and expected behaviors of a profession’s members.', // Index of correct option
    back: "",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id: 34,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-ethics',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following will most likely determine whether an individual will behave unethically?",
    options: ['The person’s internal traits and intrinsic motivation', 'External factors, such as environmental or cultural elements', 'The person’s character'],
    correctAnswer: 'External factors, such as environmental or cultural elements', // Index of correct option
    back: "External factors, such as environmental or cultural elements",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 35,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-ethics',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following statements is most accurate?",
    options: ['Large financial rewards, such as bonuses, are the most powerful situational influences.', 'When decision-making focuses on short-term factors, the likelihood of ethical conduct increases.', 'Situational influences can motivate individuals to act in their short-term self-interests without recognizing the long-term risks or consequences for themselves and others.'],
    correctAnswer: 'Situational influences can motivate individuals to act in their short-term self-interests without recognizing the long-term risks or consequences for themselves and others.', // Index of correct option
    back: "Situational influences can motivate individuals to act in their short-term self-interests without recognizing the long-term risks or consequences for themselves and others.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 36,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-ethics',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following statements is most accurate?",
    options: ['All legal behavior is ethical behavior.', 'Some ethical behavior may be illegal.', 'Legal standards represent the highest standard.'],
    correctAnswer: 'Some ethical behavior may be illegal.', // Index of correct option
    back: "Some ethical behavior may be illegal.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 37,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-ethics',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following statements is most accurate?",
    options: ['New laws designed to reduce or eliminate conduct that adversely affects the markets can create opportunities for different, but similarly problematic, conduct.', 'Increased regulations are the most useful means to reduce unethical behavior by market participants.', 'Regulators quickly design and implement laws and regulations to address practices that adversely affect the fairness and efficiency of markets.'],
    correctAnswer: 'New laws designed to reduce or eliminate conduct that adversely affects the markets can create opportunities for different, but similarly problematic, conduct.', // Index of correct option
    back: "New laws designed to reduce or eliminate conduct that adversely affects the markets can create opportunities for different, but similarly problematic, conduct.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 38,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-ethics',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following statements is most accurate? An ethical decision-making framework:",
    options: ['is used to improve compliance with laws and regulations.', 'is a tool for analyzing the potential alternative actions and consequences of a decision.', 'is only beneficial when a firm lacks a code of ethics.'],
    correctAnswer: 'is a tool for analyzing the potential alternative actions and consequences of a decision.', // Index of correct option
    back: "An ethical decision-making framework is a tool for analyzing the potential alternative actions and consequences of a decision.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 39,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-ethics',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following is most accurate? Ethical decision-making frameworks:",
    options: ['focus attention on short-term consequences.', 'raise awareness of different perspectives.', 'allocate more weight to those who will directly benefit from the decision.'],
    correctAnswer: 'raise awareness of different perspectives.', // Index of correct option
    back: "A is correct. Ethical decision-making frameworks raise awareness of different perspectives. The framework should consider short-term consequences, but they are not the focus of the framework. Similarly, the framework may allocate more weight to those who directly benefit from decisions, but this is not the primary goal of an ethical decision-making framework.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id: 40,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-ethics',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following is most accurate? Ethical decision-making frameworks:",
    options: ['are not needed if behavior is legal.', 'identify who gains the most from a decision.', 'can help reduce unanticipated ethical lapses and unexpected consequences.'],
    correctAnswer: 'can help reduce unanticipated ethical lapses and unexpected consequences.', // Index of correct option
    back: "C is correct. Ethical decision-making frameworks can help avoid unanticipated ethical consequences. As it relates to A, ethics standards are often higher than legal standards so an ethical decision-making framework would be needed. Although B is accurate, identifying who gains most from the decision is a small component of the framework.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 41,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-ethics',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Using an ethical decision-making framework, which of the following duties would most likely take precedence in the scenario described? The financial adviser’s duty to his:",
    options: ['colleagues.', 'client.', 'employer.'],
    correctAnswer: 'client.', // Index of correct option
    back: "Using an ethical decision-making framework, the financial adviser’s relationship with his client would most likely take precedence in this scenario. The adviser should put his client’s interests first. The exception to client interests taking precedence occurs when market integrity effects take precedence.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 42,
    categoryId: 'cfa-level1',
    subcategoryId: 'cfa-l1-ethics',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Using an ethical decision-making framework, the financial adviser would most likely:",
    options: ['recommend that the elderly client invest at least some of his assets in the highly rated fund.', 'disclose the commission he would earn before recommending that the elderly client invest at least some of his assets in the highly rated fund.', 'research other investments that can provide steady income before making a recommendation to his elderly client.'],
    correctAnswer: 'research other investments that can provide steady income before making a recommendation to his elderly client.', // Index of correct option
    back: "Using an ethical decision-making framework, the financial adviser would identify the relevant facts, stakeholders, duties owed, and potential conflicts. In this scenario, the financial adviser owes a duty to his client as well as his employer. His client’s interests take precedence over all other interests. The bonus and his colleague’s desire to help his mother are situational influences. To navigate this situation, the financial adviser should seek additional information; he should research the risk and return parameters and fee structures of other investments that can provide steady income before making a recommendation to his client.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 43,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Fill in the two blanks below using the two of the following four possible terms below to complete: A _____________________ likely has the greatest access to financing, while a _____________________ likely has the least access to financing.",
    options: ['sole proprietorship', 'public limited company (corporation)', 'limited partnership', 'general partnership'],
    correctAnswer: 'A public limited company (corporation) likely has the greatest access to financing, while a sole proprietorship likely has the least access to financing.', // Index of correct option
    back: "A primary difference across organizational forms is access to financing to fund investments. The sole proprietorship is limited to its individual owner’s ability to invest her own money and borrowing capacity as an individual. At the other end of the spectrum, a public limited company can access a broad array of outside investors by issuing debt and/or equity securities.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 44,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following organizational forms provides for the least owner liability of business debts?",
    options: ['Sole proprietorship', 'General partnership', 'Private limited company'],
    correctAnswer: 'Private limited company', // Index of correct option
    back: " In both the sole proprietorship and general partnership forms of organization, the owners are personally liable for all debts assumed by the company. In a private limited company, owner (shareholder) liability is limited to the value of their ownership stake.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 45,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Voting rights of a corporate issuer’s shareholders generally refer to which of the following?",
    options: ['The ability to elect members of the company’s board of directors', 'The ability of the corporation to vote in political elections', 'The direct ability to elect a chief executive officer of the company'],
    correctAnswer: 'The ability to elect members of the company’s board of directors', // Index of correct option
    back: "The voting rights of shareholders generally allow them to elect board members as well as vote on other matters outlined in the company’s charter. The board of directors has the responsibility to hire (or retain) the company’s chief executive officer (CEO); thus, voting rights do not give shareholders the direct ability to hire the CEO. Despite the status of a corporation as a distinct legal entity, this status does not provide voting rights in political elections.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 46,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Explain how the following situation reflects double taxation on the corporate organizational form: The corporation pays a 21% tax rate on pre-tax income of USD100 million. The corporation distributes USD10 million to its shareholders. Individuals pay a 20% tax on dividend income.",
    options: ['', '', ''],
    correctAnswer: 'The corporation pays USD21 million in income taxes at the corporate level and, collectively, the shareholders pay USD2 million in individual income taxes on dividends received. In total, USD23 million in income taxes were paid on the pre-tax income of USD100 million. Effectively, the USD10 million paid as dividends was taxed twice, first as business income and again as personal income.', // Index of correct option
    back: "",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 47,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "True or false: The term “public” for a public corporate issuer means that the company is wholly or partially owned by a government.",
    options: ['True', 'False', 'It depends on the jurisdiction'],
    correctAnswer: 'False', // Index of correct option
    back: "The statement is false because while a public corporate issuer could be owned partly by a government, this condition is not necessary. The term “public” refers only to the fact that a company’s equity securities are traded on an exchange and thus are available for investment by the public.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 48,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "A public company’s shares can be exchanged on a ________________, while a private company’s shares suffer from a lack of price ____________________.",
    options: ['', '', ''],
    correctAnswer: 'A public company’s shares can be exchanged on a stock exchange, while a private company’s shares suffer from a lack of price transparency.', // Index of correct option
    back: "",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 49,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Identify two features that distinguish a general partnership from a limited partnership.",
    options: ['', '', ''],
    correctAnswer: 'Owner–manager relationship: The management of a general partnership is typically shared by the general partners, while in a limited partnership, the general partner often exercises most managerial responsibilities. Owner liability of business debts and obligations: In a general partnership, the partners are personally legally liable for business debt and actions undertaken by the company. In a limited partnership, only the general partner faces personal liability; limited partners’ liability is limited to their investment in the partnership.', // Index of correct option
    back: "",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 50,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "If a company owner expects to have a significant need for financing, which of the following organizational forms is the least appropriate choice?",
    options: ['Sole proprietorship', 'General partnership', 'Limited liability company'],
    correctAnswer: 'Sole proprietorship', // Index of correct option
    back: "A sole proprietorship is limited in financing to the owner’s funds and by the amount the owner can borrow personally. A partnership expands access to financing by adding owners, spreading risk, and adding borrowing capacity. The corporate form provides for the broadest access to financing because there are no limits to the number of shareholders and, with limited liability, shareholders are relatively more comfortable with the company borrowing.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 51,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Fill in the blanks in the following sentence: ________________ liability is a benefit to the corporate organizational form, but the form does face a possible disadvantage because of ________________ taxation of distributed business income.",
    options: ['', '', ''],
    correctAnswer: 'Limited liability is a benefit to the corporate organizational form, but the form does face a possible disadvantage because of double taxation of distributed business income.', // Index of correct option
    back: "",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 52,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "True or False: Partnerships are typically taxed at the entity level rather than at the individual partner level.",
    options: ['True', 'False', 'Sometimes'],
    correctAnswer: 'False', // Index of correct option
    back: "Partnerships are typically pass-through entities, meaning that business income earned by the partnership is passed through to the partners according to the terms of partnership agreement, and each partner is taxed at the personal level.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 53,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Explain why the separation of ownership from management allows for corporate issuers to have greater access to capital.",
    options: ['', '', ''],
    correctAnswer: 'By separating ownership from management responsibilities, corporations can attract a broad range of owners, especially individuals and institutions, who do not want to be involved in management but would like to participate as investors.', // Index of correct option
    back: "",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 54,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Limited liability of shareholders refers to the fact that the ________________ amount shareholders may lose on their investment is the ________________ paid to buy the shares.",
    options: ['', '', ''],
    correctAnswer: 'Limited liability of shareholders refers to the fact that the maximum amount shareholders may lose on their investment is the price paid to buy the shares.', // Index of correct option
    back: "",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 55,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "In which of the following situations does the double taxation of the corporate organizational form matter the least?",
    options: ['The company expects to pay all its after-tax income as a dividend to shareholders each year.', 'The company is expecting to reinvest all its after-tax profits each year into growth of the business.', '"The company’s shareholders reside in a tax jurisdiction with a high tax rate on dividend income."'],
    correctAnswer: 'The company is expecting to reinvest all its after-tax profits each year into growth of the business.', // Index of correct option
    back: "Reinvestment of all profits implies that the company pays no dividend to shareholders, and thus, no double taxation occurs.A is incorrect. Double taxation occurs because dividend income is taxed at both the corporate level and the shareholders’ personal levels. If all after-tax profits are distributed, shareholders are taxed twice on the business’s income.B is incorrect because a high tax rate on shareholders’ dividend income received would be a strong impetus to retain profits, find alternative means of distributing profits, or change the organizational form.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 56,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Corporate issuers are characterized by all of the following except:",
    options: ['The owners of the corporation are not legally distinct from the corporation.', 'Corporate income is taxed at both the corporate and personal levels.', 'Owners do not need to be involved in management of the company.'],
    correctAnswer: 'The owners of the corporation are not legally distinct from the corporation.', // Index of correct option
    back: "A corporation is a legally separate entity from its owners.A is incorrect because corporate income is taxed at both the corporate and personal levels unless the company pays zero dividends.B is incorrect because shareholders are not required to exercise management control over the company. While in some cases, a large shareholder may serve as senior management or be on the board of directors, most shareholders do not take on management responsibilities.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 57,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "primary features distinguishing public and private companies include",
    options: ['', '', ''],
    correctAnswer: 'a. the ability to transfer ownership between investors,b. the process of issuing new shares, and c. registration and disclosure requirements. ', // Index of correct option
    back: "",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 58,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Accredited investors are the capital providers qualified by regulators to invest in public companies. Justify your answer.",
    options: ['false', 'True', ''],
    correctAnswer: 'false', // Index of correct option
    back: "The statement is false. Accredited investors are judged by regulators to have the sophistication for understanding and assuming the risks that come with investing in private, not public, companies.  ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 59,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "A corporate issuer has the following attributes: It has no need for new equity financing, its debt needs are well satisfied through its existing credit facility with a bank, and it has a majority owner that exercises management control of the company. Is this corporate issuer more likely public or private?",
    options: ['public', 'private', ''],
    correctAnswer: 'private', // Index of correct option
    back: "The lack of need for new equity capital implies less reason to have exchange-listed stock, as does the ability to operate the business with the current debt capacity available under its existing credit facility. The majority owner exercising management control could possibly imply either public or private status, although combined with the first two attributes, it is doubtful that such a company would be public.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 60,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following does not reflect a primary difference between an initial public offering (IPO) and a direct listing?",
    options: ['Whether or not employees own shares in the private company', 'Whether or not the amount of capital raised', 'Whether or not the timeline for the listing process'],
    correctAnswer: 'Whether or not employees own shares in the private company', // Index of correct option
    back: "A company with employee shareholders can go public with either an IPO or a direct listing; employee shareownership does not differ by the choice of transaction.C is incorrect. An IPO uses an underwriter to manage the process and underwrite the purchase of new shares, while a direct listing does not. B is incorrect. An IPO raises new capital for the listing company by issuing new shares to the public, while a direct listing does not; it lists only existing shares.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 61,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following statements does not provide an argument for using a derivative instrument?",
    options: ['Derivatives typically have lower transaction costs than transacting directly in the underlying.', 'Large exposures to an underlying can be created with derivatives for a similar cash outlay', 'Issuers may offset the financial market exposure associated with a commercial transaction.'],
    correctAnswer: 'Large exposures to an underlying can be created with derivatives for a similar cash outlay', // Index of correct option
    back: "Derivative contracts create an exposure to the underlying with a small cash outlay, so this is the statement that does not provide an argument for using a derivative instrument. Statements A and B are statements that are valid arguments for using derivatives.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 62,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "True or False: Debtholders, unlike equity holders, have symmetric potential downside losses and upside gains.",
    options: ['True', 'False', 'It depends on the specific terms of the debt agreement.'],
    correctAnswer: 'False', // Index of correct option
    back: "B is correct; the statement is false. Both debtholders and equity holders have asymmetric potential payoffs. For debtholders, potential upside gains are limited to interest and principal repayments, regardless of how high the value of the firm rises. In contrast, if the value of the firm falls below the value of its debt, debtholders can lose up to their initial investment.For equity holders, equity value is determined as the value of the firm less the value of its debt. Potential upside gains to shareholders are limited only by the future value of the firm, while shareholder losses, like those of debtholders, are limited to their initial investment.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 63,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Interest payments to debtholders are:",
    options: ['at the discretion of the board.', 'deductible for corporate income tax purposes', 'residual payments.'],
    correctAnswer: 'deductible for corporate income tax purposes', // Index of correct option
    back: "C is correct. Interest payments on debt are tax deductible for the firm. A is incorrect. Debtholders have priority claims on the cash flows of the firm over shareholders. B is incorrect. Interest payments are contractual, not discretionary like shareholder dividends.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id: 64,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "In investment decisions, the risk premium:",
    options: ['guarantees that expected returns meet actual returns.', 'compensates investors for uncertainty associated with returns', 'ensures that risk-free investments deliver consistent returns over time.'],
    correctAnswer: 'compensates investors for uncertainty associated with returns', // Index of correct option
    back: "The correct answer is B. The risk premium compensates for the risk associated with the variance between expected, ex ante, and actual, ex post, returns. It compensates for the uncertainty between expected and realized returns. The size of the compensation reflects the increased uncertainty about expected returns: The higher the uncertainty, the higher the risk premium. Answer A is incorrect. The risk premium cannot guarantee that expected returns will always meet realized returns. The risk premium compensates for the inherent uncertainty between expectations and outcomes. Answer C is incorrect. The risk premium is not intended to make risk-free investments deliver consistent returns over time. Risk-free investments do not face default or reinvestment risk.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

   {
    id: 65,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "An investor purchases 1,000 shares at USD100 per share. After she receives a dividend of USD3 per share one year later, she sells the shares for USD120 per share. Her tax rate is 25% on capital gains and 15% on capital distributions. Her after-tax return for the year is closest to:",
    options: [' ', ' ', ' '],
    correctAnswer: '17.55%', // Index of correct option
    back: "r net − tax = r price × (1− tax capital gains) + r distributions × (1 – tax distributions). a. First, the price return is calculated: r price = (p1-p0)/p0 = 120 -100/100 =20% b. Then, the capital distribution return is calculated: r dist = inc / p0 = 3/100 = 3% c. Finally, the respective after-tax returns are calculated: rprice × (1 – taxcapital gains) + rdistributions × (1 – taxdistributions) = 20.0% × (1 – 25%) + 3.0% × (1 – 15%) = 15.0% + 2.55% = 17.55%.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

   {
    id: 66,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "A stock experiences a continuously compounded return of 10% for the first half of a year and 40% for the second half. Its continuously compounded return for the full year is closest to:",
    options: [' ', ' ', ' '],
    correctAnswer: '50%', // Index of correct option
    back: "The correct response is A, 50.00%. Contiuously compounded returns are additive over time. For each period’s return, we directly add them: 10% for the first half and 40% for the second half, 10% + 40% = 50%. Answer B is incorrect. It does not consider the additive property of continuously compounded returns: 1.1 × 1.4 – 1 = 54%. This treats the returns as if they were realized simple returns for the period and ignores that they are continuously compounded. Answer C is incorrect. It first averages the continuously compounded returns, 10% + 40%  / 2 = 25% , before calculating the period returns, 1.252 – 1 = 56.25%.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

   {
    id: 67,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "SolarTech Innovations’ shares showed the following total returns: Year 1: −10% Year 2: 15% Year 3: 20% Over the three-year period, SolarTech shares had a geometric annual return closest to:",
    options: [' ', ' ', ' '],
    correctAnswer: '7.49%', // Index of correct option
    back: "[ (1 - 0.10) x (1 +. 0.15) x ( 1 + 0.20) ] ^ 1/3   - 1  = 7.49%",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

   {
    id: 68,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Annualized returns are calculated by:",
    options: ['adding all periodic returns within a year.', 'dividing the periodic returns by the number of periods in a year.', 'raising the sum of 1 plus the geometric average periodic return to the power of the number of periods in a year, then subtracting 1.'],
    correctAnswer: 'raising the sum of 1 plus the geometric average periodic return to the power of the number of periods in a year, then subtracting 1.', // Index of correct option
    back: "The correct response is C. Annualized returns are determined by raising the sum of 1 plus the periodic return to the power of the number of periods in a year, then subtracting 1, or rannualized = (1 + rperiod)c – 1. This approach incorporates the compounding effect of returns over multiple periods within a year. Answer A is incorrect. The approach fails to account for the compounding effects of returns, which is essential for accurately annualizing returns. Answer B is incorrect. This approach oversimplifies the calculation and does not accurately capture annualized returns. It neglects the compounding effect, a key aspect in the annualization of returns as seen in the ETF case.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

   {
    id: 69,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Describe the steps for clearing a credit default swap",
    options: [' ', ' ', ' '],
    correctAnswer: 'The counterparties are financial intermediaries that first execute the trade on an SEF (swap execution facility). Then, trade details are shared with a CCP; the novation process substitutes the original contract with another where the CCP steps into the trade and acts as the new counterparty for each original party. The CCP clears and settles the trade.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

   {
    id: 70,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Identify one potential risk concern about the central clearing of derivatives.",
    options: [' ', ' ', ' '],
    correctAnswer: 'The central clearing mandate transfers the systemic risk of derivatives transactions from the counterparties, typically financial intermediaries, to the CCPs. One concern is the centralization and concentration of risks in CCPs. Careful oversight must occur to ensure that these risks are properly managed.', // Index of correct option
    back: "",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id: 71,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "A domestic corporate issuer seeking to finance operations in a foreign market would most likely issue:",
    options: ['foreign bonds', 'domestic bonds', 'Treasury bonds'],
    correctAnswer: 'foreign bonds', // Index of correct option
    back: "Corporate issuers often match the currency of their bond financing cash flows with that of their foreign operations using foreign bonds. The use of domestic bonds would not match the currency of the issuer’s foreign operations. A second possibility would be to issue a domestic bond and then use a swap to obtain the desired foreign currency exposure. However, this method is beyond the scope of this lesson and will be introduced later. Treasury bonds are issued by sovereign issuers.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

   {
    id: 72,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "A bond issued by a South African company denominated in British pounds sold exclusively to investors who are legally domiciled in the United Kingdom would most likely be classified as:",
    options: ['foreign', 'Eurobond', 'domestic'],
    correctAnswer: 'foreign', // Index of correct option
    back: "Bonds sold in a country (United Kingdom) and denominated in that country’s currency (British pounds) by an entity from another country (South Africa) are referred to as foreign bonds.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

   {
    id: 73,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Fill in the blanks. An unregulated bond issued in domestic currency outside the issuer’s national borders is known as a _______________. A bond issued simultaneously in the Eurobond market and in at least one domestic bond market is known as a ____________ bond.",
    options: [' ', ' ', ' '],
    correctAnswer: '', // Index of correct option
    back: "An unregulated bond issued in domestic currency outside the issuer’s national borders is known as a Eurobond. A bond issued simultaneously in the Eurobond market and in at least one domestic bond market is known as a global bond.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

   {
    id: 74,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Identify the following statement as true or false: A bond’s coupon payment is most likely to be taxed as ordinary income.",
    options: ['True', 'False', ' '],
    correctAnswer: 'True', // Index of correct option
    back: "True. Bond interest is usually taxed at the ordinary income tax rate, which is typically the same tax rate that an individual would pay on wage or salary income.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

   {
    id: 75,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "An issuer that would like to conserve near-term cash outflows would most likely issue a:",
    options: ['putable bond', 'callable bond', 'convertible bond'],
    correctAnswer: 'convertible bond', // Index of correct option
    back: "All else equal, an issuer would have the lowest interest payments on a convertible bond. Bondholders are often willing to accept a yield-to-maturity that is very low (or even zero) in exchange for conversion rights. Putable bonds offer lower yields than callable bonds because the put option is a benefit to the bondholder while the call option is a benefit to the issuer. However, the yields on callable and putable bonds are high compared to yields on convertibles.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

   {
    id: 76,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "A convertible bond will closely track its conversion value if the issuer’s share price is:",
    options: ['below the conversion price', ' above the conversion price.', 'equal to the conversion price'],
    correctAnswer: ' above the conversion price.', // Index of correct option
    back: "In general, a convertible bond’s price will vary with that of the issuer’s shares. If the issuer’s share price far exceeds the conversion price, the bond’s price will more closely track its conversion value. If the share price is well below the conversion price, the convertible bond’s price will approach that of a non-convertible bond. In this case, the convertible bond would have a mix of price properties between that of a non-convertible bond and a convertible bond.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

   {
    id: 77,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Callable and putable bond prices with the same coupon rate will behave most like an option-free equivalent bond when their YTMs are, respectively:",
    options: ['below the coupon rate and above the coupon rate.', 'above the coupon rate and below the coupon rate.', 'both near the coupon rate.'],
    correctAnswer: 'above the coupon rate and below the coupon rate.', // Index of correct option
    back: "If a callable bond’s YTM rises above its coupon rate, the call feature is less valuable and a callable bond behaves much like a non-callable bond with respect to price movements due to interest rate changes. If a putable bond’s YTM is less than its coupon rate, the put feature is less valuable and the putable bond’s price behaves like an option-free equivalent bond with respect to interest rate changes. This is the reverse of the correct relationship. If their YTMs are both near the coupon rate, both bonds will be near their price limits where the call and put features would be exercised. Their price changes would be lower in magnitude relative to a non-callable bond.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

   {
    id: 78,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "All else equal, the bond with the greatest benefit to the issuer is a bond with:",
    options: ['a make-whole call provision.', 'no contingency provisions.', 'a fixed-price call provision.'],
    correctAnswer: 'a fixed-price call provision.', // Index of correct option
    back: "Fixed-price calls grant the issuer the right to buy back the bond at a predetermined price in the future, which is a benefit to the issuer if interest rates fall. A bond with no contingency provisions is an option-free bond and is not as beneficial to the issuer as a bond with a fixed-price call provision. A make-whole call is a contingency feature under which issuers can buy bonds back at a price usually based on the yield-to-maturity of a sovereign bond of similar maturity plus a predetermined spread. Make-whole calls are rarely executed and have little economic impact on issuers or investors.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

     {
    id: 79,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Describe how a decrease in the consumer price index would affect the next coupon payment of a capital-indexed inflation-linked bond.",
    options: [' ', ' ', ' '],
    correctAnswer: '', // Index of correct option
    back: "The principal of capital-indexed inflation-linked bonds is adjusted using a price index, with coupon payments calculated using a fixed coupon rate and the adjusted principal. A decrease in the consumer price index (or deflation) will cause the principal of a capital-indexed inflation-linked bond to be adjusted downward in the next period and result in a lower coupon payment.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

     {
    id: 80,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Compared to a bullet bond, an otherwise identical amortizing bond would most likely have:",
    options: ['lower credit risk.', 'lower reinvestment risk.', 'lower near-term cash flows.'],
    correctAnswer: 'lower credit risk.', // Index of correct option
    back: "Compared to a bullet bond, an otherwise identical amortizing bond would have early principal repayments each period instead of all principal paid at maturity, lowering exposure to the issuers credit risk. However, larger periodic payments increase reinvestment risk.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

     {
    id: 81,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Compared to a bond with an original issue discount (OID) tax provision, an otherwise identical bond without this provision would most likely have:",
    options: ['higher taxes due at maturity.', 'the same taxes due at maturity.', 'lower taxes due at maturity.'],
    correctAnswer: 'higher taxes due at maturity.', // Index of correct option
    back: "Under the OID tax provision, the investor will recognize a prorated portion of the OID as taxable income each year and pay no capital gains tax upon maturity. Investors without an OID tax provision will recognize no taxable income until maturity, upon which they will face capital gains tax on the OID (provided there is capital gains tax in their jurisdiction).",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

     {
    id: 82,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: " A put provision embedded in a fixed-income security:",
    options: ['leads to a lower value compared to a bullet bond.', 'is a benefit to the bondholders.', 'increases the likelihood that its issuer will be acquired.'],
    correctAnswer: 'is a benefit to the bondholders.', // Index of correct option
    back: "A put provision gives bondholders the right to sell the bonds back to the issuer at a pre-determined price on specified dates. The put provision is a benefit to bondholders because it can protect them from the risk of the price of the bond falling from, for example, rising interest rates. As put provisions are beneficial to investors, putable bonds are priced at a premium, not a discount, relative to option-free counterparts. Put provisions can deter acquirers because the exercise of putable bonds results in an immediate claim on cash, making the acquisition more expensive. Issuing bonds with put provisions is a strategy employed by some firms to deter unfriendly takeovers known as a “poison puts.”",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

     {
    id: 83,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "A call provision embedded in a fixed-income security:",
    options: ['grants the bondholder some degree of inflation protection.', 'gives the bondholder the right but not an obligation to sell the bond.', ' is a benefit to the issuer.'],
    correctAnswer: 'is a benefit to the issuer.', // Index of correct option
    back: "A call provision gives the issuer the right to redeem all or part of the bond at a pre-determined price on specified dates. It is a benefit to the issuer because if market interest rates fall, the issuer can replace the callable bond with one with a lower interest rate. It also gives the issuer added flexibility if it has excess cash or wishes to change its capital structure in the future. This describes a putable bond, not a callable bond. If a callable bond is called, the bondholder is obliged to sell it to the issuer according to the specified terms. A call provision does not grant the bondholder inflation protection. A call would be exercised by the issuer if interest rates fall.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

     {
    id: 84,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Gordon, an analyst of household products companies, is employed by a research boutique, Picador & Co. Based on information that she has gathered during a trip through Latin America, she believes that Hygene, Inc., a major marketer of personal care products, has generated better-than-expected sales from its new product initiatives in South America. After modestly boosting her projections for revenue and for gross profit margin in her worksheet models for Hygene, Gordon estimates that her earnings projection of US$2.00 per diluted share for the current year may be as much as 5% too low. She contacts the chief financial officer (CFO) of Hygene to try to gain confirmation of her findings from her trip and to get feedback regarding her revised models. The CFO declines to comment and reiterates management’s most recent guidance of US$1.95–US$2.05 for the year. Gordon decides to try to force a comment from the company by telling Picador & Co. clients who follow a momentum investment style that consensus earnings projections for Hygene are much too low; she explains that she is considering raising her published estimate by an ambitious US$0.15–US$2.15 per share. She believes that when word of an unrealistically high earnings projection filters back to Hygene’s investor relations department, the company will feel compelled to update its earnings guidance. Meanwhile, Gordon hopes that she is correct at least with respect to the earnings direction and that she will help clients who act on her insights to profit from a quick gain by trading on her advice.",
    options: [' ', ' ', ' '],
    correctAnswer: '', // Index of correct option
    back: "By exaggerating her earnings projections in order to try to fuel a quick gain in Hygene’s stock price, Gordon is in violation of Standard II(B). However, it would have been acceptable for Gordon to write a report that framed her earnings projection in a range of possible outcomes and outlined clearly the assumptions used in her Hygene models that took into consideration the findings from her trip through Latin America.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

     {
    id: 85,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Fill in the blanks. Covenant violations provide bondholders recourse in several possible ways, including a change in _________ terms, such as an increase in a bond’s interest rate or security, ___________ debt payments, or ___________ of the debt agreement.",
    options: [' ', ' ', ' '],
    correctAnswer: 'Covenant violations provide bondholders recourse in several possible ways, including a change in financial terms, such as an increase in a bond’s interest rate or security, accelerated debt payments, or termination of the debt agreement.', // Index of correct option
    back: "",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

   {
    id: 86,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Describe the difference between affirmative and negative bond covenants.",
    options: [' ', ' ', ' '],
    correctAnswer: '', // Index of correct option
    back: "Affirmative covenants specify what issuers are required to do, whereas negative covenants specify what issuers are prohibited from doing.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

     {
    id: 87,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Describe the source of repayment for asset-backed securities.",
    options: [' ', ' ', ' '],
    correctAnswer: '', // Index of correct option
    back: "The source of repayment for asset-backed securities are cash flows from the group of loans or receivables owned by the special purpose issuer.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

     {
    id: 88,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Explain the difference in the sources of repayment for a secured and an unsecured corporate bond.",
    options: [' ', ' ', ' '],
    correctAnswer: '', // Index of correct option
    back: "The sole source of repayment for unsecured corporate bonds is typically operating cash flows of the issuer, while secured corporate bonds also include specific assets as a secondary source of debt repayment in addition to the issuer’s operating cash flows.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

     {
    id: 89,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Fill in the blanks. A downward-sloping yield curve indicates that yields-to-maturity on an issuer’s longer-term bonds are __________ than yields-to-maturity on that issuer’s shorter-term bonds.",
    options: [' ', ' ', ' '],
    correctAnswer: '', // Index of correct option
    back: "A downward-sloping yield curve indicates that yields-to-maturity on an issuer’s longer-term bonds are lower than yields-to-maturity on that issuer’s shorter-term bonds.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

     {
    id: 90,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Fill in the blanks. The current yield is equal to a bond’s annual _____ divided by the bond’s price expressed as a percentage. If the bond’s price were to fall, we would expect the current yield to ____.",
    options: [' ', ' ', ' '],
    correctAnswer: '', // Index of correct option
    back: "The current yield is equal to a bond’s annual coupon divided by the bond’s price expressed as a percentage. If the bond’s price were to fall, we would expect the current yield to rise.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

     {
    id: 91,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Describe the purpose of a pari passu clause in a bond indenture.",
    options: [' ', ' ', ' '],
    correctAnswer: '', // Index of correct option
    back: "A pari passu (“equal footing”) clause ensures that a debt obligation is treated the same as the borrower’s other senior debt instruments.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

     {
    id: 92,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following is the appropriate order of claims in liquidation, by type of bond, in order of highest to lowest?",
    options: ['Senior unsecured, senior secured, junior', 'Senior secured, senior unsecured, junior', 'Junior, senior secured, senior unsecured'],
    correctAnswer: 'Senior secured, senior unsecured, junior', // Index of correct option
    back: "C is correct. Senior secured debts would be the highest-priority claims to be satisfied. Senior unsecured debts would be the next to receive allocations of the liquidated asset value, and junior debts would be the lowest-priority claims to be satisfied.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

     {
    id: 93,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "A sovereign bond is usually a safer investment than a corporate bond of similar maturity issued within a country because:",
    options: ['sovereign bonds are secured by high-quality collateral, such as property and equipment.', 'corporate bonds are subject to inflation risk.', 'sovereign bonds are backed by taxation and fiscal power of the issuing government.'],
    correctAnswer: 'sovereign bonds are backed by taxation and fiscal power of the issuing government.', // Index of correct option
    back: "Sovereign bonds are backed by a national government’s taxation and fiscal power and thus usually represent the highest-credit-quality bonds in each geographic market. X is incorrect because sovereign bonds, unless specifically indexed to inflation, are also subject to inflation risk. X is incorrect because sovereign bonds are typically not secured by collateral; this is more commonly a feature of corporate bonds and asset-backed securities.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

     {
    id: 94,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "The annual coupon amount for a fixed-rate bond is calculated by:",
    options: ['multiplying its yield by the par value of the bond.', 'Multiplying its coupon rate by the par value of the bond.', 'Multiplying its coupon rate by the price of the bond.'],
    correctAnswer: 'Multiplying its coupon rate by the par value of the bond.', // Index of correct option
    back: "On each interest payment date, a fixed-rate bond issuer pays investors a coupon payment equal to the bond’s coupon rate times its par value. For periods shorter than a year, the annual coupon amount is divided into smaller equal periodic payments. For example, a bond with a par value of 100 and a coupon rate of 6% paid quarterly would pay coupon payments of (0.06 x 100)/4 = 1.5, four times per year.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

   {
    id:95,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following words makes the following statement correct? Market participants use derivative agreements to exchange cash flows in the future based on a(n) _________________.",
    options: ['Hedge', 'Option', 'Underlying'],
    correctAnswer: 'Underlying', // Index of correct option
    back: "Market participants use derivative agreements to exchange cash flows in the future based on an underlying. B is incorrect because option refers to a specific derivative contract type. C is incorrect because hedge refers to a specific purpose of using a derivative contract.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:96,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following is a significant difference between exchange-traded derivative (ETD) and over the counter (OTC) derivative contracts?",
    options: ['ETDs create counterparty credit risk for derivative users, while OTC derivatives do not.', 'ETDs are standardized contracts, while OTC derivatives are customized.', 'ETDs have higher transaction costs compared to OTC derivatives.'],
    correctAnswer: 'ETDs are standardized contracts, while OTC derivatives are customized.', // Index of correct option
    back: "Exchanges standardize contracts to facilitate trading volume. However, users often require specific customized features, and the OTC market can accommodate these needs. A is incorrect because exchanges bear the counterparty credit risk of derivatives. C is incorrect because ETDs have lower transaction costs compared to OTC derivatives.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:97,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: " If a corporate issuer enters into a centrally cleared OTC derivative contract, which of the following risks is likely of most concern to the issuer and other participants in this market?",
    options: ['Counterparty credit risk', 'Systemic risk', 'Interest rate risk'],
    correctAnswer: 'Systemic risk', // Index of correct option
    back: "Because all the credit risk is taken on by the CCP, all participants in this market are most concerned that the CCP is able to satisfy its obligations to all contracts. A is incorrect because interest rate risk is an underlying risk that can be hedged or managed with certain OTC derivative contracts. B is incorrect because the CCP assumes the credit risk from all parties to the contracts.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:98,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: " Identify one reason why an issuer may use a derivative instrument.",
    options: [' ', ' ', ' '],
    correctAnswer: 'An issuer may use a derivative to offset the financial market exposure associated with a commercial transaction. An issuer may also use a derivative to offset or neutralize existing or anticipated exposure to an underlying.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:99,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Determine the correct answers to fill in the blanks: Equities are an example of a derivative ____________, and a _______________ is a legal entity entering a derivative contract.",
    options: [' ', ' ', ' '],
    correctAnswer: 'Equities are an example of a derivative underlying, and a counterparty is a legal entity entering a derivative contract.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:100,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Describe the use of a derivative for hedging purposes.",
    options: [' ', ' ', ' '],
    correctAnswer: 'Use of a derivative for hedging purposes involves offsetting or neutralizing an existing or anticipated exposure to an underlying, referred to as hedging.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:101,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Explain the settlement of a forward contract.",
    options: [' ', ' ', ' '],
    correctAnswer: 'A forward contract is a firm commitment. This contract results in a settlement payment on the maturity date equal to the difference between the current market price and a pre-agreed forward price.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:102,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Describe how and why an underlying may be used in employee compensation.",
    options: [' ', ' ', ' '],
    correctAnswer: 'Derivatives with an equity underlying, in particular the stock of a particular issuer, may be included in the compensation of that company’s employees. Stock options are granted to provide incentives to work toward stronger corporate performance in the expectation of a higher stock price, which will cause the options to increase in value.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:103,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Explain how a UK-based importer of goods from the euro zone might use a derivative with a currency underlying to mitigate risk.",
    options: [' ', ' ', ' '],
    correctAnswer: 'A UK-based importer of goods from the euro zone will likely pay EUR for goods that she intends to sell for GBP. To address this currency mismatch, she may consider entering a firm commitment to purchase EUR in exchange for GBP at a pre-determined price in the future based upon terms matching the import contract to offset risk to changes in the underlying spot exchange rate (i.e., GBP depreciation against EUR)', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:104,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Taylor, a mining analyst with Bronson Brokers, is invited by Precision Metals to join a group of his peers in a tour of mining facilities in several western US states. The company arranges for chartered group flights from site to site and for modest accommodations in Spartan Motels, the only chain with accommodations near the mines, for three nights. Taylor allows Precision Metals to pick up his tab, as do the other analysts, with one exception—Adams, an employee of a large trust company who insists on following his company’s policy and paying for his hotel room himself.",
    options: [' ', ' ', ' '],
    correctAnswer: 'The policy of the company where Adams works complies closely with Standard I(B) by avoiding even the appearance of a conflict of interest, but Taylor and the other analysts did not necessarily violate Standard I(B). In general, when allowing companies to pay for travel and/or accommodations in these circumstances, members and candidates must use their judgment. They must be on guard that such arrangements do not impinge on a member’s or candidate’s independence and objectivity. In this example, the trip was strictly for business and Taylor was not accepting irrelevant or lavish hospitality. The itinerary required chartered flights, for which analysts were not expected to pay. The accommodations were modest. In the final analysis, members and candidates must consider both whether they can remain objective and whether their integrity might be perceived by their clients to have been compromised.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:105,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Dillon, an analyst in the corporate finance department of an investment services firm, is making a presentation to a potential new business client that includes the promise that her firm will provide full research coverage of the potential client.",
    options: [' ', ' ', ' '],
    correctAnswer: 'Dillon may agree to provide research coverage, but she must not commit her firm’s research department to providing a favorable recommendation. The firm’s recommendation (favorable, neutral, or unfavorable) must be based on an independent and objective investigation and analysis of the company and its securities.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:106,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Fritz is an equity analyst at Hilton Brokerage who covers the mining industry. He has concluded that the stock of Metals & Mining is overpriced at its current level, but he is concerned that a negative research report will hurt the good relationship between Metals & Mining and the investment banking division of his firm. In fact, a senior manager of Hilton Brokerage just sent him a copy of a proposal his firm made to Metals & Mining to underwrite a debt offering. Fritz needs to produce a report right away and is concerned about issuing a less-than-favorable rating.",
    options: [' ', ' ', ' '],
    correctAnswer: 'Fritz’s analysis of Metals & Mining must be objective and based solely on consideration of company fundamentals. Any pressure from other divisions of his firm is inappropriate. This conflict could have been eliminated if, in anticipation of the offering, Hilton Brokerage had placed Metals & Mining on a restricted list.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

   {
    id:107,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: '', // flashcard or multiple-choice
    front: "Fritz is an equity analyst at Hilton Brokerage who covers the mining industry. Fritz has concluded that Metals & Mining stock is overvalued at its current level, but he is concerned that a negative research report might jeopardize a close rapport that he has nurtured over the years with Metals & Mining’s CEO, chief financial officer, and investment relations officer. Fritz is concerned that a negative report might also result in management retaliation—for instance, cutting him off from participating in conference calls when a quarterly earnings release is made, denying him the ability to ask questions on such calls, and/or denying him access to top management for arranging group meetings between Hilton Brokerage clients and top Metals & Mining managers.",
    options: [' ', ' ', ' '],
    correctAnswer: 'Fritz’s analysis must be objective and based solely on consideration of company fundamentals. Any pressure from Metals & Mining is inappropriate. To support the integrity of his conclusions, Fritz should fully document his work, including how his investment recommendation is based on relative valuation.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:108,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: '', // flashcard or multiple-choice
    front: "In her role supporting the sales effort of a corporate bond department, Warner offers credit guidance to fixed-income investors. Her compensation is closely linked to the performance of the corporate bond department. Near the quarter’s end, Warner’s firm has a large inventory position in the bonds of Milton, Ltd., and has been unable to sell the bonds because of Milton’s recent announcement of an operating problem. Salespeople have asked her to contact large clients to push the bonds.",
    options: [' ', ' ', ' '],
    correctAnswer: 'Unethical sales practices create significant potential violations of the Code and Standards. Warner’s opinion of the Milton bonds must not be affected by internal pressure or compensation. In this case, Warner must refuse to push the Milton bonds unless she is able to justify that the market price has already adjusted for the operating problem.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:109,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Jorund, a securities analyst following airline stocks, is a rising star at her firm. Her boss has been carrying a “buy” recommendation on International Airlines and asks Jorund to take over coverage of the airline. He tells Jorund that under no circumstances should the prevailing buy recommendation be changed.",
    options: [' ', ' ', ' '],
    correctAnswer: 'Jorund must be independent and objective in her analysis of International Airlines. If she believes that her boss’s instructions have compromised her, she has two options: She can tell her boss that she cannot cover the company under these constraints, or she can take over coverage of the company, reach her own independent conclusions, and if they conflict with her boss’s opinion, share the conclusions with her boss or other supervisors in the firm so that they can make appropriate recommendations. Jorund must issue only recommendations that reflect her independent and objective opinion.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:110,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Grant directs a large amount of his commission business to a New York–based brokerage house. In appreciation for all the business, the brokerage house gives Grant two tickets to the World Cup in South Africa, two nights at a nearby resort, several meals, and transportation via limousine to the game.",
    options: [' ', ' ', ' '],
    correctAnswer: 'Grant violated Standard I(B) because accepting these substantial gifts may impede his independence and objectivity. Members and candidates must not solicit or accept gifts, contributions, or other compensation that affects their independence and objectivity or that reasonably could be expected to influence their decision-making process. Best practice is to avoid situations that might cause or be perceived to cause a loss of independence or objectivity in recommending investments or taking investment action. By accepting the trip, Grant created a conflict of interest and opened himself up to the accusation that he may give the broker favored treatment in return. At a minimum, Grant must disclose this conflict to his employer and clients.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:111,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Green manages the portfolio of Knowlden, a client of Tisbury Investments. Green achieves an annual return for Knowlden that is consistently better than that of the benchmark she and the client previously agreed to. As a reward, Knowlden offers Green two tickets to Wimbledon and the use of Knowlden’s flat in London for a week. Green discloses this gift to her supervisor at Tisbury.",
    options: [' ', ' ', ' '],
    correctAnswer: 'Green is in compliance with Standard I(B) because she disclosed the gift from one of her clients. Members and candidates may accept bonuses or gifts from clients as long as they disclose them to their employer because gifts in a client relationship are deemed less likely to affect a member’s or candidate’s objectivity and independence than gifts in other situations. Disclosure is required, however, so that supervisors can monitor such situations to guard against employees favoring a gift-giving client to the detriment of other fee-paying clients (such as by allocating a greater proportion of IPO stock to the gift-giving client’s portfolio).', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:112,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "____________ make permanent capital available to issuers. (debtholders, shareholders)",
    options: [' ', ' ', ' '],
    correctAnswer: 'Shareholders make permanent capital available to issuers. Debtholders is incorrect. Debt has a finite maturity, though it can be far in the future.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:113,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "____________ have a residual claim against a firm’s cash flows. (debtholders, shareholders)",
    options: [' ', ' ', ' '],
    correctAnswer: 'Shareholders have a residual claim against a firm’s cash flows. Debtholders is incorrect. Debtholders have a priority claim over shareholders to a firm’s cash flows and assets.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:114,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "____________ have a residual claim against a firm’s cash flows. (debtholders, shareholders)",
    options: [' ', ' ', ' '],
    correctAnswer: 'Shareholders have a residual claim against a firm’s cash flows. Debtholders is incorrect. Debtholders have a priority claim over shareholders to a firm’s cash flows and assets.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:115,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "The shareholder theory of corporate governance is _______________ than the stakeholder theory. (narrower, broader)",
    options: [' ', ' ', ' '],
    correctAnswer: 'The shareholder theory of corporate governance is narrower than the stakeholder theory. Stakeholders are groups and individuals with a vested interest in a firm’s success and include, but are not limited to, shareholders.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:116,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "ESG considerations are an explicit objective in the _____________ theory of corporate governance. (shareholder, stakeholder)",
    options: [' ', ' ', ' '],
    correctAnswer: 'ESG considerations are an explicit objective in the stakeholder theory of corporate governance. The stakeholder theory seeks to balance the interests of shareholders with the interests of a broader group that relate to ESG considerations.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:117,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "The estimated impact of ESG factors on corporate issuers’ financial and share price performance has _________________ over time. (decreased, remained the same, increased)",
    options: [' ', ' ', ' '],
    correctAnswer: 'The estimated impact of ESG factors on corporate issuers’ financial and share price performance has increased over time. This impact is the result of changing consumer and investor preferences, increased regulations and taxes related to ESG factors, and the rising threat of climate change.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:118,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "ESG factors are increasingly recognized as _______________ by analysts. (quantifiable, qualitative)",
    options: [' ', ' ', ' '],
    correctAnswer: 'ESG factors are increasingly recognized as quantifiable by analysts. Historically, ESG factors were considered negative externalities with no direct effect on firms’ financial statements. Increasingly, analysts are quantifying the effects of ESG factors and including them in firm valuation and investment decision-making.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:119,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Corporate equity and debt holders share the same investor perspective with respect to:",
    options: ['investment risk.', 'maximum loss.', 'return potential.'],
    correctAnswer: 'maximum loss.', // Index of correct option
    back: "For both equity and debt holders, their initial investment represents their maximum possible loss. The return potential is theoretically unlimited for equity holders, while it is capped for debtholders. Equity holders are exposed to a higher level of investment risk, as they hold a residual claim on the firm’s cash flows that is lower in priority to the debtholders’ claim.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:120,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following groups has a residual claim on an issuer’s cash flows?",
    options: ['Employees', 'Debtholders', 'Shareholders'],
    correctAnswer: 'Shareholders', // Index of correct option
    back: "Shareholders are residual claimants to a firm’s cash flows and receive discretionary distributions after priority claims (e.g., employee compensation, supplier payments, interest expenses, and taxes) are met.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:121,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Which is more sensitive to changes in firm value: debt or equity? Explain your answer.",
    options: [' ', ' ', ' '],
    correctAnswer: 'Equity is more sensitive to changes in firm value, because debtholders have fixed, priority claims while equity holders have residual claims whose value is contingent on future firm profits. On the one hand, if firm value increases, residual value accrues to shareholders while debtholder payments do not change. On the other hand, reductions in firm value fall first on equity holders. If firm value falls below debt value and the firm is declared insolvent, equity holders typically receive nothing and debtholders take control of the firm and often seek to liquidate its assets.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:122,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "All of the following are characteristics of debt except:",
    options: ['priority in payment.', 'limited liability.', 'unlimited return.'],
    correctAnswer: 'unlimited return.', // Index of correct option
    back: "B is correct. Shareholders, not debtholders, have the potential for unlimited return. A is incorrect. Debtholders and shareholders both have limited liability. C is incorrect. Debtholders have a priority claim over shareholders to a firm’s cash flows.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:123,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: " All else being equal, a jurisdiction increasing its corporate income tax rate would most likely lead to ____________________ (lower/higher/the same) use of debt financing by issuers.",
    options: [' ', ' ', ' '],
    correctAnswer: 'Higher. An increase in the corporate income tax rate would likely result in a higher mix of debt. Interest payments on debt are tax deductible, so an increase in the tax rate would reduce the after-tax cost of debt financing, all else being equal, thus making debt financing relatively more attractive than equity financing.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:124,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Describe the risk transfer process in OTC derivative markets.",
    options: [' ', ' ', ' '],
    correctAnswer: 'OTC dealers, known as market makers, typically enter into offsetting transactions with one another to transfer the risk of derivative contracts entered with end users.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:125,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Determine the correct answers to fill in the blanks: ____________ involves the payment of final amounts and/or delivery of securities or physical commodities, while __________ is the process of verifying the execution of a transaction, exchange of payments, and recording the participants.",
    options: [' ', ' ', ' '],
    correctAnswer: 'Settlement involves the payment of final amounts and/or delivery of securities or physical commodities, while clearing is the process of verifying the execution of a transaction, exchange of payments, and recording the participants.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:126,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Identify which of the following choices is most likely an alternative investment:",
    options: ['An investment in a hedge fund focused on traditional assets', 'Shares in a manufacturing firm traded on the Bursa Malaysia exchange', 'A euro foreign exchange future purchased on the Chicago Mercantile exchange'],
    correctAnswer: 'An investment in a hedge fund focused on traditional assets', // Index of correct option
    back: "An investment in a hedge fund, even one that purchases traditional exchange-traded assets, is considered an alternative investment. B is incorrect because shares traded on a public exchange, such as the Bursa Malaysia exchange, are considered traditional, not alternative, investments. C is incorrect because a euro foreign exchange future purchased on a public exchange, such as the Chicago Mercantile exchange, is considered a traditional, not an alternative, investment.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:127,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "An advantage of investing in alternative investments most likely is:",
    options: ['higher expected returns', 'low investment fees.', 'high liquidity.'],
    correctAnswer: 'higher expected returns', // Index of correct option
    back: "Investors are often attracted to alternative investments seeking greater diversification and/or higher expected returns. A is incorrect because investors usually face longer investment periods, reduced liquidity, and less efficient markets with alternative investments than with more traditional assets. B is incorrect because alternative investments often carry higher fees, including performance and/or incentive fees.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:128,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Investors with limited experience most likely enter into alternative investments through:",
    options: ['co-investing', 'direct investing', 'fund investing.'],
    correctAnswer: 'fund investing.', // Index of correct option
    back: "Investors with limited resources and/or experience generally enter into alternative investments through fund investing, where the investor contributes capital to a fund and the fund identifies, selects, and makes investments on the investor’s behalf. A is incorrect because co-investing is more appropriate for investors who already have some experience investing in funds; in co-investing, the investor invests in assets indirectly through the fund but also possesses rights (known as co-investment rights) to invest directly in the same assets. C is incorrect because direct investing, which occurs when an investor makes a direct investment in an asset without the use of an intermediary, is typically reserved for larger and more sophisticated investors.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:129,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "When an investor invests in an asset without the use of an intermediary, it is called:",
    options: ['"co-investing.', 'direct investing.', '"fund investing.'],
    correctAnswer: 'direct investing.', // Index of correct option
    back: "In direct investing, an investor makes a direct investment in an asset without the use of an intermediary. A is incorrect because in co-investing, an investor invests in assets indirectly through a fund but also possesses rights (known as co-investment rights) to invest directly in the same assets. B is incorrect because for fund investing, an investor contributes capital to a fund and the fund, not the investor, identifies, selects, and makes investments on the investor’s behalf.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:130,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which statement regarding alternative investment partnership structures is most accurate?",
    options: ['The fund manager has limited liability for anything that goes wrong.', 'The fund manager is a limited partner, and investors are general partners.', 'Investors’ upfront cash outflow can be a small portion of their total commitment to the partnership.'],
    correctAnswer: 'Investors’ upfront cash outflow can be a small portion of their total commitment to the partnership.', // Index of correct option
    back: "Limited partners (LPs) are outside investors who own a fractional interest in the partnership based on the amount of their initial investment and the terms set out in the partnership documentation. LPs commit to future investments, and their upfront cash outflow can be a small portion of their total commitment to the fund. A is incorrect because the fund manager is the fund’s general partner (GP) who runs the business and theoretically bears unlimited liability for anything that goes wrong. B is incorrect because the fund manager is the fund’s general partner, not a limited partner, and the investors are the limited partners.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:131,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "After failing to meet the hurdle rate, which of the following would a general partner still most likely receive as compensation?",
    options: ['Carried interest', 'Management fee', 'Committed capital'],
    correctAnswer: 'Management fee', // Index of correct option
    back: "Alternative investment funds are usually structured with a management fee typically ranging from 1% to 2% of assets under management (e.g., for hedge funds) or 1% to 2% of committed capital (e.g., for private equity funds). (Committed capital is the total amount of money that the limited partners have committed to the fund’s future investments.) A performance fee (also referred to as an incentive fee, carried interest, or carry) is applied based on excess returns. The partnership agreement usually specifies that the performance fee is earned only after the fund achieves a return known as a “hurdle rate.” The hurdle rate is a minimum rate of return that the general partner must exceed in order to earn the performance fee. A is incorrect because “carried interest” is another name for a performance fee, which is earned only after the fund achieves its hurdle rate. C is incorrect because committed capital is the total amount of money that the limited partners have committed to the fund’s future investments, not a fee to the general partner.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:131,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Compensation structures for alternative investments most likely are:",
    options: ['less complex than those of traditional investments.', 'equally complex as those of traditional investments.', 'more complex than those of traditional investments.'],
    correctAnswer: 'more complex than those of traditional investments.', // Index of correct option
    back: " The illiquidity, complexity, and long-term nature of alternative investments require more complex structures to bridge potential gaps between manager and investor interests. Alternative investment structures may explicitly address both the roles and responsibilities of investors and managers to address these gaps. In addition, alternative investment structures tailor the distribution of returns between these two parties to minimize the divergence of incentives between manager and investor. A is incorrect because the compensation structures for alternative investments are more complex, not less complex, than those for traditional investments. B is incorrect because the compensation structures for alternative investments are more complex than, not equally complex as, those for traditional investments.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:132,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Identify the following statement as true or false: Limited partners (LPs) are involved in the management of the alternative investment fund in which they invest; they assist the general partner (GP) in the operations and decisions of the fund.",
    options: ['TRUE', 'FALSE', ' '],
    correctAnswer: 'FALSE', // Index of correct option
    back: "False. LPs play passive roles and are not involved in the management of the fund (although co-investment rights allow LPs to make additional direct investments in the portfolio companies); the operations and decisions of the fund are controlled solely by the GP.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:133,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Determine the correct answers to fill in the blanks: A ____________agrees to manage a fund’s operations under an agreed standard of care and to perform such activities as buying or selling assets, borrowing funds, establishing reserves, or entering into contracts on behalf of the fund. A ____________________ establishes the terms of a limited partnership and governs the actions and decisions of the limited partnership.",
    options: [' ', ' ', ' '],
    correctAnswer: 'A general partner agrees to manage a fund’s operations under an agreed standard of care and to perform such activities as buying or selling assets, borrowing funds, establishing reserves, or entering into contracts on behalf of the fund. A limited partnership agreement (LPA) establishes the terms of a limited partnership and governs the actions and decisions of the limited partnership.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:134,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: " The coupon rate for a floating rate note (FRN) is composed of a market reference rate and:",
    options: ['a credit rating.', 'an issuer-specific spread.', 'The yield on a fixed-rate benchmark bond.'],
    correctAnswer: 'an issuer-specific spread.', // Index of correct option
    back: "An FRN coupon rate comprises a market reference rate (MRR) and an issuer-specific spread that is usually constant and set at the time of issuance, while the MRR resets periodically based on market factors. As the MRR changes, the FRN coupon rate and interest payment change accordingly. Incorrect. While the issuer’s credit rating may be a determinant of an FRN’s spread over the MRR, a credit rating is a letter-grade assessment of credit risk and is not directly involved in the calculation of the coupon rate. Incorrect. The yield on a fixed-rate benchmark bond would reflect top-down factors that determine interest rates, such as real growth and expected inflation, which are already considered in the MRR.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:135,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: " Referring to the Auchan Holding example in this lesson, calculate the amount of the tax disadvantage (in euros) Auchan has in its corporate form compared to if it were organized as a limited partnership. Recall that Auchan’s pre-tax profit was €838 million, the corporate tax rate was 31.5%, the personal income tax rate was 30%, and all after-tax profits were distributed.",
    options: [' ', ' ', ' '],
    correctAnswer: 'If Auchan were organized as a limited partnership, its pre-tax profit would be passed through to the owner(s) and taxes would only be paid at the personal level. Thus, total taxes paid would be €251.4 million (= €838 million × 0.30), or €184.8 million lower than total taxes paid under the corporate organizational form, and this tax of €251.4 million would be paid regardless of whether the partnership distributed the profit to partners.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:136,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "1. In September 2017, Sea Ltd, the Singapore-based technology company, filed a registration statement with the US SEC to register its initial public offering of securities (American Depositary Shares, each representing one Class A Ordinary Share) on the New York Stock Exchange. In addition to a large amount of financial information, the registration statement provided over 50 pages of discussion on Sea Ltd.’s business and industry.",
    options: ['"A. Underwriters’ fairness opinion of the offering', '"B. Assessment of risk factors involved in the business', '"C. Projected cash flows and earnings for the business'],
    correctAnswer: '"B. Assessment of risk factors involved in the business', // Index of correct option
    back: "B is correct. Information provided by companies in registration statements typically includes disclosures about the securities being offered for sale; the relationship of these new securities to the issuer’s other capital securities; the information typically provided in the annual filings; recent audited financial statements; and risk factors involved in the business. Companies provide information useful in developing projected cash flows and earnings but do not typically include these in the registration statement, nor do they provide opinions of the underwriters.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:137,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "A public company acquires a private company. Is the acquired company public or private after the acquisition? Explain the rationale for your choice.",
    options: ['Private', 'Public', 'Neither'],
    correctAnswer: 'Public', // Index of correct option
    back: "Even though the acquired company will not have its own shares, the shareholders of the acquirer own the formerly private company, though the percentage of assets of the combined company attributable to the acquired company may be small. The acquirer’s board of directors and management now operate the newly acquired company.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:138,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Identify a major reason why a national government would be a 100% shareholder in a corporate issuer, and discuss two factors that may cause a national government to reduce its ownership in a state-owned company.",
    options: [' ', ' ', ' '],
    correctAnswer: 'A national government may choose to be the 100% owner of a company that provides public goods to the national economy, such as infrastructure and public safety, that would either not be provided by private means or be delivered inequitably or inefficiently. In some cases, a country may have natural resources, such as crude oil, and the national government may use a wholly owned corporation for production and to invest profits in ways that benefit its country. Two possible reasons that a country may reduce its ownership in a state-owned company include (1) opportunities to bring in foreign capital and diversify the country’s economy, such as the case highlighted by the Saudi Aramco example, and (2) a push for privatization and deregulation to potentially lower costs through competition and motivate innovation, as highlighted by the postal services examples.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:139,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Herrero recently left his job as a research analyst for a large investment adviser. While looking for a new position, he was hired as a contractor by an investor relations firm to write a research report on one of its clients, a small educational software company. The investor relations firm hopes to generate investor interest in the technology company. The firm will pay Herrero a flat fee plus a bonus if any new investors buy stock in the company as a result of Herrero’s report.",
    options: [' ', ' ', ' '],
    correctAnswer: 'If Herrero accepts this payment arrangement, he will be in violation of Standard I(B) because the compensation arrangement can reasonably be expected to compromise his independence and objectivity. Herrero will receive a bonus for attracting investors, which provides an incentive to draft a positive report regardless of the facts and to ignore or play down any negative information about the company. Herrero should accept only a flat fee that is not tied to the conclusions or recommendations of the report. Issuer-paid research that is objective and unbiased is acceptable under certain circumstances as long as the analyst takes steps to maintain his or her objectivity and includes in the report proper disclosures regarding potential conflicts of interest.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

  {
    id:140,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Scott is a performance analyst who is responsible for analyzing the performance of external managers for her firm. While completing her quarterly analysis, Scott notices a change in one manager’s reported composite construction. The change concealed the bad performance of a particularly large account by placing that account into a new residual composite. This change allowed the manager to remain at the top of the list of manager performance. Scott knows her firm has a large allocation to this manager, and the fund’s manager is a close personal friend of the CEO. She needs to deliver her final report but is concerned about pointing out the composite change.",
    options: [' ', ' ', ' '],
    correctAnswer: 'Scott is a performance analyst who is responsible for analyzing the performance of external managers for her firm. While completing her quarterly analysis, Scott notices a change in one manager’s reported composite construction. The change concealed the bad performance of a particularly large account by placing that account into a new residual composite. This change allowed the manager to remain at the top of the list of manager performance. Scott knows her firm has a large allocation to this manager, and the fund’s manager is a close personal friend of the CEO. She needs to deliver her final report but is concerned about pointing out the composite change.', // Index of correct option
    back: " ",
    correctAnswers: 0,
    incorrectAnswers: 0
  },
];

export { flashcardData, parentCategories, subcategories };