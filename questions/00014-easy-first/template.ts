// My solution
type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// Other solution
// type First1<T extends any[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T extends [infer A, ...infer X] ? A : never
