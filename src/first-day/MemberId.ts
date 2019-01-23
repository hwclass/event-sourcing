import { v4 } from "uuid";

class MemberId {
  private id: string;

  private constructor(id: string) {
    this.id = id;
  }

  public static fromString(id: string): MemberId {
    return new MemberId(id);
  }

  public static generateNew(): MemberId {
    return new MemberId(v4());
  }

  public equals(that: MemberId): boolean {
    return this.id === that.id;
  }

  public toString(): string {
    return this.id;
  }
}

export default MemberId;
