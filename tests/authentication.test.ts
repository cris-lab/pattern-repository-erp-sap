import { ServiceLayerAuthService } from "../src/infrastructure/SLAuthService.service"
import * as dotenv from 'dotenv';

dotenv.config();

describe('Authentication con Service Layer', () => {

    let sessionId: string;

    beforeAll(async () => {
        const authenticationService = new ServiceLayerAuthService(
            process.env.SL_COMPANY_DB as string,
            process.env.SL_USER as string,
            process.env.SL_PASSWORD as string,
            process.env.SL_LANGUAGE as string
        );
        sessionId = await authenticationService.execute();
    });

    test('El sessionId no debe ser vacío', () => {
        expect(sessionId).not.toBe('')
    })

    test('El sessionId debe ser un string', () => {
        expect(typeof sessionId).toBe('string')
    })

    test('El sessionId debe tener una longitud de 32 caracteres', () => {
        expect(sessionId.length).toBe(36)
    })

})