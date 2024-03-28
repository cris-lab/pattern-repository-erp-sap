import axios, { AxiosError, AxiosResponse } from "axios";
import * as https from 'https';
import * as dotenv from 'dotenv';

dotenv.config();

export class SLAuthService {

    execute = async () : Promise<string> => {

        const response : AxiosResponse = await axios.post(`${process.env.SL_HOST}/Login`, 
        
            {
                CompanyDB: process.env.SL_COMPANY_DB,
                UserName:  process.env.SL_USER,
                Password:  process.env.SL_PASS,
                Language:  process.env.SL_LANGUAGE
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