function Computer() {
    this.info = {}

    this.getCoreType = function () {
        return this.info.coreType;
    }

    this.getHardware = function () {
        return this.info.HardwareType;
    }
    this.getRamType = function () {
        return this.info.ramType;
    }
    this.getManufacturer = function () {
        return this.info.manufacturer
    }
    this.getGraphicsCore = function () {
        return this.info.graphicsCore
    }
    this.getCoreNumb = function () {
        return this.info.coreNumb;
    }
    this.setCoreType = function (parametr) {

        this.info.coreType = parametr;
    }

    this.setHardwareType = function (parametr) {
        this.info.HardwareType = parametr;
    }
    this.setRamType = function (parametr) {
        this.info.ramType = parametr;
    }
    this.setManufacturer = function (parametr) {
        this.info.manufacturer = parametr;
    }
    this.setGraphicsCore = function (parametr) {
        this.info.graphicsCore = parametr;
    }
    this.setCoreNumb = function (parametr) {
        this.info.coreNumb = parametr;
    }
}

function UltraBook() {
    this.HardwareSize;
    this.ramSize;
    Computer.apply(this);

    this.setHardwareSize = function (parametr) {
        this.info.HardwareSize = parametr;
    }
    this.setRamSize = function (parametr) {
        this.info.ramSize = parametr
    }
    this.getHardwareSize = function () {
        return this.HardwareSize
    }
    this.getRamType = function (parametr) {
        return this.ramSize
    }
}

function Server() {
    Computer.apply(this);

    this.setCoreArchtecture = function (paramert) {
        this.info.coreArchtecture = paramert;
    }

    this.setHyperTreading = function (parametr) {
        this.info.HyperTreading = parametr;
    }
    this.getHyperTreading = function () {
        return this.info.HyperTreading
    }

    this.getCoreArchtecture = function () {
        return this.info.coreArchtecture
    }

}

let entities = [];


