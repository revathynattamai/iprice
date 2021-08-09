const fs = require('fs');
const ConvertString = require('./index');
const convertor = new ConvertString("hello world");

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

test('CSV File resolve', async () => {
    expect(await convertor.createCSVFile()).toEqual('success');
});

test('CSV File reject', async () => {
    fs.writeFile = jest.fn((a, b, callback) => { return callback("Failed") });
    try {
        await convertor.createCSVFile()
    } catch (err) {
        expect(err).toEqual("Failed")
    }
});