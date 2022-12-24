import { useContext } from "react";
import { ContextData } from "../../Context/Context";
import "./Products.css";

function Products(){
    const {brands} = useContext(ContextData);
    return(
        <div className="ProductsPage">
            <div className="ProductsPageSideBar">
                <div className="ProductsPageSideBarBrands"> 
                    <div className="ProductsPageSideBarBrandsTitle">
                        <p>Brands</p>     
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Products;