const fs = require('fs');

class ConvertString {
    constructor(data) {
        this.data = data
    }

    toUpperCase() {
        return this.data.toUpperCase();
    }

    toAlternateCase() {
        let alternateStr = "";
        for (let i = 0; i < this.data.length; i++) {
            if (i % 2 !== 0) {
                alternateStr += this.data[i].toUpperCase();
            } else {
                alternateStr += this.data[i];
            }
        }
        return alternateStr;
    }

    createCSVFile() {
        const CSVData = this.data.split("").join(",");
        return new Promise((resolve, reject) => {
            fs.writeFile('output.csv', CSVData, (err) => {
                if (err) reject(err);
                else resolve("success");
            })
        })
    }
}
module.exports = ConvertString;
let a = new ConvertString("hello")
console.log(a.toUpperCase());
console.log(a.toAlternateCase());
try {
    a.createCSVFile();
    console.log("CSV created!")
} catch (err) {
    console.log(err)
}