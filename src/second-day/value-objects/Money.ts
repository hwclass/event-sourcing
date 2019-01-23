import Currency from "./Currency";

class Money {
  private cents: number;
  private currency: Currency;

  private constructor(cents: number, currency: Currency) {
    if (!Number.isInteger(cents)) {
      throw new Error("Cents is not a integer");
    }
    this.cents = cents;
  }

  public static fromCents(cents: number, currency: Currency): Money {
    return new Money(cents, currency);
  }

  // add
  public add(money: Money): Money {
    if (!this.currency.equals(money.currency)) {
      throw new Error("Currency is not equal");
    }
    return new Money(this.cents + money.cents, this.currency);
  }

  // subtract
  public subtract(money: Money): Money {
    if (!this.currency.equals(money.currency)) {
      throw new Error("Currency is not equal");
    }
    return new Money(this.cents - money.cents, this.currency);
  }
}

export default Money;
