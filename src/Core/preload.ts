import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('win', {
    close: () => ipcRenderer.send('window:action', 'close'),
    minimize: () => ipcRenderer.send('window:action', 'minimize'),
})

contextBridge.exposeInMainWorld('database', {
    Category: (props: unknown) => ipcRenderer.invoke('db:category', props),
    Todo: (props: unknown) => ipcRenderer.invoke('db:todo', props),
})
