
function calculateTotalIncome(transactions) {
    return transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + parseFloat(t.amount), 0);
}

function calculateTotalExpenses(transactions) {
    return transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + parseFloat(t.amount), 0);
}

function calculateBalance(income, expenses) {
    return income - expenses;
}

function getCategoryTotals(transactions, type = 'all') {
    let filtered = transactions;

    if (type !== 'all') {
        filtered = transactions.filter(t => t.type === type);
    }

    return filtered.reduce((acc, t) => {
        const category = t.category || 'uncategorized';
        acc[category] = (acc[category] || 0) + parseFloat(t.amount);
        return acc;
    }, {});
}

function getMonthlyTransactions(transactions) {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    return transactions.filter(t => {
        const date = new Date(t.date);
        return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
    });
}

function getTransactionsByDateRange(transactions, startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    return transactions.filter(t => {
        const date = new Date(t.date);
        return date >= start && date <= end;
    });
}

function calculateAverageDailySpending(transactions, days = 30) {
    const expenses = calculateTotalExpenses(transactions);
    return expenses / days;
}

function getTopSpendingCategories(transactions, limit = 5) {
    const categoryTotals = getCategoryTotals(transactions, 'expense');

    return Object.entries(categoryTotals)
        .map(([category, amount]) => ({ category, amount }))
        .sort((a, b) => b.amount - a.amount)
        .slice(0, limit);
}

function calculateBudgetStatus(transactions, budgetLimit) {
    const monthlyTransactions = getMonthlyTransactions(transactions);
    const spent = calculateTotalExpenses(monthlyTransactions);
    const remaining = budgetLimit - spent;
    const percentage = (spent / budgetLimit) * 100;

    return {
        spent,
        remaining,
        percentage: Math.min(percentage, 100),
        overBudget: spent > budgetLimit,
        budgetLimit
    };
}

/**
 * Get category budget status
 * @param {Array} transactions - Array of transaction objects
 * @param {Object} categoryBudgets - Object with category budgets {category: limit}
 * @returns {Array} Array of budget status objects for each category
 */
function getCategoryBudgetStatus(transactions, categoryBudgets) {
    const monthlyTransactions = getMonthlyTransactions(transactions);
    const categoryTotals = getCategoryTotals(monthlyTransactions, 'expense');

    return Object.entries(categoryBudgets).map(([category, limit]) => {
        const spent = categoryTotals[category] || 0;
        const remaining = limit - spent;
        const percentage = (spent / limit) * 100;

        return {
            category,
            spent,
            remaining,
            limit,
            percentage: Math.min(percentage, 100),
            overBudget: spent > limit
        };
    });
}

function calculateIncomeExpenseRatio(transactions) {
    const income = calculateTotalIncome(transactions);
    const expenses = calculateTotalExpenses(transactions);
    const total = income + expenses;

    if (total === 0) {
        return { incomePercentage: 0, expensePercentage: 0 };
    }

    return {
        incomePercentage: (income / total) * 100,
        expensePercentage: (expenses / total) * 100,
        savingsRate: income > 0 ? ((income - expenses) / income) * 100 : 0
    };
}

function getRecentTransactions(transactions, limit = 10) {
    return [...transactions]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, limit);
}

function searchTransactions(transactions, query) {
    const lowerQuery = query.toLowerCase();

    return transactions.filter(t => {
        return (
            t.description.toLowerCase().includes(lowerQuery) ||
            t.category.toLowerCase().includes(lowerQuery) ||
            t.amount.toString().includes(lowerQuery)
        );
    });
}

function calculateMonthlyComparison(transactions) {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;

    const currentMonthTransactions = transactions.filter(t => {
        const date = new Date(t.date);
        return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
    });

    const previousMonthTransactions = transactions.filter(t => {
        const date = new Date(t.date);
        return date.getMonth() === previousMonth && date.getFullYear() === previousYear;
    });

    const currentIncome = calculateTotalIncome(currentMonthTransactions);
    const currentExpenses = calculateTotalExpenses(currentMonthTransactions);
    const previousIncome = calculateTotalIncome(previousMonthTransactions);
    const previousExpenses = calculateTotalExpenses(previousMonthTransactions);

    const incomeChange = previousIncome > 0
        ? ((currentIncome - previousIncome) / previousIncome) * 100
        : 0;

    const expenseChange = previousExpenses > 0
        ? ((currentExpenses - previousExpenses) / previousExpenses) * 100
        : 0;

    return {
        current: {
            income: currentIncome,
            expenses: currentExpenses,
            balance: currentIncome - currentExpenses
        },
        previous: {
            income: previousIncome,
            expenses: previousExpenses,
            balance: previousIncome - previousExpenses
        },
        changes: {
            income: incomeChange,
            expenses: expenseChange,
            incomeDirection: incomeChange >= 0 ? 'up' : 'down',
            expenseDirection: expenseChange >= 0 ? 'up' : 'down'
        }
    };
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateTotalIncome,
        calculateTotalExpenses,
        calculateBalance,
        getCategoryTotals,
        getMonthlyTransactions,
        getTransactionsByDateRange,
        calculateAverageDailySpending,
        getTopSpendingCategories,
        calculateBudgetStatus,
        getCategoryBudgetStatus,
        calculateIncomeExpenseRatio,
        getRecentTransactions,
        searchTransactions,
        calculateMonthlyComparison
    };
}

