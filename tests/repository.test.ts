import { ServiceLayerAbstractRepository } from "../src/application/repositories/BusinessPartners.repository"
import { Repository } from "../src/domain/models/repository.interface";
import { ServiceLayerAuthService } from "../src/infrastructure/SLAuthService.service"
import { ServiceLayer } from "../src/infrastructure/ServiceLayer.service"
import * as dotenv from 'dotenv';

dotenv.config();

describe('Repository ', () => {

    let businessPartners : any[]

    beforeAll(async () => {
        
        const serviceLayer = new ServiceLayer(new ServiceLayerAuthService(
            process.env.SL_COMPANY_DB as string,
            process.env.SL_USER as string,
            process.env.SL_PASSWORD as string,
            process.env.SL_LANGUAGE as string
        ))

        await serviceLayer.getSessionId()

        const businessPartnersRepository = new ServiceLayerAbstractRepository(
            'BusinessPartners',
            serviceLayer
        )

        const businessPartners = await businessPartnersRepository.find({})
        console.log('Business Partners:', businessPartners)

        process.exit()


    })

    test('El businessPartner debe ser un array', () => {
       expect(businessPartners).toBe([])
    })

    

    
    
    

})