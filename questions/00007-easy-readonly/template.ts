type MyReadonly<T> = { readonly [KEY in keyof T]: T[KEY] }
