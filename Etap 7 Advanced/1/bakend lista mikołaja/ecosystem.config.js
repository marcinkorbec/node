module.exports = {
  apps: [
    {
      name: 'apka-dev',
      script: 'dist/index.js',
      autorestart: true,
      max_memory_restart: '2G',
      exec_mode: "cluster",
      instances: -1,
    }
  ],
};