import { app, BrowserWindow, Menu, session  } from 'electron';
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
      preload: path.resolve('./src/preload.js'),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
    },
  });

  // Obtén la URL desde el archivo .env
  const startURL = process.env.ELECTRON_START_URL || path.join(__dirname, '../dist/index.html');
  mainWindow.loadURL(startURL);
  console.log('Cargando URL:', startURL);
  
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


  createAppMenu(); // Llama a la función para crear el menú

  mainWindow.on('closed', () => (mainWindow = null));


};

// Función para crear el menú personalizado
const createAppMenu = () => {
  const menu = Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [{ role: 'quit' }],
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Toggle Color Mode',
          click: () => {
            if (mainWindow) {
              console.log('Enviando mensaje toggle-theme');
              mainWindow.webContents.send('toggle-theme');
            }
          },
        },
        {
          label: 'Toggle DevTools',
          click: () => {
            if (mainWindow) {
              const isVisible = mainWindow.webContents.isDevToolsOpened();
              if (isVisible) {
                mainWindow.webContents.closeDevTools();
              } else {
                mainWindow.webContents.openDevTools(); // Opción de abrir en la ventana principal
              }
            }
          },
        },        
        { role: 'reload' },
      ],
    },    
    {
      label: 'Window',
      submenu: [{ role: 'minimize' }, { role: 'close' }],
    },
  ]);
  Menu.setApplicationMenu(menu);
};

// Evento para iniciar la aplicación
app.on('ready', () => {
  createWindow();
  session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => {
      if (permission === 'notifications') {
          callback(false); // Por ejemplo, denegar notificaciones
      }
  });
});


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
