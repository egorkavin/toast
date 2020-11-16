export default class ToastOptions {
    constructor ({variant, position, duration, parentSelector, closeOnClick}) {
        this.variant = variant
        this.position = position
        this.duration = duration
        this.parentSelector = parentSelector
        this.closeOnClick = closeOnClick
    }
}