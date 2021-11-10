const fs = require('fs');

(async () => {
  const [, , username] = process.argv;

  if (!username) {
    console.warn('No name supplied!');
    process.exit(-1);
  }
  console.log(username);

  await fs.writeFile(`./src/people/__current.tsx`, `export { default } from './${username}';`, (err) => {
    if (err) {
      console.warn('Your user does not exist');
      process.exit(-1);
    }
  });
})();
