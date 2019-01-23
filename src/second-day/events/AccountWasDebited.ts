// Data transfer object - no behavior!
import MemberId from "../value-objects/MemberId";
import Timestamp from "../value-objects/Timestamp";
import Money from "../value-objects/Money";
import DomainEvent from "./DomainEvent";

class AccountWasDebited implements DomainEvent {
  private accountId: MemberId;
  private debitAmount: Money;
  private timestamp: Timestamp;

  public constructor(
    accountId: MemberId,
    debitAmount: Money,
    timestamp: Timestamp
  ) {
    this.accountId = accountId;
    this.debitAmount = debitAmount;
    this.timestamp = timestamp;
  }

  getAccountId(): MemberId {
    return this.accountId;
  }

  getDebitAmount(): Money {
    return this.debitAmount;
  }

  getTimestamp(): Timestamp {
    return this.timestamp;
  }

  className(): string {
    return "AccountWasDebited";
  }
}

export default AccountWasDebited;
