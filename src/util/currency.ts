export const formatter = (price: number): string => {
    let currency: string = price.toString();
    let prefix: string = currency.split(".")[0];
    const len = prefix.length;
    const last = prefix.substr(len - 3, len);
    prefix = prefix.slice(0, len - 3);
    let d = "";
    for (var i = prefix.length - 1; i >= 0; i -= 2) {
        d += "," + prefix[i] + (prefix[i - 1] === undefined ? "" : prefix[i - 1]);
    }
    const base = d.split("").reverse().join("");
    return `${base}${last}`;
}