import { JsonPipe } from '@angular/common';
import { deserialize } from 'json-typescript-mapper';



export class EsHealth {
    code: number;
    data: EsHealthData;
    message: string;
    extra: string;
}

export class EsHealthData {
    epoch: string;
    timestamp: string;
    cluster: string;
    status: string;

    @JsonProperty('name')
    node.data: string;
    shards: string;
    pri: string;
    relo: string;
    init: string;
    unassign: string;
    pending_tasks: string;
    max_task_wait_time: string;
    active_shards_percent: string;
}