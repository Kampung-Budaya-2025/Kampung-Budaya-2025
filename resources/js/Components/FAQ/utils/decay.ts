function decay(value: number, max: number): number {
    if (max === 0) {
        return 0;
    }
    const entry = value / max;
    const sigmoid = 2 * (1 / (1 + Math.exp(-entry)) - 0.5);
    return sigmoid * max;
}

export { decay };