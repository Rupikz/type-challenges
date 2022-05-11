// If added `Expect<Equal<Replace<'foobarfoo', 'bar', 'foo'>, 'foofoofoo'>>` test then it wrong

// type Replace<S extends string, From extends string, To extends string> =
//     From extends ''
//       ? S
//       : S extends `${infer F}${From}`
//         ? `${To}${F}`
//         : S

type Replace<S extends string, From extends string, To extends string> =
    From extends ''
      ? S
      : S extends `${infer F}${From}${infer B}`
        ? `${F}${To}${B}`
        : S
