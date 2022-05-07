type DeepReadonly<T> = { readonly [KEY in keyof T]: keyof T[KEY] extends never ? T[KEY] : DeepReadonly<T[KEY]> }
