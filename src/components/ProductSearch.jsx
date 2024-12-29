import React from 'react'

function SearchProduct() {
  return (
    <div>
       <h3 align="center">PRODUCT SEARCH</h3>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                     <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">Product Name:</label>
                        <input type="text" className="form-control" /> 
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <button class="btn btn-danger">SEARCH</button>
                        </div>
                     </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchProduct