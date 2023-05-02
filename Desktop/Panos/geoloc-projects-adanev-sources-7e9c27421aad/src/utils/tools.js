const randomFloatOf4Digits = () => {
    return Math.floor(1000 + Math.random() * 9000);
}

const randomFloatOf6Digits = () => {
    return Math.floor(100000 + Math.random() * 900000);
}

const formatAmount = (amount) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount)
}

export { randomFloatOf4Digits, randomFloatOf6Digits, formatAmount }