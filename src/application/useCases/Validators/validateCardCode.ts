export const validateCardCode = async (cardCode: string): Promise<void> => {
    
    /** 
        Esta validacion corresponde solo a un ejemplo,
        en un caso real se podria validar que el CardCode
        tenga un formato especifico, por ejemplo, que sea
        alfanumerico y que tenga una longitud de 15 caracteres.
    */

    if (cardCode.length !== 15) {
        throw new Error('CardCode must have 15 characters');
    }
    
}