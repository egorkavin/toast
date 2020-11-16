import Toast from './Toast.js'

const form = document.querySelector('.toast-form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = new FormData(form)
    const variant = data.get('variant')
    const position = data.get('position')
    const content = data.get('content')
    const duration = data.get('duration')
    const closeOnClick = data.get('close-on-click')
    const parentSelector = data.get('parent-selector') || 'body'

    new Toast(content, {
        variant: variant,
        position: position,
        duration: duration,
        parentSelector: parentSelector,
        closeOnClick: closeOnClick === 'on'
    }).show()

    Toast.incrementToastKey()
})