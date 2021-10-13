import styled from 'styled-components';

export const AreaHeader = styled.div`
height: 60px;
background-color: #791E94;
color: #fff;

.barra{
    padding: 5px 20px;
    display: flex;
    align-items: center;
}

    .logo{
        flex: 1;
        img{
            width: 145px;
        }
    }

        nav{
            ul{
                display: flex;
            }
                li{
                list-style: none;
                margin-left: 20px;
                a{
                    text-decoration: none;
                    color:#fff;
                    &:hover{
                        color: #F5BB00;
                    }
                }
            }
        }

`;