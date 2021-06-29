var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(24, 'out'); //use GPIO pin 4, and specify that it is output

const { app, BrowserWindow, ipcMain } = require('electron')
ipcMain.on("msg",(event,data)=>{
  LED.writeSync(data);
})

ipcMain.on("msg1",(event,data)=>{
  LED.writeSync(data);
})

ipcMain.on("close-me", (event, arg) => {
    app.quit()
})

app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        "fullscreen": true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
          }
    });
    mainWindow.maximize();
    mainWindow.loadFile('index.html');
});

try {
    require('electron-reloader')(module)
  } catch (_) {}