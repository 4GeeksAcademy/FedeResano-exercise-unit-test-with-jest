const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);

    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07; 
    
     expect(fromEuroToDollar(3.5)).toBe(3.745);
});

test("One dollar should be 165.45 yen", function(){
    const {fromDollarToYen} = require('./app.js');

    const yen = fromDollarToYen(2.7);

    const expected = 2.7 * 165.45;

    expect(fromDollarToYen(2.7)).toBeCloseTo(446.7, 1);
});

test("One yen should be ", function(){
    const { fromYenToPound } = require('./app.js');

    const GBP = fromYenToPound(200);

    const expected = 200 * 0.0055;

    expect(fromYenToPound(200)).toBeCloseTo(expected, 2);
});