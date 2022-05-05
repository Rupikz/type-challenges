type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer W>
  ? W extends Promise<unknown> ? MyAwaited<W> : W
  : never
