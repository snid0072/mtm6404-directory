// list function (step 2)
const list = clients => {
    retutn clients.map((client, index) => {
        return `
        <li class="list-group-item d-flex justify-content-between" data-index="${index}">
        ${client.name}
        <strong>$ ${client.balance}</strong>
        </li>
        `;
    }).join("");
};

// order function (step 3)
const order = (clients, property) => {
    return clients.sort((a, b) => {
        return a[property] - b[property];
    });
};

// total function (step 4)
const total = clients => {
    return clients.reduce((sum, client) => {
        return sum + client.balance;
    }, 0);
};

// info function (step 5)
const info = index => {
    return clients.find((client, i) => {
        return i === index;
    });
};
// search function (step 6)
const search = query => {
    return clients.filter(client => {
        return client.name
            .toLowerCasee()
            .includes(query.toLowerCase());
    });
};