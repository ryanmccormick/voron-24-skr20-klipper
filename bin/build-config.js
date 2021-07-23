const fs = require('fs');
const path = require('path')

const configPartsDir = path.join(process.cwd(), 'config-parts');

function init() {
    const configFile = buildConfigFile();
    console.log(configFile);
}

init()
//////////////

function buildConfigFile() {
    const orderedConfigParts = getOrderedConfigParts();
    return orderedConfigParts.map((fileName) => {
        return readConfigPartsFile(fileName)
    }).join('\n')
}

function getOrderedConfigParts() {
    try {
        const files = fs.readdirSync(configPartsDir) || [];

        if (files.length > 0) {
            return files.sort((fileName1, fileName2) => {
                const fileIndex1 = fileName1.split('-')[0];
                const fileIndex2 = fileName2.split('-')[0];
                return parseInt(fileIndex1) - parseInt(fileIndex2);
            })
        }

        return [];
    } catch (exception) {
        console.error(exception);
        return [];
    }
}

function readConfigPartsFile(fileName) {
    try {
        const filePath = `${configPartsDir}/${fileName}`;
        const fileData = fs.readFileSync(filePath, 'utf-8');

        return fileData;
    } catch (exception) {
        console.error(exception);
        return '';
    }
}
