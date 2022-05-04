type TupleToObject<T extends readonly string[]> = { [KEY in T[number]]: KEY }
