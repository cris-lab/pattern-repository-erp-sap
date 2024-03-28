export interface UseCase {
    execute(...input): Promise<any>;
}
