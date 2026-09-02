
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
    back: "A is correct. A company with employee shareholders can go public with either an IPO or a direct listing; employee shareownership does not differ by the choice of transaction.C is incorrect. An IPO uses an underwriter to manage the process and underwrite the purchase of new shares, while a direct listing does not. B is incorrect. An IPO raises new capital for the listing company by issuing new shares to the public, while a direct listing does not; it lists only existing shares.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 61,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "Which of the following statements does not provide an argument for using a derivative instrument?",
    options: ['Derivatives typically have lower transaction costs than transacting directly in the underlying.', 'Large exposures to an underlying can be created with derivatives for a similar cash outlay.', 'Issuers may offset the financial market exposure associated with a commercial transaction.'],
    correctAnswer: 'Large exposures to an underlying can be created with derivatives for a similar cash outlay.', // Index of correct option
    back: "Derivative contracts create an exposure to the underlying with a small cash outlay, so this is the statement that does not provide an argument for using a derivative instrument. Statements A and B are statements that are valid arguments for using derivatives.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 62,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "2. True or False: Debtholders, unlike equity holders, have symmetric potential downside losses and upside gains.",
    options: ['True.', 'False.', 'It depends on the specific terms of the debt agreement.'],
    correctAnswer: 'False.', // Index of correct option
    back: "B is correct; the statement is false. Both debtholders and equity holders have asymmetric potential payoffs. For debtholders, potential upside gains are limited to interest and principal repayments, regardless of how high the value of the firm rises. In contrast, if the value of the firm falls below the value of its debt, debtholders can lose up to their initial investment.For equity holders, equity value is determined as the value of the firm less the value of its debt. Potential upside gains to shareholders are limited only by the future value of the firm, while shareholder losses, like those of debtholders, are limited to their initial investment.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

    {
    id: 63,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'multiple-choice', // flashcard or multiple-choice
    front: "3. Interest payments to debtholders are:",
    options: ['at the discretion of the board.', 'deductible for corporate income tax purposes.', 'residual payments.'],
    correctAnswer: 'deductible for corporate income tax purposes.', // Index of correct option
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
    options: ['guarantees that expected returns meet actual returns.', 'compensates investors for uncertainty associated with returns.', 'ensures that risk-free investments deliver consistent returns over time.'],
    correctAnswer: 'compensates investors for uncertainty associated with returns.', // Index of correct option
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
    options: ['adding all periodic returns within a year.', 'dividing the periodic returns by the number of periods in a year.', 'C. raising the sum of 1 plus the geometric average periodic return to the power of the number of periods in a year, then subtracting 1.'],
    correctAnswer: 'C. raising the sum of 1 plus the geometric average periodic return to the power of the number of periods in a year, then subtracting 1.', // Index of correct option
    back: "The correct response is C. Annualized returns are determined by raising the sum of 1 plus the periodic return to the power of the number of periods in a year, then subtracting 1, or rannualized = (1 + rperiod)c – 1. This approach incorporates the compounding effect of returns over multiple periods within a year. Answer A is incorrect. The approach fails to account for the compounding effects of returns, which is essential for accurately annualizing returns. Answer B is incorrect. This approach oversimplifies the calculation and does not accurately capture annualized returns. It neglects the compounding effect, a key aspect in the annualization of returns as seen in the ETF case.",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

   {
    id: 69,
    categoryId: 'cfa-level1',
    subcategoryId: '',
    type: 'flashcard', // flashcard or multiple-choice
    front: "Describe the steps for clearing a credit default swap.",
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
    front: "4. Identify one potential risk concern about the central clearing of derivatives.",
    options: [' ', ' ', ' '],
    correctAnswer: 'The central clearing mandate transfers the systemic risk of derivatives transactions from the counterparties, typically financial intermediaries, to the CCPs. One concern is the centralization and concentration of risks in CCPs. Careful oversight must occur to ensure that these risks are properly managed.', // Index of correct option
    back: "",
    correctAnswers: 0,
    incorrectAnswers: 0
  },

];

export { flashcardData, parentCategories, subcategories };