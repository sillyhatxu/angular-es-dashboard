export class EsPing {
    name: string;
    cluster_name: string;
    version: EsPingVersion;
}

export class EsPingVersion {
    number: string;
    build_flavor: string;
    build_type: string;
    build_hash: string;
    build_date: string;
    build_snapshot: string;
    lucene_version: string;
    minimum_wire_compatibility_version: string;
    minimum_index_compatibility_version: string;
}