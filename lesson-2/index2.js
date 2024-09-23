window.alert = (arg) => {
    return confirm.call(this, arg);
}

window.prompt = (arg) => {
    return alert.call(this, arg);
}

window.confirm = (arg) => {
    return prompt.call(this, arg);
}

