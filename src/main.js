import { app, BrowserWindow } from 'electron';
import path from 'path';

// Obtener la ruta de __dirname en módulos ES
const __dirname = path.dirname(new URL(import.meta.url).pathname);

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
    },
  });

  // Carga tu aplicación React (modo desarrollo o producción)
  const startURL = process.env.ELECTRON_START_URL || path.join(__dirname, '../dist/index.html');
  mainWindow.loadURL(startURL);

  mainWindow.on('closed', () => (mainWindow = null));
};

// Evento para iniciar la aplicación
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
