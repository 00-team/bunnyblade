import { ipcMain } from 'electron'

import { Category, SIGNALS } from './utils'

ipcMain.handle('db:category:add', async (_, title: string) => {
    return await Category({ signal: SIGNALS.ADD, title: title })
})
ipcMain.handle('db:category:get', async (_, id: number) => {
    return await Category({ signal: SIGNALS.GET, id: id })
})
ipcMain.handle('db:category:delete', async (_, id: number) => {
    return await Category({ signal: SIGNALS.DELETE, id: id })
})
ipcMain.handle('db:category:all', async () => {
    return await Category({ signal: SIGNALS.ALL })
})
ipcMain.handle('db:category:update', async (_, id: number, title: string) => {
    return await Category({ signal: SIGNALS.UPDATE, id: id, title: title })
})
