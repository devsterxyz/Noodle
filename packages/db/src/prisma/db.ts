import dotenv from 'dotenv';
import postgres from '@prisma/orm-postgres/runtime';
import { fileURLToPath } from 'node:url';
import type { Contract } from './contract.js';
import contractJson from './contract.json' with { type: 'json' };

// Load the database package's env file, regardless of which workspace starts
// the server (for example, apps/http-backend).
dotenv.config({ path: fileURLToPath(new URL('../../.env', import.meta.url)) });

const databaseUrl = process.env['DATABASE_URL'];

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not set. Add it to packages/db/.env.');
}

export const db = postgres<Contract>({
  contractJson,
  url: databaseUrl,
});
