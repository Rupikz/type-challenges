type Flatten<T extends any[], ACC extends any[] = []> = T extends [infer K, ...infer R]
  ? K extends any[] ? Flatten<[...K, ...R], ACC> : Flatten<R, [...ACC, K]>
  : ACC
