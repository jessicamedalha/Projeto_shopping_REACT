import React from "react";
import AppContainer from "../AppContainer";
import AppHeader from "../AppHeader";
import {Wrapper, Container} from './App.styles'

function App (){
    return <Wrapper>
        <Container>
            <AppHeader/>
            <AppContainer
                left={<div style={{backgroundColor: "blue"}}>
                    produtos disponiveis
                    </div>}
                    middle = {<div style={{backgroundColor: "blue"}}>
                        sua lista
                        </div>}

                    right = { <div style={{backgroundColor: "blue"}}>
                             estatisticas
                    </div>
                    }
                    
                    />
        </Container>    
    </Wrapper>
}

export default App