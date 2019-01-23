// Data transfer object - no behavior!
import MemberId from "../value-objects/MemberId";
import Timestamp from "../value-objects/Timestamp";
import MemberName from "../value-objects/MemberName";
import Email from "../value-objects/Email";
import DomainEvent from "./DomainEvent";

class MemberRegistered implements DomainEvent {
  private id: MemberId;
  private name: MemberName;
  private email: Email;
  private registeredAt: Timestamp;

  public constructor(
    id: MemberId,
    name: MemberName,
    email: Email,
    registredAt: Timestamp
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.registeredAt = registredAt;
  }

  getId(): MemberId {
    return this.id;
  }

  getMemberName(): MemberName {
    return this.name;
  }

  getEmail(): Email {
    return this.email;
  }

  getRegisteredAt(): Timestamp {
    return this.registeredAt;
  }

  className(): string {
    return "MemberRegistered";
  }
}

export default MemberRegistered;
