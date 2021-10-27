import { Pool } from "pg";

const connectionString = 'postgres://xxxxxxxxxxxxxxx@fanny.db.elephantsql.com/ldnyfifc';

const db = new Pool({connectionString});
export default db;
