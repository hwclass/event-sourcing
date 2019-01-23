class Currency {
  private currency: string;

  private constructor(currency: string) {
    if (!Currency.isValid(currency)) {
      throw Error("Invalid currency");
    }
    this.currency = currency;
  }

  private static isValid(currency: string): Boolean {
    return currency !== "";
  }

  public equals(that: Currency): Boolean {
    return that.currency === this.currency;
  }

  public toString(): string {
    return this.currency.toString();
  }
}

export default Currency;
