import React from "react";
import Checkbox from "../../shared/Checkbox";
import AppContainer from "../AppContainer";
import AppHeader from "../AppHeader";
import {Wrapper, Container} from './App.styles'

function App (){
    const [lettuce, setlettuce] = React.useState(true)
    const [rice, setrice] = React.useState(false)
    return <Wrapper>
        <Container>
            <AppHeader/>
            <AppContainer
                left={<div >
                    produtos disponiveis:
                    < Checkbox 
                    value = {lettuce}
                    title="Alface"
                    onClick={() => setlettuce(!lettuce)}
                    
                    />

                    < Checkbox 
                    value = {rice}
                    title="Arroz"
                    onClick={() => setrice(!rice)}
                    
                    />
                    </div>}
                    middle = {<div >
                        sua lista
                        </div>}

                    right = { <div >
                             estatisticas
                    </div>
                    }
                    
                    />
        </Container>    
    </Wrapper>
}

export default App