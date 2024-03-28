export interface Repository {

    find(query: {}) : Promise<any[]>
    findById(id: number) : Promise<any>
    save(resourceId:number, data: {}) : Promise<any>
    delete(resourceId:number) : Promise<boolean>

}