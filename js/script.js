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
}

//Array de transações
const transactions = [
    { id: 1, description: 'Luz', amount: -50000, date: '23/01/2021' },
    { id: 2, description: 'Website', amount: 50000, date: '23/01/2021' },
    { id: 3, description: 'Internet', amount: -20000, date: '23/01/2021' },

];

const Transaction = {
    incomes() {

    },//soma das entradas

    expenses() {

    },//somar as saidas

    total() {

    }
    //entradas - saidas
}

const DOM = {
    addTransaction(transaction, index) {
        const tr = document.createElement('tr');
        tr.innerHTML = DOM.innerHTMLTrasaction;

    },

    innerHTMLTrasaction() {
        const html = `

        

            <td class="description">Luz</td>
            <td class="expense"> - R$ 500,00</td>
            <td class="date">23/01/2021</td>
            <td> <img src="./assets/minus.svg" alt="Icone de Remover transação"> </td>
        
        `
        return html;
    }
}

DOM.addTransaction()