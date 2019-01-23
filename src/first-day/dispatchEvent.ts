import EventDispatcher from "./EventDispatcher";
import LogEvents from "./LogEvents";
import MemberRegistered from "./MemberRegistered";
import MemberId from "./MemberId";
import MemberName from "./MemberName";
import Email from "./Email";
import Timestamp from "./Timestamp";
import MemberChangedTheirEmail from "./MemberChangedTheirEmail";

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
