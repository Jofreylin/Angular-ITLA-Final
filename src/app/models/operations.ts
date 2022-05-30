export interface IOperations{
    id: number;
    description: string;
    amount: number;
    registerDate: string;
    typeOperationId: number;
}

export interface ITypeOperation {
    id: number;
    name: string;
}