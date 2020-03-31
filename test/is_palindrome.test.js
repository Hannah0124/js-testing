const isPalindrome = require('../src/is_palindrome');

describe('isPalindrome()', () => {
  test('isPalindrome is defined', () => {
    expect(isPalindrome).toBeDefined();
  });

  it('will work for an empty string', () => {
    // Arrange 
    const text = '';

    // Act  
    result = isPalindrome(text);

    // Assert
    expect(result).toBeTruthy();
  })

  it('return true for input "Too hot to hoot"', () => {
    // Arrange 
    const text = 'Too hot to hoot';

    // Act  
    result = isPalindrome(text);

    // Assert
    expect(result).toBeTruthy();
  });

  it('return false for input "abc"', () => {
    // Arrange 
    const text = 'abc';

    // Act  
    result = isPalindrome(text);

    // Assert
    expect(result).toBeFalsy();
  });

  it('return true for input "1 day yad 1"', () => {
    // Arrange 
    const text = '1 day yad 1';

    // Act  
    result = isPalindrome(text);

    // Assert
    expect(result).toBeTruthy();
  });

  it('return false for input "1 day yad 2"', () => {
    // Arrange 
    const text = '1 day yad 2';

    // Act  
    result = isPalindrome(text);

    // Assert
    expect(result).toBeFalsy();
  });
});