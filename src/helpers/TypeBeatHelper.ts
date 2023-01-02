import types from '../data/types.json';

import { TypeModel } from '../models/Type';

class TypeBeatHelper {
    public static getTypeById(id: string): TypeModel {
        return types.find((type) => type.id === id);
    }
}

export { TypeBeatHelper };