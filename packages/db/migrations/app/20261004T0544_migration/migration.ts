#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/12411fa8ad4f23615dec0f3b5d349ae9a49a4b81688f9dd208a6b694cb606fec/contract';
import endContract from '../../snapshots/12411fa8ad4f23615dec0f3b5d349ae9a49a4b81688f9dd208a6b694cb606fec/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/b59b9a0674d1c0331680faeb7c8947177fedc4fc5222238cc53da0c4bdc92078/contract';
import startContract from '../../snapshots/b59b9a0674d1c0331680faeb7c8947177fedc4fc5222238cc53da0c4bdc92078/contract.json' with { type: 'json' };
import { Migration, MigrationCLI } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.addUnique({
        schema: 'public',
        table: 'User',
        constraint: 'User_email_key',
        columns: ['email'],
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
