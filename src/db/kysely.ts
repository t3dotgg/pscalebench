import { Generated, Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";

interface TestTable {
  id: Generated<number>;
  value: string | null;
}

interface Database {
  Test: TestTable;
}

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    host: import.meta.env.PDB_HOST,
    username: import.meta.env.PDB_USER,
    password: import.meta.env.PDB_PASS,
  }),
});
