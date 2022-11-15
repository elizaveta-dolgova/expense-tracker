import express from 'express';
import cors from 'cors';

import routes from './routes';

const PORT = 4269;

async function main(): Promise<void> {
  const server = express();

  server.use(express.json());
  server.use(cors());

  server.use('/', routes);

  return new Promise((resolve, reject) => {
    server
      .listen(PORT, () => {
        // eslint-disable-next-line no-console
        console.log(`Server is listening on port ${PORT}...`);
      })
      .on('error', reject)
      .on('close', resolve);
  });
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
    process.exit(1);
  });
