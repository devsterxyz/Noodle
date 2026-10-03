#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/2397212b9bcb398501b955225783c178f4fb05e37dff97fc3743d7765c82c60f/contract';
import startContract from '../../snapshots/2397212b9bcb398501b955225783c178f4fb05e37dff97fc3743d7765c82c60f/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/b59b9a0674d1c0331680faeb7c8947177fedc4fc5222238cc53da0c4bdc92078/contract';
import endContract from '../../snapshots/b59b9a0674d1c0331680faeb7c8947177fedc4fc5222238cc53da0c4bdc92078/contract.json' with { type: 'json' };
import { Migration, MigrationCLI } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [this.dropNotNull({ schema: 'public', table: 'User', column: 'avatar' })];
  }
}

MigrationCLI.run(import.meta.url, M);
