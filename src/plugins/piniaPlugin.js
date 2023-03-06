import { toRaw } from 'vue';
import { setStorage, getStorage } from '@/utils';

export const piniaPlugin = (ids = []) => {
    return ({ store }) => {
        if (ids.includes(store.$id)) {
            store.$subscribe((args, state) => {
                const data = getStorage(store.$id);

                setStorage(store.$id, toRaw(state));

                // store.$patch({
                //     ...data,
                //     ...state,
                // });
            });
        }
    };
};
