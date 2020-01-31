export interface IDevices {
    query?: IQuery;
    lastData?: ILastData;
}

export interface IQuery {
    id?: {value: string};
    period?: string;
    startTime?: string;
    endTime?: string;
}

export interface ILastData {
    content?: IContent;
    id?: string;
    timeReceived?: string;
    timeSet?: string;
}

export interface IContent {
    messageType?: string;
    battery?: number;
    profile?: number;
    cmdAck?: number;
    gpsFixAge?: number;
    satInFix?: number;
    lat?: number;
    lng?: number;
    batteryLifeCount?: number;
    batteryLife?: number;
    fCntUp?: number;
    barrierMessageBatch?: {messages: IMessage[]};
    barrierOpenCloseTimeBatch?: {proRailBarrierOpenCloseTime: IProRailBarrierOpenCloseTime[]};
    meta?: IMeta;
    downlinkPayload?: string;
}

export interface IMessage {
    type?: string;
    utcTime?: string;
}

export interface IProRailBarrierOpenCloseTime {
    openingTime?: number;
    closingTime?: number;
}

export interface IMeta {
    barrierId?: string;
    startUtcTime?: string;
    geolocation?: string;
    street?: string;
    city?: string;
    description?: string;
    correctionTimeOffset?: number;
}
