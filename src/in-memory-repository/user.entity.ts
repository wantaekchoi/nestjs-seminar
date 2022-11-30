export class UserEntity {
  constructor(
    private readonly _pkey: number,
    private _email: string,
    private _password: string,
    private _nickname: string,
    private _removed: boolean,
  ) {}

  get pkey(): number {
    return this._pkey;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get removed(): boolean {
    return this._removed;
  }

  get nickname(): string {
    return this._nickname;
  }

  set nickname(value: string) {
    this._nickname = value;
  }

  public remove() {
    this._removed = true;
  }
}
