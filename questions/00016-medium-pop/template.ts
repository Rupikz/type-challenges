type Pop<T extends any[]> = T extends [...infer A, infer B] ? A : never
