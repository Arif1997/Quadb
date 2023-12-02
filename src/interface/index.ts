export interface DatabaseConfig {
    development: {
      username: string;
      password: string;
      database: string;
      host: string;
      dialect: string;
    };
    test: {
      username: string;
      password: null | string; // Allow null or a string
      database: string;
      host: string;
      dialect: string;
    };
    production: {
      username: string;
      password: null | string; // Allow null or a string
      database: string;
      host: string;
      dialect: string;
    };
  }
  