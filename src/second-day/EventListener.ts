import DomainEvent from "./events/DomainEvent";

export default abstract class EventListener {
  abstract handle(event: DomainEvent): void;
}
