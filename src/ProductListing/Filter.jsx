import './Filter.css';
import {useState} from "react"
import {useMediaQuery} from "react-responsive"
import { useEffect } from 'react';
export default function Filter({setCardDisplay}){
    const [filterDisplay, setFilterDisplay] = useState("display-none")
    const isDevideLarge = useMediaQuery({query:"(min-width: 1220px)"})
    useEffect(()=>{
        if(isDevideLarge){
            setFilterDisplay('display-block')
            setCardDisplay("product-container")
        }
        else {
            setFilterDisplay('display-none')
        }
    },[isDevideLarge])
    const showFilterSection = ()=>{
            

            if(filterDisplay === "display-none"){
                setFilterDisplay('display-block')
                setCardDisplay("display-none")
            }
            else {
                setFilterDisplay('display-none')
                setCardDisplay("product-container")
            }
        
    }
    return (
        <>
        <div className="filterButton">
             <div className="sort-button">
                <button  className="btn btn-text filter-button"><i className="fas fa-sort-alt filter-icon"></i>Sort By</button>
             </div>
            <div className="sort-button">
                <button  onClick = {showFilterSection} className="btn btn-text filter-button"><i className="far fa-filter filter-icon"></i>Filter</button>
            </div>
            

        </div>
        <div>
            <aside className={`product-filter-section ${filterDisplay}`}>
                <div className="product-filter-heading">
                    <p className="fw-7">Filters</p>
                    <a href="#">Clear</a>
                </div>
                <div className="price-range-container">
                    <p className="fw-7">Price</p>
                <div>
                    <div className="price-range-values">
                        <p>100</p>
                        <p>2000</p>
                        <p>5000</p>
                    </div>
                    <input type="range" min={0} max={5000} className="price-slider" />
                </div>
                </div>
                <div className="input-filter-container">
                    <p className="fw-7">Category</p>
                    <ul className="check-lists">
                        <li><label htmlFor="men-category"><input type="checkbox" id="men-category" className = "input-spacing"/>Mens Clothing</label></li>
                        <li><label htmlFor="women-category"><input type="checkbox" id="women-category"/>Women Clothing</label></li>
                        <li><label htmlFor="kids-category"><input type="checkbox" id="kids-category"/>Kids Clothing</label></li>
                    </ul>
                </div>
                <div className="input-filter-container">
                    <p className="fw-7">Rating</p>
                    <ul className="check-lists">
                         <li><label htmlFor="four-stars"><input type="radio" name="star-rating" id="four-stars"/>4 Stars &amp; above</label></li>
                         <li><label htmlFor="three-stars"><input type="radio" name="star-rating" id="three-stars"/>3 Stars &amp; above</label></li>
                         <li><label htmlFor="two-stars"><input type="radio" name="star-rating" id="two-stars"/>2 Stars &amp; above</label></li>
                         <li><label htmlFor="one-stars"><input type="radio" name="star-rating" id="one-stars"/>1 Stars &amp; above</label></li>
                    </ul>
                </div>
                <div className="input-filter-container">
                    <p className="fw-7">Sort by</p>
                    <ul className="check-lists">
                          <li><label htmlFor="low-to-high"><input type="radio" name="sort-by" id="low-to-high"/>Price - Low to High</label></li>
                          <li><label htmlFor="high-to-low"><input type="radio" name="sort-by" id="high-to-low"/>Price - High to Low</label></li>                        
                    </ul>
                    </div>
            </aside>
        </div>
        </>
    )
}