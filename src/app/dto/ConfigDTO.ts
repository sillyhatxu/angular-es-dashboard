export class ConfigDTO {
    code: number;
    data: ConfigDataDTO;
    message: string;
    extra: string;
}

export class ConfigDataDTO {
    server_host: string;
    scheme: string;
    url: string;
}