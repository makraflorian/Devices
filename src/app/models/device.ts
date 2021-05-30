
export interface Device{
    resourceType: string,
    id?: string,
    text: standardText,
    identifier?: Identifier[],
    definition?: Reference,
    udiCarrier?: {
        deviceIdentifier?: string,
        issuer?: string,
        jurisdiction?: string,
        carrierAIDC?: number,
        carrierHRF?: string,
        entryType?: "barcode" | "rfid" | "manual"
    }[],
    status?: "active" | "inactive" | "entered-in-error" | "unknown",
    statusReason?: CodeableConcept[],
    distinctIdentifier?: string,
    manufacturer?: string,
    manufactureDate?: string,
    expirationDate?: string,
    lotNumber?: string,
    serialNumber?: string,
    deviceName?: {
        name: string,
        type: "udi-label-name" | "user-friendly-name" | "patient-reported-name" | "manufacturer-name" | "model-name" | "other"
    }[],
    modelNumber?: string,
    partNumber?: string,
    type?: CodeableConcept,
    specialization?:{
        systemType: CodeableConcept,
        version?: string
    }[],
    version?: {
        type?: CodeableConcept,
        component?: Identifier,
        value: string
    }[],
    property?:{
        type: CodeableConcept,
        valueQuantity?: Quantity[],
        valueCode?: CodeableConcept[]
    }[],
    patient?: string,
    owner?: string,
    contact?: ContactPoint[],
    location?: Reference,
    url?: string,
    note?: Annotation[],
    safety?: CodeableConcept[],
    parent?: Reference
}

export interface Identifier{
    use?: "usual" | "official" | "temp" | "secondary" | "old",
    type?: CodeableConcept,
    system?: string,
    value?: string,
    period?: Period,
    assigner?: string
}

export interface CodeableConcept{
    text?: string,
    coding?: Coding[]
}

export interface Coding{
    system?: string,
    version?: string,
    code?: string,
    display?: string,
    userSelected?: boolean
}

export interface Period{
    start?: string,
    end?: string
}

export interface ContactPoint{
    system?: "phone" | "fax" | "email" | "pager" | "url" | "sms" | "other",
    value?: string,
    use?: "home" | "work" | "temp" | "old" | "mobile",
    rank?: number,
    period?: Period

}

export interface Annotation{
    author?: string,
    time?: string,
    text: string
}

export interface Quantity{
    value?: number,
    comparator?: "<" | "<=" | ">=" | ">",
    unit?: string,
    system?: String,
    code?: string
}

export interface Reference{
    reference?: string,
    type?: string,
    identifier?: Identifier,
    display?: string
}

export interface standardText{
    status?: string,
    div?: string
}