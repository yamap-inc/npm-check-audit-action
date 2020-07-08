import core from '@actions/core';

try {
  console.log('hoge');
} catch (error) {
  core.setFailed(error.message);
}
