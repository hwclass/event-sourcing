// Data transfer object - no behavior!
import OrderId from './OrderId'
import Timestamp from './Timestamp'
import MemberName from './MemberName'
import Email from './Email'
import DomainEvent from './DomainEvent';

class MemberRegistered extends DomainEvent{
    private id: OrderId;
    private name: MemberName;
    private email: Email;
    private registeredAt: Timestamp;

    public constructor(id: OrderId, name: MemberName, email: Email, registredAt: Timestamp) {
        super()
        this.id = id;
        this.name = name;
        this.email = email;
        this.registeredAt = registredAt;
    }

    getId(): OrderId {
        return this.id
    }

    getName(): MemberName {
        return this.name
    }

    getEmail(): Email {
        return this.email
    }

    getRegisteredAt() : Timestamp {
        return this.registeredAt
    }

    getClassName(): string {
        return this.getClassName()
    }
}

export default MemberRegistered