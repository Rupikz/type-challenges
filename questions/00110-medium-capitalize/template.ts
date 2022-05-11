type MyCapitalize<S extends string> = S extends `${infer F}${infer G}`
  ? `${Uppercase<F>}${G}`
  : S
