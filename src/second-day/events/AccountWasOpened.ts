// Data transfer object - no behavior!
import MemberId from "../value-objects/MemberId";
import Timestamp from "../value-objects/Timestamp";
import Money from "../value-objects/Money";
import DomainEvent from "./DomainEvent";

class AccountWasOpened implements DomainEvent {
  private accountId: MemberId;
  private initialBalance: Money;
  private timestamp: Timestamp;

  public constructor(
    accountId: MemberId,
    initialBalance: Money,
    timestamp: Timestamp
  ) {
    this.accountId = accountId;
    this.initialBalance = initialBalance;
    this.timestamp = timestamp;
  }

  getAccountId(): MemberId {
    return this.accountId;
  }

  getInitialBalance(): Money {
    return this.initialBalance;
  }

  getTimestamp(): Timestamp {
    return this.timestamp;
  }

  className(): string {
    return "AccountWasOpened";
  }
}

export default AccountWasOpened;
