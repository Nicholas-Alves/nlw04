import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();  

  return createConnection(
    
    Object.assign(defaultOptions, {
      database:
        process.env.NODE_ENV.trim() === 'test'
          ? "./src/database/database.test.sqlite"
          : defaultOptions.database,
      // database: (!process.env.NODE_ENV || process.env.NODE_ENV.trim() !== 'test')
      //   ? defaultOptions.database
      //   : "./src/database/database.test.sqlite"
    })
  );
};
