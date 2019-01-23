import EventListener from "./EventListener";
import DomainEvent from "./DomainEvent";

class EventDispatcher {
  private listeners: EventListener[] = [];

  public addListener(listener: EventListener) {
    this.listeners.push(listener);
  }

  public dispatch(event: DomainEvent) {
    this.listeners.map(listener => listener.handle(event));
  }
}

export default EventDispatcher;
