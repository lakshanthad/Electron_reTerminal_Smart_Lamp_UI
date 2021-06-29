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
sudo apt upgrade 
```

- **Step 3.** Check the ARM architecture of reTerminal

```sh
uname -m 
```

- **Step 4.** Visit [this page](https://nodejs.org/en/download/) and copy the link that corresponds to the ARM architecture

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/electron/node-1.jpg" alt="pir" width="800" height="auto"></p>

- **Step 5.** Type the following to download the file 

```sh
wget [copied link before]
```

```sh
Example:
wget https://nodejs.org/dist/v14.17.1/node-v14.17.1-linux-armv7l.tar.xz
```

- **Step 6.** Extract the file

```sh
tar -xJf [.tar.xz file name]
```

```sh
Example:
tar -xJf node-v14.17.1-linux-armv7l.tar.xz
```

**Note:** Press the **TAB** key after typing **node** to autocomplete the full name of the file

- **Step 7.** Go into the folder that we extracted 

```sh
cd [folder that we extracted]
```

```sh
Example:
cd node-v14.17.1-linux-armv7l
```

- **Step 8.** Copy the files to PATH

```sh
sudo cp -R bin/* /usr/local/bin/
sudo cp -R include/* /usr/local/include/
sudo cp -R lib/* /usr/local/lib/
sudo cp -R share/* /usr/local/share/
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