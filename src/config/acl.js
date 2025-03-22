const acl = require("acl");
const memoryBackend = new acl.memoryBackend();
const accessControl = new acl(memoryBackend);

accessControl.allow([
  {
    roles: "admin",
    allows: [
      { resources: "/api/admin/users", permissions: "get" }
    ]
  },
  {
    roles: "user",
    allows: []
  }
]);

module.exports = accessControl;