function newItemSection() {
    function defaultHTML() {
        let block = document.querySelector('.block');

        let createSection = document.createElement('div');
        createSection.className = 'createSection';

        let tableBlock = document.createElement('div');
        tableBlock.className = 'tableBlock';

        let entitySelect = document.createElement('select');
        entitySelect.className = 'entitySelect';
        entitySelect.setAttribute('id', 'entitySelect');

        let entitySelectlabel = document.createElement('label');
        entitySelectlabel.setAttribute('for', 'entitySelect');
        entitySelectlabel.innerText = 'Entity Select';

        let computerOption = document.createElement('option');
        computerOption.setAttribute('value', 'computer');
        computerOption.innerText = 'Computer';

        let ultraBookOption = document.createElement('option');
        ultraBookOption.setAttribute('value', 'ultrabook');
        ultraBookOption.innerText = 'UltraBook';

        let serverOption = document.createElement('option');
        serverOption.setAttribute('value', 'server');
        serverOption.innerText = 'Server';

        let defaulInputs = document.createElement('div');
        defaulInputs.className = 'defaulInputs';


        let coreType = document.createElement('input');
        coreType.setAttribute('type', 'text');
        coreType.setAttribute('id', 'coreType');
        let coreTypeLabel = document.createElement('label');
        coreTypeLabel.setAttribute('for', 'coreType');
        coreTypeLabel.innerText = 'Core Type';

        let ramType = document.createElement('input');
        ramType.setAttribute('type', 'text');
        ramType.setAttribute('id', 'ramType');
        let ramTypeLabel = document.createElement('label');
        ramTypeLabel.setAttribute('for', 'ramType');
        ramTypeLabel.innerText = 'Ram Type';

        let hardwareType = document.createElement('input');
        hardwareType.setAttribute('type', 'text');
        hardwareType.setAttribute('id', 'hardwareType');
        let hardwareTypeLabel = document.createElement('label');
        hardwareTypeLabel.setAttribute('for', 'hardwareType');
        hardwareTypeLabel.innerText = 'Hardware Type';

        let manufacturer = document.createElement('input');
        manufacturer.setAttribute('type', 'text');
        manufacturer.setAttribute('id', 'manufacturer');
        let manufacturerLabel = document.createElement('label');
        manufacturerLabel.setAttribute('for', 'manufacturer');
        manufacturerLabel.innerText = 'Manufacturer';

        let graphicsCore = document.createElement('input');
        graphicsCore.setAttribute('type', 'text');
        graphicsCore.setAttribute('id', 'graphicsCore');
        let graphicsCoreLabel = document.createElement('label');
        graphicsCoreLabel.setAttribute('for', 'graphicsCore');
        graphicsCoreLabel.innerText = 'Graphics Core';

        let coreNumb = document.createElement('input');
        coreNumb.setAttribute('type', 'text');
        coreNumb.setAttribute('id', 'coreNumb');
        let coreNumbLabel = document.createElement('label');
        coreNumbLabel.setAttribute('for', 'coreNumb');
        coreNumbLabel.innerText = 'Core Number';

        defaulInputs.appendChild(coreTypeLabel);
        defaulInputs.appendChild(coreType);

        defaulInputs.appendChild(ramTypeLabel);
        defaulInputs.appendChild(ramType);

        defaulInputs.appendChild(hardwareTypeLabel);
        defaulInputs.appendChild(hardwareType);

        defaulInputs.appendChild(manufacturerLabel);
        defaulInputs.appendChild(manufacturer);

        defaulInputs.appendChild(graphicsCoreLabel);
        defaulInputs.appendChild(graphicsCore);

        defaulInputs.appendChild(coreNumbLabel);
        defaulInputs.appendChild(coreNumb);

        let saveBtn = document.createElement('button');
        saveBtn.innerText = "Save";
        saveBtn.className = 'saveBtn';

        let resetBtn = document.createElement('button');
        resetBtn.innerText = 'Reset';
        resetBtn.className = 'resetBtn';

        let customInputs = document.createElement('div');
        customInputs.className = 'customInputs';

        entitySelect.appendChild(computerOption);
        entitySelect.appendChild(ultraBookOption);
        entitySelect.appendChild(serverOption);
        createSection.appendChild(entitySelectlabel)
        createSection.appendChild(entitySelect);
        createSection.appendChild(defaulInputs);
        createSection.appendChild(customInputs);
        createSection.appendChild(saveBtn);
        createSection.appendChild(resetBtn);
        block.appendChild(createSection);
        block.appendChild(tableBlock)
        createTable();
    }

    function ultrabookFields(block) {
        let hardwareSize = document.createElement('input');
        hardwareSize.setAttribute('type', 'text');
        hardwareSize.setAttribute('id', 'hardwareSize');
        let hardwareSizeLabel = document.createElement('label');
        hardwareSizeLabel.setAttribute('for', 'hardwareSize');
        hardwareSizeLabel.innerText = 'Hardware Size';

        let ramSize = document.createElement('input');
        ramSize.setAttribute('type', 'text');
        ramSize.setAttribute('id', 'ramSize');
        let ramSizeLabel = document.createElement('label');
        ramSizeLabel.setAttribute('for', 'ramSize');
        ramSizeLabel.innerText = 'Ram Size';

        block.appendChild(hardwareSizeLabel);
        block.appendChild(hardwareSize);

        block.appendChild(ramSizeLabel);
        block.appendChild(ramSize);
        return block;
    }

    function serverFields(block) {
        let hyperTreading = document.createElement('input');
        hyperTreading.setAttribute('type', 'text');
        hyperTreading.setAttribute('id', 'hyperTreading');
        let hyperTreadingLabel = document.createElement('label');
        hyperTreadingLabel.setAttribute('for', 'hyperTreading');
        hyperTreadingLabel.innerText = 'Hyper Treading';

        let coreArchtecture = document.createElement('input');
        coreArchtecture.setAttribute('type', 'text');
        coreArchtecture.setAttribute('id', 'coreArchtecture');
        let coreArchtectureLabel = document.createElement('label');
        coreArchtectureLabel.setAttribute('for', 'coreArchtecture');
        coreArchtectureLabel.innerText = 'Core Archtecture';

        block.appendChild(hyperTreadingLabel);
        block.appendChild(hyperTreading);

        block.appendChild(coreArchtectureLabel);
        block.appendChild(coreArchtecture);

        return block;
    }

    function renderHTML() {
        let block = document.querySelector('.block');
        let customInputs = document.querySelector('.customInputs');
        let createSection = document.querySelector('.createSection');
        let entitySelect = document.querySelector('.entitySelect');
        let inputs = null;
        block.addEventListener('click', function (e) {
            let target = e.target;
            if (target.classList.contains('entitySelect')) {
                if (target.value == 'computer') {
                    customInputs.innerHTML = '';

                } else if (target.value == 'ultrabook') {
                    customInputs.innerHTML = '';

                    customInputs.innerHTML = ultrabookFields(customInputs).innerHTML;

                } else if (target.value == 'server') {
                    customInputs.innerHTML = '';

                    customInputs.innerHTML = serverFields(customInputs).innerHTML;

                }
            }
            if (target.classList.contains('createBtn')) {
                createSection.classList.toggle('active');
            }
            if (target.classList.contains('saveBtn')) {
                if (entitySelect.value == 'computer') {
                    inputs = document.querySelectorAll('input');
                    let entity = new Computer();
                    entity.info.entityType = entitySelect.value;
                    for (let i = 0; i < inputs.length; i++) {
                        if (inputs[i].id == 'coreType') {
                            entity.setCoreType(inputs[i].value);
                        }
                        if (inputs[i].id == 'ramType') {
                            entity.setRamType(inputs[i].value);
                        }
                        if (inputs[i].id == 'hardwareType') {
                            entity.setHardwareType(inputs[i].value);
                        }
                        if (inputs[i].id == 'manufacturer') {
                            entity.setManufacturer(inputs[i].value);
                        }
                        if (inputs[i].id == 'graphicsCore') {
                            entity.setGraphicsCore(inputs[i].value);
                        }
                        if (inputs[i].id == 'coreNumb') {
                            entity.setCoreNumb(inputs[i].value);
                        }

                    }
                    entity.info.id = entities.length;
                    entities.push(entity.info);
                    createTable();

                } else if (entitySelect.value == 'ultrabook') {
                    inputs = document.querySelectorAll('input');
                    let entity = new UltraBook();
                    entity.info.entityType = entitySelect.value;
                    for (let i = 0; i < inputs.length; i++) {
                        if (inputs[i].id == 'coreType') {
                            entity.setCoreType(inputs[i].value);
                        }
                        if (inputs[i].id == 'ramType') {
                            entity.setRamType(inputs[i].value);
                        }
                        if (inputs[i].id == 'hardwareType') {
                            entity.setHardwareType(inputs[i].value);
                        }
                        if (inputs[i].id == 'manufacturer') {
                            entity.setManufacturer(inputs[i].value);
                        }
                        if (inputs[i].id == 'graphicsCore') {
                            entity.setGraphicsCore(inputs[i].value);
                        }
                        if (inputs[i].id == 'coreNumb') {
                            entity.setCoreNumb(inputs[i].value);
                        }
                        if (inputs[i].id == 'hardwareSize') {
                            entity.setHardwareSize(inputs[i].value);
                        }
                        if (inputs[i].id == 'ramSize') {
                            entity.setRamSize(inputs[i].value);
                        }

                    }
                    entity.info.id = entities.length;
                    entities.push(entity.info);
                    createTable();

                } else if (entitySelect.value == 'server') {
                    inputs = document.querySelectorAll('input');
                    let entity = new Server();
                    entity.info.entityType = entitySelect.value;
                    for (let i = 0; i < inputs.length; i++) {
                        if (inputs[i].id == 'coreType') {
                            entity.setCoreType(inputs[i].value);
                        }
                        if (inputs[i].id == 'ramType') {
                            entity.setRamType(inputs[i].value);
                        }
                        if (inputs[i].id == 'hardwareType') {
                            entity.setHardwareType(inputs[i].value);
                        }
                        if (inputs[i].id == 'manufacturer') {
                            entity.setManufacturer(inputs[i].value);
                        }
                        if (inputs[i].id == 'graphicsCore') {
                            entity.setGraphicsCore(inputs[i].value);
                        }
                        if (inputs[i].id == 'coreNumb') {
                            entity.setCoreNumb(inputs[i].value);
                        }
                        if (inputs[i].id == 'hyperTreading') {
                            entity.setHyperTreading(inputs[i].value);
                        }
                        if (inputs[i].id == 'coreArchtecture') {
                            entity.setCoreArchtecture(inputs[i].value);
                        }
                    }
                    entity.info.id = entities.length;
                    entities.push(entity.info);
                    createTable();
                }
            }
            if (target.classList.contains('resetBtn')) {
                inputs = document.querySelectorAll('input');
                for (let i = 0; i < inputs.length; i++) {
                    inputs[i].value = '';
                }
            }
        })


    }
    defaultHTML();
    renderHTML();
}

