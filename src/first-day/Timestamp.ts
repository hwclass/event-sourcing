const moment = require("moment");

class Timestamp {
  private timestamp: string;
  private static format = "YYYY-MM-DD HH:mm:ss";

  private constructor(timestamp: string) {
    if (timestamp === "" && !Timestamp.isValid(timestamp)) {
      throw Error("Invalid timestamp");
    }
    this.timestamp = moment(timestamp, Timestamp.format).format(
      Timestamp.format
    );
  }

  private static isValid(timestamp: string): Boolean {
    return moment(timestamp, Timestamp.format, true).isValid();
  }

  public toString(): string {
    return moment(this.timestamp).format(Timestamp.format);
  }

  public static fromString(timestamp: string): Timestamp {
    return new Timestamp(timestamp);
  }

  public static fromNow(): Timestamp {
    return new Timestamp(moment().format(Timestamp.format));
  }

  public equals(that: Timestamp): Boolean {
    return that.timestamp === this.timestamp;
  }

  public isBefore(that: Timestamp): Boolean {
    return moment(this.timestamp).isBefore(that.timestamp);
  }

  public isAfter(that: Timestamp): Boolean {
    return moment(this.timestamp).isAfter(that.timestamp);
  }
}

export default Timestamp;
