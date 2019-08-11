export class ResponseDTO<T> {
    code: string;
    data: T;
    message: string;
    extra: string;
}