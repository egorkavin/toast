import ToastOptions from './ToastOptions.js'

export default class Toast extends ToastOptions {
    static ToastKey = 't1'

    static incrementToastKey() {
        let prevToastKeyNum = this.ToastKey.slice(1)
        this.ToastKey = this.ToastKey.slice(0, 1) + ++prevToastKeyNum
    }

    static close(Key) {
        const toastToClose = document.querySelector(`#${Key}`)
        toastToClose.remove()   
    }

    constructor (content, options) {
        super(options)
        this.content = content
        this.positionClass = `toast-container--${this.position}`
        this.container = document.querySelector(`${this.parentSelector} .${this.positionClass}`)
    }

    getContainer() {
        if (!this.container) {
            this.container = document.createElement('div')
            this.container.classList.add('toast-container', this.positionClass)
            const parent =  document.querySelector(this.parentSelector)
            parent.append(this.container)
            parent.style.position = 'relative'
        }
        return this.container
    }

    getToastHTML() {
        return `
            <div id="${Toast.ToastKey}" class="toast toast--${this.variant}">
                <div class="toast__header">
                    <strong class="toast__title">Toast</strong>
                    <button class="toast__button toast__button--close">
                        &#10005
                    </button>
                </div>
                <hr>
                <div class="toast__content">
                    ${this.content}
                </div>
            </div>
        `
    }

    setDuration(key) {
        setTimeout(() => Toast.close(key), this.duration)
    }

    addCloseEvent(key) {
        const toastToClose = document.querySelector(`#${key}`)
        toastToClose.querySelector('button').addEventListener('click', () => toastToClose.remove())
        if (this.closeOnClick) {
            toastToClose.addEventListener('click', () => toastToClose.remove())
        }
    }

    show() {
        this.getContainer().insertAdjacentHTML(`beforeend`, this.getToastHTML())
        if (this.duration !== '') {
            this.setDuration(Toast.ToastKey)
        }
        this.addCloseEvent(Toast.ToastKey)
        return Toast.ToastKey
    }
}