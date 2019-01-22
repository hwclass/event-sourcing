// Data transfer object - no behavior!
import DomainEvent from "./DomainEvent";
import OrderId from "./OrderId";
import Timestamp from "./Timestamp";
import MemberName from "./MemberName";
import Email from "./Email";

class MemberChangedTheirEmail implements DomainEvent {
  private id: OrderId;
  private name: MemberName;
  private email: Email;
  private changedAt: Timestamp;

  public constructor(
    id: OrderId,
    name: MemberName,
    email: Email,
    changedAt: Timestamp
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.changedAt = changedAt;
  }

  getId(): OrderId {
    return this.id;
  }

  getName(): MemberName {
    return this.name;
  }

  getEmail(): Email {
    return this.email;
  }

  getChangedAt(): Timestamp {
    return this.changedAt;
  }

  className(): string {
    return this.className();
  }
}

export default MemberChangedTheirEmail;
