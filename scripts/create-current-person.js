const fs = require('fs');

(async () => {
  const [,,username] = process.argv;

  if (!username) {
    console.warn('No name supplied!');
    process.exit(-1);
  }

  await fs.copyFile(`./src/people/${username}.tsx`, `./src/people/__current.tsx`, 2, err => {
    console.log(err)
    if (err) {
      console.warn('Your user does not exist');
      process.exit(-1);
    }
  });
})();
