import styled from 'styled-components'

export const LoaderContainer = styled.div`
  
  display: flex;
  justify-content: center;
  height: 90vh;
  
  .loader {
    height: 20vh;
    width: 20vh;
    border: 10px solid steelblue;
    border-radius: 10vh;
    animation: clipMe 6s linear infinite;
    
    @keyframes clipMe {
      0%, 100% {border-width: 10px 0 0 0}
      25% {border-width: 0 10px 0 0}
      50% {border-width: 0 0 10px 0}
      75% {border-width: 0 0 0 10px}
    }
  }
  
  

`;