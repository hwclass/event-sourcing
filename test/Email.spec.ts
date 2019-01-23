import { expect } from "chai";
import "mocha";
import Email from "../src/Email";

describe("Email", () => {
  const invalidEmail = "some@";
  const validEmail = "some@example.com";

  describe("constructor", () => {
    it("should throw an error for invalid email", () => {
      expect(() => new Email(invalidEmail)).to.throw(
        "Please enter a valid email"
      );
    });

    it("should not throw an error for valid email", () => {
      expect(() => new Email(validEmail)).not.to.throw(
        "Please enter a valid email"
      );
    });
  });

  describe("toString()", () => {
    it("should return valid email in string", () => {
      const email = new Email(validEmail);
      expect(email.toString()).to.equal(validEmail);
    });
  });
});
