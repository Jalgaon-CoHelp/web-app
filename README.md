# Web App - Jalgaon CoHelp

The Crowdsourced application ([Jalgaon CoHelp](https://jalgaoncohelp.in)) for finding resources to fight COVID across Jalgaon District. Find hospital beds, oxygen, plasma, and more built with React.

[![CI](https://github.com/Jalgaon-CoHelp/web-app/actions/workflows/build.yml/badge.svg)](https://github.com/Jalgaon-CoHelp/web-app/actions/workflows/build.yml)

## 🛠 Technology / Tools used 

- TypeScript: Primary language of the development.
- React: Front-end/UI development framework

## 🖥 Development Setup 

### ⚙️ API Service Project Setup

- First of all, set up Backend API service project ([_as mentioned here_](https://github.com/Jalgaon-CoHelp/api-service)).
### ⚙️ Environment Setup

- Make sure Node/Yarn is installed on machine.

- Create a `.env` file in the root directory of a project with below contents.

```env
REACT_APP_API_BASE_URL=http://localhost:8080
```

Make sure to replace URL with your local API server URL.

### ⚙️ Project Setup

Install dependencies by the command

```bash
yarn
```

### ✈️ Running the Application 

- Run the application

```bash
yarn run start
```

- Build the application

```bash
yarn run build
```

## 🙋‍♂️ Want to Contribute ?
Awesome! If you want to contribute to this project, you're always welcome! See [Contributing Guidelines](CONTRIBUTING.md).

## 💬 Want to discuss? 
Have any questions, doubts or want to present your opinions, views? You're always welcome. You can [start discussions](https://github.com/Jalgaon-CoHelp/web-app/discussions).
## License

```
MIT License

Copyright (c) 2021 Jalgaon CoHelp

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

