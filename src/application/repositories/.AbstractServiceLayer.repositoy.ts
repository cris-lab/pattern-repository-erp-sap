import { SLAuthService } from "../../infrastructure/SLAuthService.service"
import { ServiceLayer } from "../../infrastructure/ServiceLayer.service"
import { Repository } from "../../domain/models/repository.interface"

export class AbstractSLRepository implements Repository {

    constructor(
        private readonly path: string,
        private readonly serviceLayer: ServiceLayer
    ){}

    find = async (query: {}) : Promise<any[]> => {
        return await this.serviceLayer.get(this.path, {filter: query})
    }

    findById = async (id: number) : Promise<any> => {
        return {}
    }

    save = async (resourceId:number, data: {}) : Promise<any> => {
        return {}
    }

}