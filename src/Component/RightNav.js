import React from 'react';
import styled from 'styled-components';



const Ul = styled.ul`
    
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
        font-size: 15px;
        padding-right: 40px;
        color: #B9B9B9;
        

    ul{
        font-size:15px;
        font-weight: bold;
        padding-top: 25px;
        padding-left:0px;
        
    }

    li{
        font-size:14px;
        list-style: none;
        font-weight: normal;
        line-height: normal;
        padding-top: 5px;
    }

    @media (max-width: 3000px) {

        flex-flow: column nowrap;
        background-color:#333333;
        position:fixed;
        transform: ${({ open }) => open ? 'translateX(100%)' : '(translateX(0))'};
        top:0;
        right:0;
        height:100vh;
        width:220px;
        padding-top:3rem;
        li{
            color:#fff
        }
    }
`

const RightNav = ({open}) => {
    return (
    <Ul open={open}> 
            <ul> Profil
                <li>Se connecter</li>
                <li>S’inscrire</li>
                <li>En savoir plus</li>
            </ul>

            <ul> Paramétres
                <li>Recharche privée</li>
                <li>Application et extension</li>
            </ul>

            <ul> Qui nous sommes
                <li>À propos de nous </li>
                <li>Politique de confidentialité</li>
                <li>Carrières</li>
                <li>Kit Presse</li>
            </ul>

            <ul> Restez en contact
                <li>Twitter</li>
            </ul>

    </Ul>
    )
}

export default RightNav
