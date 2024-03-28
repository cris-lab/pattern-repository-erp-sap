import { Repository } from "../../../domain/models/repository.interface";
import { UseCase } from "../../../domain/models/useCase.interface";
import { validateBusinessPartner } from "../Validators/validateBusinessPartner";
import { validateCardCode } from "../Validators/validateCardCode";

export class CreateBusinessPartnersUseCase implements UseCase {

    constructor(
        private readonly businessPartnersRepository: Repository
    ){}

    execute = async (payload: any) : Promise<{}> => {

        const { CardCode, CardName, GroupCode } = payload

        await validateCardCode(CardCode)
        /**
            Aqui podrias agregar mas validaciones, siguiendo el mismo patron
            que se utilizo en validateCardCode.ts
        */ 
        await validateBusinessPartner(this.businessPartnersRepository, CardCode)

        return await this.businessPartnersRepository.save(0, {CardCode, CardName, GroupCode})

    }

}