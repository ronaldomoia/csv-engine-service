const csvTreatmentFactory = require('../factory/csvTreatmentFactory')();
const rawCsvToArrayFactory = require('../factory/rawCsvToArrayFactory')();
const filterDataService = require('../services/filterDataService')();
const fs = require('fs')

module.exports = () => ({
    execute: (path) => {
        const data = fs.readFileSync(path, {encoding:'utf8'}).split('\n');
        const csvArray = rawCsvToArrayFactory.build(data)
        const treatment = csvTreatmentFactory.build(csvArray)
        const payload = filterDataService.execute(treatment)

        return payload
    },
});