function createTable() {
    let tableBlock = document.querySelector('.tableBlock');

    let table = document.createElement('table');
    table.className = 'itemList';
    let tHead = document.createElement('thead');
    let tBody = document.createElement('tbody');
    let tHeadRow = document.createElement('tr');
    for (let i = 0; i < 7; i++) {
        let th = document.createElement('th');
        if (!i) {
            th.innerText = "Entity Type"
        }
        if (i == 1) {
            th.innerText = 'Core Type';
        }
        if (i == 2) {
            th.innerText = 'Ram Type';
        }
        if (i == 3) {
            th.innerText = 'Hardware Type';
        }
        if (i == 4) {
            th.innerText = 'Manufacturer';
        }
        if (i == 5) {
            th.innerText = 'Graphics Core';
        }
        if (i == 6) {
            th.innerText = '';
        }
        tHeadRow.appendChild(th);
    }
    tHead.appendChild(tHeadRow);
    table.appendChild(tHead);
    for (let i = 0; i < entities.length; i++) {
        let tBodyRow = document.createElement('tr');
        let counter = 0;
        for (let key in entities[i]) {
            let td = document.createElement('td');
            td.innerText = entities[i][key];
            tBodyRow.appendChild(td);
            counter++;
            if (counter >= 6) {
                let btnPart = document.createElement('td');
                btnPart.className = 'btnPart';
                let changeBtn = document.createElement('button');
                changeBtn.className = "changeBtn";
                changeBtn.innerText = 'Change';
                let deleteBtn = document.createElement('button');
                deleteBtn.className = 'deleteBtn';
                deleteBtn.innerText = 'Delete';
                btnPart.appendChild(changeBtn);
                btnPart.appendChild(deleteBtn);
                tBodyRow.appendChild(btnPart);
                break;
            }


        }

        tBody.appendChild(tBodyRow);
    }
    table.appendChild(tBody);
    tableBlock.innerHTML = '';
    tableBlock.appendChild(table);


}

