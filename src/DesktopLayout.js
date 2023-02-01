import React from "react";
import Desktop from "./images/image-product-desktop.jpg";
import Cart from "./images/icon-cart.svg";

function DesktopLayout() {

    return (
        <div class="desktop-card">
            <div class="image">
                <img src={Desktop} className="desktop-img" class="card-img" alt="desktop" />
            </div>
            <div class="desktop-card-body">
                <h4>PERFUME</h4>
                <h1>Gabrielle Essence Eau De Parfum</h1>
                <p class="card-text">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                <div class="desktop-price-details">
                    <h1>$149.99</h1>
                    <h5>$169.99</h5>
                </div>
                <div className="desktop-button">
                    <button type="button" className="button">
                        <img src={Cart} alt="SVG as img" style={{
                            width: 16, height: 16, margin: "0 10px", verticalAlign: "middle",
                            display: "inline-block"
                        }}></img>
                        <strong>
                            Add to Cart
                        </strong>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DesktopLayout;