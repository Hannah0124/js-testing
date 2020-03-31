const isPangram = require('../src/is_pangram');

// https://prod.liveshare.vsengsaas.visualstudio.com/join?5079B7578CBD5F77E08B1DD5A20BA9BFA8AA

// What is a pangram? (Wikipedia)
// A pangram or holoalphabetic sentence is a sentence using every letter of a given alphabet at least once. Pangrams have been used to display typefaces, test equipment, and develop skills in handwriting, calligraphy, and keyboarding. The best-known English pangram is "The quick brown fox jumps over the lazy dog"

describe('isPangram()', () => {
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();

  });

  test('works with a pangram with only lower case', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy dog';

    // Act
    const result = isPangram(text)

    // Assert
    expect(result).toBeTruthy();
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwxyz';

    // Act
    const result = isPangram(text)

    // Assert
    expect(result).toBeTruthy();
  });

  test("missing character 'x'", () => {
    // Arrange
    const text = "abcdefghijklmnopqrstuvwyz";

    // Act
    const result = isPangram(text);

    // Assert
    expect(result).toBeFalsy();

  });

  test('empty sentence', () => {
    // Arrange
    const text = "";

    // Act
    const result = isPangram(text)

    // Assert
    expect(result).toBeFalsy;
  });

  test('pangram with underscores instead of spaces works', () => {
    // Arrange
    const text = "the_quick_brown_fox_jumps_over_the_lazy_dog";

    // Act
    const result = isPangram(text);

    // Assert
    expect(result).tobeTruthy;

  });

  test('pangram with numbers works', () => {
    // Arrange
    const text = "abcdefghijklmnopqr2stuvwxyz1";

    // Act
    const result = isPangram(text);

    // Assert
    expect(result).toBeTruthy();
  });

  // Write your own test case
  test('pangram with special character works', () => {
    // Arrange
    const text = "the quick brown**&fox jumps!!over the lazy dog#$%"

    // Act 
    const result = isPangram(text);

    // Assert
    expect(result).toBeTruthy();
  })
});
