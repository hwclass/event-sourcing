// Data transfer object - no behavior!
import MemberId from "../value-objects/MemberId";
import Timestamp from "../value-objects/Timestamp";
import Money from "../value-objects/Money";
import DomainEvent from "./DomainEvent";

class AccountWasCredited implements DomainEvent {
  private accountId: MemberId;
  private creditAmount: Money;
  private timestamp: Timestamp;

  public constructor(
    accountId: MemberId,
    creditAmount: Money,
    timestamp: Timestamp
  ) {
    this.accountId = accountId;
    this.creditAmount = creditAmount;
    this.timestamp = timestamp;
  }

  getAccountId(): MemberId {
    return this.accountId;
  }

  getCreditAmount(): Money {
    return this.creditAmount;
  }

  getTimestamp(): Timestamp {
    return this.timestamp;
  }

  className(): string {
    return "AccountWasCredited";
  }
}

export default AccountWasCredited;
