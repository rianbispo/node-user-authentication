import { Pool } from "pg";

const connectionString = 'postgres://ldnyfifc:QbLeIMnwFo0B1xmvd1G5IQ0DtCeVuMpL@fanny.db.elephantsql.com/ldnyfifc';

const db = new Pool({connectionString});
export default db;