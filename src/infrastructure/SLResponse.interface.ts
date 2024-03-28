export interface SLResponse {
    "odata.metadata": string,
    "odata.nextLink": string,
    value: any[],
    error?: {
        code: string,
        message: {
            lang: string,
            value: string
        }
    },

}