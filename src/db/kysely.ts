import {
  DummyDriver,
  Generated,
  Kysely,
  MysqlAdapter,
  MysqlIntrospector,
  MysqlQueryCompiler,
} from "kysely";

interface TestTable {
  id: Generated<number>;
  value: string | null;
}

interface Database {
  Test: TestTable;
}

export const queryBuilder = new Kysely<Database>({
  dialect: {
    createAdapter() {
      return new MysqlAdapter();
    },
    createDriver() {
      return new DummyDriver();
    },
    createIntrospector(db: Kysely<unknown>) {
      return new MysqlIntrospector(db);
    },
    createQueryCompiler() {
      return new MysqlQueryCompiler();
    },
  },
});
