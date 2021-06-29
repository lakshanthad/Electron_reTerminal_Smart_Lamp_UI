var Gpio = require('onoff').Gpio; //include onoff module to interact with the GPIO
var LED = new Gpio(24, 'out'); //initialize GPIO 24 as an output

// Include app, BrowserWindow and ipcMain module
const { app, BrowserWindow, ipcMain } = require('electron')
/* Use ipcMain module to receive the messages from the ipcRenderer module and turn ON the GPIO*/
ipcMain.on("msg1",(event,data)=>{
  LED.writeSync(data);
})

// Use ipcMain module to receive the messages from the ipcRenderer module and turn OFF the GPIO
ipcMain.on("msg2",(event,data)=>{
  LED.writeSync(data);
})

// Use ipcMain module to receive the messages from the ipcRenderer module and close the app
ipcMain.on("close-me", (event, arg) => {
    app.quit()
})

// Create application window
app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        // Make the app fullscreen
        "fullscreen": true,
        webPreferences: {
            // enable the communication between the main and rendered process
            nodeIntegration: true,
            contextIsolation: false
          }
    });
    // Load the HTML page with CSS styling
    mainWindow.loadFile('index.html');
});