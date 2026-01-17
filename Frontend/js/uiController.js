const elements = {
    totalIncome: document.getElementById('totalIncome'),
    totalExpense: document.getElementById('totalExpense'),
    balance: document.getElementById('balance'),
    transactionList: document.getElementById('transactionList'),
    emptyState: document.getElementById('emptyTransactions')
};
export const updateSummaryDisplay = ({ income, expense, balance }) => {
    elements.totalIncome.textContent = formatCurrency(income);
    elements.totalExpense.textContent = formatCurrency(expense);
    
    elements.balance.textContent = formatCurrency(balance);
    elements.balance.className = 'amount';
    if (balance < 0) elements.balance.classList.add('negative');
    else if (balance > 0) elements.balance.classList.add('positive');
};

export const renderTransactions = (transactions) => {
    if (!elements.transactionList) return;

    elements.transactionList.innerHTML = '';

    if (transactions.length === 0) {
        elements.emptyState?.style.display = 'block';
        return;
    }

    elements.emptyState?.style.display = 'none';

    // Newest first
    const sorted = [...transactions].sort((a,b) => new Date(b.date) - new Date(a.date));

    sorted.forEach((t, index) => {
        const item = document.createElement('div');
        item.className = 'transaction-item';
        item.dataset.id = index;

        const sign = t.type === 'income' ? '+' : '-';
        const typeClass = t.type === 'income' ? 'income' : 'expense';

        item.innerHTML = `
            <div class="transaction-info">
                <strong>${t.category}</strong>
                <span class="date">${new Date(t.date).toLocaleDateString('en-GB')}</span>
                ${t.description ? `<p>${t.description}</p>` : ''}
            </div>
            <div class="transaction-amount ${typeClass}">
                ${sign}${formatCurrency(Number(t.amount))}
            </div>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;

        elements.transactionList.appendChild(item);
    });
};
