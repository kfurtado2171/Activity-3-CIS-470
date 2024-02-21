
const  classifyTriangle  = require('./classifyTriangle');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should classify an Equilateral triangle', () => {
      expect(classifyTriangle(10, 10, 10)).toBe('Equilateral');     // lower bound
      expect(classifyTriangle(100, 100, 100)).toBe('Equilateral');  // mid bound
      expect(classifyTriangle(200, 200, 200)).toBe('Equilateral');  // upper bound
    });
  
    test('should classify an Isosceles triangle', () => {
      expect(classifyTriangle(10, 10, 5)).toBe('Isosceles');      // a == b
      expect(classifyTriangle(5, 10, 10)).toBe('Isosceles');      // b == c
      expect(classifyTriangle(10, 5, 10)).toBe('Isosceles');      // a == c
      expect(classifyTriangle(2, 2, 3)).toBe('Isosceles');        // lower bound
      expect(classifyTriangle(50, 100, 100)).toBe('Isosceles');   // mid bound
      expect(classifyTriangle(200, 150, 200)).toBe('Isosceles');  // upper bound
    });
  
    test('should classify a Scalene triangle', () => {
      expect(classifyTriangle(10, 12, 14)).toBe('Scalene');     // lower bound
      expect(classifyTriangle(50, 100, 125)).toBe('Scalene');   // mid bound
      expect(classifyTriangle(200, 199, 198)).toBe('Scalene');  // upper bound
    });

    test('should return error for invalid inputs', () => {
      expect(classifyTriangle(0, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');      // a - below bounds 
      expect(classifyTriangle(10, 0, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');      // b - below bounds 
      expect(classifyTriangle(10, 10, 0)).toBe('Error: Input conditions C1, C2, or C3 failed.');      // c - below bounds 
      expect(classifyTriangle(201, 200, 200)).toBe('Error: Input conditions C1, C2, or C3 failed.');  // a - above bounds
      expect(classifyTriangle(200, 201, 200)).toBe('Error: Input conditions C1, C2, or C3 failed.');  // b - above bounds
      expect(classifyTriangle(200, 200, 201)).toBe('Error: Input conditions C1, C2, or C3 failed.');  // c - above bounds
      expect(classifyTriangle(-1, 10, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');     // a - negative
      expect(classifyTriangle(10, -1, 10)).toBe('Error: Input conditions C1, C2, or C3 failed.');     // b - negative
      expect(classifyTriangle(10, 10, -1)).toBe('Error: Input conditions C1, C2, or C3 failed.');     // c - negative
      expect(classifyTriangle(0, 201, -1)).toBe('Error: Input conditions C1, C2, or C3 failed.');     // below/above/negative bounds
    });
  
    test('should return "Not a Triangle" for invalid triangle sides', () => {
      expect(classifyTriangle(1, 2, 3)).toBe('Not a Triangle');       // !(c < a + b) --> c == a + b
      expect(classifyTriangle(10, 20, 10)).toBe('Not a Triangle');    // !(b < a + c) --> b == a + c
      expect(classifyTriangle(175, 75, 100)).toBe('Not a Triangle');  // !(a < b + c) --> a == b + c
      expect(classifyTriangle(1, 2, 4)).toBe('Not a Triangle');       // !(c < a + b) --> c > a + b
      expect(classifyTriangle(10, 21, 10)).toBe('Not a Triangle');    // !(b < a + c) --> b > a + c
      expect(classifyTriangle(200, 75, 100)).toBe('Not a Triangle');  // !(a < b + c) --> a > b + c
    });
  });
  