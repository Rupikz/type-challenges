type TupleToUnion<T extends any[]> = T[number]
// type TupleToUnion<T extends any[]> = T extends [...infer A] ? A[number] : never