function ModalWindow(content) {
    let modalBlock = document.createElement('div');
    modalBlock.className = 'modalBlock';
    let modalContent = document.createElement('div');
    modalContent.className = 'modalContent';
    let modalCloseBtn = document.createElement('button');
    modalCloseBtn.className = 'modalCloseBtn';
    modalContent.appendChild(modalCloseBtn);
    modalBlock.appendChild(modalContent);
    modalContent.appendChild(content);
    document.body.appendChild(modalBlock);
    this.closeModal = function () {
        document.body.lastChild.remove();
    }
    modalBlock.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains('modalCloseBtn')) {
            this.closeModal();
        }
    })
}


function deleteConfirmation(index) {
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
            entities.splice(index, 1);
            createTable();
            document.body.lastChild.remove();
        }
    })
    return content;

}

function changeEntity(index) {
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
    content.addEventListener('click', function (e) {
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
            document.body.lastChild.remove();
        }
    })
    return content;
}

function mainBlock() {
    let main = document.querySelector('.block');
    let createBtn = document.createElement('button');
    createBtn.className = 'createBtn';
    createBtn.innerText = 'New';
    main.appendChild(createBtn);
    newItemSection();
    main.addEventListener("click", function (e) {
        let target = e.target;
        if (target.classList.contains('changeBtn')) {
            let index = target.parentNode.parentNode.rowIndex - 1;
            let changeWindow = new ModalWindow(changeEntity(index));
            changeEntity(index);
        } else if (target.classList.contains('deleteBtn')) {
            let index = target.parentNode.parentNode.rowIndex - 1;
            let deleteWindow = new ModalWindow(deleteConfirmation(index));


        }
    })

}
mainBlock()