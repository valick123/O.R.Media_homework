let newItemSection = () => {
    let defaultHTML = () => {
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
    }

    let ultrabookFields = (block) => {
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

    let serverFields = (block) => {
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

    let renderHTML = () => {
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
            if (target.classList.contains("getDataBtn")) {
                getDataFetch(LINKS.data)
                createTable()

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
                    entity.info.id = entities.length + 1;
                    entities.push(entity.info);
                    createTable();
                    postDataFetch(LINKS.data)

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
                    entity.info.id = entities.length + 1;

                    entities.push(entity.info);
                    postDataFetch(LINKS.data)
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
                    entity.info.id = entities.length + 1;

                    entities.push(entity.info);
                    postDataFetch(LINKS.data)
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

let createTable = () => {
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
            th.setAttribute('id', "entityType")
        }
        if (i == 1) {
            th.innerText = 'Core Type';
            th.setAttribute('id', 'coreType')
        }
        if (i == 2) {
            th.innerText = 'Ram Type';
            th.setAttribute('id', 'ramType')
        }
        if (i == 3) {
            th.innerText = 'Hardware Type';
            th.setAttribute('id', 'HardwareType')
        }
        if (i == 4) {
            th.innerText = 'Manufacturer';
            th.setAttribute('id', 'manufacturer')
        }
        if (i == 5) {
            th.innerText = 'Graphics Core';
            th.setAttribute('id', 'graphicsCore')
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
            td.dataset.info = tHeadRow.children[counter].id;
            if (td.dataset.info === key) {
                td.innerText = entities[i][key];

            }

            tBodyRow.appendChild(td);
            counter++;
            if (counter >= tHeadRow.children.length - 1) {
                let btnPart = document.createElement('td');
                btnPart.className = 'btnPart';
                let changeBtn = document.createElement('button');
                changeBtn.className = "changeBtn";
                changeBtn.innerText = 'Change';
                let deleteBtn = document.createElement('button');
                deleteBtn.className = 'deleteBtn';
                deleteBtn.innerText = 'Delete';
                let infoBtn = document.createElement('button');
                infoBtn.className = 'infoBtn';
                infoBtn.innerText = 'More';
                btnPart.appendChild(changeBtn);
                btnPart.appendChild(deleteBtn);
                btnPart.appendChild(infoBtn);
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
let mainBlock = () => {
    let main = document.querySelector('.block');
    let createBtn = document.createElement('button');
    createBtn.className = 'createBtn';
    createBtn.innerText = 'New';
    let getDataBtn = document.createElement('button');
    getDataBtn.className = "getDataBtn";
    getDataBtn.innerText = 'Pull itemlist';
    let searchField = document.createElement('input');
    searchField.className = 'searchField';
    searchField.setAttribute('placeholder', 'Search');
    let searchBtn = document.createElement('button');
    searchBtn.className = 'searchBtn';
    searchBtn.innerText = 'Search';
    let searchParametr = document.createElement('select');
    parametrList.forEach((item) => {
        let option = document.createElement('option');
        option.value = item;
        option.innerText = item
        searchParametr.appendChild(option);
    })
    main.appendChild(createBtn);
    main.appendChild(getDataBtn);
    main.appendChild(searchField);
    main.appendChild(searchBtn);
    main.appendChild(searchParametr);
    newItemSection();
    main.addEventListener("click", (e) => {
        let target = e.target;
        if (target.classList.contains('changeBtn')) {
            let index = target.parentNode.parentNode.rowIndex - 1;
            console.dir(target.parentNode.parentNode)
            let changeWindow = new ModalWindow(changeEntity(index));

        } else if (target.classList.contains('deleteBtn')) {
            let index = target.parentNode.parentNode.rowIndex - 1;
            let deleteWindow = new ModalWindow(deleteConfirmation(index));
        } else if (target.classList.contains('infoBtn')) {
            let index = target.parentNode.parentNode.rowIndex - 1;
            let infoWindow = new ModalWindow(showInformation(index));
        } else if (target.classList.contains("searchBtn")) {
            searchDataFetch(searchParametr.value, searchField.value)
        }

    })

}
mainBlock()