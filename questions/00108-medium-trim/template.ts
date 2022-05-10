type EmptyLetter = ' ' | '\t' | '\n'
type Trim<S extends string> = S extends `${EmptyLetter}${infer F}` | `${infer F}${EmptyLetter}`
  ? Trim<F>
  : S
