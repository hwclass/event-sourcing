// Data transfer object - no behavior!
import DomainEvent from "./DomainEvent";
import MemberId from "./MemberId";
import Timestamp from "./Timestamp";
import MemberName from "./MemberName";
import Email from "./Email";

class MemberChangedTheirEmail implements DomainEvent {
  private id: MemberId;
  private name: MemberName;
  private oldEmail: Email;
  private newEmail: Email;
  private changedAt: Timestamp;

  public constructor(
    id: MemberId,
    name: MemberName,
    oldEmail: Email,
    newEmail: Email,
    changedAt: Timestamp
  ) {
    this.id = id;
    this.name = name;
    this.oldEmail = oldEmail;
    this.newEmail = newEmail;
    this.changedAt = changedAt;
  }

  getId(): MemberId {
    return this.id;
  }

  getName(): MemberName {
    return this.name;
  }

  getOldEmail(): Email {
    return this.oldEmail;
  }

  getNewEmail(): Email {
    return this.newEmail;
  }

  getChangedAt(): Timestamp {
    return this.changedAt;
  }

  className(): string {
    return "MemberChangedTheirEmail";
  }
}

export default MemberChangedTheirEmail;
