type Merge<F extends Record<string, unknown>, S extends Record<string, unknown>>
    = { [KEY in (keyof F | keyof S)]: KEY extends keyof S ? S[KEY] :
      KEY extends keyof F ? F[KEY] : never }
