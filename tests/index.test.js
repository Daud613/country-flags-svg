const flags = require("../src/data/flags");
const {
	countries,
	flagUrls,
	findFlagUrlByCountryName,
	findFlagUrlByNationality,
	findFlagUrlByIso2Code,
	findFlagUrlByIso3Code,
} = require("../src/index");

describe("countryFlagsSvg", () => {
	it("countries should contain all svg urls", () => {
		const amountOfFlagUrls = Object.keys(flagUrls).length;

		expect(countries).toHaveLength(amountOfFlagUrls);
	});

	it("all countries must contain required properties", () => {
		const requiredProperties = ["name", "demonym", "flag", "iso2", "iso3"]

		expect(countries.every(country => requiredProperties.every(requiredProperty => country.hasOwnProperty(requiredProperty)))).toBe(true)
	})
});

describe("api", () => {
	describe("findFlagUrlByCountryName", () => {
		describe("should return correct flag url for Australia", () => {
			it("when argument in capital case", () => {
				const countryInfo = findFlagUrlByCountryName("Australia");

				expect(countryInfo).toBe(flags.AUS);
			});

			it("when argument in uppercase", () => {
				const countryInfo = findFlagUrlByCountryName("AUSTRALIA");

				expect(countryInfo).toBe(flags.AUS);
			});

			it("when argument in lowercase", () => {
				const countryInfo = findFlagUrlByCountryName("australia");

				expect(countryInfo).toBe(flags.AUS);
			});
		});

		it("should return empty string for incorrect arg", () => {
			expect(findFlagUrlByCountryName("111")).toBe("");
			expect(findFlagUrlByCountryName("")).toBe("");
			expect(findFlagUrlByCountryName("aassdd")).toBe("");
		});
	});

	describe("findFlagUrlByNationality", () => {
		describe("should return correct flag url for Australian", () => {
			it("when argument in capital case", () => {
				const countryInfo = findFlagUrlByNationality("Australian");

				expect(countryInfo).toBe(flags.AUS);
			});

			it("when argument in uppercase", () => {
				const countryInfo = findFlagUrlByNationality("AUSTRALIAN");

				expect(countryInfo).toBe(flags.AUS);
			});

			it("when argument in lowercase", () => {
				const countryInfo = findFlagUrlByNationality("australian");

				expect(countryInfo).toBe(flags.AUS);
			});
		});

		it("should return empty string for incorrect arg", () => {
			expect(findFlagUrlByNationality("111")).toBe("");
			expect(findFlagUrlByNationality("")).toBe("");
			expect(findFlagUrlByNationality("aassdd")).toBe("");
		});
	});

	describe("findFlagUrlByIso2Code", () => {
		describe("should return correct flag url for Australia", () => {
			it("when argument in uppercase", () => {
				const countryInfo = findFlagUrlByIso2Code("AU");

				expect(countryInfo).toBe(flags.AUS);
			});

			it("when argument in lowercase", () => {
				const countryInfo = findFlagUrlByIso2Code("au");

				expect(countryInfo).toBe(flags.AUS);
			});
		});

		it("should return empty string for incorrect arg", () => {
			expect(findFlagUrlByIso2Code("111")).toBe("");
			expect(findFlagUrlByIso2Code("")).toBe("");
			expect(findFlagUrlByIso2Code("aassdd")).toBe("");
		});
	});

	describe("findFlagUrlByIso3Code", () => {
		describe("should return correct flag url for Australia", () => {
			it("when argument in uppercase", () => {
				const countryInfo = findFlagUrlByIso3Code("AUS");

				expect(countryInfo).toBe(flags.AUS);
			});

			it("when argument in lowercase", () => {
				const countryInfo = findFlagUrlByIso3Code("aus");

				expect(countryInfo).toBe(flags.AUS);
			});
		});

		it("should return empty string for incorrect arg", () => {
			expect(findFlagUrlByIso3Code("111")).toBe("");
			expect(findFlagUrlByIso3Code("")).toBe("");
			expect(findFlagUrlByIso3Code("aassdd")).toBe("");
		});
	});
});
