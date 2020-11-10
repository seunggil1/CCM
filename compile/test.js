let pidusage = require('pidusage');
const cp = require("child_process");

const child = cp.spawn('dir');
pidusage(child.pid, function (err, stats) {
  console.log(stats);
});
