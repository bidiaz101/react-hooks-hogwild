import React, {useState} from "react"

function PigTiles({
    name, 
    image, 
    specialty, 
    weight, 
    greased, 
    highestMedal,
}) {
    const [showDetails, setShowDetails] = useState(false)

    return (
        <div className="pigTile">
            <div className="ui card" onClick={()=>setShowDetails(!showDetails)}>
                <h1>{name}</h1>
                <img src={image} alt={name} />
                {showDetails ? (
                    <div className="hoggyText">
                        <h3>Specialty: {specialty}</h3>
                        <h3>Weight: {weight}</h3>
                        {greased ? <h3>Greased</h3> : <h3>Yet to be Greased</h3>}
                        <h3>Highest Medal Achieved: {highestMedal}</h3>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default PigTiles