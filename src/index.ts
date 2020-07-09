import * as core from '@actions/core';
import { getAudit } from './audit';

try {
  const audit = getAudit();
  core.setOutput('audit_default', audit);
} catch (error) {
  core.setFailed(error.message);
}
