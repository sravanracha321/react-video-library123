
export function DataBinding(){
    var categories=["All","Electronics","Fashion","Footwear"];
    return(
        <div className="container-fluid">
            <h2>Navs</h2>
            <div>
                {
                    categories.map(category=>
                        <button className="btn btn-warning me-2"key={category}>{category}
                        </button>
                    )

                }
            </div>
        </div>
    )
}