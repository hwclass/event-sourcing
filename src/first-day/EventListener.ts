import DomainEvent from "./DomainEvent";

export default abstract class EventListener {
  abstract handle(event: DomainEvent): void;
}
