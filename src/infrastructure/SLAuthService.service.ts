import axios, { AxiosError, AxiosResponse } from "axios";
import * as https from 'https';
import { UseCase } from "../domain/models/useCase.interface";

export class ServiceLayerAuthService implements UseCase {

    constructor(
        private readonly companyDB: string,
        private readonly userName: string,
        private readonly password: string,
        private readonly language: string
    ){}

    execute = async () : Promise<string> => {

        console.log('ServiceLayer', process.env.SL_COMPANY_DB, 'Autenticando...')

        const response : AxiosResponse = await axios.post(`${process.env.SL_HOST}/Login`, 
        
            {
                CompanyDB: this.companyDB,
                UserName:  this.userName,
                Password:  this.password,
                Language:  this.language
            }, 
            {
                httpsAgent: new https.Agent({
                    rejectUnauthorized: false
                })
            }
            
        )

        console.log('ServiceLayer', process.env.SL_COMPANY_DB, 'Sesion Id:', response.data.SessionId)

        return response.data.SessionId

        
    }

}