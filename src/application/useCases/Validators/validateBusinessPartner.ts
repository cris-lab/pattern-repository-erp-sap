import { Repository } from "../../../domain/models/repository.interface";

export const validateBusinessPartner = async (repository: Repository, cardCode: string): Promise<void> => {
    const businessPartner = await repository.find({ CardCode: cardCode });
    if (businessPartner.length !== 0) {
        throw new Error('Business Partner already exists');
    }
};