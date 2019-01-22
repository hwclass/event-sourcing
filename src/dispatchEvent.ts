import EventDispatcher from "./EventDispatcher";
import LogEvents from "./LogEvents";
import MemberRegistered from "./MemberRegistered";
import OrderId from "./OrderId";
import MemberName from "./MemberName";
import Email from "./Email";
import Timestamp from "./Timestamp";

const eventDispatcher = new EventDispatcher();

eventDispatcher.addListener(new LogEvents());

const memberRegisteredEvent = new MemberRegistered(
  OrderId.generateNew(),
  new MemberName("Some"),
  new Email("some@example.com"),
  Timestamp.fromString("2019-12-01 12:22:22")
);

eventDispatcher.dispatch(memberRegisteredEvent);
