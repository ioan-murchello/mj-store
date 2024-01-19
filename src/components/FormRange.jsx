import { useState } from "react"
import { formatPrice } from "../utils"

const FormRange = ({label,name,size}) => {
    const step = 10000
    const maxPrice = 100000

    const [selectedPrice, setSelectedPrice] = useState(maxPrice) 
    
  return (
    <div className="form-control">
        <label className="label cursor-pointer" htmlFor={name}>
            <span className="label-text capitalize">{label}</span>
            <span>{formatPrice(selectedPrice)}</span>
        </label>
        <input className={`range range-accent ${size}`} type="range" name={name} min={0} max={maxPrice} value={selectedPrice} step={step} onChange={(e) => setSelectedPrice(e.target.value)} />
        <div className="w-full flex justify-between text-xs px-2 mt-2">
            <span className="text-sm">0</span>
            <span className="text-sm">max: {formatPrice(maxPrice)}</span>
        </div>
    </div>
  )
}
export default FormRange