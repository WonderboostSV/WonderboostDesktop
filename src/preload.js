const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  toggleTheme: (callback) => {
    ipcRenderer.on('toggle-theme', () => {
      console.log('Mensaje toggle-theme recibido en preload');
      callback(); // Llama a la función proporcionada
    });
  },
});

contextBridge.exposeInMainWorld('api', {
  on: (channel, callback) => {
    console.log(`Registrando evento para el canal: ${channel}`);
    if (channel === 'toggle-theme') {
      ipcRenderer.on(channel, (event, ...args) => {
        console.log(`Evento ${channel} recibido en preload con datos:`, ...args);
        callback(...args);
      });
    }
  },
  send: (channel, data) => ipcRenderer.send(channel, data),
  removeListener: (channel, callback) => {
    if (['toggle-theme'].includes(channel)) {
      ipcRenderer.removeListener(channel, callback);
    }
  },
});