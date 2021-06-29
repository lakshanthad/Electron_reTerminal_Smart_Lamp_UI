# Smart Lamp UI Demo Using Electron on reTerminal

This is a demo application to control the GPIO pins on the [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) just by clicking buttons on the LCD!

Here I have used Electron to build the app. Electron is an open-source framework for creating native desktop applications (Windows, Mac, Linux) with web technologies like HTML, CSS and JavaScript. This means if you can build a website, you can build a desktop app!

For a step-by-step guide on building your own UI using Electron on the reTerminal, click [here](https://wiki.seeedstudio.com/reTerminal-build-UI-using-Electron)

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/vs-17.png" alt="pir" width="1000" height="auto"></p>

## Install

First, we will install **Node.js** along with **npm** on the reTerminal. npm is a package manager for Node.js packages.  

- **Step 1.** Access reTerminal using the **onboard LCD, external display or SSH** as explained [here](https://wiki.seeedstudio.com/reTerminal/#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)

- **Step 2.** Upgrade the packages

```sh
sudo apt update
sudo apt full-upgrade 
```

- **Step 3.** Download the script to install Node.js

```sh
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
```

- **Step 4.** Install Node.js

```sh
sudo apt install -y nodejs
```

Node.js is now installed on the reTerminal. To check whether the installation is sucessful, run the following commands to check the version of **Node.js** and **npm**

```sh
node -v
npm -v
```

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/node-2.png" alt="pir" width="300" height="auto"></p>

## Usage

- **Step 1.** Clone this repo

```sh
git clone https://github.com/lakshanthad/Electron_reTerminal_Smart_Lamp_UI
```

- **Step 2.** Navigate to the **Electron_reTerminal_Smart_Lamp_UI** directory

```sh
cd Electron_reTerminal_Smart_Lamp_UI
```

- **Step 3.** Install **Electron**

```sh
npm install --save-dev electron
```

- **Step 4.** Install the **onoff** npm module for GPIO control

```sh
npm install onoff
```

- **Step 5.** Install **electron-rebuild** npm module

```sh
npm install --save-dev electron-rebuild
```

- **Step 6.** Run electron-rebuild

```sh
./node_modules/.bin/electron-rebuild
```

**Note:** Whenever you install a new npm package, rerun electron-rebuild

- **Step 7.** Launch the app on the reTerminal

```sh
npm test
```