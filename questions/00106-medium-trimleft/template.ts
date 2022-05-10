type TrimLeft<S extends string> = S extends `${infer F}${infer G}`
  ? F extends ' ' | '\n' | '\t' ? TrimLeft<G> : `${F}${G}`
  : S

// solution from answer

// type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer G}`
//   ? TrimLeft<G> : S
