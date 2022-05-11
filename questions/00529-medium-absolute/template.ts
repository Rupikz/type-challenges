// type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer K}` ? K : `${T}`
type Absolute<T extends number | string | bigint> = Replace<`${T}`, '-', ''>
