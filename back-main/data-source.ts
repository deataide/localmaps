import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
  "type": "sqlite",
  "synchronize":true,
  "logging":false,
  "entities":["src/entity/**/*.ts"],
  "migrations":["src/migrate/**/*.ts"],
  "subscribers":["src/subscriber/**/*.ts"],
  "database": "database/app.sqlite",
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })