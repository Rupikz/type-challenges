// type LengthOfString<S extends string> = number

//  Подходит решение из 298
// type LengthOfString<S extends string, ACC extends string[] = []> = S extends `${infer F}${infer L}`
//   ? LengthOfString<L, [...ACC, F]>
//   : ACC['length']
