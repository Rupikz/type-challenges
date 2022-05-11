// type Test<T> = {
//   [P in keyof T]: T[P];
// }
// type AppendToObject<T, U extends string, V> = Test<T & Record<U, V>>

type AppendToObject<T extends Record<string, unknown>, U extends string, V> = { [KEY in keyof T | U]: KEY extends U ? V : T[KEY] }
