import EventDispatcher from "./EventDispatcher";
import LogEvents from "./LogEvents";
import MemberRegistered from "./events/MemberRegistered";
import MemberChangedTheirEmail from "./events/MemberChangedTheirEmail";
import MemberId from "./value-objects/MemberId";
import MemberName from "./value-objects/MemberName";
import Email from "./value-objects/Email";
import Timestamp from "./value-objects/Timestamp";


const eventDispatcher = new EventDispatcher();

eventDispatcher.addListener(new LogEvents());

const memberRegisteredEvent = new MemberRegistered(
  MemberId.generateNew(),
  new MemberName("Some"),
  new Email("some@example.com"),
  Timestamp.fromString("2019-12-01 12:22:22")
);
const memberChangedEmailEvent = new MemberChangedTheirEmail(
  MemberId.generateNew(),
  new MemberName("Some"),
  new Email("some@example.com"),
  new Email("all@example.com"),
  Timestamp.fromNow()
);

eventDispatcher.dispatch(memberRegisteredEvent);
eventDispatcher.dispatch(memberChangedEmailEvent);
