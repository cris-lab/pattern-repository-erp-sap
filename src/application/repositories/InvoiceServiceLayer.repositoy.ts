import { ServiceLayer } from "../../infrastructure/ServiceLayer.service"
import { Repository } from "../../domain/models/repository.interface"
import { SLResponse } from "../../infrastructure/SLResponse.interface"

export class InvoicesRepository implements Repository {

    private readonly path = 'Invoices'

    constructor(
        private readonly serviceLayer: ServiceLayer
    ){}

    find = async (query: {}) : Promise<any[]> => {
        const entries : SLResponse =  await this.serviceLayer.get(this.path, {filter: query})
        if(entries.error !== undefined)
            throw new Error(entries.error.message.value)
        return entries.value
    }

    findById = async (id: number) : Promise<any> => {
        const entries : any[] = await this.find({DocEntry: id})
        return (entries.length !== 0) ? entries[0] : null
    }

    save = async (resourceId:number, data: {}) : Promise<any> => {
        return true
    }

}