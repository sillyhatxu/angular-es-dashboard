export class EsClusterStats {
    timestamp: number;
    cluster_name: string;
    cluster_uuid: string;
    status: string;
    count: EsClusterStatsIndices;
    nodes: EsClusterStatsNodes;
}

export class EsClusterStatsIndices {
    count: number
    shards: EsClusterStatsIndicesShards
    fielddata: EsClusterStatsIndicesFielddata
    query_cache: EsClusterStatsIndicesQueryCache
}

export class EsClusterStatsIndicesShards {
    total: number
}

export class EsClusterStatsIndicesFielddata {
    memory_size: number
    memory_size_in_bytes: number
}

export class EsClusterStatsIndicesQueryCache {
    memory_size: number
    memory_size_in_bytes: number
}

export class EsClusterStatsNodes {
    fs: EsClusterStatsNodesFs
    os: EsClusterStatsNodesOS
}

export class EsClusterStatsNodesFs {
    total_in_bytes: number
    available_in_bytes: number
}

export class EsClusterStatsNodesOS {
    mem: EsClusterStatsNodesOSMem
}

export class EsClusterStatsNodesOSMem {
    total: number
    total_in_bytes: number
}