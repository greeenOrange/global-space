import React, { useState } from 'react';

const Pagination = ({postData}) => {
  // const {rocket}= pd;
  console.log({postData});
  const [searchTitle, setSearchTitle] = useState("");

  const handleSearch = event => {
    const searchText = event.target.value;

    const matchedProducts = postData.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

    // setDisplayProducts(matchedProducts);
}
  return (
    <div>
      {postData?.filter((value) => value).map((pd, index)  =>(
                    
                    <div key={pd.flight_number}>

                </div>
                ))}
    
    <div className="search-input">
                <form class="d-flex" >
                <input
        // style={{ width: "30%", height: "25px" }}
        type="text"
        placeholder="Search for rocket"
        onChange={handleSearch}
      />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
                </div>
                </div>
  );
};

export default Pagination;