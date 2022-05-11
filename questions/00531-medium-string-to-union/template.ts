type StringToUnion<T extends string> = T extends `${infer P}${infer K}` ? `${P}` | StringToUnion<`${K}`> : never
