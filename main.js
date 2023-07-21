const tbody = document.querySelector('tbody');

for (let i = 1; i < 500; i++) {
    const newTR = document.createElement('tr');
    newTR.setAttribute('id', `row${i}`);

    // STT
    const newtd0 = document.createElement('td');
    newtd0.setAttribute('id', `data${i}_0`);
    // newtd0.innerHTML = `data${i}_0`;

    // ASIN
    const newtd1 = document.createElement('td');
    const asinLink = document.createElement('a')
    asinLink.setAttribute('id', `data${i}_1`);
    // newtd1.innerHTML = `data${i}_1`;

    // BSR
    const newtd2 = document.createElement('td');
    newtd2.setAttribute('id', `data${i}_2`);
    // newtd2.innerHTML = `data${i}_2`;

    // Date First Availabel
    const newtd3 = document.createElement('td');
    newtd3.setAttribute('id', `data${i}_3`);
    // newtd3.innerHTML = `data${i}_3`;
    
    // Title
    const newtd4 = document.createElement('td');
    newtd4.setAttribute('id', `data${i}_4`);
    // newtd4.innerHTML = `data${i}_4`;

    newTR.appendChild(newtd0);
    newtd1.appendChild(asinLink);
    newTR.appendChild(newtd1);
    newTR.appendChild(newtd2);
    newTR.appendChild(newtd3);
    newTR.appendChild(newtd4);
    tbody.appendChild(newTR);
};