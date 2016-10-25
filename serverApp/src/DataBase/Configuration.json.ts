/// <reference path="../_all.d.ts" />

export let options = {
  driver: {
    type: "postgres",
    host: "server-bat.cloudapp.net",
    port: 5432,
    username: "app_user",
    password: "P@ssw0rd",
    database: "main_storage",
    usePool: true
  },
  entities: [
    __dirname + "/Entities/*.ts"
  ],
  autoSchemaSync: true
};