import { app, BrowserWindow } from 'electron';
import path from 'path';
import dotenv from 'dotenv';

// Cargar variables del archivo .env
dotenv.config();

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

  // Obtén la URL desde el archivo .env
  const startURL = process.env.ELECTRON_START_URL || path.join(__dirname, '../dist/index.html');
  mainWindow.loadURL(startURL);
  console.log('Cargando URL:', startURL);

  mainWindow.on('closed', () => (mainWindow = null));

  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools(); // Solo abre DevTools en desarrollo
  }
  mainWindow.webContents.on('console-message', (event, level, message, line, sourceId) => {
    if (
      message.includes("Unknown VE context") ||
      message.includes("Request Autofill")
    ) {
      // Ignorar mensajes específicos
      return;
    }
    console.log(`Console [${level}]: ${message} (line ${line}, source ${sourceId})`);
  });

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
