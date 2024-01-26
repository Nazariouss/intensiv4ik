function sms(string) {
    return Math.ceil(string.length / 60)
}

count = sms("This package is native ESM and no longer provides a CommonJS export.")
console.log(`You need ${count} sms to send text`)