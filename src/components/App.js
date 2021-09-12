import React, { useState } from "react";
import Nav from "./Nav";
import PigTiles from "./PigTiles"
import SortBtns from "./SortBtns"

import hogs from "../porkers_data";

function App() {
	const [filterGreased, setFilterGreased] = useState(false)
	const [sortByName, setNameSort] = useState(false)
	const [sortByWeight, setWeightSort] = useState(false)

	function sortNames(a,b){
		const nameA=a.name.toUpperCase()
		const nameB=b.name.toUpperCase()

		if (nameA > nameB) {
			return 1
		} else {
			return -1
		}
	}

	function sortWeight(a,b){
		return a.weight - b.weight
	}

	const pigTiles = hogs.filter(hog => filterGreased ? hog.greased : true).sort(sortByName ? sortNames : undefined).sort(sortByWeight ? sortWeight : undefined).map(hog => {
		return (
			<PigTiles 
				name={hog.name} 
				image={hog.image} 
				specialty={hog.specialty} 
				greased={hog.greased} weight={hog.weight} 
				highestMedal={hog["highest medal achieved"]} 
				key={hog.name} 
			/> 
		)
	})

	return (
		<div className="App">
			<Nav />
			<SortBtns 
				filterGreased={filterGreased}
				setFilterGreased={setFilterGreased}
				sortByName={sortByName}		
				setNameSort={setNameSort}
				sortByWeight={sortByWeight}
				setWeightSort={setWeightSort}
			/>
			<br />
			<div className="ui grid container">
				{pigTiles}
			</div>
		</div>
	);
}

export default App;
