type TrimRight<S extends string> = S extends `${infer F}${EmptyLetter}`
  ? TrimRight<F>
  : S
