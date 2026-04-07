import React from 'react'
import ClassProps from './ClassProps'
import FuncProps from './FuncProps'

function MainProps() {
    return (
        <div>
            <h1 className='text-center'>Hello this Props Compoenent</h1>
            <div className="container">
                <h1>Hello this Class compoenent call props</h1>
                <div className="row">
                    <ClassProps title="car 1 " desc="car image data" img="https://cdn.pixabay.com/photo/2013/07/12/12/45/car-146185_1280.png" />
                    <ClassProps title="car 2 " desc="car image data" img="https://cdn.pixabay.com/photo/2020/05/19/10/05/opel-5190050_1280.jpg" />
                    <ClassProps title="car 3 " desc="car image data" img="https://cdn.pixabay.com/photo/2013/08/29/04/37/automobile-176989_1280.jpg" />
                    <ClassProps title="car 4 " desc="car image data" img="https://cdn.pixabay.com/photo/2013/07/12/12/45/car-146185_1280.png" />
                     <ClassProps title="car 2 " desc="car image data" img="https://cdn.pixabay.com/photo/2020/05/19/10/05/opel-5190050_1280.jpg" />
                    <ClassProps title="car 3 " desc="car image data" img="https://cdn.pixabay.com/photo/2013/08/29/04/37/automobile-176989_1280.jpg" />
                </div>
            </div>
            <div className="container">
                <h1>Hello this Function compoenent</h1>
                <div className="row">
                    <FuncProps title="car 1" desc="hello this car" img="https://cdn.pixabay.com/photo/2013/07/12/12/45/car-146185_1280.png" />
                    <FuncProps title="car 1" desc="hello this car" img="https://cdn.pixabay.com/photo/2013/07/12/12/45/car-146185_1280.png" />
                    <FuncProps title="car 1" desc="hello this car" img="https://cdn.pixabay.com/photo/2013/07/12/12/45/car-146185_1280.png" /><FuncProps title="car 1" desc="hello this car" img="https://cdn.pixabay.com/photo/2013/07/12/12/45/car-146185_1280.png" />
                    <FuncProps title="car 1" desc="hello this car" img="https://cdn.pixabay.com/photo/2013/07/12/12/45/car-146185_1280.png" />
                    
                </div>
            </div>
        </div>
    )
}

export default MainProps
