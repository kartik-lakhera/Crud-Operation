export class addUser {
  static readonly type = 'Add User';
  constructor(public payload: any) { }
}

export class addUserSuccess {
  static readonly type = 'Add User Success';
  constructor(public payload: any) { }
}

export class addUserFailure {
  static readonly type = 'Add User Failure';
  constructor(public payload: any) { }
}

export class getUser {
  static readonly type = 'Get User';
  constructor() {
  }
}

export class getUserSuccess {
  static readonly type = 'Get User Success';
  constructor(public payload: any) { }
}

export class getUserFailure {
  static readonly type = 'Get User Failure';
  constructor(public payload: any) { }
}
