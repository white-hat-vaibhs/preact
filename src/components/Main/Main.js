import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import NewDepositBtn from './NewDepositBtn'
import Deposits from './Deposits/Deposits'

import depositData from '../../DepositData.json'

const Container = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
`


const Main = () => {
    return (
        <Container>
            <Nav />
            <NewDepositBtn />
            <Deposits title="Brought Houses" count={2} data={depositData.active} />
            <Deposits title="Upcoming Houses" count={2} data={depositData.closed} />
        </Container>
    )
}

export default Main
