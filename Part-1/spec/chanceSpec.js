//reference to nick's repo
//https://github.com/Nicktho/genxi-jwd-testing-assessment#3-buybeer

describe('headsOrTails', () => {
  describe('when the coin flip is true', () => {
    it('should return heads', () => {
      //spy on coin.flip and change its return value to always be true
      spyOn(coin, "flip").and.returnValue(true);

      const result = headsOrTails(); // call the function

      expect(result).toBe('heads');
    });
  });

  describe('when the coin flip is false', () => {
    it('should return tails', () => {
      //spy on coin.flip and change its return value to always be false
      spyOn(coin, "flip").and.returnValue(false);

      const result = headsOrTails(); // call the function

      expect(result).toBe('tails');
    });
  });

});
