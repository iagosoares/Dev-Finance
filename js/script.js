const Modal = {
    open() {

        document
            .querySelector(".modal-overlay")
            .classList.add("active");


    },

    close() {

        document
            .querySelector(".modal-overlay")
            .classList.remove("active");

    },


};

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : "";
        value = String(value).replace(/\D/g, "");
        value = Number(value) / 100;
        value = value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
        return signal + value;
    }
};

const App = {
    init() {

        Transaction.all.forEach((transaction) => {
            DOM.addTransaction(transaction);
        });

        DOM.updateBalance()


        




    },

    reload() { 
        DOM.clearTransactions()
        App.init()
    },
};

//Array de transações
const transactions = [
    { id: 1, description: 'Luz', amount: -50000, date: '23/01/2021' },
    { id: 2, description: 'Website', amount: 50000, date: '23/01/2021' },
    { id: 3, description: 'Internet', amount: -20000, date: '23/01/2021' },

];

const Transaction = {

    all: transactions,

    add(transaction) {
        Transaction.all.push(transaction);
        App.reload()
    },


    incomes() {
        let income = 0;

        Transaction.all.forEach((transaction) => {
            if (transaction.amount > 0) {
                income += transaction.amount;
            }
        });
        return income;

    },//soma das entradas

    expenses() {

        let expense = 0;

        Transaction.all.forEach((transaction) => {
            if (transaction.amount < 0) {
                expense += transaction.amount;
            }
        });

        return expense;

    },//somar as saidas

    total() {

        return Transaction.incomes() + Transaction.expenses();

    }
    //entradas - saidas
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTrasaction(transaction);

        DOM.transactionsContainer.appendChild(tr);

    },

    innerHTMLTrasaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense";

        const amount = Utils.formatCurrency(transaction.amount);


        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}"> ${amount}</td>
            <td class="date">${transaction.date}</td>
            <td> <img src="./assets/minus.svg" alt="Icone de Remover transação"> </td>
        
        `
        return html;
    },


    updateBalance() {
        document.getElementById('incomeDisplay').innerHTML = Utils.formatCurrency(Transaction.incomes());
        document.getElementById('expenseDisplay').innerHTML = Utils.formatCurrency(Transaction.expenses());
        document.getElementById('totalDisplay').innerHTML = Utils.formatCurrency(Transaction.total());
    },

    clearTransactions() {
        DOM.transactionsContainer.innerHTML = '';
    }
}

App.init()

Transaction.add({
    id: 39,
    description: 'ALO',
    amount: 200,
    date: '23/01/2020',


})

