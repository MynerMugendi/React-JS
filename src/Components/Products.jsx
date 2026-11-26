let data = [
    {id: 1, name: "Earphones", price: 350},
    {id: 2, name: "Charger", price: 450},
    {id: 3, name: "Boxers", price: 860},
    {id: 4, name: "Phone", price: 27000},
]

export function Products(){
    let productList = data.map(product =><div>
        <h2>{product.name}</h2>
        <p>Ksh.{product.price}</p>
    </div>)

    let productList1 = data.map(({id, name, price}) =><div>
        <h2>{name}</h2>
        <p>Ksh.{price}</p>
    </div>)
    return(
        <div className="container">
            <div className="row">
                {productList}
            </div>

        </div>
    )
}