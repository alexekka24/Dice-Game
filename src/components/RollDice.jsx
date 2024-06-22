import styled from 'styled-components'

const RollDice = ({currentDice, roleDice}) => {

  return (
    <DiceContainer>
        <div onClick={roleDice}>
            <img src={`/images/dice_${currentDice}.png`} alt="1" />
        </div>
        <p>Click on dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;

    p {
        font-size: 24px;
    }
`