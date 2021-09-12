import React from "react"

function SortBtns({
    filterGreased,
    setFilterGreased,
    sortByName,
    setNameSort,
    sortByWeight,
    setWeightSort
}){
    return (
        <div>
            <button onClick={()=>setFilterGreased(!filterGreased)}>
                {filterGreased ? "Show All" : "Show Only the Greasiest!"}
            </button>
            <button onClick={()=>setNameSort(!sortByName)}>
                {sortByName ? "Unsort" : "Sort Hogs (By Name)"}
            </button>
            <button onClick={()=>setWeightSort(!sortByWeight)}>
                {sortByWeight ? "Unsort" : "Sort Hogs (By Weight)"}
            </button>
        </div>
    )
}
export default SortBtns