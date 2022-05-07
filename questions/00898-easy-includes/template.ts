import type { Equal } from '@type-challenges/utils'

export type Includes<T extends readonly any[], U> = T extends [infer A, ...infer REST]
  ? Equal<A, U> extends true ? true : Includes<REST, U>
  : false
