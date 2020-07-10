import { spawnSync, SpawnSyncReturns } from 'child_process';

type GetAuditOptions = {
  json?: boolean;
};

export const getAudit = (options?: GetAuditOptions): Promise<string> => {
  return new Promise((resolve, reject) => {
    try {
      const command = ['audit'];
      if (options && options.json) {
        command.push('--json');
      }
      const result: SpawnSyncReturns<string> = spawnSync('npm', command, {
        encoding: 'utf-8',
      });
      resolve(result.stdout);
    } catch (e) {
      reject(e.message);
    }
  });
};
