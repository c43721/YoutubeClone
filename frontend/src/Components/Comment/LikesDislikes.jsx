import React, { useState } from 'react';

const Tally = () => {
    const [count, setCount] = useState(0)

    const liked = () => {
        setCount(count + 1)
    //    count !== setCount(count > 2);
        return liked;
        }
    
    const disliked = () => {
        setCount(count + 1)
    //    count !== setCount((count + 1) > 2)
        return disliked;
    }

    const resetLikes = () => {
        setCount = liked;
    
    const resetDislikes = () => {
        setCount = disliked;
    }
    
    }
    return(
        <div style={{ display: "flex", justifyConent: 'center'}}>
                
            <div>
                <p style={{textAlign: 'center', fontSize: 40}}>{count}</p>
                <button onClick={liked} style= {{fontSize: 20, marginRight: 10}}>Liked</button>
                <button onClick={disliked} style= {{fontSize: 20, marginRight: 10}}>Liked</button>
                

            </div>        
        </div>
        
        
    
    )

}
