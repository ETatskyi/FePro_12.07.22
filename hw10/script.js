function myMathPow(base, exp) {
    if (!Number.isInteger(exp)) {
        console.error('Value cant be calculated by this function. Use Mat.Pow() instead');
        return
    }

    if (exp == 0 || base == 1) { return 1 }

    // for Integer exp:
    let accum = 1;
    for (let i = 1; i <= Math.abs(exp); i++) {
        accum *= base;
    }
    if (exp > 0) { return accum } else { return 1 / accum }
}

