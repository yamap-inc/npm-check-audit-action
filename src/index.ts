import * as core from '@actions/core';
import { getAudit } from './audit';
import { formatMetaInfoWithMarkdown } from './format';

const run = async () => {
  try {
    const audit = await getAudit();
    const auditJsonString = await getAudit({ json: true });

    const auditJson = JSON.parse(auditJsonString || 'null');
    const metaInfoWithMarkdown = formatMetaInfoWithMarkdown(auditJson);

    core.setOutput('audit_default', audit);
    core.setOutput('meta_info_with_markdown', metaInfoWithMarkdown);
  } catch (error) {
    core.setFailed(error.message);
  }
};

run();
