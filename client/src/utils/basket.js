
export const searchBasket = (productItem, basketStore) => {
    let isInclude  = false
    basketStore.forEach((item) => {
        if (item.id === productItem.id) {
            isInclude = {
                status: true,
                count: item.count
            }
        }
    });
    return isInclude
}

export const searchCount = (id, basketList) => {
    let count = 0
    basketList.forEach(el => {
        if(el.id === id) {
            count = el.count
        }
    })
}