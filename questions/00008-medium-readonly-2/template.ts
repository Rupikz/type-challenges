type MyReadonly2<T, K extends keyof T = keyof T> = MyReadonly<Pick<T, K>> & Omit<T, K>
