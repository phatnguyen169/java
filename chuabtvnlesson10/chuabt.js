// Xây dựng chương trình quản lý kho hàng như sau:
// -Cửa hàng gồm các thông tin: tên kho hàng, địa chỉ, người sở hữu, các mặt hàng trong kho.
// -Mỗi mặt hàng gồm: mã mặt hàng, tên, loại mặt hàng, giá cả.
const storage = {
    name: 'Fake Storage',
    address: 'HN',
    owner: 'Phat',
    items: [
        {
            id: 1, name: 'Product 1', category: 'Furniture', pricce: 20
        },
        {
            id: 2, name: 'Product 2', category: 'Device', pricce: 110
        },
        {
            id: 3, name: 'Product 3', category: 'Cloth', pricce: 2
        },
    ]
}
console.log(storage)
