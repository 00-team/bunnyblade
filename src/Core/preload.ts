import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('win', {
    close: () => ipcRenderer.send('window:action', 'close'),
    minimize: () => ipcRenderer.send('window:action', 'minimize'),
})

// database
import { Category, Todo } from './Data'

contextBridge.exposeInMainWorld('database', {
    Category: Category,
    Todo: Todo,
})
