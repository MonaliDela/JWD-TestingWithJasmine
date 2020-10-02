//Exercise 01 - Calculator

describe('Calculator', () => {

  // for addition
    //when user pass a string as a number add function should throw an error - unsuccesfull 
  describe('#add', () => {
    describe('when passed strings as numbers', () => {
      it('should throw an error', () => {
        const calculator = new Calculator();

        //when user input a strng as a number
        expect(() => calculator.add('1', 2)).toThrow();
        expect(() => calculator.add(1, '2')).toThrow();
        //when user input two strings as numbers
        expect(() => calculator.add('1', '2')).toThrow();

      });      
    });

    //when user pass numbers test should be successfull and add function execution returns expected output
    describe('when passed two numbers ', () => {
      it('should not throw an error', () => {
        const calculator = new Calculator();

        expect(() => calculator.add(1, 2)).not.toThrow();
      });

      it('should add the numbers together', () => {
        const calculator = new Calculator();

        const result = calculator.add(1, 2);

        expect(result).toBe(3);
      });
    });
  });

  //for subtraction
  describe("#substract", () => {
    describe("when pass a string as a number", () => {
      it("should throw an error" , () => {
        const calculator = new Calculator();

        expect(() => calculator.subtract( "2" , 1)).toThrow();
        expect(() => calculator.subtract( 2 , "1")).toThrow();
        //when user input two strings as numbers
        expect(() => calculator.add('1', '2')).toThrow();
      });
    });

    describe("when pass two numbers" , () => {
      it("should not throw an error" , () => {
        const calculator = new Calculator();

        expect(() => calculator.subtract( 2 , 1)).not.toThrow();
      });

      it(" should substract one number from the other", () => {
        const calculator = new Calculator();
        const result = calculator.subtract(2,1);
        expect(result).toBe(1);
      });
    });
  });

  // for multiplication
  describe("#multiplication" , () => {
    describe("when pass a string as numbers", () => {
      it("should throw an error", () => {
        const calculator =  new Calculator();
  
        expect(() => calculator.subtract( "2" , 2)).toThrow();
        expect(() => calculator.subtract( 2, "3")).toThrow();
        //when user input two strings as numbers
        expect(() => calculator.add('1', '2')).toThrow();
      });
    });

    describe("when pass two numbers" , () => {
      it("should not throw an error" , () => {

        const calculator = new Calculator();
        expect(() => calculator.multiply( 2, 3 )).not.toThrow();
      });

      it("should multiply two numbers", () => {
        const calculator = new Calculator();
        const result = calculator.multiply(2,3);
        expect(result).toBe(6);
      });
    });
  });

  //for devision
  describe("#devision", () => {

    describe("when pass a string as a number", () => {
      it("should throw an error", () => {
        const calculator = new Calculator();

        expect(() => calculator.divide("10", 2)).toThrow();
        expect(() => calculator.divide( 10, "2")).toThrow();
        //when user input two strings as numbers
        expect(() => calculator.add("1", "2")).toThrow();
      });
    });

    describe("when pass two numbers", () => {
      it("should not throw an error", () => {
        const calculator = new Calculator();
        expect(() => calculator.divide(10,2)).not.toThrow();
      });

      it("should throw an error can not divide by 0", () => {
        const calculator = new Calculator();
        expect(() => calculator.divide(10, 0)).toThrow();
      });

      it("should devide one number from the other", () => {
        const calculator = new Calculator();
        const result = calculator.divide(10,2);
        expect(result).toBe(5);
        
      });
    });

  });







});