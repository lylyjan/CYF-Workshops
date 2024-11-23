

// time-string.test.js  
const formatAsSecondsAsString = require('./index'); // Import the function  

test('formats 1 as "1 second"', () => {  
    expect(formatAsSecondsAsString(1)).toBe("1 second");  
});  

test('formats 2 as "2 seconds"', () => {  
    expect(formatAsSecondsAsString(2)).toBe("2 seconds");  
});  

test('formats 5 as "5 seconds"', () => {  
    expect(formatAsSecondsAsString(5)).toBe("5 seconds");  
});  
