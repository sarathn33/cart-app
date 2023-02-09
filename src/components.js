import {data} from "./data"
import{useState} from "react"
import { Button, Card } from "react-bootstrap";
import "./components.css"

export function Components(){
    const [card,setCard]= useState(data);
    const [item,setItems]= useState(0);

    return(
        <div>
            <div className="heading">
                <h1>Shop with style</h1>
                <h2>With shop homepage templates</h2>
                <h3>CART:{item}</h3>
            </div>
            <div className="container">
                {card.map((prod,idx)=>(
                    <CardDetails
                    key={idx}
                    title={prod.title}
                    ratings={prod.ratings}
                    price={prod.price}
                    specialPrice={prod.specialPrice}
                    buttonName={prod.buttonName}
                    changedName={prod.changedName}
                    setCard={setCard}
                    setItems={setItems}
                    idx={idx}
                    item={item}
                    card={card}

                    />
                ))}
                
            </div>
        </div>
    )}

function CardDetails ({setCard, setItems, idx , item,title,ratings,price,specialPrice,buttonName,changedName}) {
     const [showBtn, setShowBtn] = useState(true);
     const handleCartAdd = (idx, setItems, item) => {
         setShowBtn(!showBtn)
         setItems(item + 1)
  
     }
     const handleCartRemove = (idx, setItems , item, setCard) =>{
        setShowBtn(!showBtn)
        setItems(item - 1)
    
     }
return(
<div className="main-card">
     <div className="Card">
        <Card style={{ width: '17rem',margin:"20px" ,height:"25rem"}} >
    <Card.Body style={{padding:"10px"}}>
      <Card.Title>{title}</Card.Title>
      <p ><s>{price}</s> Special Price:{specialPrice}</p>
      <p className="rating-data">{ratings}</p>
      <div className="btn-area">
        
          {buttonName = "Add to cart" ? showBtn ? <Button  className="btn" onClick={()=>handleCartAdd(idx, setItems, item)} variant="primary">{buttonName}</Button>: 
          <Button className="btn" onClick={()=>handleCartRemove(idx, setItems, item , setCard)} variant="secondary">{changedName}</Button>  :<Button className="btn" >{buttonName}</Button>
        }
        
        </div>
    </Card.Body>
   
  </Card>

</div>
   
    </div>
)
}