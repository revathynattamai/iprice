const fs = require('fs');
const ConvertString = require('./index');
const convertor = new ConvertString("hello world");
jest.mock('fs');

test('Upper Case', () => {
    expect(convertor.toUpperCase()).toEqual('HELLO WORLD');
});

test('Upper Case for number', () => {
    const convertor = new ConvertString("1234");
    expect(convertor.toUpperCase()).toEqual('1234');
});

test('Upper Case for more than one space', () => {
    const convertor = new ConvertString("he ll o wo rl d");
    expect(convertor.toUpperCase()).toEqual('HE LL O WO RL D');
});

test('Alternate Case', () => {
    expect(convertor.toAlternateCase()).toEqual('hElLo wOrLd');
});

test('Alternate Case for number', () => {
    const convertor = new ConvertString("1234");
    expect(convertor.toAlternateCase()).toEqual('1234');
});

test('Alternate Case for more than one space', () => {
    const convertor = new ConvertString("he ll o wo rl d");
    expect(convertor.toAlternateCase()).toEqual('hE Ll o wO Rl d');
});

test('CSV File resolve', () => {
    fs.writeFile = jest.fn().mockImplementation((file, CSVData, cb) => cb(false));
    expect(() => convertor.createCSVFile()).not.toThrowError();
});

test('CSV File reject', () => {
    fs.writeFile = jest.fn().mockImplementation((file, CSVData, cb) => cb(true))
    expect(() => convertor.createCSVFile()).toThrowError();
})

test('CSV File resolve', () => {
    fs.writeFile = jest.fn().mockImplementation((file, CSVData, cb) => cb(false));
    expect(() => convertor.createCSVFile()).not.toThrowError();
});