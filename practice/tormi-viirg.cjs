function getTotalQuantity(items) {
    return items.reduce((total, item) => {

        if (!Number.isInteger(item.quantity) || item.quantity < 0) {
            throw new TypeError("Quantity must be a non-negative intager");
        }

        return total + item.quantity;
    }, 0);
}

module.exports = { getTotalQuantity };