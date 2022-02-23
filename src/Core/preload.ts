import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('win', {
    close: () => ipcRenderer.send('window:action', 'close'),
    minimize: () => ipcRenderer.send('window:action', 'minimize'),
})

// database

contextBridge.exposeInMainWorld('category', {
    add: (title: string) => ipcRenderer.invoke('db:category:add', title),
    get: (id: number) => ipcRenderer.invoke('db:category:get', id),
    delete: (id: number) => ipcRenderer.invoke('db:category:delete', id),
    all: () => ipcRenderer.invoke('db:category:all'),
    update: (id: number, title: string) =>
        ipcRenderer.invoke('db:category:update', id, title),
})
