interface App {
    title: string
    theme: string
}

const DefaultAppState: App = {
    title: 'BunnyBlade',
    theme: 'dark',
}

enum AppTypes {
    SET_TITLE = 'SET_TITLE',
    SET_THEME = 'SET_THEME',
}

export { App, DefaultAppState, AppTypes }
