import AsyncStorage from '@react-native-community/async-storage';
import { atom, WritableAtom } from 'jotai';

type UpdatedValue = {
  updated: boolean;
};

export function atomWithAsyncStorage<Value>(
  key: string,
  initialValue: Value,
): WritableAtom<Value, Value> {
  const baseAtom = atom<Value>(initialValue);
  baseAtom.onMount = setValue => {
    (async () => {
      const item = await AsyncStorage.getItem(key);
      if (item !== null) {
        setValue(JSON.parse(item));
      }
    })();
  };
  const derivedAtom = atom<Value, Value>(
    get => get(baseAtom),
    (get, set, update) => {
      const nextValue =
        typeof update === 'function' ? update(get(baseAtom)) : update;
      set(baseAtom, nextValue);
      AsyncStorage.setItem(key, JSON.stringify(nextValue));
    },
  );
  return derivedAtom;
}

export default atomWithAsyncStorage;
