# nodejs_template

A tour of NodeJS and Javascript

# Install NodeJS

You can install NodeJs from [here](https://nodejs.org/en/download/)

# Running this package

To download, install, and test this package, run:

```bash
git clone https://github.com/ourarash/nodejs_template.git
cd nodejs_template
npm install
npm run test
```

# Directory Structure

The files and directories are as follows:

```
.
├── README.md
├── app.js
├── lib
│   └── my_lib.js
├── package-lock.json
├── package.json
└── test
    ├── chai_test.js
    └── mocha_test.js
```

1. The main entry point is [app.js](app.js)
2. All modules are in **lib** folder. Example: [lib/my_lib.js](lib/my_lib.js)
3. Unit test files are under **test** folder. Example: [test/chai_test.js](test/chai_test.js)
