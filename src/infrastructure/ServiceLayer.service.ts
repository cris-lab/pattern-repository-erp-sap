import axios, { AxiosResponse } from 'axios';
import * as https from 'https';
import { SLResponse } from './SLResponse.interface';

export class ServiceLayer {

    private sessionId : string
    private agent     : https.Agent

    constructor(
        private readonly slAuthService: { execute: () => Promise<string> }
    ){
        // Por defecto se deja en false para que no verifique el certificado SSL, pero en un ambiente de producción se debe cambiar a true
        this.agent = new https.Agent({rejectUnauthorized: false})
    }

    public setSessionId = async () => {
        this.sessionId = await this.slAuthService.execute()
    }

    public async get(resource: string, query: {}): Promise<SLResponse> {
        
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'Cookie': `B1SESSION=${this.sessionId}; ROUTEID=.node4;`
            },
            httpsAgent: this.agent
        };
    
        const response: AxiosResponse = await axios.get(`${process.env.SL_HOST}/${resource}${query}`, options);
        return response.data;

    }

}

