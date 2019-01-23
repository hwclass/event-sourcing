class Email {
  private email: string;

  constructor(email: string) {
    // check if valid or not -> regex
    if (this.isValid(email)) {
      throw new Error("Please enter a valid email");
    }
    this.email = email;
  }

  private isValid(email: string): Boolean {
    // return true if it is valid
    if (!/\S+@\S+\.\S+/.test(email)) {
      return true;
    }
    return false;
  }

  toString(): string {
    return this.email.toString();
  }
}

export default Email;
