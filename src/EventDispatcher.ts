import LogEvents from "./LogEvents";
import DomainEvent from "./DomainEvent";

class EventDispatcher {
  private listeners: LogEvents[] = [];

  public addListener(listener: LogEvents) {
    this.listeners.push(listener);
  }

  public dispatch(event: DomainEvent) {
    this.listeners.map(listener => listener.handle(event));
  }
}

export default EventDispatcher;
