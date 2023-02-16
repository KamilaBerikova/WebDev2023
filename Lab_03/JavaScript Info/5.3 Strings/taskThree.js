function truncate(str, len) {
    if (str.length > len) return str.slice(0, len - 1) + "...";
    return str;
}