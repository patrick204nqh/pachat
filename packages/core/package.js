Package.describe({
  name: 'patrick204nqh:core',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Npm.depends({
  typescript: "4.6.3",
  "@types/node": "14.0.4",
});

Package.onUse(function(api) {
  api.versionsFrom('2.7.3');
  api.use(['typescript', 'iron:router'], 'server');
  api.mainModule('src/core.ts', 'server');
});
