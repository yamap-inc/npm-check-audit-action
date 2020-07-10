// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Todo = any;

export const formatMetaInfoWithMarkdown = (json: Todo): string => {
  const vulnerabilities = json.metadata.vulnerabilities;
  const info = vulnerabilities.info;
  const low = vulnerabilities.low;
  const moderate = vulnerabilities.moderate;
  const high = vulnerabilities.high;
  const critical = vulnerabilities.critical;

  return `
| vulnerabilities | count |
|:--|:--|
| info | ${info} |
| low | ${low} |
| moderate | ${moderate} |
| high | ${high} |
| critical | ${critical} |
`;
};
