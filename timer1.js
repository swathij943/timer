const args = process.argv.slice(2);

for (let arg of args) {
  const num = Number(arg);

  if(isNaN(num) || num < 0) {
    // skip/Ignore non-numeric or negative inputs
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07'); // send a system beep
  }, num * 1000);
}