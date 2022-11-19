export class CustomError extends Error {
  constructor(statusCode: number, message: string) {
    super(message);
  }
}

export class InvalidInfos extends CustomError {
  constructor() {
    super(400, "Um ou mais dados inválidos!");
  }
}


export class InvalidToken extends CustomError {
  constructor() {
    super(400, "Token Inválido!");
  }
}

export class InvalidAuthenticatorData extends CustomError {
  constructor() {
    super(400, "Autenticador inválido!");
  }
}

export class InvalidPrice extends CustomError {
  constructor() {
    super(400, "Preço igual ou menor que 0");
  }
}

