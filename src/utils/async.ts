/**
 * @internal
 */
export type ThenArg<T> = T extends PromiseLike<infer U> ? ThenArg<U> : T;

export type inferAsyncReturnType<TFunction extends (...args: any) => any> =
  ThenArg<ReturnType<TFunction>>;
