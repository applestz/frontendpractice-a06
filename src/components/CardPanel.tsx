'use client'
import { useReducer } from "react";
import Card from "./Card";

export default function CardPanel() {
    const ratingReducer = (ratingMap:Map<string, number>, action:{type: string, venueName: string, rating: number})=>{
        switch(action.type) {
            case 'add': {
                return new Map(ratingMap.set(action.venueName, action.rating))
            }
            case 'remove': {
                ratingMap.delete(action.venueName)
                return new Map(ratingMap)
            }
            default: return ratingMap
        }
    }

    const [ratingMap, dispatchRating] = useReducer(ratingReducer, new Map<string, number>)

    return (
        <div>
            <div style={{margin:"20px", display:"flex", flexDirection:"row",
                flexWrap:"wrap", justifyContent:"space-around", alignContent:"space-around"}}>
                <Card venueName="The Bloom Pavilion" imgSrc="/bloom.jpg" onRating={(venue:string, rating:number)=>dispatchRating({type:'add', venueName:venue, rating:rating})}/>
                <Card venueName="Spark Space" imgSrc="/sparkspace.jpg" onRating={(venue:string, rating:number)=>dispatchRating({type:'add', venueName:venue, rating:rating})}/>
                <Card venueName="The Grand Table" imgSrc="/grandtable.jpg" onRating={(venue:string, rating:number)=>dispatchRating({type:'add', venueName:venue, rating:rating})}/>
            </div>
            <div className="w-full text-xl font-medium">
                Venue List with Ratings : {ratingMap.size}
            </div>
            {Array.from(ratingMap.entries()).map(([venue, rating]) => (
                    <div key={venue} data-testid={venue}
                    onClick={()=>dispatchRating({type:'remove', venueName:venue, rating:rating})}>
                        {venue} : {rating}
                    </div>
                ))}
        </div>
    )
}