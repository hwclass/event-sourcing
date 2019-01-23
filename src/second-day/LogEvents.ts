import * as fs from "fs";
import DomainEvent from "./events/DomainEvent";
import EventListener from "./EventListener";

class LogEvents implements EventListener {
  handle(event: DomainEvent) {
    this.putContentIntoFile("event.log", event.className());
  }

  putContentIntoFile(fileName: string, name: string) {
    fs.appendFile(__dirname + fileName, name + "\n", err => {
      if (err) {
        console.log(err);
        throw new Error("Error while writing file.");
      }
      console.log("File is appended");
    });
  }
}

export default LogEvents;
