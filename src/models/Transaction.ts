export enum TransactionEnum {
  ENTRADA = "ENTRADA",
  SAIDA = "SAÍDA",
}

export type Transaction = {
  idTransaction: string;
  idUser: string;
  price: number;
  title: string;
  description: string;
  type: TransactionEnum;
}

export interface TransactionDTO {
  idUser: string;
  price: number;
  title: string;
  description: string;
  type: TransactionEnum;
}
