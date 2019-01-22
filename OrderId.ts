import { v4 } from 'uuid';

class OrderId {

  private id: string;

  private constructor(id: string) {
    this.id = id;
  }

  public static fromString(id: string): OrderId {
    return new OrderId(id);
  }

  public static generateNew(): OrderId {
    return new OrderId(v4());
  }

  public equals(that: OrderId): boolean {
    return this.id === that.id;
  }

  public toString(): string {
    return this.id;
  } 
}
