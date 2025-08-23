import {
  getSafeNumber,
  getSafeString,
  isEmptyArray,
} from "../../app/utils/GeneralUtils";

describe("Test for GeneralUtils functions", () => {
  // getSafeString
  describe("function getSafeString", () => {
    it("should return empty string for null input", () => {
      expect(getSafeString(null)).toBe("");
    });

    it("should return empty string for undefined input", () => {
      expect(getSafeString(undefined)).toBe("");
    });

    it("should return NA string fallback for null input", () => {
      expect(getSafeString(null, "NA")).toBe("NA");
    });

    it("should return NA string fallback for undefined input", () => {
      expect(getSafeString(undefined, "NA")).toBe("NA");
    });

    it("should return respective string for number input", () => {
      expect(getSafeString(1)).toBe("1");
    });

    it("should return respective json string for json input", () => {
      expect(getSafeString({id: 1, name: "TestName"})).toBe(
        '{"id":1,"name":"TestName"}',
      );
    });

    it("should return respective 'true' for boolean true", () => {
      expect(getSafeString(true)).toBe("true");
    });
  });

  // getSafeNumber
  describe("function getSafeNumber", () => {
    it("should return 0 for null input", () => {
      expect(getSafeNumber(null)).toBe(0);
    });

    it("should return respective fallback for null input", () => {
      expect(getSafeNumber(null, 1)).toBe(1);
    });

    it("should return 0 for undefined input", () => {
      expect(getSafeNumber(undefined)).toBe(0);
    });

    it("should return respective fallback for undefined input", () => {
      expect(getSafeNumber(undefined, 1)).toBe(1);
    });

    it("should return respective number for number string", () => {
      expect(getSafeNumber("123")).toBe(123);
    });

    it("should return 0 for invalid number string", () => {
      expect(getSafeNumber("JD123")).toBe(0);
    });
  });

  // isEmptyArray
  describe("function isEmptyArray", () => {
    it("should return true for empty array", () => {
      expect(isEmptyArray([])).toBe(true);
    });

    it("should return false for non-empty array", () => {
      expect(isEmptyArray([1, 2, 3])).toBe(false);
    });
  });
});
