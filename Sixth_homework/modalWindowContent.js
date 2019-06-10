let deleteConfirmation = (index) => {
    let content = document.createElement('div');
    content.className = 'deleteContent';
    let header = document.createElement('h1');
    header.innerText = 'Delete this Item??';
    let confirmBtn = document.createElement('button');
    confirmBtn.innerText = 'Yes';
    confirmBtn.className = 'confirmBtn'
    let denyBtn = document.createElement('button');
    denyBtn.innerText = 'No';
    denyBtn.className = 'denyBtn';
    content.appendChild(header);
    content.appendChild(confirmBtn);
    content.appendChild(denyBtn);
    content.addEventListener('click', e => {
        let target = e.target;
        if (target.classList.contains("denyBtn")) {
            document.body.lastChild.remove();
        }
        if (target.classList.contains('confirmBtn')) {
            deleteDataFetch(`${LINKS.data}/${entities[index].id}`)
            entities.splice(index, 1);

            createTable();
            document.body.lastChild.remove();
        }
    })
    return content;

}

let changeEntity = (index) => {
    let content = document.createElement('div');
    content.className = 'changeContent';

    for (let key in entities[index]) {
        let fielLabel = document.createElement("label");
        fielLabel.setAttribute('for', key);
        fielLabel.innerText = key;
        fielLabel.className = 'changeFieldLabel';
        let input = document.createElement('input');
        input.id = key;
        input.className = 'changeField'
        input.value = entities[index][key];
        content.appendChild(fielLabel);
        content.appendChild(input);

    }
    let saveBtn = document.createElement('button');
    saveBtn.className = 'saveBtn';
    saveBtn.innerText = 'Save';
    content.appendChild(saveBtn);
    content.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains('saveBtn')) {
            let inputs = content.children;
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].nodeName == 'INPUT') {
                    for (let key in entities[index]) {
                        if (inputs[i].id == key) {
                            entities[index][key] = inputs[i].value;
                        }
                    }
                }
            }
            createTable();
            putDataFetch(`${LINKS.data}/${entities[index].id}`, entities[index])
            document.body.lastChild.remove();
        }
    })
    return content;
}

let showInformation = (index) => {
    let content = document.createElement("div");
    content.className = 'infoContent';
    let infoTable = document.createElement('table');
    infoTable.className = 'infoTable';
    let tBody = document.createElement('tbody');
    for (let key in entities[index]) {
        let tr = document.createElement('tr');
        let fieldName = document.createElement('td');
        let fieldValue = document.createElement('td');
        fieldName.innerText = key;
        fieldValue.innerText = entities[index][key];
        tr.appendChild(fieldName);
        tr.appendChild(fieldValue);
        tBody.appendChild(tr);
    }
    infoTable.appendChild(tBody);
    content.appendChild(infoTable);
    return content;
}