import * as fs from "fs";
import DomainEvent from "./DomainEvent";

class LogEvents {
  handle(event: DomainEvent) {
    this.putContentIntoFile("event.log", event.className());
  }

  putContentIntoFile(fileName: string, name: string) {
    fs.writeFile(__dirname + fileName, name, err => {
      if (err) {
        console.log(err);
        throw new Error("Error while writing file.");
      }
      console.log("File is created.");
    });
  }
}

export default LogEvents;
