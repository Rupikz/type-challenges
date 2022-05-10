type TrimLeft<S extends string> = S extends `${EmptyLetter}${infer G}`
  ? TrimLeft<G>
  : S
