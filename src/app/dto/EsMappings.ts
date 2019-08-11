export class MappingsDTO {
    index: string;
    mappings: Array<MappingsDetailDTO>;
}

export class MappingsDetailDTO {
    field: string;
    type: string;
}