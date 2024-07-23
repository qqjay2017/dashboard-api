
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Dashboard
 * 
 */
export type Dashboard = $Result.DefaultSelection<Prisma.$DashboardPayload>
/**
 * Model ApiGroup
 * 
 */
export type ApiGroup = $Result.DefaultSelection<Prisma.$ApiGroupPayload>
/**
 * Model ApiBaseName
 * 
 */
export type ApiBaseName = $Result.DefaultSelection<Prisma.$ApiBaseNamePayload>
/**
 * Model ApiOrigin
 * 
 */
export type ApiOrigin = $Result.DefaultSelection<Prisma.$ApiOriginPayload>
/**
 * Model ApiManage
 * 
 */
export type ApiManage = $Result.DefaultSelection<Prisma.$ApiManagePayload>
/**
 * Model ComponentChart
 * 
 */
export type ComponentChart = $Result.DefaultSelection<Prisma.$ComponentChartPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Dashboards
 * const dashboards = await prisma.dashboard.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Dashboards
   * const dashboards = await prisma.dashboard.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.dashboard`: Exposes CRUD operations for the **Dashboard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dashboards
    * const dashboards = await prisma.dashboard.findMany()
    * ```
    */
  get dashboard(): Prisma.DashboardDelegate<ExtArgs>;

  /**
   * `prisma.apiGroup`: Exposes CRUD operations for the **ApiGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiGroups
    * const apiGroups = await prisma.apiGroup.findMany()
    * ```
    */
  get apiGroup(): Prisma.ApiGroupDelegate<ExtArgs>;

  /**
   * `prisma.apiBaseName`: Exposes CRUD operations for the **ApiBaseName** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiBaseNames
    * const apiBaseNames = await prisma.apiBaseName.findMany()
    * ```
    */
  get apiBaseName(): Prisma.ApiBaseNameDelegate<ExtArgs>;

  /**
   * `prisma.apiOrigin`: Exposes CRUD operations for the **ApiOrigin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiOrigins
    * const apiOrigins = await prisma.apiOrigin.findMany()
    * ```
    */
  get apiOrigin(): Prisma.ApiOriginDelegate<ExtArgs>;

  /**
   * `prisma.apiManage`: Exposes CRUD operations for the **ApiManage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiManages
    * const apiManages = await prisma.apiManage.findMany()
    * ```
    */
  get apiManage(): Prisma.ApiManageDelegate<ExtArgs>;

  /**
   * `prisma.componentChart`: Exposes CRUD operations for the **ComponentChart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ComponentCharts
    * const componentCharts = await prisma.componentChart.findMany()
    * ```
    */
  get componentChart(): Prisma.ComponentChartDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.15.0
   * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Dashboard: 'Dashboard',
    ApiGroup: 'ApiGroup',
    ApiBaseName: 'ApiBaseName',
    ApiOrigin: 'ApiOrigin',
    ApiManage: 'ApiManage',
    ComponentChart: 'ComponentChart'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'dashboard' | 'apiGroup' | 'apiBaseName' | 'apiOrigin' | 'apiManage' | 'componentChart'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Dashboard: {
        payload: Prisma.$DashboardPayload<ExtArgs>
        fields: Prisma.DashboardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DashboardFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DashboardFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>
          }
          findFirst: {
            args: Prisma.DashboardFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DashboardFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>
          }
          findMany: {
            args: Prisma.DashboardFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>[]
          }
          create: {
            args: Prisma.DashboardCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>
          }
          createMany: {
            args: Prisma.DashboardCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DashboardDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>
          }
          update: {
            args: Prisma.DashboardUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>
          }
          deleteMany: {
            args: Prisma.DashboardDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DashboardUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DashboardUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>
          }
          aggregate: {
            args: Prisma.DashboardAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDashboard>
          }
          groupBy: {
            args: Prisma.DashboardGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DashboardGroupByOutputType>[]
          }
          count: {
            args: Prisma.DashboardCountArgs<ExtArgs>,
            result: $Utils.Optional<DashboardCountAggregateOutputType> | number
          }
        }
      }
      ApiGroup: {
        payload: Prisma.$ApiGroupPayload<ExtArgs>
        fields: Prisma.ApiGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiGroupFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiGroupFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiGroupPayload>
          }
          findFirst: {
            args: Prisma.ApiGroupFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiGroupFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiGroupPayload>
          }
          findMany: {
            args: Prisma.ApiGroupFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiGroupPayload>[]
          }
          create: {
            args: Prisma.ApiGroupCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiGroupPayload>
          }
          createMany: {
            args: Prisma.ApiGroupCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ApiGroupDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiGroupPayload>
          }
          update: {
            args: Prisma.ApiGroupUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiGroupPayload>
          }
          deleteMany: {
            args: Prisma.ApiGroupDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ApiGroupUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ApiGroupUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiGroupPayload>
          }
          aggregate: {
            args: Prisma.ApiGroupAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateApiGroup>
          }
          groupBy: {
            args: Prisma.ApiGroupGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ApiGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiGroupCountArgs<ExtArgs>,
            result: $Utils.Optional<ApiGroupCountAggregateOutputType> | number
          }
        }
      }
      ApiBaseName: {
        payload: Prisma.$ApiBaseNamePayload<ExtArgs>
        fields: Prisma.ApiBaseNameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiBaseNameFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiBaseNamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiBaseNameFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiBaseNamePayload>
          }
          findFirst: {
            args: Prisma.ApiBaseNameFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiBaseNamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiBaseNameFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiBaseNamePayload>
          }
          findMany: {
            args: Prisma.ApiBaseNameFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiBaseNamePayload>[]
          }
          create: {
            args: Prisma.ApiBaseNameCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiBaseNamePayload>
          }
          createMany: {
            args: Prisma.ApiBaseNameCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ApiBaseNameDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiBaseNamePayload>
          }
          update: {
            args: Prisma.ApiBaseNameUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiBaseNamePayload>
          }
          deleteMany: {
            args: Prisma.ApiBaseNameDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ApiBaseNameUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ApiBaseNameUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiBaseNamePayload>
          }
          aggregate: {
            args: Prisma.ApiBaseNameAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateApiBaseName>
          }
          groupBy: {
            args: Prisma.ApiBaseNameGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ApiBaseNameGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiBaseNameCountArgs<ExtArgs>,
            result: $Utils.Optional<ApiBaseNameCountAggregateOutputType> | number
          }
        }
      }
      ApiOrigin: {
        payload: Prisma.$ApiOriginPayload<ExtArgs>
        fields: Prisma.ApiOriginFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiOriginFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiOriginPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiOriginFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiOriginPayload>
          }
          findFirst: {
            args: Prisma.ApiOriginFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiOriginPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiOriginFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiOriginPayload>
          }
          findMany: {
            args: Prisma.ApiOriginFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiOriginPayload>[]
          }
          create: {
            args: Prisma.ApiOriginCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiOriginPayload>
          }
          createMany: {
            args: Prisma.ApiOriginCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ApiOriginDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiOriginPayload>
          }
          update: {
            args: Prisma.ApiOriginUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiOriginPayload>
          }
          deleteMany: {
            args: Prisma.ApiOriginDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ApiOriginUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ApiOriginUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiOriginPayload>
          }
          aggregate: {
            args: Prisma.ApiOriginAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateApiOrigin>
          }
          groupBy: {
            args: Prisma.ApiOriginGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ApiOriginGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiOriginCountArgs<ExtArgs>,
            result: $Utils.Optional<ApiOriginCountAggregateOutputType> | number
          }
        }
      }
      ApiManage: {
        payload: Prisma.$ApiManagePayload<ExtArgs>
        fields: Prisma.ApiManageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiManageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiManagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiManageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiManagePayload>
          }
          findFirst: {
            args: Prisma.ApiManageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiManagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiManageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiManagePayload>
          }
          findMany: {
            args: Prisma.ApiManageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiManagePayload>[]
          }
          create: {
            args: Prisma.ApiManageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiManagePayload>
          }
          createMany: {
            args: Prisma.ApiManageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ApiManageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiManagePayload>
          }
          update: {
            args: Prisma.ApiManageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiManagePayload>
          }
          deleteMany: {
            args: Prisma.ApiManageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ApiManageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ApiManageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApiManagePayload>
          }
          aggregate: {
            args: Prisma.ApiManageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateApiManage>
          }
          groupBy: {
            args: Prisma.ApiManageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ApiManageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiManageCountArgs<ExtArgs>,
            result: $Utils.Optional<ApiManageCountAggregateOutputType> | number
          }
        }
      }
      ComponentChart: {
        payload: Prisma.$ComponentChartPayload<ExtArgs>
        fields: Prisma.ComponentChartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComponentChartFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ComponentChartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComponentChartFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ComponentChartPayload>
          }
          findFirst: {
            args: Prisma.ComponentChartFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ComponentChartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComponentChartFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ComponentChartPayload>
          }
          findMany: {
            args: Prisma.ComponentChartFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ComponentChartPayload>[]
          }
          create: {
            args: Prisma.ComponentChartCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ComponentChartPayload>
          }
          createMany: {
            args: Prisma.ComponentChartCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ComponentChartDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ComponentChartPayload>
          }
          update: {
            args: Prisma.ComponentChartUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ComponentChartPayload>
          }
          deleteMany: {
            args: Prisma.ComponentChartDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ComponentChartUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ComponentChartUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ComponentChartPayload>
          }
          aggregate: {
            args: Prisma.ComponentChartAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateComponentChart>
          }
          groupBy: {
            args: Prisma.ComponentChartGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ComponentChartGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComponentChartCountArgs<ExtArgs>,
            result: $Utils.Optional<ComponentChartCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Dashboard
   */

  export type AggregateDashboard = {
    _count: DashboardCountAggregateOutputType | null
    _avg: DashboardAvgAggregateOutputType | null
    _sum: DashboardSumAggregateOutputType | null
    _min: DashboardMinAggregateOutputType | null
    _max: DashboardMaxAggregateOutputType | null
  }

  export type DashboardAvgAggregateOutputType = {
    id: number | null
    visits: number | null
    submissions: number | null
  }

  export type DashboardSumAggregateOutputType = {
    id: number | null
    visits: number | null
    submissions: number | null
  }

  export type DashboardMinAggregateOutputType = {
    id: number | null
    userId: string | null
    createdAt: Date | null
    updateAt: Date | null
    published: boolean | null
    name: string | null
    coverThumbnail: string | null
    description: string | null
    content: string | null
    designWidthEnum: string | null
    visits: number | null
    submissions: number | null
    shareURL: string | null
  }

  export type DashboardMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    createdAt: Date | null
    updateAt: Date | null
    published: boolean | null
    name: string | null
    coverThumbnail: string | null
    description: string | null
    content: string | null
    designWidthEnum: string | null
    visits: number | null
    submissions: number | null
    shareURL: string | null
  }

  export type DashboardCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updateAt: number
    published: number
    name: number
    coverThumbnail: number
    description: number
    content: number
    designWidthEnum: number
    visits: number
    submissions: number
    shareURL: number
    _all: number
  }


  export type DashboardAvgAggregateInputType = {
    id?: true
    visits?: true
    submissions?: true
  }

  export type DashboardSumAggregateInputType = {
    id?: true
    visits?: true
    submissions?: true
  }

  export type DashboardMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updateAt?: true
    published?: true
    name?: true
    coverThumbnail?: true
    description?: true
    content?: true
    designWidthEnum?: true
    visits?: true
    submissions?: true
    shareURL?: true
  }

  export type DashboardMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updateAt?: true
    published?: true
    name?: true
    coverThumbnail?: true
    description?: true
    content?: true
    designWidthEnum?: true
    visits?: true
    submissions?: true
    shareURL?: true
  }

  export type DashboardCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updateAt?: true
    published?: true
    name?: true
    coverThumbnail?: true
    description?: true
    content?: true
    designWidthEnum?: true
    visits?: true
    submissions?: true
    shareURL?: true
    _all?: true
  }

  export type DashboardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dashboard to aggregate.
     */
    where?: DashboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dashboards to fetch.
     */
    orderBy?: DashboardOrderByWithRelationInput | DashboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DashboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dashboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dashboards
    **/
    _count?: true | DashboardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DashboardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DashboardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DashboardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DashboardMaxAggregateInputType
  }

  export type GetDashboardAggregateType<T extends DashboardAggregateArgs> = {
        [P in keyof T & keyof AggregateDashboard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDashboard[P]>
      : GetScalarType<T[P], AggregateDashboard[P]>
  }




  export type DashboardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DashboardWhereInput
    orderBy?: DashboardOrderByWithAggregationInput | DashboardOrderByWithAggregationInput[]
    by: DashboardScalarFieldEnum[] | DashboardScalarFieldEnum
    having?: DashboardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DashboardCountAggregateInputType | true
    _avg?: DashboardAvgAggregateInputType
    _sum?: DashboardSumAggregateInputType
    _min?: DashboardMinAggregateInputType
    _max?: DashboardMaxAggregateInputType
  }

  export type DashboardGroupByOutputType = {
    id: number
    userId: string
    createdAt: Date
    updateAt: Date
    published: boolean
    name: string
    coverThumbnail: string | null
    description: string
    content: string
    designWidthEnum: string
    visits: number
    submissions: number
    shareURL: string
    _count: DashboardCountAggregateOutputType | null
    _avg: DashboardAvgAggregateOutputType | null
    _sum: DashboardSumAggregateOutputType | null
    _min: DashboardMinAggregateOutputType | null
    _max: DashboardMaxAggregateOutputType | null
  }

  type GetDashboardGroupByPayload<T extends DashboardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DashboardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DashboardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DashboardGroupByOutputType[P]>
            : GetScalarType<T[P], DashboardGroupByOutputType[P]>
        }
      >
    >


  export type DashboardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    published?: boolean
    name?: boolean
    coverThumbnail?: boolean
    description?: boolean
    content?: boolean
    designWidthEnum?: boolean
    visits?: boolean
    submissions?: boolean
    shareURL?: boolean
  }, ExtArgs["result"]["dashboard"]>


  export type DashboardSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updateAt?: boolean
    published?: boolean
    name?: boolean
    coverThumbnail?: boolean
    description?: boolean
    content?: boolean
    designWidthEnum?: boolean
    visits?: boolean
    submissions?: boolean
    shareURL?: boolean
  }


  export type $DashboardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dashboard"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      createdAt: Date
      updateAt: Date
      published: boolean
      name: string
      coverThumbnail: string | null
      description: string
      content: string
      designWidthEnum: string
      visits: number
      submissions: number
      shareURL: string
    }, ExtArgs["result"]["dashboard"]>
    composites: {}
  }

  type DashboardGetPayload<S extends boolean | null | undefined | DashboardDefaultArgs> = $Result.GetResult<Prisma.$DashboardPayload, S>

  type DashboardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DashboardFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DashboardCountAggregateInputType | true
    }

  export interface DashboardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dashboard'], meta: { name: 'Dashboard' } }
    /**
     * Find zero or one Dashboard that matches the filter.
     * @param {DashboardFindUniqueArgs} args - Arguments to find a Dashboard
     * @example
     * // Get one Dashboard
     * const dashboard = await prisma.dashboard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DashboardFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DashboardFindUniqueArgs<ExtArgs>>
    ): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Dashboard that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DashboardFindUniqueOrThrowArgs} args - Arguments to find a Dashboard
     * @example
     * // Get one Dashboard
     * const dashboard = await prisma.dashboard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DashboardFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DashboardFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Dashboard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardFindFirstArgs} args - Arguments to find a Dashboard
     * @example
     * // Get one Dashboard
     * const dashboard = await prisma.dashboard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DashboardFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DashboardFindFirstArgs<ExtArgs>>
    ): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Dashboard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardFindFirstOrThrowArgs} args - Arguments to find a Dashboard
     * @example
     * // Get one Dashboard
     * const dashboard = await prisma.dashboard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DashboardFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DashboardFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Dashboards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dashboards
     * const dashboards = await prisma.dashboard.findMany()
     * 
     * // Get first 10 Dashboards
     * const dashboards = await prisma.dashboard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dashboardWithIdOnly = await prisma.dashboard.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DashboardFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DashboardFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Dashboard.
     * @param {DashboardCreateArgs} args - Arguments to create a Dashboard.
     * @example
     * // Create one Dashboard
     * const Dashboard = await prisma.dashboard.create({
     *   data: {
     *     // ... data to create a Dashboard
     *   }
     * })
     * 
    **/
    create<T extends DashboardCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DashboardCreateArgs<ExtArgs>>
    ): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Dashboards.
     * @param {DashboardCreateManyArgs} args - Arguments to create many Dashboards.
     * @example
     * // Create many Dashboards
     * const dashboard = await prisma.dashboard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends DashboardCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DashboardCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dashboard.
     * @param {DashboardDeleteArgs} args - Arguments to delete one Dashboard.
     * @example
     * // Delete one Dashboard
     * const Dashboard = await prisma.dashboard.delete({
     *   where: {
     *     // ... filter to delete one Dashboard
     *   }
     * })
     * 
    **/
    delete<T extends DashboardDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DashboardDeleteArgs<ExtArgs>>
    ): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Dashboard.
     * @param {DashboardUpdateArgs} args - Arguments to update one Dashboard.
     * @example
     * // Update one Dashboard
     * const dashboard = await prisma.dashboard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DashboardUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DashboardUpdateArgs<ExtArgs>>
    ): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Dashboards.
     * @param {DashboardDeleteManyArgs} args - Arguments to filter Dashboards to delete.
     * @example
     * // Delete a few Dashboards
     * const { count } = await prisma.dashboard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DashboardDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DashboardDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dashboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dashboards
     * const dashboard = await prisma.dashboard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DashboardUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DashboardUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dashboard.
     * @param {DashboardUpsertArgs} args - Arguments to update or create a Dashboard.
     * @example
     * // Update or create a Dashboard
     * const dashboard = await prisma.dashboard.upsert({
     *   create: {
     *     // ... data to create a Dashboard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dashboard we want to update
     *   }
     * })
    **/
    upsert<T extends DashboardUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DashboardUpsertArgs<ExtArgs>>
    ): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Dashboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardCountArgs} args - Arguments to filter Dashboards to count.
     * @example
     * // Count the number of Dashboards
     * const count = await prisma.dashboard.count({
     *   where: {
     *     // ... the filter for the Dashboards we want to count
     *   }
     * })
    **/
    count<T extends DashboardCountArgs>(
      args?: Subset<T, DashboardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DashboardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dashboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DashboardAggregateArgs>(args: Subset<T, DashboardAggregateArgs>): Prisma.PrismaPromise<GetDashboardAggregateType<T>>

    /**
     * Group by Dashboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DashboardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DashboardGroupByArgs['orderBy'] }
        : { orderBy?: DashboardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DashboardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDashboardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dashboard model
   */
  readonly fields: DashboardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dashboard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DashboardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Dashboard model
   */ 
  interface DashboardFieldRefs {
    readonly id: FieldRef<"Dashboard", 'Int'>
    readonly userId: FieldRef<"Dashboard", 'String'>
    readonly createdAt: FieldRef<"Dashboard", 'DateTime'>
    readonly updateAt: FieldRef<"Dashboard", 'DateTime'>
    readonly published: FieldRef<"Dashboard", 'Boolean'>
    readonly name: FieldRef<"Dashboard", 'String'>
    readonly coverThumbnail: FieldRef<"Dashboard", 'String'>
    readonly description: FieldRef<"Dashboard", 'String'>
    readonly content: FieldRef<"Dashboard", 'String'>
    readonly designWidthEnum: FieldRef<"Dashboard", 'String'>
    readonly visits: FieldRef<"Dashboard", 'Int'>
    readonly submissions: FieldRef<"Dashboard", 'Int'>
    readonly shareURL: FieldRef<"Dashboard", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Dashboard findUnique
   */
  export type DashboardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Filter, which Dashboard to fetch.
     */
    where: DashboardWhereUniqueInput
  }

  /**
   * Dashboard findUniqueOrThrow
   */
  export type DashboardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Filter, which Dashboard to fetch.
     */
    where: DashboardWhereUniqueInput
  }

  /**
   * Dashboard findFirst
   */
  export type DashboardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Filter, which Dashboard to fetch.
     */
    where?: DashboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dashboards to fetch.
     */
    orderBy?: DashboardOrderByWithRelationInput | DashboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dashboards.
     */
    cursor?: DashboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dashboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dashboards.
     */
    distinct?: DashboardScalarFieldEnum | DashboardScalarFieldEnum[]
  }

  /**
   * Dashboard findFirstOrThrow
   */
  export type DashboardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Filter, which Dashboard to fetch.
     */
    where?: DashboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dashboards to fetch.
     */
    orderBy?: DashboardOrderByWithRelationInput | DashboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dashboards.
     */
    cursor?: DashboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dashboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dashboards.
     */
    distinct?: DashboardScalarFieldEnum | DashboardScalarFieldEnum[]
  }

  /**
   * Dashboard findMany
   */
  export type DashboardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Filter, which Dashboards to fetch.
     */
    where?: DashboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dashboards to fetch.
     */
    orderBy?: DashboardOrderByWithRelationInput | DashboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dashboards.
     */
    cursor?: DashboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dashboards.
     */
    skip?: number
    distinct?: DashboardScalarFieldEnum | DashboardScalarFieldEnum[]
  }

  /**
   * Dashboard create
   */
  export type DashboardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * The data needed to create a Dashboard.
     */
    data: XOR<DashboardCreateInput, DashboardUncheckedCreateInput>
  }

  /**
   * Dashboard createMany
   */
  export type DashboardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dashboards.
     */
    data: DashboardCreateManyInput | DashboardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dashboard update
   */
  export type DashboardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * The data needed to update a Dashboard.
     */
    data: XOR<DashboardUpdateInput, DashboardUncheckedUpdateInput>
    /**
     * Choose, which Dashboard to update.
     */
    where: DashboardWhereUniqueInput
  }

  /**
   * Dashboard updateMany
   */
  export type DashboardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dashboards.
     */
    data: XOR<DashboardUpdateManyMutationInput, DashboardUncheckedUpdateManyInput>
    /**
     * Filter which Dashboards to update
     */
    where?: DashboardWhereInput
  }

  /**
   * Dashboard upsert
   */
  export type DashboardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * The filter to search for the Dashboard to update in case it exists.
     */
    where: DashboardWhereUniqueInput
    /**
     * In case the Dashboard found by the `where` argument doesn't exist, create a new Dashboard with this data.
     */
    create: XOR<DashboardCreateInput, DashboardUncheckedCreateInput>
    /**
     * In case the Dashboard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DashboardUpdateInput, DashboardUncheckedUpdateInput>
  }

  /**
   * Dashboard delete
   */
  export type DashboardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Filter which Dashboard to delete.
     */
    where: DashboardWhereUniqueInput
  }

  /**
   * Dashboard deleteMany
   */
  export type DashboardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dashboards to delete
     */
    where?: DashboardWhereInput
  }

  /**
   * Dashboard without action
   */
  export type DashboardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
  }


  /**
   * Model ApiGroup
   */

  export type AggregateApiGroup = {
    _count: ApiGroupCountAggregateOutputType | null
    _min: ApiGroupMinAggregateOutputType | null
    _max: ApiGroupMaxAggregateOutputType | null
  }

  export type ApiGroupMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updateAt: Date | null
    name: string | null
  }

  export type ApiGroupMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updateAt: Date | null
    name: string | null
  }

  export type ApiGroupCountAggregateOutputType = {
    id: number
    createdAt: number
    updateAt: number
    name: number
    _all: number
  }


  export type ApiGroupMinAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    name?: true
  }

  export type ApiGroupMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    name?: true
  }

  export type ApiGroupCountAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    name?: true
    _all?: true
  }

  export type ApiGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiGroup to aggregate.
     */
    where?: ApiGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiGroups to fetch.
     */
    orderBy?: ApiGroupOrderByWithRelationInput | ApiGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiGroups
    **/
    _count?: true | ApiGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiGroupMaxAggregateInputType
  }

  export type GetApiGroupAggregateType<T extends ApiGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateApiGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiGroup[P]>
      : GetScalarType<T[P], AggregateApiGroup[P]>
  }




  export type ApiGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiGroupWhereInput
    orderBy?: ApiGroupOrderByWithAggregationInput | ApiGroupOrderByWithAggregationInput[]
    by: ApiGroupScalarFieldEnum[] | ApiGroupScalarFieldEnum
    having?: ApiGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiGroupCountAggregateInputType | true
    _min?: ApiGroupMinAggregateInputType
    _max?: ApiGroupMaxAggregateInputType
  }

  export type ApiGroupGroupByOutputType = {
    id: string
    createdAt: Date
    updateAt: Date
    name: string
    _count: ApiGroupCountAggregateOutputType | null
    _min: ApiGroupMinAggregateOutputType | null
    _max: ApiGroupMaxAggregateOutputType | null
  }

  type GetApiGroupGroupByPayload<T extends ApiGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiGroupGroupByOutputType[P]>
            : GetScalarType<T[P], ApiGroupGroupByOutputType[P]>
        }
      >
    >


  export type ApiGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    name?: boolean
  }, ExtArgs["result"]["apiGroup"]>


  export type ApiGroupSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    name?: boolean
  }


  export type $ApiGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiGroup"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updateAt: Date
      name: string
    }, ExtArgs["result"]["apiGroup"]>
    composites: {}
  }

  type ApiGroupGetPayload<S extends boolean | null | undefined | ApiGroupDefaultArgs> = $Result.GetResult<Prisma.$ApiGroupPayload, S>

  type ApiGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ApiGroupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ApiGroupCountAggregateInputType | true
    }

  export interface ApiGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiGroup'], meta: { name: 'ApiGroup' } }
    /**
     * Find zero or one ApiGroup that matches the filter.
     * @param {ApiGroupFindUniqueArgs} args - Arguments to find a ApiGroup
     * @example
     * // Get one ApiGroup
     * const apiGroup = await prisma.apiGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ApiGroupFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ApiGroupFindUniqueArgs<ExtArgs>>
    ): Prisma__ApiGroupClient<$Result.GetResult<Prisma.$ApiGroupPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ApiGroup that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ApiGroupFindUniqueOrThrowArgs} args - Arguments to find a ApiGroup
     * @example
     * // Get one ApiGroup
     * const apiGroup = await prisma.apiGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ApiGroupFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiGroupFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ApiGroupClient<$Result.GetResult<Prisma.$ApiGroupPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ApiGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiGroupFindFirstArgs} args - Arguments to find a ApiGroup
     * @example
     * // Get one ApiGroup
     * const apiGroup = await prisma.apiGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ApiGroupFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiGroupFindFirstArgs<ExtArgs>>
    ): Prisma__ApiGroupClient<$Result.GetResult<Prisma.$ApiGroupPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ApiGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiGroupFindFirstOrThrowArgs} args - Arguments to find a ApiGroup
     * @example
     * // Get one ApiGroup
     * const apiGroup = await prisma.apiGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ApiGroupFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiGroupFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ApiGroupClient<$Result.GetResult<Prisma.$ApiGroupPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ApiGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiGroups
     * const apiGroups = await prisma.apiGroup.findMany()
     * 
     * // Get first 10 ApiGroups
     * const apiGroups = await prisma.apiGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiGroupWithIdOnly = await prisma.apiGroup.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ApiGroupFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiGroupFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiGroupPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ApiGroup.
     * @param {ApiGroupCreateArgs} args - Arguments to create a ApiGroup.
     * @example
     * // Create one ApiGroup
     * const ApiGroup = await prisma.apiGroup.create({
     *   data: {
     *     // ... data to create a ApiGroup
     *   }
     * })
     * 
    **/
    create<T extends ApiGroupCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ApiGroupCreateArgs<ExtArgs>>
    ): Prisma__ApiGroupClient<$Result.GetResult<Prisma.$ApiGroupPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ApiGroups.
     * @param {ApiGroupCreateManyArgs} args - Arguments to create many ApiGroups.
     * @example
     * // Create many ApiGroups
     * const apiGroup = await prisma.apiGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ApiGroupCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiGroupCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ApiGroup.
     * @param {ApiGroupDeleteArgs} args - Arguments to delete one ApiGroup.
     * @example
     * // Delete one ApiGroup
     * const ApiGroup = await prisma.apiGroup.delete({
     *   where: {
     *     // ... filter to delete one ApiGroup
     *   }
     * })
     * 
    **/
    delete<T extends ApiGroupDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ApiGroupDeleteArgs<ExtArgs>>
    ): Prisma__ApiGroupClient<$Result.GetResult<Prisma.$ApiGroupPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ApiGroup.
     * @param {ApiGroupUpdateArgs} args - Arguments to update one ApiGroup.
     * @example
     * // Update one ApiGroup
     * const apiGroup = await prisma.apiGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ApiGroupUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ApiGroupUpdateArgs<ExtArgs>>
    ): Prisma__ApiGroupClient<$Result.GetResult<Prisma.$ApiGroupPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ApiGroups.
     * @param {ApiGroupDeleteManyArgs} args - Arguments to filter ApiGroups to delete.
     * @example
     * // Delete a few ApiGroups
     * const { count } = await prisma.apiGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ApiGroupDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiGroupDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiGroups
     * const apiGroup = await prisma.apiGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ApiGroupUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ApiGroupUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ApiGroup.
     * @param {ApiGroupUpsertArgs} args - Arguments to update or create a ApiGroup.
     * @example
     * // Update or create a ApiGroup
     * const apiGroup = await prisma.apiGroup.upsert({
     *   create: {
     *     // ... data to create a ApiGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiGroup we want to update
     *   }
     * })
    **/
    upsert<T extends ApiGroupUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ApiGroupUpsertArgs<ExtArgs>>
    ): Prisma__ApiGroupClient<$Result.GetResult<Prisma.$ApiGroupPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ApiGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiGroupCountArgs} args - Arguments to filter ApiGroups to count.
     * @example
     * // Count the number of ApiGroups
     * const count = await prisma.apiGroup.count({
     *   where: {
     *     // ... the filter for the ApiGroups we want to count
     *   }
     * })
    **/
    count<T extends ApiGroupCountArgs>(
      args?: Subset<T, ApiGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiGroupAggregateArgs>(args: Subset<T, ApiGroupAggregateArgs>): Prisma.PrismaPromise<GetApiGroupAggregateType<T>>

    /**
     * Group by ApiGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiGroupGroupByArgs['orderBy'] }
        : { orderBy?: ApiGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiGroup model
   */
  readonly fields: ApiGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ApiGroup model
   */ 
  interface ApiGroupFieldRefs {
    readonly id: FieldRef<"ApiGroup", 'String'>
    readonly createdAt: FieldRef<"ApiGroup", 'DateTime'>
    readonly updateAt: FieldRef<"ApiGroup", 'DateTime'>
    readonly name: FieldRef<"ApiGroup", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ApiGroup findUnique
   */
  export type ApiGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiGroup
     */
    select?: ApiGroupSelect<ExtArgs> | null
    /**
     * Filter, which ApiGroup to fetch.
     */
    where: ApiGroupWhereUniqueInput
  }

  /**
   * ApiGroup findUniqueOrThrow
   */
  export type ApiGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiGroup
     */
    select?: ApiGroupSelect<ExtArgs> | null
    /**
     * Filter, which ApiGroup to fetch.
     */
    where: ApiGroupWhereUniqueInput
  }

  /**
   * ApiGroup findFirst
   */
  export type ApiGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiGroup
     */
    select?: ApiGroupSelect<ExtArgs> | null
    /**
     * Filter, which ApiGroup to fetch.
     */
    where?: ApiGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiGroups to fetch.
     */
    orderBy?: ApiGroupOrderByWithRelationInput | ApiGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiGroups.
     */
    cursor?: ApiGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiGroups.
     */
    distinct?: ApiGroupScalarFieldEnum | ApiGroupScalarFieldEnum[]
  }

  /**
   * ApiGroup findFirstOrThrow
   */
  export type ApiGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiGroup
     */
    select?: ApiGroupSelect<ExtArgs> | null
    /**
     * Filter, which ApiGroup to fetch.
     */
    where?: ApiGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiGroups to fetch.
     */
    orderBy?: ApiGroupOrderByWithRelationInput | ApiGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiGroups.
     */
    cursor?: ApiGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiGroups.
     */
    distinct?: ApiGroupScalarFieldEnum | ApiGroupScalarFieldEnum[]
  }

  /**
   * ApiGroup findMany
   */
  export type ApiGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiGroup
     */
    select?: ApiGroupSelect<ExtArgs> | null
    /**
     * Filter, which ApiGroups to fetch.
     */
    where?: ApiGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiGroups to fetch.
     */
    orderBy?: ApiGroupOrderByWithRelationInput | ApiGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiGroups.
     */
    cursor?: ApiGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiGroups.
     */
    skip?: number
    distinct?: ApiGroupScalarFieldEnum | ApiGroupScalarFieldEnum[]
  }

  /**
   * ApiGroup create
   */
  export type ApiGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiGroup
     */
    select?: ApiGroupSelect<ExtArgs> | null
    /**
     * The data needed to create a ApiGroup.
     */
    data: XOR<ApiGroupCreateInput, ApiGroupUncheckedCreateInput>
  }

  /**
   * ApiGroup createMany
   */
  export type ApiGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiGroups.
     */
    data: ApiGroupCreateManyInput | ApiGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiGroup update
   */
  export type ApiGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiGroup
     */
    select?: ApiGroupSelect<ExtArgs> | null
    /**
     * The data needed to update a ApiGroup.
     */
    data: XOR<ApiGroupUpdateInput, ApiGroupUncheckedUpdateInput>
    /**
     * Choose, which ApiGroup to update.
     */
    where: ApiGroupWhereUniqueInput
  }

  /**
   * ApiGroup updateMany
   */
  export type ApiGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiGroups.
     */
    data: XOR<ApiGroupUpdateManyMutationInput, ApiGroupUncheckedUpdateManyInput>
    /**
     * Filter which ApiGroups to update
     */
    where?: ApiGroupWhereInput
  }

  /**
   * ApiGroup upsert
   */
  export type ApiGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiGroup
     */
    select?: ApiGroupSelect<ExtArgs> | null
    /**
     * The filter to search for the ApiGroup to update in case it exists.
     */
    where: ApiGroupWhereUniqueInput
    /**
     * In case the ApiGroup found by the `where` argument doesn't exist, create a new ApiGroup with this data.
     */
    create: XOR<ApiGroupCreateInput, ApiGroupUncheckedCreateInput>
    /**
     * In case the ApiGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiGroupUpdateInput, ApiGroupUncheckedUpdateInput>
  }

  /**
   * ApiGroup delete
   */
  export type ApiGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiGroup
     */
    select?: ApiGroupSelect<ExtArgs> | null
    /**
     * Filter which ApiGroup to delete.
     */
    where: ApiGroupWhereUniqueInput
  }

  /**
   * ApiGroup deleteMany
   */
  export type ApiGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiGroups to delete
     */
    where?: ApiGroupWhereInput
  }

  /**
   * ApiGroup without action
   */
  export type ApiGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiGroup
     */
    select?: ApiGroupSelect<ExtArgs> | null
  }


  /**
   * Model ApiBaseName
   */

  export type AggregateApiBaseName = {
    _count: ApiBaseNameCountAggregateOutputType | null
    _min: ApiBaseNameMinAggregateOutputType | null
    _max: ApiBaseNameMaxAggregateOutputType | null
  }

  export type ApiBaseNameMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updateAt: Date | null
    baseName: string | null
  }

  export type ApiBaseNameMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updateAt: Date | null
    baseName: string | null
  }

  export type ApiBaseNameCountAggregateOutputType = {
    id: number
    createdAt: number
    updateAt: number
    baseName: number
    _all: number
  }


  export type ApiBaseNameMinAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    baseName?: true
  }

  export type ApiBaseNameMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    baseName?: true
  }

  export type ApiBaseNameCountAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    baseName?: true
    _all?: true
  }

  export type ApiBaseNameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiBaseName to aggregate.
     */
    where?: ApiBaseNameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiBaseNames to fetch.
     */
    orderBy?: ApiBaseNameOrderByWithRelationInput | ApiBaseNameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiBaseNameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiBaseNames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiBaseNames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiBaseNames
    **/
    _count?: true | ApiBaseNameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiBaseNameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiBaseNameMaxAggregateInputType
  }

  export type GetApiBaseNameAggregateType<T extends ApiBaseNameAggregateArgs> = {
        [P in keyof T & keyof AggregateApiBaseName]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiBaseName[P]>
      : GetScalarType<T[P], AggregateApiBaseName[P]>
  }




  export type ApiBaseNameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiBaseNameWhereInput
    orderBy?: ApiBaseNameOrderByWithAggregationInput | ApiBaseNameOrderByWithAggregationInput[]
    by: ApiBaseNameScalarFieldEnum[] | ApiBaseNameScalarFieldEnum
    having?: ApiBaseNameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiBaseNameCountAggregateInputType | true
    _min?: ApiBaseNameMinAggregateInputType
    _max?: ApiBaseNameMaxAggregateInputType
  }

  export type ApiBaseNameGroupByOutputType = {
    id: string
    createdAt: Date
    updateAt: Date
    baseName: string
    _count: ApiBaseNameCountAggregateOutputType | null
    _min: ApiBaseNameMinAggregateOutputType | null
    _max: ApiBaseNameMaxAggregateOutputType | null
  }

  type GetApiBaseNameGroupByPayload<T extends ApiBaseNameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiBaseNameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiBaseNameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiBaseNameGroupByOutputType[P]>
            : GetScalarType<T[P], ApiBaseNameGroupByOutputType[P]>
        }
      >
    >


  export type ApiBaseNameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    baseName?: boolean
  }, ExtArgs["result"]["apiBaseName"]>


  export type ApiBaseNameSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    baseName?: boolean
  }


  export type $ApiBaseNamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiBaseName"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updateAt: Date
      baseName: string
    }, ExtArgs["result"]["apiBaseName"]>
    composites: {}
  }

  type ApiBaseNameGetPayload<S extends boolean | null | undefined | ApiBaseNameDefaultArgs> = $Result.GetResult<Prisma.$ApiBaseNamePayload, S>

  type ApiBaseNameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ApiBaseNameFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ApiBaseNameCountAggregateInputType | true
    }

  export interface ApiBaseNameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiBaseName'], meta: { name: 'ApiBaseName' } }
    /**
     * Find zero or one ApiBaseName that matches the filter.
     * @param {ApiBaseNameFindUniqueArgs} args - Arguments to find a ApiBaseName
     * @example
     * // Get one ApiBaseName
     * const apiBaseName = await prisma.apiBaseName.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ApiBaseNameFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ApiBaseNameFindUniqueArgs<ExtArgs>>
    ): Prisma__ApiBaseNameClient<$Result.GetResult<Prisma.$ApiBaseNamePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ApiBaseName that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ApiBaseNameFindUniqueOrThrowArgs} args - Arguments to find a ApiBaseName
     * @example
     * // Get one ApiBaseName
     * const apiBaseName = await prisma.apiBaseName.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ApiBaseNameFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiBaseNameFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ApiBaseNameClient<$Result.GetResult<Prisma.$ApiBaseNamePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ApiBaseName that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiBaseNameFindFirstArgs} args - Arguments to find a ApiBaseName
     * @example
     * // Get one ApiBaseName
     * const apiBaseName = await prisma.apiBaseName.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ApiBaseNameFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiBaseNameFindFirstArgs<ExtArgs>>
    ): Prisma__ApiBaseNameClient<$Result.GetResult<Prisma.$ApiBaseNamePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ApiBaseName that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiBaseNameFindFirstOrThrowArgs} args - Arguments to find a ApiBaseName
     * @example
     * // Get one ApiBaseName
     * const apiBaseName = await prisma.apiBaseName.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ApiBaseNameFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiBaseNameFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ApiBaseNameClient<$Result.GetResult<Prisma.$ApiBaseNamePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ApiBaseNames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiBaseNameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiBaseNames
     * const apiBaseNames = await prisma.apiBaseName.findMany()
     * 
     * // Get first 10 ApiBaseNames
     * const apiBaseNames = await prisma.apiBaseName.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiBaseNameWithIdOnly = await prisma.apiBaseName.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ApiBaseNameFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiBaseNameFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiBaseNamePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ApiBaseName.
     * @param {ApiBaseNameCreateArgs} args - Arguments to create a ApiBaseName.
     * @example
     * // Create one ApiBaseName
     * const ApiBaseName = await prisma.apiBaseName.create({
     *   data: {
     *     // ... data to create a ApiBaseName
     *   }
     * })
     * 
    **/
    create<T extends ApiBaseNameCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ApiBaseNameCreateArgs<ExtArgs>>
    ): Prisma__ApiBaseNameClient<$Result.GetResult<Prisma.$ApiBaseNamePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ApiBaseNames.
     * @param {ApiBaseNameCreateManyArgs} args - Arguments to create many ApiBaseNames.
     * @example
     * // Create many ApiBaseNames
     * const apiBaseName = await prisma.apiBaseName.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ApiBaseNameCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiBaseNameCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ApiBaseName.
     * @param {ApiBaseNameDeleteArgs} args - Arguments to delete one ApiBaseName.
     * @example
     * // Delete one ApiBaseName
     * const ApiBaseName = await prisma.apiBaseName.delete({
     *   where: {
     *     // ... filter to delete one ApiBaseName
     *   }
     * })
     * 
    **/
    delete<T extends ApiBaseNameDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ApiBaseNameDeleteArgs<ExtArgs>>
    ): Prisma__ApiBaseNameClient<$Result.GetResult<Prisma.$ApiBaseNamePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ApiBaseName.
     * @param {ApiBaseNameUpdateArgs} args - Arguments to update one ApiBaseName.
     * @example
     * // Update one ApiBaseName
     * const apiBaseName = await prisma.apiBaseName.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ApiBaseNameUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ApiBaseNameUpdateArgs<ExtArgs>>
    ): Prisma__ApiBaseNameClient<$Result.GetResult<Prisma.$ApiBaseNamePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ApiBaseNames.
     * @param {ApiBaseNameDeleteManyArgs} args - Arguments to filter ApiBaseNames to delete.
     * @example
     * // Delete a few ApiBaseNames
     * const { count } = await prisma.apiBaseName.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ApiBaseNameDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiBaseNameDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiBaseNames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiBaseNameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiBaseNames
     * const apiBaseName = await prisma.apiBaseName.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ApiBaseNameUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ApiBaseNameUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ApiBaseName.
     * @param {ApiBaseNameUpsertArgs} args - Arguments to update or create a ApiBaseName.
     * @example
     * // Update or create a ApiBaseName
     * const apiBaseName = await prisma.apiBaseName.upsert({
     *   create: {
     *     // ... data to create a ApiBaseName
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiBaseName we want to update
     *   }
     * })
    **/
    upsert<T extends ApiBaseNameUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ApiBaseNameUpsertArgs<ExtArgs>>
    ): Prisma__ApiBaseNameClient<$Result.GetResult<Prisma.$ApiBaseNamePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ApiBaseNames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiBaseNameCountArgs} args - Arguments to filter ApiBaseNames to count.
     * @example
     * // Count the number of ApiBaseNames
     * const count = await prisma.apiBaseName.count({
     *   where: {
     *     // ... the filter for the ApiBaseNames we want to count
     *   }
     * })
    **/
    count<T extends ApiBaseNameCountArgs>(
      args?: Subset<T, ApiBaseNameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiBaseNameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiBaseName.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiBaseNameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiBaseNameAggregateArgs>(args: Subset<T, ApiBaseNameAggregateArgs>): Prisma.PrismaPromise<GetApiBaseNameAggregateType<T>>

    /**
     * Group by ApiBaseName.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiBaseNameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiBaseNameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiBaseNameGroupByArgs['orderBy'] }
        : { orderBy?: ApiBaseNameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiBaseNameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiBaseNameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiBaseName model
   */
  readonly fields: ApiBaseNameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiBaseName.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiBaseNameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ApiBaseName model
   */ 
  interface ApiBaseNameFieldRefs {
    readonly id: FieldRef<"ApiBaseName", 'String'>
    readonly createdAt: FieldRef<"ApiBaseName", 'DateTime'>
    readonly updateAt: FieldRef<"ApiBaseName", 'DateTime'>
    readonly baseName: FieldRef<"ApiBaseName", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ApiBaseName findUnique
   */
  export type ApiBaseNameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiBaseName
     */
    select?: ApiBaseNameSelect<ExtArgs> | null
    /**
     * Filter, which ApiBaseName to fetch.
     */
    where: ApiBaseNameWhereUniqueInput
  }

  /**
   * ApiBaseName findUniqueOrThrow
   */
  export type ApiBaseNameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiBaseName
     */
    select?: ApiBaseNameSelect<ExtArgs> | null
    /**
     * Filter, which ApiBaseName to fetch.
     */
    where: ApiBaseNameWhereUniqueInput
  }

  /**
   * ApiBaseName findFirst
   */
  export type ApiBaseNameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiBaseName
     */
    select?: ApiBaseNameSelect<ExtArgs> | null
    /**
     * Filter, which ApiBaseName to fetch.
     */
    where?: ApiBaseNameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiBaseNames to fetch.
     */
    orderBy?: ApiBaseNameOrderByWithRelationInput | ApiBaseNameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiBaseNames.
     */
    cursor?: ApiBaseNameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiBaseNames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiBaseNames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiBaseNames.
     */
    distinct?: ApiBaseNameScalarFieldEnum | ApiBaseNameScalarFieldEnum[]
  }

  /**
   * ApiBaseName findFirstOrThrow
   */
  export type ApiBaseNameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiBaseName
     */
    select?: ApiBaseNameSelect<ExtArgs> | null
    /**
     * Filter, which ApiBaseName to fetch.
     */
    where?: ApiBaseNameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiBaseNames to fetch.
     */
    orderBy?: ApiBaseNameOrderByWithRelationInput | ApiBaseNameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiBaseNames.
     */
    cursor?: ApiBaseNameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiBaseNames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiBaseNames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiBaseNames.
     */
    distinct?: ApiBaseNameScalarFieldEnum | ApiBaseNameScalarFieldEnum[]
  }

  /**
   * ApiBaseName findMany
   */
  export type ApiBaseNameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiBaseName
     */
    select?: ApiBaseNameSelect<ExtArgs> | null
    /**
     * Filter, which ApiBaseNames to fetch.
     */
    where?: ApiBaseNameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiBaseNames to fetch.
     */
    orderBy?: ApiBaseNameOrderByWithRelationInput | ApiBaseNameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiBaseNames.
     */
    cursor?: ApiBaseNameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiBaseNames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiBaseNames.
     */
    skip?: number
    distinct?: ApiBaseNameScalarFieldEnum | ApiBaseNameScalarFieldEnum[]
  }

  /**
   * ApiBaseName create
   */
  export type ApiBaseNameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiBaseName
     */
    select?: ApiBaseNameSelect<ExtArgs> | null
    /**
     * The data needed to create a ApiBaseName.
     */
    data: XOR<ApiBaseNameCreateInput, ApiBaseNameUncheckedCreateInput>
  }

  /**
   * ApiBaseName createMany
   */
  export type ApiBaseNameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiBaseNames.
     */
    data: ApiBaseNameCreateManyInput | ApiBaseNameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiBaseName update
   */
  export type ApiBaseNameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiBaseName
     */
    select?: ApiBaseNameSelect<ExtArgs> | null
    /**
     * The data needed to update a ApiBaseName.
     */
    data: XOR<ApiBaseNameUpdateInput, ApiBaseNameUncheckedUpdateInput>
    /**
     * Choose, which ApiBaseName to update.
     */
    where: ApiBaseNameWhereUniqueInput
  }

  /**
   * ApiBaseName updateMany
   */
  export type ApiBaseNameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiBaseNames.
     */
    data: XOR<ApiBaseNameUpdateManyMutationInput, ApiBaseNameUncheckedUpdateManyInput>
    /**
     * Filter which ApiBaseNames to update
     */
    where?: ApiBaseNameWhereInput
  }

  /**
   * ApiBaseName upsert
   */
  export type ApiBaseNameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiBaseName
     */
    select?: ApiBaseNameSelect<ExtArgs> | null
    /**
     * The filter to search for the ApiBaseName to update in case it exists.
     */
    where: ApiBaseNameWhereUniqueInput
    /**
     * In case the ApiBaseName found by the `where` argument doesn't exist, create a new ApiBaseName with this data.
     */
    create: XOR<ApiBaseNameCreateInput, ApiBaseNameUncheckedCreateInput>
    /**
     * In case the ApiBaseName was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiBaseNameUpdateInput, ApiBaseNameUncheckedUpdateInput>
  }

  /**
   * ApiBaseName delete
   */
  export type ApiBaseNameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiBaseName
     */
    select?: ApiBaseNameSelect<ExtArgs> | null
    /**
     * Filter which ApiBaseName to delete.
     */
    where: ApiBaseNameWhereUniqueInput
  }

  /**
   * ApiBaseName deleteMany
   */
  export type ApiBaseNameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiBaseNames to delete
     */
    where?: ApiBaseNameWhereInput
  }

  /**
   * ApiBaseName without action
   */
  export type ApiBaseNameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiBaseName
     */
    select?: ApiBaseNameSelect<ExtArgs> | null
  }


  /**
   * Model ApiOrigin
   */

  export type AggregateApiOrigin = {
    _count: ApiOriginCountAggregateOutputType | null
    _min: ApiOriginMinAggregateOutputType | null
    _max: ApiOriginMaxAggregateOutputType | null
  }

  export type ApiOriginMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updateAt: Date | null
    origin: string | null
  }

  export type ApiOriginMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updateAt: Date | null
    origin: string | null
  }

  export type ApiOriginCountAggregateOutputType = {
    id: number
    createdAt: number
    updateAt: number
    origin: number
    _all: number
  }


  export type ApiOriginMinAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    origin?: true
  }

  export type ApiOriginMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    origin?: true
  }

  export type ApiOriginCountAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    origin?: true
    _all?: true
  }

  export type ApiOriginAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiOrigin to aggregate.
     */
    where?: ApiOriginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiOrigins to fetch.
     */
    orderBy?: ApiOriginOrderByWithRelationInput | ApiOriginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiOriginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiOrigins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiOrigins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiOrigins
    **/
    _count?: true | ApiOriginCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiOriginMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiOriginMaxAggregateInputType
  }

  export type GetApiOriginAggregateType<T extends ApiOriginAggregateArgs> = {
        [P in keyof T & keyof AggregateApiOrigin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiOrigin[P]>
      : GetScalarType<T[P], AggregateApiOrigin[P]>
  }




  export type ApiOriginGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiOriginWhereInput
    orderBy?: ApiOriginOrderByWithAggregationInput | ApiOriginOrderByWithAggregationInput[]
    by: ApiOriginScalarFieldEnum[] | ApiOriginScalarFieldEnum
    having?: ApiOriginScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiOriginCountAggregateInputType | true
    _min?: ApiOriginMinAggregateInputType
    _max?: ApiOriginMaxAggregateInputType
  }

  export type ApiOriginGroupByOutputType = {
    id: string
    createdAt: Date
    updateAt: Date
    origin: string
    _count: ApiOriginCountAggregateOutputType | null
    _min: ApiOriginMinAggregateOutputType | null
    _max: ApiOriginMaxAggregateOutputType | null
  }

  type GetApiOriginGroupByPayload<T extends ApiOriginGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiOriginGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiOriginGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiOriginGroupByOutputType[P]>
            : GetScalarType<T[P], ApiOriginGroupByOutputType[P]>
        }
      >
    >


  export type ApiOriginSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    origin?: boolean
  }, ExtArgs["result"]["apiOrigin"]>


  export type ApiOriginSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    origin?: boolean
  }


  export type $ApiOriginPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiOrigin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updateAt: Date
      origin: string
    }, ExtArgs["result"]["apiOrigin"]>
    composites: {}
  }

  type ApiOriginGetPayload<S extends boolean | null | undefined | ApiOriginDefaultArgs> = $Result.GetResult<Prisma.$ApiOriginPayload, S>

  type ApiOriginCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ApiOriginFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ApiOriginCountAggregateInputType | true
    }

  export interface ApiOriginDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiOrigin'], meta: { name: 'ApiOrigin' } }
    /**
     * Find zero or one ApiOrigin that matches the filter.
     * @param {ApiOriginFindUniqueArgs} args - Arguments to find a ApiOrigin
     * @example
     * // Get one ApiOrigin
     * const apiOrigin = await prisma.apiOrigin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ApiOriginFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ApiOriginFindUniqueArgs<ExtArgs>>
    ): Prisma__ApiOriginClient<$Result.GetResult<Prisma.$ApiOriginPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ApiOrigin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ApiOriginFindUniqueOrThrowArgs} args - Arguments to find a ApiOrigin
     * @example
     * // Get one ApiOrigin
     * const apiOrigin = await prisma.apiOrigin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ApiOriginFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiOriginFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ApiOriginClient<$Result.GetResult<Prisma.$ApiOriginPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ApiOrigin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiOriginFindFirstArgs} args - Arguments to find a ApiOrigin
     * @example
     * // Get one ApiOrigin
     * const apiOrigin = await prisma.apiOrigin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ApiOriginFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiOriginFindFirstArgs<ExtArgs>>
    ): Prisma__ApiOriginClient<$Result.GetResult<Prisma.$ApiOriginPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ApiOrigin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiOriginFindFirstOrThrowArgs} args - Arguments to find a ApiOrigin
     * @example
     * // Get one ApiOrigin
     * const apiOrigin = await prisma.apiOrigin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ApiOriginFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiOriginFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ApiOriginClient<$Result.GetResult<Prisma.$ApiOriginPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ApiOrigins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiOriginFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiOrigins
     * const apiOrigins = await prisma.apiOrigin.findMany()
     * 
     * // Get first 10 ApiOrigins
     * const apiOrigins = await prisma.apiOrigin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiOriginWithIdOnly = await prisma.apiOrigin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ApiOriginFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiOriginFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiOriginPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ApiOrigin.
     * @param {ApiOriginCreateArgs} args - Arguments to create a ApiOrigin.
     * @example
     * // Create one ApiOrigin
     * const ApiOrigin = await prisma.apiOrigin.create({
     *   data: {
     *     // ... data to create a ApiOrigin
     *   }
     * })
     * 
    **/
    create<T extends ApiOriginCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ApiOriginCreateArgs<ExtArgs>>
    ): Prisma__ApiOriginClient<$Result.GetResult<Prisma.$ApiOriginPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ApiOrigins.
     * @param {ApiOriginCreateManyArgs} args - Arguments to create many ApiOrigins.
     * @example
     * // Create many ApiOrigins
     * const apiOrigin = await prisma.apiOrigin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ApiOriginCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiOriginCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ApiOrigin.
     * @param {ApiOriginDeleteArgs} args - Arguments to delete one ApiOrigin.
     * @example
     * // Delete one ApiOrigin
     * const ApiOrigin = await prisma.apiOrigin.delete({
     *   where: {
     *     // ... filter to delete one ApiOrigin
     *   }
     * })
     * 
    **/
    delete<T extends ApiOriginDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ApiOriginDeleteArgs<ExtArgs>>
    ): Prisma__ApiOriginClient<$Result.GetResult<Prisma.$ApiOriginPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ApiOrigin.
     * @param {ApiOriginUpdateArgs} args - Arguments to update one ApiOrigin.
     * @example
     * // Update one ApiOrigin
     * const apiOrigin = await prisma.apiOrigin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ApiOriginUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ApiOriginUpdateArgs<ExtArgs>>
    ): Prisma__ApiOriginClient<$Result.GetResult<Prisma.$ApiOriginPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ApiOrigins.
     * @param {ApiOriginDeleteManyArgs} args - Arguments to filter ApiOrigins to delete.
     * @example
     * // Delete a few ApiOrigins
     * const { count } = await prisma.apiOrigin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ApiOriginDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiOriginDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiOrigins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiOriginUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiOrigins
     * const apiOrigin = await prisma.apiOrigin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ApiOriginUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ApiOriginUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ApiOrigin.
     * @param {ApiOriginUpsertArgs} args - Arguments to update or create a ApiOrigin.
     * @example
     * // Update or create a ApiOrigin
     * const apiOrigin = await prisma.apiOrigin.upsert({
     *   create: {
     *     // ... data to create a ApiOrigin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiOrigin we want to update
     *   }
     * })
    **/
    upsert<T extends ApiOriginUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ApiOriginUpsertArgs<ExtArgs>>
    ): Prisma__ApiOriginClient<$Result.GetResult<Prisma.$ApiOriginPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ApiOrigins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiOriginCountArgs} args - Arguments to filter ApiOrigins to count.
     * @example
     * // Count the number of ApiOrigins
     * const count = await prisma.apiOrigin.count({
     *   where: {
     *     // ... the filter for the ApiOrigins we want to count
     *   }
     * })
    **/
    count<T extends ApiOriginCountArgs>(
      args?: Subset<T, ApiOriginCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiOriginCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiOrigin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiOriginAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiOriginAggregateArgs>(args: Subset<T, ApiOriginAggregateArgs>): Prisma.PrismaPromise<GetApiOriginAggregateType<T>>

    /**
     * Group by ApiOrigin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiOriginGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiOriginGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiOriginGroupByArgs['orderBy'] }
        : { orderBy?: ApiOriginGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiOriginGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiOriginGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiOrigin model
   */
  readonly fields: ApiOriginFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiOrigin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiOriginClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ApiOrigin model
   */ 
  interface ApiOriginFieldRefs {
    readonly id: FieldRef<"ApiOrigin", 'String'>
    readonly createdAt: FieldRef<"ApiOrigin", 'DateTime'>
    readonly updateAt: FieldRef<"ApiOrigin", 'DateTime'>
    readonly origin: FieldRef<"ApiOrigin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ApiOrigin findUnique
   */
  export type ApiOriginFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiOrigin
     */
    select?: ApiOriginSelect<ExtArgs> | null
    /**
     * Filter, which ApiOrigin to fetch.
     */
    where: ApiOriginWhereUniqueInput
  }

  /**
   * ApiOrigin findUniqueOrThrow
   */
  export type ApiOriginFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiOrigin
     */
    select?: ApiOriginSelect<ExtArgs> | null
    /**
     * Filter, which ApiOrigin to fetch.
     */
    where: ApiOriginWhereUniqueInput
  }

  /**
   * ApiOrigin findFirst
   */
  export type ApiOriginFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiOrigin
     */
    select?: ApiOriginSelect<ExtArgs> | null
    /**
     * Filter, which ApiOrigin to fetch.
     */
    where?: ApiOriginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiOrigins to fetch.
     */
    orderBy?: ApiOriginOrderByWithRelationInput | ApiOriginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiOrigins.
     */
    cursor?: ApiOriginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiOrigins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiOrigins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiOrigins.
     */
    distinct?: ApiOriginScalarFieldEnum | ApiOriginScalarFieldEnum[]
  }

  /**
   * ApiOrigin findFirstOrThrow
   */
  export type ApiOriginFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiOrigin
     */
    select?: ApiOriginSelect<ExtArgs> | null
    /**
     * Filter, which ApiOrigin to fetch.
     */
    where?: ApiOriginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiOrigins to fetch.
     */
    orderBy?: ApiOriginOrderByWithRelationInput | ApiOriginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiOrigins.
     */
    cursor?: ApiOriginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiOrigins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiOrigins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiOrigins.
     */
    distinct?: ApiOriginScalarFieldEnum | ApiOriginScalarFieldEnum[]
  }

  /**
   * ApiOrigin findMany
   */
  export type ApiOriginFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiOrigin
     */
    select?: ApiOriginSelect<ExtArgs> | null
    /**
     * Filter, which ApiOrigins to fetch.
     */
    where?: ApiOriginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiOrigins to fetch.
     */
    orderBy?: ApiOriginOrderByWithRelationInput | ApiOriginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiOrigins.
     */
    cursor?: ApiOriginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiOrigins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiOrigins.
     */
    skip?: number
    distinct?: ApiOriginScalarFieldEnum | ApiOriginScalarFieldEnum[]
  }

  /**
   * ApiOrigin create
   */
  export type ApiOriginCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiOrigin
     */
    select?: ApiOriginSelect<ExtArgs> | null
    /**
     * The data needed to create a ApiOrigin.
     */
    data: XOR<ApiOriginCreateInput, ApiOriginUncheckedCreateInput>
  }

  /**
   * ApiOrigin createMany
   */
  export type ApiOriginCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiOrigins.
     */
    data: ApiOriginCreateManyInput | ApiOriginCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiOrigin update
   */
  export type ApiOriginUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiOrigin
     */
    select?: ApiOriginSelect<ExtArgs> | null
    /**
     * The data needed to update a ApiOrigin.
     */
    data: XOR<ApiOriginUpdateInput, ApiOriginUncheckedUpdateInput>
    /**
     * Choose, which ApiOrigin to update.
     */
    where: ApiOriginWhereUniqueInput
  }

  /**
   * ApiOrigin updateMany
   */
  export type ApiOriginUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiOrigins.
     */
    data: XOR<ApiOriginUpdateManyMutationInput, ApiOriginUncheckedUpdateManyInput>
    /**
     * Filter which ApiOrigins to update
     */
    where?: ApiOriginWhereInput
  }

  /**
   * ApiOrigin upsert
   */
  export type ApiOriginUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiOrigin
     */
    select?: ApiOriginSelect<ExtArgs> | null
    /**
     * The filter to search for the ApiOrigin to update in case it exists.
     */
    where: ApiOriginWhereUniqueInput
    /**
     * In case the ApiOrigin found by the `where` argument doesn't exist, create a new ApiOrigin with this data.
     */
    create: XOR<ApiOriginCreateInput, ApiOriginUncheckedCreateInput>
    /**
     * In case the ApiOrigin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiOriginUpdateInput, ApiOriginUncheckedUpdateInput>
  }

  /**
   * ApiOrigin delete
   */
  export type ApiOriginDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiOrigin
     */
    select?: ApiOriginSelect<ExtArgs> | null
    /**
     * Filter which ApiOrigin to delete.
     */
    where: ApiOriginWhereUniqueInput
  }

  /**
   * ApiOrigin deleteMany
   */
  export type ApiOriginDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiOrigins to delete
     */
    where?: ApiOriginWhereInput
  }

  /**
   * ApiOrigin without action
   */
  export type ApiOriginDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiOrigin
     */
    select?: ApiOriginSelect<ExtArgs> | null
  }


  /**
   * Model ApiManage
   */

  export type AggregateApiManage = {
    _count: ApiManageCountAggregateOutputType | null
    _min: ApiManageMinAggregateOutputType | null
    _max: ApiManageMaxAggregateOutputType | null
  }

  export type ApiManageMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updateAt: Date | null
    name: string | null
    description: string | null
    url: string | null
    method: string | null
    group: string | null
    baseName: string | null
    origin: string | null
    headers: string | null
    isMock: boolean | null
    mockJson: string | null
  }

  export type ApiManageMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updateAt: Date | null
    name: string | null
    description: string | null
    url: string | null
    method: string | null
    group: string | null
    baseName: string | null
    origin: string | null
    headers: string | null
    isMock: boolean | null
    mockJson: string | null
  }

  export type ApiManageCountAggregateOutputType = {
    id: number
    createdAt: number
    updateAt: number
    name: number
    description: number
    url: number
    method: number
    group: number
    baseName: number
    origin: number
    headers: number
    isMock: number
    mockJson: number
    _all: number
  }


  export type ApiManageMinAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    name?: true
    description?: true
    url?: true
    method?: true
    group?: true
    baseName?: true
    origin?: true
    headers?: true
    isMock?: true
    mockJson?: true
  }

  export type ApiManageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    name?: true
    description?: true
    url?: true
    method?: true
    group?: true
    baseName?: true
    origin?: true
    headers?: true
    isMock?: true
    mockJson?: true
  }

  export type ApiManageCountAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    name?: true
    description?: true
    url?: true
    method?: true
    group?: true
    baseName?: true
    origin?: true
    headers?: true
    isMock?: true
    mockJson?: true
    _all?: true
  }

  export type ApiManageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiManage to aggregate.
     */
    where?: ApiManageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiManages to fetch.
     */
    orderBy?: ApiManageOrderByWithRelationInput | ApiManageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiManageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiManages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiManages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiManages
    **/
    _count?: true | ApiManageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiManageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiManageMaxAggregateInputType
  }

  export type GetApiManageAggregateType<T extends ApiManageAggregateArgs> = {
        [P in keyof T & keyof AggregateApiManage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiManage[P]>
      : GetScalarType<T[P], AggregateApiManage[P]>
  }




  export type ApiManageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiManageWhereInput
    orderBy?: ApiManageOrderByWithAggregationInput | ApiManageOrderByWithAggregationInput[]
    by: ApiManageScalarFieldEnum[] | ApiManageScalarFieldEnum
    having?: ApiManageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiManageCountAggregateInputType | true
    _min?: ApiManageMinAggregateInputType
    _max?: ApiManageMaxAggregateInputType
  }

  export type ApiManageGroupByOutputType = {
    id: string
    createdAt: Date
    updateAt: Date
    name: string
    description: string
    url: string
    method: string
    group: string | null
    baseName: string | null
    origin: string | null
    headers: string | null
    isMock: boolean | null
    mockJson: string | null
    _count: ApiManageCountAggregateOutputType | null
    _min: ApiManageMinAggregateOutputType | null
    _max: ApiManageMaxAggregateOutputType | null
  }

  type GetApiManageGroupByPayload<T extends ApiManageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiManageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiManageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiManageGroupByOutputType[P]>
            : GetScalarType<T[P], ApiManageGroupByOutputType[P]>
        }
      >
    >


  export type ApiManageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    name?: boolean
    description?: boolean
    url?: boolean
    method?: boolean
    group?: boolean
    baseName?: boolean
    origin?: boolean
    headers?: boolean
    isMock?: boolean
    mockJson?: boolean
  }, ExtArgs["result"]["apiManage"]>


  export type ApiManageSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    name?: boolean
    description?: boolean
    url?: boolean
    method?: boolean
    group?: boolean
    baseName?: boolean
    origin?: boolean
    headers?: boolean
    isMock?: boolean
    mockJson?: boolean
  }


  export type $ApiManagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiManage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updateAt: Date
      name: string
      description: string
      url: string
      method: string
      group: string | null
      baseName: string | null
      origin: string | null
      headers: string | null
      isMock: boolean | null
      mockJson: string | null
    }, ExtArgs["result"]["apiManage"]>
    composites: {}
  }

  type ApiManageGetPayload<S extends boolean | null | undefined | ApiManageDefaultArgs> = $Result.GetResult<Prisma.$ApiManagePayload, S>

  type ApiManageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ApiManageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ApiManageCountAggregateInputType | true
    }

  export interface ApiManageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiManage'], meta: { name: 'ApiManage' } }
    /**
     * Find zero or one ApiManage that matches the filter.
     * @param {ApiManageFindUniqueArgs} args - Arguments to find a ApiManage
     * @example
     * // Get one ApiManage
     * const apiManage = await prisma.apiManage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ApiManageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ApiManageFindUniqueArgs<ExtArgs>>
    ): Prisma__ApiManageClient<$Result.GetResult<Prisma.$ApiManagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ApiManage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ApiManageFindUniqueOrThrowArgs} args - Arguments to find a ApiManage
     * @example
     * // Get one ApiManage
     * const apiManage = await prisma.apiManage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ApiManageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiManageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ApiManageClient<$Result.GetResult<Prisma.$ApiManagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ApiManage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiManageFindFirstArgs} args - Arguments to find a ApiManage
     * @example
     * // Get one ApiManage
     * const apiManage = await prisma.apiManage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ApiManageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiManageFindFirstArgs<ExtArgs>>
    ): Prisma__ApiManageClient<$Result.GetResult<Prisma.$ApiManagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ApiManage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiManageFindFirstOrThrowArgs} args - Arguments to find a ApiManage
     * @example
     * // Get one ApiManage
     * const apiManage = await prisma.apiManage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ApiManageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiManageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ApiManageClient<$Result.GetResult<Prisma.$ApiManagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ApiManages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiManageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiManages
     * const apiManages = await prisma.apiManage.findMany()
     * 
     * // Get first 10 ApiManages
     * const apiManages = await prisma.apiManage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiManageWithIdOnly = await prisma.apiManage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ApiManageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiManageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiManagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ApiManage.
     * @param {ApiManageCreateArgs} args - Arguments to create a ApiManage.
     * @example
     * // Create one ApiManage
     * const ApiManage = await prisma.apiManage.create({
     *   data: {
     *     // ... data to create a ApiManage
     *   }
     * })
     * 
    **/
    create<T extends ApiManageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ApiManageCreateArgs<ExtArgs>>
    ): Prisma__ApiManageClient<$Result.GetResult<Prisma.$ApiManagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ApiManages.
     * @param {ApiManageCreateManyArgs} args - Arguments to create many ApiManages.
     * @example
     * // Create many ApiManages
     * const apiManage = await prisma.apiManage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ApiManageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiManageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ApiManage.
     * @param {ApiManageDeleteArgs} args - Arguments to delete one ApiManage.
     * @example
     * // Delete one ApiManage
     * const ApiManage = await prisma.apiManage.delete({
     *   where: {
     *     // ... filter to delete one ApiManage
     *   }
     * })
     * 
    **/
    delete<T extends ApiManageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ApiManageDeleteArgs<ExtArgs>>
    ): Prisma__ApiManageClient<$Result.GetResult<Prisma.$ApiManagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ApiManage.
     * @param {ApiManageUpdateArgs} args - Arguments to update one ApiManage.
     * @example
     * // Update one ApiManage
     * const apiManage = await prisma.apiManage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ApiManageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ApiManageUpdateArgs<ExtArgs>>
    ): Prisma__ApiManageClient<$Result.GetResult<Prisma.$ApiManagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ApiManages.
     * @param {ApiManageDeleteManyArgs} args - Arguments to filter ApiManages to delete.
     * @example
     * // Delete a few ApiManages
     * const { count } = await prisma.apiManage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ApiManageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApiManageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiManages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiManageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiManages
     * const apiManage = await prisma.apiManage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ApiManageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ApiManageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ApiManage.
     * @param {ApiManageUpsertArgs} args - Arguments to update or create a ApiManage.
     * @example
     * // Update or create a ApiManage
     * const apiManage = await prisma.apiManage.upsert({
     *   create: {
     *     // ... data to create a ApiManage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiManage we want to update
     *   }
     * })
    **/
    upsert<T extends ApiManageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ApiManageUpsertArgs<ExtArgs>>
    ): Prisma__ApiManageClient<$Result.GetResult<Prisma.$ApiManagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ApiManages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiManageCountArgs} args - Arguments to filter ApiManages to count.
     * @example
     * // Count the number of ApiManages
     * const count = await prisma.apiManage.count({
     *   where: {
     *     // ... the filter for the ApiManages we want to count
     *   }
     * })
    **/
    count<T extends ApiManageCountArgs>(
      args?: Subset<T, ApiManageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiManageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiManage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiManageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiManageAggregateArgs>(args: Subset<T, ApiManageAggregateArgs>): Prisma.PrismaPromise<GetApiManageAggregateType<T>>

    /**
     * Group by ApiManage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiManageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiManageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiManageGroupByArgs['orderBy'] }
        : { orderBy?: ApiManageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiManageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiManageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiManage model
   */
  readonly fields: ApiManageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiManage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiManageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ApiManage model
   */ 
  interface ApiManageFieldRefs {
    readonly id: FieldRef<"ApiManage", 'String'>
    readonly createdAt: FieldRef<"ApiManage", 'DateTime'>
    readonly updateAt: FieldRef<"ApiManage", 'DateTime'>
    readonly name: FieldRef<"ApiManage", 'String'>
    readonly description: FieldRef<"ApiManage", 'String'>
    readonly url: FieldRef<"ApiManage", 'String'>
    readonly method: FieldRef<"ApiManage", 'String'>
    readonly group: FieldRef<"ApiManage", 'String'>
    readonly baseName: FieldRef<"ApiManage", 'String'>
    readonly origin: FieldRef<"ApiManage", 'String'>
    readonly headers: FieldRef<"ApiManage", 'String'>
    readonly isMock: FieldRef<"ApiManage", 'Boolean'>
    readonly mockJson: FieldRef<"ApiManage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ApiManage findUnique
   */
  export type ApiManageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiManage
     */
    select?: ApiManageSelect<ExtArgs> | null
    /**
     * Filter, which ApiManage to fetch.
     */
    where: ApiManageWhereUniqueInput
  }

  /**
   * ApiManage findUniqueOrThrow
   */
  export type ApiManageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiManage
     */
    select?: ApiManageSelect<ExtArgs> | null
    /**
     * Filter, which ApiManage to fetch.
     */
    where: ApiManageWhereUniqueInput
  }

  /**
   * ApiManage findFirst
   */
  export type ApiManageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiManage
     */
    select?: ApiManageSelect<ExtArgs> | null
    /**
     * Filter, which ApiManage to fetch.
     */
    where?: ApiManageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiManages to fetch.
     */
    orderBy?: ApiManageOrderByWithRelationInput | ApiManageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiManages.
     */
    cursor?: ApiManageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiManages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiManages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiManages.
     */
    distinct?: ApiManageScalarFieldEnum | ApiManageScalarFieldEnum[]
  }

  /**
   * ApiManage findFirstOrThrow
   */
  export type ApiManageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiManage
     */
    select?: ApiManageSelect<ExtArgs> | null
    /**
     * Filter, which ApiManage to fetch.
     */
    where?: ApiManageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiManages to fetch.
     */
    orderBy?: ApiManageOrderByWithRelationInput | ApiManageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiManages.
     */
    cursor?: ApiManageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiManages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiManages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiManages.
     */
    distinct?: ApiManageScalarFieldEnum | ApiManageScalarFieldEnum[]
  }

  /**
   * ApiManage findMany
   */
  export type ApiManageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiManage
     */
    select?: ApiManageSelect<ExtArgs> | null
    /**
     * Filter, which ApiManages to fetch.
     */
    where?: ApiManageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiManages to fetch.
     */
    orderBy?: ApiManageOrderByWithRelationInput | ApiManageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiManages.
     */
    cursor?: ApiManageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiManages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiManages.
     */
    skip?: number
    distinct?: ApiManageScalarFieldEnum | ApiManageScalarFieldEnum[]
  }

  /**
   * ApiManage create
   */
  export type ApiManageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiManage
     */
    select?: ApiManageSelect<ExtArgs> | null
    /**
     * The data needed to create a ApiManage.
     */
    data: XOR<ApiManageCreateInput, ApiManageUncheckedCreateInput>
  }

  /**
   * ApiManage createMany
   */
  export type ApiManageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiManages.
     */
    data: ApiManageCreateManyInput | ApiManageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiManage update
   */
  export type ApiManageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiManage
     */
    select?: ApiManageSelect<ExtArgs> | null
    /**
     * The data needed to update a ApiManage.
     */
    data: XOR<ApiManageUpdateInput, ApiManageUncheckedUpdateInput>
    /**
     * Choose, which ApiManage to update.
     */
    where: ApiManageWhereUniqueInput
  }

  /**
   * ApiManage updateMany
   */
  export type ApiManageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiManages.
     */
    data: XOR<ApiManageUpdateManyMutationInput, ApiManageUncheckedUpdateManyInput>
    /**
     * Filter which ApiManages to update
     */
    where?: ApiManageWhereInput
  }

  /**
   * ApiManage upsert
   */
  export type ApiManageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiManage
     */
    select?: ApiManageSelect<ExtArgs> | null
    /**
     * The filter to search for the ApiManage to update in case it exists.
     */
    where: ApiManageWhereUniqueInput
    /**
     * In case the ApiManage found by the `where` argument doesn't exist, create a new ApiManage with this data.
     */
    create: XOR<ApiManageCreateInput, ApiManageUncheckedCreateInput>
    /**
     * In case the ApiManage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiManageUpdateInput, ApiManageUncheckedUpdateInput>
  }

  /**
   * ApiManage delete
   */
  export type ApiManageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiManage
     */
    select?: ApiManageSelect<ExtArgs> | null
    /**
     * Filter which ApiManage to delete.
     */
    where: ApiManageWhereUniqueInput
  }

  /**
   * ApiManage deleteMany
   */
  export type ApiManageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiManages to delete
     */
    where?: ApiManageWhereInput
  }

  /**
   * ApiManage without action
   */
  export type ApiManageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiManage
     */
    select?: ApiManageSelect<ExtArgs> | null
  }


  /**
   * Model ComponentChart
   */

  export type AggregateComponentChart = {
    _count: ComponentChartCountAggregateOutputType | null
    _avg: ComponentChartAvgAggregateOutputType | null
    _sum: ComponentChartSumAggregateOutputType | null
    _min: ComponentChartMinAggregateOutputType | null
    _max: ComponentChartMaxAggregateOutputType | null
  }

  export type ComponentChartAvgAggregateOutputType = {
    id: number | null
  }

  export type ComponentChartSumAggregateOutputType = {
    id: number | null
  }

  export type ComponentChartMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updateAt: Date | null
    published: boolean | null
    name: string | null
    type: string | null
    description: string | null
    template: string | null
    coverThumbnail: string | null
  }

  export type ComponentChartMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updateAt: Date | null
    published: boolean | null
    name: string | null
    type: string | null
    description: string | null
    template: string | null
    coverThumbnail: string | null
  }

  export type ComponentChartCountAggregateOutputType = {
    id: number
    createdAt: number
    updateAt: number
    published: number
    name: number
    type: number
    description: number
    template: number
    coverThumbnail: number
    _all: number
  }


  export type ComponentChartAvgAggregateInputType = {
    id?: true
  }

  export type ComponentChartSumAggregateInputType = {
    id?: true
  }

  export type ComponentChartMinAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    published?: true
    name?: true
    type?: true
    description?: true
    template?: true
    coverThumbnail?: true
  }

  export type ComponentChartMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    published?: true
    name?: true
    type?: true
    description?: true
    template?: true
    coverThumbnail?: true
  }

  export type ComponentChartCountAggregateInputType = {
    id?: true
    createdAt?: true
    updateAt?: true
    published?: true
    name?: true
    type?: true
    description?: true
    template?: true
    coverThumbnail?: true
    _all?: true
  }

  export type ComponentChartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComponentChart to aggregate.
     */
    where?: ComponentChartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComponentCharts to fetch.
     */
    orderBy?: ComponentChartOrderByWithRelationInput | ComponentChartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComponentChartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComponentCharts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComponentCharts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ComponentCharts
    **/
    _count?: true | ComponentChartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComponentChartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComponentChartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComponentChartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComponentChartMaxAggregateInputType
  }

  export type GetComponentChartAggregateType<T extends ComponentChartAggregateArgs> = {
        [P in keyof T & keyof AggregateComponentChart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComponentChart[P]>
      : GetScalarType<T[P], AggregateComponentChart[P]>
  }




  export type ComponentChartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComponentChartWhereInput
    orderBy?: ComponentChartOrderByWithAggregationInput | ComponentChartOrderByWithAggregationInput[]
    by: ComponentChartScalarFieldEnum[] | ComponentChartScalarFieldEnum
    having?: ComponentChartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComponentChartCountAggregateInputType | true
    _avg?: ComponentChartAvgAggregateInputType
    _sum?: ComponentChartSumAggregateInputType
    _min?: ComponentChartMinAggregateInputType
    _max?: ComponentChartMaxAggregateInputType
  }

  export type ComponentChartGroupByOutputType = {
    id: number
    createdAt: Date
    updateAt: Date
    published: boolean
    name: string
    type: string
    description: string
    template: string
    coverThumbnail: string | null
    _count: ComponentChartCountAggregateOutputType | null
    _avg: ComponentChartAvgAggregateOutputType | null
    _sum: ComponentChartSumAggregateOutputType | null
    _min: ComponentChartMinAggregateOutputType | null
    _max: ComponentChartMaxAggregateOutputType | null
  }

  type GetComponentChartGroupByPayload<T extends ComponentChartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComponentChartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComponentChartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComponentChartGroupByOutputType[P]>
            : GetScalarType<T[P], ComponentChartGroupByOutputType[P]>
        }
      >
    >


  export type ComponentChartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    published?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    template?: boolean
    coverThumbnail?: boolean
  }, ExtArgs["result"]["componentChart"]>


  export type ComponentChartSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updateAt?: boolean
    published?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    template?: boolean
    coverThumbnail?: boolean
  }


  export type $ComponentChartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ComponentChart"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updateAt: Date
      published: boolean
      name: string
      type: string
      description: string
      template: string
      coverThumbnail: string | null
    }, ExtArgs["result"]["componentChart"]>
    composites: {}
  }

  type ComponentChartGetPayload<S extends boolean | null | undefined | ComponentChartDefaultArgs> = $Result.GetResult<Prisma.$ComponentChartPayload, S>

  type ComponentChartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ComponentChartFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ComponentChartCountAggregateInputType | true
    }

  export interface ComponentChartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ComponentChart'], meta: { name: 'ComponentChart' } }
    /**
     * Find zero or one ComponentChart that matches the filter.
     * @param {ComponentChartFindUniqueArgs} args - Arguments to find a ComponentChart
     * @example
     * // Get one ComponentChart
     * const componentChart = await prisma.componentChart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ComponentChartFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ComponentChartFindUniqueArgs<ExtArgs>>
    ): Prisma__ComponentChartClient<$Result.GetResult<Prisma.$ComponentChartPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ComponentChart that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ComponentChartFindUniqueOrThrowArgs} args - Arguments to find a ComponentChart
     * @example
     * // Get one ComponentChart
     * const componentChart = await prisma.componentChart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ComponentChartFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ComponentChartFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ComponentChartClient<$Result.GetResult<Prisma.$ComponentChartPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ComponentChart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentChartFindFirstArgs} args - Arguments to find a ComponentChart
     * @example
     * // Get one ComponentChart
     * const componentChart = await prisma.componentChart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ComponentChartFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ComponentChartFindFirstArgs<ExtArgs>>
    ): Prisma__ComponentChartClient<$Result.GetResult<Prisma.$ComponentChartPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ComponentChart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentChartFindFirstOrThrowArgs} args - Arguments to find a ComponentChart
     * @example
     * // Get one ComponentChart
     * const componentChart = await prisma.componentChart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ComponentChartFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ComponentChartFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ComponentChartClient<$Result.GetResult<Prisma.$ComponentChartPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ComponentCharts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentChartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ComponentCharts
     * const componentCharts = await prisma.componentChart.findMany()
     * 
     * // Get first 10 ComponentCharts
     * const componentCharts = await prisma.componentChart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const componentChartWithIdOnly = await prisma.componentChart.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ComponentChartFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ComponentChartFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComponentChartPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ComponentChart.
     * @param {ComponentChartCreateArgs} args - Arguments to create a ComponentChart.
     * @example
     * // Create one ComponentChart
     * const ComponentChart = await prisma.componentChart.create({
     *   data: {
     *     // ... data to create a ComponentChart
     *   }
     * })
     * 
    **/
    create<T extends ComponentChartCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ComponentChartCreateArgs<ExtArgs>>
    ): Prisma__ComponentChartClient<$Result.GetResult<Prisma.$ComponentChartPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ComponentCharts.
     * @param {ComponentChartCreateManyArgs} args - Arguments to create many ComponentCharts.
     * @example
     * // Create many ComponentCharts
     * const componentChart = await prisma.componentChart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ComponentChartCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ComponentChartCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ComponentChart.
     * @param {ComponentChartDeleteArgs} args - Arguments to delete one ComponentChart.
     * @example
     * // Delete one ComponentChart
     * const ComponentChart = await prisma.componentChart.delete({
     *   where: {
     *     // ... filter to delete one ComponentChart
     *   }
     * })
     * 
    **/
    delete<T extends ComponentChartDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ComponentChartDeleteArgs<ExtArgs>>
    ): Prisma__ComponentChartClient<$Result.GetResult<Prisma.$ComponentChartPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ComponentChart.
     * @param {ComponentChartUpdateArgs} args - Arguments to update one ComponentChart.
     * @example
     * // Update one ComponentChart
     * const componentChart = await prisma.componentChart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ComponentChartUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ComponentChartUpdateArgs<ExtArgs>>
    ): Prisma__ComponentChartClient<$Result.GetResult<Prisma.$ComponentChartPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ComponentCharts.
     * @param {ComponentChartDeleteManyArgs} args - Arguments to filter ComponentCharts to delete.
     * @example
     * // Delete a few ComponentCharts
     * const { count } = await prisma.componentChart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ComponentChartDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ComponentChartDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ComponentCharts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentChartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ComponentCharts
     * const componentChart = await prisma.componentChart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ComponentChartUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ComponentChartUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ComponentChart.
     * @param {ComponentChartUpsertArgs} args - Arguments to update or create a ComponentChart.
     * @example
     * // Update or create a ComponentChart
     * const componentChart = await prisma.componentChart.upsert({
     *   create: {
     *     // ... data to create a ComponentChart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ComponentChart we want to update
     *   }
     * })
    **/
    upsert<T extends ComponentChartUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ComponentChartUpsertArgs<ExtArgs>>
    ): Prisma__ComponentChartClient<$Result.GetResult<Prisma.$ComponentChartPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ComponentCharts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentChartCountArgs} args - Arguments to filter ComponentCharts to count.
     * @example
     * // Count the number of ComponentCharts
     * const count = await prisma.componentChart.count({
     *   where: {
     *     // ... the filter for the ComponentCharts we want to count
     *   }
     * })
    **/
    count<T extends ComponentChartCountArgs>(
      args?: Subset<T, ComponentChartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComponentChartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ComponentChart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentChartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ComponentChartAggregateArgs>(args: Subset<T, ComponentChartAggregateArgs>): Prisma.PrismaPromise<GetComponentChartAggregateType<T>>

    /**
     * Group by ComponentChart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComponentChartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ComponentChartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComponentChartGroupByArgs['orderBy'] }
        : { orderBy?: ComponentChartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ComponentChartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComponentChartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ComponentChart model
   */
  readonly fields: ComponentChartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ComponentChart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComponentChartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ComponentChart model
   */ 
  interface ComponentChartFieldRefs {
    readonly id: FieldRef<"ComponentChart", 'Int'>
    readonly createdAt: FieldRef<"ComponentChart", 'DateTime'>
    readonly updateAt: FieldRef<"ComponentChart", 'DateTime'>
    readonly published: FieldRef<"ComponentChart", 'Boolean'>
    readonly name: FieldRef<"ComponentChart", 'String'>
    readonly type: FieldRef<"ComponentChart", 'String'>
    readonly description: FieldRef<"ComponentChart", 'String'>
    readonly template: FieldRef<"ComponentChart", 'String'>
    readonly coverThumbnail: FieldRef<"ComponentChart", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ComponentChart findUnique
   */
  export type ComponentChartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentChart
     */
    select?: ComponentChartSelect<ExtArgs> | null
    /**
     * Filter, which ComponentChart to fetch.
     */
    where: ComponentChartWhereUniqueInput
  }

  /**
   * ComponentChart findUniqueOrThrow
   */
  export type ComponentChartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentChart
     */
    select?: ComponentChartSelect<ExtArgs> | null
    /**
     * Filter, which ComponentChart to fetch.
     */
    where: ComponentChartWhereUniqueInput
  }

  /**
   * ComponentChart findFirst
   */
  export type ComponentChartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentChart
     */
    select?: ComponentChartSelect<ExtArgs> | null
    /**
     * Filter, which ComponentChart to fetch.
     */
    where?: ComponentChartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComponentCharts to fetch.
     */
    orderBy?: ComponentChartOrderByWithRelationInput | ComponentChartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComponentCharts.
     */
    cursor?: ComponentChartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComponentCharts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComponentCharts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComponentCharts.
     */
    distinct?: ComponentChartScalarFieldEnum | ComponentChartScalarFieldEnum[]
  }

  /**
   * ComponentChart findFirstOrThrow
   */
  export type ComponentChartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentChart
     */
    select?: ComponentChartSelect<ExtArgs> | null
    /**
     * Filter, which ComponentChart to fetch.
     */
    where?: ComponentChartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComponentCharts to fetch.
     */
    orderBy?: ComponentChartOrderByWithRelationInput | ComponentChartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ComponentCharts.
     */
    cursor?: ComponentChartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComponentCharts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComponentCharts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ComponentCharts.
     */
    distinct?: ComponentChartScalarFieldEnum | ComponentChartScalarFieldEnum[]
  }

  /**
   * ComponentChart findMany
   */
  export type ComponentChartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentChart
     */
    select?: ComponentChartSelect<ExtArgs> | null
    /**
     * Filter, which ComponentCharts to fetch.
     */
    where?: ComponentChartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ComponentCharts to fetch.
     */
    orderBy?: ComponentChartOrderByWithRelationInput | ComponentChartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ComponentCharts.
     */
    cursor?: ComponentChartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ComponentCharts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ComponentCharts.
     */
    skip?: number
    distinct?: ComponentChartScalarFieldEnum | ComponentChartScalarFieldEnum[]
  }

  /**
   * ComponentChart create
   */
  export type ComponentChartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentChart
     */
    select?: ComponentChartSelect<ExtArgs> | null
    /**
     * The data needed to create a ComponentChart.
     */
    data: XOR<ComponentChartCreateInput, ComponentChartUncheckedCreateInput>
  }

  /**
   * ComponentChart createMany
   */
  export type ComponentChartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ComponentCharts.
     */
    data: ComponentChartCreateManyInput | ComponentChartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ComponentChart update
   */
  export type ComponentChartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentChart
     */
    select?: ComponentChartSelect<ExtArgs> | null
    /**
     * The data needed to update a ComponentChart.
     */
    data: XOR<ComponentChartUpdateInput, ComponentChartUncheckedUpdateInput>
    /**
     * Choose, which ComponentChart to update.
     */
    where: ComponentChartWhereUniqueInput
  }

  /**
   * ComponentChart updateMany
   */
  export type ComponentChartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ComponentCharts.
     */
    data: XOR<ComponentChartUpdateManyMutationInput, ComponentChartUncheckedUpdateManyInput>
    /**
     * Filter which ComponentCharts to update
     */
    where?: ComponentChartWhereInput
  }

  /**
   * ComponentChart upsert
   */
  export type ComponentChartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentChart
     */
    select?: ComponentChartSelect<ExtArgs> | null
    /**
     * The filter to search for the ComponentChart to update in case it exists.
     */
    where: ComponentChartWhereUniqueInput
    /**
     * In case the ComponentChart found by the `where` argument doesn't exist, create a new ComponentChart with this data.
     */
    create: XOR<ComponentChartCreateInput, ComponentChartUncheckedCreateInput>
    /**
     * In case the ComponentChart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComponentChartUpdateInput, ComponentChartUncheckedUpdateInput>
  }

  /**
   * ComponentChart delete
   */
  export type ComponentChartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentChart
     */
    select?: ComponentChartSelect<ExtArgs> | null
    /**
     * Filter which ComponentChart to delete.
     */
    where: ComponentChartWhereUniqueInput
  }

  /**
   * ComponentChart deleteMany
   */
  export type ComponentChartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ComponentCharts to delete
     */
    where?: ComponentChartWhereInput
  }

  /**
   * ComponentChart without action
   */
  export type ComponentChartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComponentChart
     */
    select?: ComponentChartSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DashboardScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updateAt: 'updateAt',
    published: 'published',
    name: 'name',
    coverThumbnail: 'coverThumbnail',
    description: 'description',
    content: 'content',
    designWidthEnum: 'designWidthEnum',
    visits: 'visits',
    submissions: 'submissions',
    shareURL: 'shareURL'
  };

  export type DashboardScalarFieldEnum = (typeof DashboardScalarFieldEnum)[keyof typeof DashboardScalarFieldEnum]


  export const ApiGroupScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updateAt: 'updateAt',
    name: 'name'
  };

  export type ApiGroupScalarFieldEnum = (typeof ApiGroupScalarFieldEnum)[keyof typeof ApiGroupScalarFieldEnum]


  export const ApiBaseNameScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updateAt: 'updateAt',
    baseName: 'baseName'
  };

  export type ApiBaseNameScalarFieldEnum = (typeof ApiBaseNameScalarFieldEnum)[keyof typeof ApiBaseNameScalarFieldEnum]


  export const ApiOriginScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updateAt: 'updateAt',
    origin: 'origin'
  };

  export type ApiOriginScalarFieldEnum = (typeof ApiOriginScalarFieldEnum)[keyof typeof ApiOriginScalarFieldEnum]


  export const ApiManageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updateAt: 'updateAt',
    name: 'name',
    description: 'description',
    url: 'url',
    method: 'method',
    group: 'group',
    baseName: 'baseName',
    origin: 'origin',
    headers: 'headers',
    isMock: 'isMock',
    mockJson: 'mockJson'
  };

  export type ApiManageScalarFieldEnum = (typeof ApiManageScalarFieldEnum)[keyof typeof ApiManageScalarFieldEnum]


  export const ComponentChartScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updateAt: 'updateAt',
    published: 'published',
    name: 'name',
    type: 'type',
    description: 'description',
    template: 'template',
    coverThumbnail: 'coverThumbnail'
  };

  export type ComponentChartScalarFieldEnum = (typeof ComponentChartScalarFieldEnum)[keyof typeof ComponentChartScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type DashboardWhereInput = {
    AND?: DashboardWhereInput | DashboardWhereInput[]
    OR?: DashboardWhereInput[]
    NOT?: DashboardWhereInput | DashboardWhereInput[]
    id?: IntFilter<"Dashboard"> | number
    userId?: StringFilter<"Dashboard"> | string
    createdAt?: DateTimeFilter<"Dashboard"> | Date | string
    updateAt?: DateTimeFilter<"Dashboard"> | Date | string
    published?: BoolFilter<"Dashboard"> | boolean
    name?: StringFilter<"Dashboard"> | string
    coverThumbnail?: StringNullableFilter<"Dashboard"> | string | null
    description?: StringFilter<"Dashboard"> | string
    content?: StringFilter<"Dashboard"> | string
    designWidthEnum?: StringFilter<"Dashboard"> | string
    visits?: IntFilter<"Dashboard"> | number
    submissions?: IntFilter<"Dashboard"> | number
    shareURL?: StringFilter<"Dashboard"> | string
  }

  export type DashboardOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    published?: SortOrder
    name?: SortOrder
    coverThumbnail?: SortOrderInput | SortOrder
    description?: SortOrder
    content?: SortOrder
    designWidthEnum?: SortOrder
    visits?: SortOrder
    submissions?: SortOrder
    shareURL?: SortOrder
  }

  export type DashboardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    shareURL?: string
    AND?: DashboardWhereInput | DashboardWhereInput[]
    OR?: DashboardWhereInput[]
    NOT?: DashboardWhereInput | DashboardWhereInput[]
    userId?: StringFilter<"Dashboard"> | string
    createdAt?: DateTimeFilter<"Dashboard"> | Date | string
    updateAt?: DateTimeFilter<"Dashboard"> | Date | string
    published?: BoolFilter<"Dashboard"> | boolean
    coverThumbnail?: StringNullableFilter<"Dashboard"> | string | null
    description?: StringFilter<"Dashboard"> | string
    content?: StringFilter<"Dashboard"> | string
    designWidthEnum?: StringFilter<"Dashboard"> | string
    visits?: IntFilter<"Dashboard"> | number
    submissions?: IntFilter<"Dashboard"> | number
  }, "id" | "shareURL" | "name">

  export type DashboardOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    published?: SortOrder
    name?: SortOrder
    coverThumbnail?: SortOrderInput | SortOrder
    description?: SortOrder
    content?: SortOrder
    designWidthEnum?: SortOrder
    visits?: SortOrder
    submissions?: SortOrder
    shareURL?: SortOrder
    _count?: DashboardCountOrderByAggregateInput
    _avg?: DashboardAvgOrderByAggregateInput
    _max?: DashboardMaxOrderByAggregateInput
    _min?: DashboardMinOrderByAggregateInput
    _sum?: DashboardSumOrderByAggregateInput
  }

  export type DashboardScalarWhereWithAggregatesInput = {
    AND?: DashboardScalarWhereWithAggregatesInput | DashboardScalarWhereWithAggregatesInput[]
    OR?: DashboardScalarWhereWithAggregatesInput[]
    NOT?: DashboardScalarWhereWithAggregatesInput | DashboardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dashboard"> | number
    userId?: StringWithAggregatesFilter<"Dashboard"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Dashboard"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Dashboard"> | Date | string
    published?: BoolWithAggregatesFilter<"Dashboard"> | boolean
    name?: StringWithAggregatesFilter<"Dashboard"> | string
    coverThumbnail?: StringNullableWithAggregatesFilter<"Dashboard"> | string | null
    description?: StringWithAggregatesFilter<"Dashboard"> | string
    content?: StringWithAggregatesFilter<"Dashboard"> | string
    designWidthEnum?: StringWithAggregatesFilter<"Dashboard"> | string
    visits?: IntWithAggregatesFilter<"Dashboard"> | number
    submissions?: IntWithAggregatesFilter<"Dashboard"> | number
    shareURL?: StringWithAggregatesFilter<"Dashboard"> | string
  }

  export type ApiGroupWhereInput = {
    AND?: ApiGroupWhereInput | ApiGroupWhereInput[]
    OR?: ApiGroupWhereInput[]
    NOT?: ApiGroupWhereInput | ApiGroupWhereInput[]
    id?: StringFilter<"ApiGroup"> | string
    createdAt?: DateTimeFilter<"ApiGroup"> | Date | string
    updateAt?: DateTimeFilter<"ApiGroup"> | Date | string
    name?: StringFilter<"ApiGroup"> | string
  }

  export type ApiGroupOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
  }

  export type ApiGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ApiGroupWhereInput | ApiGroupWhereInput[]
    OR?: ApiGroupWhereInput[]
    NOT?: ApiGroupWhereInput | ApiGroupWhereInput[]
    createdAt?: DateTimeFilter<"ApiGroup"> | Date | string
    updateAt?: DateTimeFilter<"ApiGroup"> | Date | string
  }, "id" | "name">

  export type ApiGroupOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
    _count?: ApiGroupCountOrderByAggregateInput
    _max?: ApiGroupMaxOrderByAggregateInput
    _min?: ApiGroupMinOrderByAggregateInput
  }

  export type ApiGroupScalarWhereWithAggregatesInput = {
    AND?: ApiGroupScalarWhereWithAggregatesInput | ApiGroupScalarWhereWithAggregatesInput[]
    OR?: ApiGroupScalarWhereWithAggregatesInput[]
    NOT?: ApiGroupScalarWhereWithAggregatesInput | ApiGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiGroup"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ApiGroup"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"ApiGroup"> | Date | string
    name?: StringWithAggregatesFilter<"ApiGroup"> | string
  }

  export type ApiBaseNameWhereInput = {
    AND?: ApiBaseNameWhereInput | ApiBaseNameWhereInput[]
    OR?: ApiBaseNameWhereInput[]
    NOT?: ApiBaseNameWhereInput | ApiBaseNameWhereInput[]
    id?: StringFilter<"ApiBaseName"> | string
    createdAt?: DateTimeFilter<"ApiBaseName"> | Date | string
    updateAt?: DateTimeFilter<"ApiBaseName"> | Date | string
    baseName?: StringFilter<"ApiBaseName"> | string
  }

  export type ApiBaseNameOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    baseName?: SortOrder
  }

  export type ApiBaseNameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    baseName?: string
    AND?: ApiBaseNameWhereInput | ApiBaseNameWhereInput[]
    OR?: ApiBaseNameWhereInput[]
    NOT?: ApiBaseNameWhereInput | ApiBaseNameWhereInput[]
    createdAt?: DateTimeFilter<"ApiBaseName"> | Date | string
    updateAt?: DateTimeFilter<"ApiBaseName"> | Date | string
  }, "id" | "baseName">

  export type ApiBaseNameOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    baseName?: SortOrder
    _count?: ApiBaseNameCountOrderByAggregateInput
    _max?: ApiBaseNameMaxOrderByAggregateInput
    _min?: ApiBaseNameMinOrderByAggregateInput
  }

  export type ApiBaseNameScalarWhereWithAggregatesInput = {
    AND?: ApiBaseNameScalarWhereWithAggregatesInput | ApiBaseNameScalarWhereWithAggregatesInput[]
    OR?: ApiBaseNameScalarWhereWithAggregatesInput[]
    NOT?: ApiBaseNameScalarWhereWithAggregatesInput | ApiBaseNameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiBaseName"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ApiBaseName"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"ApiBaseName"> | Date | string
    baseName?: StringWithAggregatesFilter<"ApiBaseName"> | string
  }

  export type ApiOriginWhereInput = {
    AND?: ApiOriginWhereInput | ApiOriginWhereInput[]
    OR?: ApiOriginWhereInput[]
    NOT?: ApiOriginWhereInput | ApiOriginWhereInput[]
    id?: StringFilter<"ApiOrigin"> | string
    createdAt?: DateTimeFilter<"ApiOrigin"> | Date | string
    updateAt?: DateTimeFilter<"ApiOrigin"> | Date | string
    origin?: StringFilter<"ApiOrigin"> | string
  }

  export type ApiOriginOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    origin?: SortOrder
  }

  export type ApiOriginWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    origin?: string
    AND?: ApiOriginWhereInput | ApiOriginWhereInput[]
    OR?: ApiOriginWhereInput[]
    NOT?: ApiOriginWhereInput | ApiOriginWhereInput[]
    createdAt?: DateTimeFilter<"ApiOrigin"> | Date | string
    updateAt?: DateTimeFilter<"ApiOrigin"> | Date | string
  }, "id" | "origin">

  export type ApiOriginOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    origin?: SortOrder
    _count?: ApiOriginCountOrderByAggregateInput
    _max?: ApiOriginMaxOrderByAggregateInput
    _min?: ApiOriginMinOrderByAggregateInput
  }

  export type ApiOriginScalarWhereWithAggregatesInput = {
    AND?: ApiOriginScalarWhereWithAggregatesInput | ApiOriginScalarWhereWithAggregatesInput[]
    OR?: ApiOriginScalarWhereWithAggregatesInput[]
    NOT?: ApiOriginScalarWhereWithAggregatesInput | ApiOriginScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiOrigin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ApiOrigin"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"ApiOrigin"> | Date | string
    origin?: StringWithAggregatesFilter<"ApiOrigin"> | string
  }

  export type ApiManageWhereInput = {
    AND?: ApiManageWhereInput | ApiManageWhereInput[]
    OR?: ApiManageWhereInput[]
    NOT?: ApiManageWhereInput | ApiManageWhereInput[]
    id?: StringFilter<"ApiManage"> | string
    createdAt?: DateTimeFilter<"ApiManage"> | Date | string
    updateAt?: DateTimeFilter<"ApiManage"> | Date | string
    name?: StringFilter<"ApiManage"> | string
    description?: StringFilter<"ApiManage"> | string
    url?: StringFilter<"ApiManage"> | string
    method?: StringFilter<"ApiManage"> | string
    group?: StringNullableFilter<"ApiManage"> | string | null
    baseName?: StringNullableFilter<"ApiManage"> | string | null
    origin?: StringNullableFilter<"ApiManage"> | string | null
    headers?: StringNullableFilter<"ApiManage"> | string | null
    isMock?: BoolNullableFilter<"ApiManage"> | boolean | null
    mockJson?: StringNullableFilter<"ApiManage"> | string | null
  }

  export type ApiManageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    method?: SortOrder
    group?: SortOrderInput | SortOrder
    baseName?: SortOrderInput | SortOrder
    origin?: SortOrderInput | SortOrder
    headers?: SortOrderInput | SortOrder
    isMock?: SortOrderInput | SortOrder
    mockJson?: SortOrderInput | SortOrder
  }

  export type ApiManageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ApiManageWhereInput | ApiManageWhereInput[]
    OR?: ApiManageWhereInput[]
    NOT?: ApiManageWhereInput | ApiManageWhereInput[]
    createdAt?: DateTimeFilter<"ApiManage"> | Date | string
    updateAt?: DateTimeFilter<"ApiManage"> | Date | string
    description?: StringFilter<"ApiManage"> | string
    url?: StringFilter<"ApiManage"> | string
    method?: StringFilter<"ApiManage"> | string
    group?: StringNullableFilter<"ApiManage"> | string | null
    baseName?: StringNullableFilter<"ApiManage"> | string | null
    origin?: StringNullableFilter<"ApiManage"> | string | null
    headers?: StringNullableFilter<"ApiManage"> | string | null
    isMock?: BoolNullableFilter<"ApiManage"> | boolean | null
    mockJson?: StringNullableFilter<"ApiManage"> | string | null
  }, "id" | "name">

  export type ApiManageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    method?: SortOrder
    group?: SortOrderInput | SortOrder
    baseName?: SortOrderInput | SortOrder
    origin?: SortOrderInput | SortOrder
    headers?: SortOrderInput | SortOrder
    isMock?: SortOrderInput | SortOrder
    mockJson?: SortOrderInput | SortOrder
    _count?: ApiManageCountOrderByAggregateInput
    _max?: ApiManageMaxOrderByAggregateInput
    _min?: ApiManageMinOrderByAggregateInput
  }

  export type ApiManageScalarWhereWithAggregatesInput = {
    AND?: ApiManageScalarWhereWithAggregatesInput | ApiManageScalarWhereWithAggregatesInput[]
    OR?: ApiManageScalarWhereWithAggregatesInput[]
    NOT?: ApiManageScalarWhereWithAggregatesInput | ApiManageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiManage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ApiManage"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"ApiManage"> | Date | string
    name?: StringWithAggregatesFilter<"ApiManage"> | string
    description?: StringWithAggregatesFilter<"ApiManage"> | string
    url?: StringWithAggregatesFilter<"ApiManage"> | string
    method?: StringWithAggregatesFilter<"ApiManage"> | string
    group?: StringNullableWithAggregatesFilter<"ApiManage"> | string | null
    baseName?: StringNullableWithAggregatesFilter<"ApiManage"> | string | null
    origin?: StringNullableWithAggregatesFilter<"ApiManage"> | string | null
    headers?: StringNullableWithAggregatesFilter<"ApiManage"> | string | null
    isMock?: BoolNullableWithAggregatesFilter<"ApiManage"> | boolean | null
    mockJson?: StringNullableWithAggregatesFilter<"ApiManage"> | string | null
  }

  export type ComponentChartWhereInput = {
    AND?: ComponentChartWhereInput | ComponentChartWhereInput[]
    OR?: ComponentChartWhereInput[]
    NOT?: ComponentChartWhereInput | ComponentChartWhereInput[]
    id?: IntFilter<"ComponentChart"> | number
    createdAt?: DateTimeFilter<"ComponentChart"> | Date | string
    updateAt?: DateTimeFilter<"ComponentChart"> | Date | string
    published?: BoolFilter<"ComponentChart"> | boolean
    name?: StringFilter<"ComponentChart"> | string
    type?: StringFilter<"ComponentChart"> | string
    description?: StringFilter<"ComponentChart"> | string
    template?: StringFilter<"ComponentChart"> | string
    coverThumbnail?: StringNullableFilter<"ComponentChart"> | string | null
  }

  export type ComponentChartOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    published?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    template?: SortOrder
    coverThumbnail?: SortOrderInput | SortOrder
  }

  export type ComponentChartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ComponentChartWhereInput | ComponentChartWhereInput[]
    OR?: ComponentChartWhereInput[]
    NOT?: ComponentChartWhereInput | ComponentChartWhereInput[]
    createdAt?: DateTimeFilter<"ComponentChart"> | Date | string
    updateAt?: DateTimeFilter<"ComponentChart"> | Date | string
    published?: BoolFilter<"ComponentChart"> | boolean
    type?: StringFilter<"ComponentChart"> | string
    description?: StringFilter<"ComponentChart"> | string
    template?: StringFilter<"ComponentChart"> | string
    coverThumbnail?: StringNullableFilter<"ComponentChart"> | string | null
  }, "id" | "name">

  export type ComponentChartOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    published?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    template?: SortOrder
    coverThumbnail?: SortOrderInput | SortOrder
    _count?: ComponentChartCountOrderByAggregateInput
    _avg?: ComponentChartAvgOrderByAggregateInput
    _max?: ComponentChartMaxOrderByAggregateInput
    _min?: ComponentChartMinOrderByAggregateInput
    _sum?: ComponentChartSumOrderByAggregateInput
  }

  export type ComponentChartScalarWhereWithAggregatesInput = {
    AND?: ComponentChartScalarWhereWithAggregatesInput | ComponentChartScalarWhereWithAggregatesInput[]
    OR?: ComponentChartScalarWhereWithAggregatesInput[]
    NOT?: ComponentChartScalarWhereWithAggregatesInput | ComponentChartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ComponentChart"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ComponentChart"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"ComponentChart"> | Date | string
    published?: BoolWithAggregatesFilter<"ComponentChart"> | boolean
    name?: StringWithAggregatesFilter<"ComponentChart"> | string
    type?: StringWithAggregatesFilter<"ComponentChart"> | string
    description?: StringWithAggregatesFilter<"ComponentChart"> | string
    template?: StringWithAggregatesFilter<"ComponentChart"> | string
    coverThumbnail?: StringNullableWithAggregatesFilter<"ComponentChart"> | string | null
  }

  export type DashboardCreateInput = {
    userId: string
    createdAt?: Date | string
    updateAt?: Date | string
    published?: boolean
    name: string
    coverThumbnail?: string | null
    description?: string
    content: string
    designWidthEnum?: string
    visits?: number
    submissions?: number
    shareURL?: string
  }

  export type DashboardUncheckedCreateInput = {
    id?: number
    userId: string
    createdAt?: Date | string
    updateAt?: Date | string
    published?: boolean
    name: string
    coverThumbnail?: string | null
    description?: string
    content: string
    designWidthEnum?: string
    visits?: number
    submissions?: number
    shareURL?: string
  }

  export type DashboardUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    coverThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    designWidthEnum?: StringFieldUpdateOperationsInput | string
    visits?: IntFieldUpdateOperationsInput | number
    submissions?: IntFieldUpdateOperationsInput | number
    shareURL?: StringFieldUpdateOperationsInput | string
  }

  export type DashboardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    coverThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    designWidthEnum?: StringFieldUpdateOperationsInput | string
    visits?: IntFieldUpdateOperationsInput | number
    submissions?: IntFieldUpdateOperationsInput | number
    shareURL?: StringFieldUpdateOperationsInput | string
  }

  export type DashboardCreateManyInput = {
    id?: number
    userId: string
    createdAt?: Date | string
    updateAt?: Date | string
    published?: boolean
    name: string
    coverThumbnail?: string | null
    description?: string
    content: string
    designWidthEnum?: string
    visits?: number
    submissions?: number
    shareURL?: string
  }

  export type DashboardUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    coverThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    designWidthEnum?: StringFieldUpdateOperationsInput | string
    visits?: IntFieldUpdateOperationsInput | number
    submissions?: IntFieldUpdateOperationsInput | number
    shareURL?: StringFieldUpdateOperationsInput | string
  }

  export type DashboardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    coverThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    designWidthEnum?: StringFieldUpdateOperationsInput | string
    visits?: IntFieldUpdateOperationsInput | number
    submissions?: IntFieldUpdateOperationsInput | number
    shareURL?: StringFieldUpdateOperationsInput | string
  }

  export type ApiGroupCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    name: string
  }

  export type ApiGroupUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    name: string
  }

  export type ApiGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ApiGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ApiGroupCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    name: string
  }

  export type ApiGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ApiGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ApiBaseNameCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    baseName: string
  }

  export type ApiBaseNameUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    baseName: string
  }

  export type ApiBaseNameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseName?: StringFieldUpdateOperationsInput | string
  }

  export type ApiBaseNameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseName?: StringFieldUpdateOperationsInput | string
  }

  export type ApiBaseNameCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    baseName: string
  }

  export type ApiBaseNameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseName?: StringFieldUpdateOperationsInput | string
  }

  export type ApiBaseNameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseName?: StringFieldUpdateOperationsInput | string
  }

  export type ApiOriginCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    origin: string
  }

  export type ApiOriginUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    origin: string
  }

  export type ApiOriginUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    origin?: StringFieldUpdateOperationsInput | string
  }

  export type ApiOriginUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    origin?: StringFieldUpdateOperationsInput | string
  }

  export type ApiOriginCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    origin: string
  }

  export type ApiOriginUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    origin?: StringFieldUpdateOperationsInput | string
  }

  export type ApiOriginUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    origin?: StringFieldUpdateOperationsInput | string
  }

  export type ApiManageCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    name: string
    description?: string
    url: string
    method: string
    group?: string | null
    baseName?: string | null
    origin?: string | null
    headers?: string | null
    isMock?: boolean | null
    mockJson?: string | null
  }

  export type ApiManageUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    name: string
    description?: string
    url: string
    method: string
    group?: string | null
    baseName?: string | null
    origin?: string | null
    headers?: string | null
    isMock?: boolean | null
    mockJson?: string | null
  }

  export type ApiManageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    group?: NullableStringFieldUpdateOperationsInput | string | null
    baseName?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    headers?: NullableStringFieldUpdateOperationsInput | string | null
    isMock?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mockJson?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApiManageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    group?: NullableStringFieldUpdateOperationsInput | string | null
    baseName?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    headers?: NullableStringFieldUpdateOperationsInput | string | null
    isMock?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mockJson?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApiManageCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updateAt?: Date | string
    name: string
    description?: string
    url: string
    method: string
    group?: string | null
    baseName?: string | null
    origin?: string | null
    headers?: string | null
    isMock?: boolean | null
    mockJson?: string | null
  }

  export type ApiManageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    group?: NullableStringFieldUpdateOperationsInput | string | null
    baseName?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    headers?: NullableStringFieldUpdateOperationsInput | string | null
    isMock?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mockJson?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApiManageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    group?: NullableStringFieldUpdateOperationsInput | string | null
    baseName?: NullableStringFieldUpdateOperationsInput | string | null
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    headers?: NullableStringFieldUpdateOperationsInput | string | null
    isMock?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mockJson?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComponentChartCreateInput = {
    createdAt?: Date | string
    updateAt?: Date | string
    published?: boolean
    name: string
    type?: string
    description?: string
    template: string
    coverThumbnail?: string | null
  }

  export type ComponentChartUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updateAt?: Date | string
    published?: boolean
    name: string
    type?: string
    description?: string
    template: string
    coverThumbnail?: string | null
  }

  export type ComponentChartUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    coverThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComponentChartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    coverThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComponentChartCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updateAt?: Date | string
    published?: boolean
    name: string
    type?: string
    description?: string
    template: string
    coverThumbnail?: string | null
  }

  export type ComponentChartUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    coverThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ComponentChartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    coverThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DashboardCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    published?: SortOrder
    name?: SortOrder
    coverThumbnail?: SortOrder
    description?: SortOrder
    content?: SortOrder
    designWidthEnum?: SortOrder
    visits?: SortOrder
    submissions?: SortOrder
    shareURL?: SortOrder
  }

  export type DashboardAvgOrderByAggregateInput = {
    id?: SortOrder
    visits?: SortOrder
    submissions?: SortOrder
  }

  export type DashboardMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    published?: SortOrder
    name?: SortOrder
    coverThumbnail?: SortOrder
    description?: SortOrder
    content?: SortOrder
    designWidthEnum?: SortOrder
    visits?: SortOrder
    submissions?: SortOrder
    shareURL?: SortOrder
  }

  export type DashboardMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    published?: SortOrder
    name?: SortOrder
    coverThumbnail?: SortOrder
    description?: SortOrder
    content?: SortOrder
    designWidthEnum?: SortOrder
    visits?: SortOrder
    submissions?: SortOrder
    shareURL?: SortOrder
  }

  export type DashboardSumOrderByAggregateInput = {
    id?: SortOrder
    visits?: SortOrder
    submissions?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ApiGroupCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
  }

  export type ApiGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
  }

  export type ApiGroupMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
  }

  export type ApiBaseNameCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    baseName?: SortOrder
  }

  export type ApiBaseNameMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    baseName?: SortOrder
  }

  export type ApiBaseNameMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    baseName?: SortOrder
  }

  export type ApiOriginCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    origin?: SortOrder
  }

  export type ApiOriginMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    origin?: SortOrder
  }

  export type ApiOriginMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    origin?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ApiManageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    method?: SortOrder
    group?: SortOrder
    baseName?: SortOrder
    origin?: SortOrder
    headers?: SortOrder
    isMock?: SortOrder
    mockJson?: SortOrder
  }

  export type ApiManageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    method?: SortOrder
    group?: SortOrder
    baseName?: SortOrder
    origin?: SortOrder
    headers?: SortOrder
    isMock?: SortOrder
    mockJson?: SortOrder
  }

  export type ApiManageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    method?: SortOrder
    group?: SortOrder
    baseName?: SortOrder
    origin?: SortOrder
    headers?: SortOrder
    isMock?: SortOrder
    mockJson?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ComponentChartCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    published?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    template?: SortOrder
    coverThumbnail?: SortOrder
  }

  export type ComponentChartAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ComponentChartMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    published?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    template?: SortOrder
    coverThumbnail?: SortOrder
  }

  export type ComponentChartMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    published?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    template?: SortOrder
    coverThumbnail?: SortOrder
  }

  export type ComponentChartSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DashboardDefaultArgs instead
     */
    export type DashboardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DashboardDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApiGroupDefaultArgs instead
     */
    export type ApiGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApiGroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApiBaseNameDefaultArgs instead
     */
    export type ApiBaseNameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApiBaseNameDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApiOriginDefaultArgs instead
     */
    export type ApiOriginArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApiOriginDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApiManageDefaultArgs instead
     */
    export type ApiManageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApiManageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ComponentChartDefaultArgs instead
     */
    export type ComponentChartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ComponentChartDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}