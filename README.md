# Custom Theme Builder
A simple project to help create custom themes for [Flexmonster](https://flexmonster.com)

## Prerequisites

To run this application, you will need Node.js and npm. [Get it here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) if it’s not already installed on your machine.

## Installation & Usage

 
###### 1) Clone the sample project: 

```bash
git clone https://github.com/VeraDidenko/custom-theme-builder && cd custom-theme-builder
```

###### 2) Install the dependencies defined in `package.json`: 

```bash
npm i
```
###### You can adjust the variable values and colors in `flexmonster.less` as desired.


###### 3) Run the project to generate your custom theme: 

```bash
npm run build
```

###### As a result the `generated-theme` folder will be generated containing your custom theme files (`flexmonster.css`, `flexmonster.min.css`). 
###### You are welcome to use them in your project.
