function Computer() {
    this.info = {


    }

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
export {
    Computer,
    UltraBook,
    Server
};