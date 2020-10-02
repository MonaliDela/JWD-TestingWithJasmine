//BuyBeer challenge

describe('canGregBuyBeer', () => {
    describe('when greg is over 17', () => {
        it("he can buy a beer", () =>  {
            const originalAge = greg.age;
            greg.age = 18
            
            const result = canGregBuyBeer();
        
            expect(result).toBe('Greg is 18, he can buy beer!');
            greg.age = originalAge;
        });
    });

    describe("when greg is below 18", () => {
        it("He can not buy a beer", () => {
            const originalAge = greg.age;
            greg.age = 15
            
            const result = canGregBuyBeer();
        
            expect(result).toBe("Greg is 15, he can't buy beer :(");
            greg.age = originalAge;
        });
    });
  });