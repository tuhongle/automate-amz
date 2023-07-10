const tbody = document.querySelector('tbody');

for (let i = 1; i < 500; i++) {
    const newTR = document.createElement('tr');
    newTR.setAttribute('id', `row${i}`);
    const newtd1 = document.createElement('td');
    newtd1.setAttribute('id', `data${i}_1`);
    // newtd1.innerHTML = `data${i}_1`;
    const newtd2 = document.createElement('td');
    newtd2.setAttribute('id', `data${i}_2`);
    // newtd2.innerHTML = `data${i}_2`;
    const newtd3 = document.createElement('td');
    newtd3.setAttribute('id', `data${i}_3`);
    // newtd3.innerHTML = `data${i}_3`;
    newTR.appendChild(newtd1);
    newTR.appendChild(newtd2);
    newTR.appendChild(newtd3);
    tbody.appendChild(newTR);
}