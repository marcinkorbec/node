export class User {
  private _loggedIn: boolean = false;
  private _email: string | null = null;
  
  get loggedIn():boolean {
    return this.loggedIn;
  }
  
  get email():string | null {
    return this._email;
  }
}