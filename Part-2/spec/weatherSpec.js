// start with function name as title of the suite
describe("getWeatherFor", () => {
    //when city == sydney
    describe("when passed sydney", () => {
        it("should resolve 25", () => {
            // return getWeatherFor("Sydney")
            // .then((temp) => {
            //     expect(temp).toBe(25);


            //use & return the expectAsync function, 
            //& the async-matcher .toBeResolvedTo(),
            return expectAsync(getWeatherFor("Sydney")).toBeResolvedTo(25);
        });
    });
    //when city == Melbourne
    describe("when passed Melbourne", () => {
        it("should resolve 15", () => {
            return expectAsync(getWeatherFor("Melbourne")).toBeResolvedTo(15);
        });

    });

    //when city is not sydney or melbourne
    describe("When passed a city other than Sydney or Melbourne", () => {
        it("should reject with an error", () => {
            return expectAsync(getWeatherFor("London"))
            .toBeRejectedWith("City London does not exist in our database");

        });
    });
});

