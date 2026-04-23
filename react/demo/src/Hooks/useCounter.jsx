import React, { useState } from 'react'

function useCounter(num) {
    const [count, setcount] = useState(num)


    const increment = () => {
        setcount(count + 1)
    }

    const deccrement = () => {
        setcount(count - 1)
    }
    const Zero = () => {
        setcount(0)
    }

    return {count,setcount,increment,deccrement,Zero}

}

export default useCounter
