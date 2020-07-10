import * as core from '@actions/core';
import { getAudit } from './audit';
import { formatMetaInfoWithMarkdown } from './format';

const run = async () => {
  setAuditDefault();
  setMetaInfoWithMarkdown();
};

const setAuditDefault = async () => {
  try {
    const audit = await getAudit();
    core.setOutput('audit_default', audit);
  } catch (error) {
    core.setFailed(error.message);
  }
};

const setMetaInfoWithMarkdown = async () => {
  try {
    const auditJsonString = await getAudit({ json: true });
    let auditJson: JSON;
    try {
      auditJson = JSON.parse(auditJsonString || 'null');
    } catch (error) {
      const message = `**Sooooooory**\nI can't read audit information. Please run \`npm audit\` in your machine.`;
      core.setOutput('meta_info_with_markdown', message);
      return;
    }
    const metaInfoWithMarkdown = formatMetaInfoWithMarkdown(auditJson);
    core.setOutput('meta_info_with_markdown', metaInfoWithMarkdown);
  } catch (error) {
    core.setFailed(error.message);
  }
};

run();
