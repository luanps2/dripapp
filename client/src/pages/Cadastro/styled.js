import styled from 'styled-components';

export const AreaCadastro = styled.div`
.container{
  width: 400px;
  height: max-content;
  margin: auto;
  background-color: #ebebeb;
  padding: 20px 15px;
  margin-top: 120px;
  border-radius: 7px;
  box-shadow: 10px 11px rgba(0,0,0,0.7) ;
  text-align: center;

}

h1{
  margin: 0;
  text-align: left;
  margin-bottom: 10px;
}

.form-field{
  display: 5px;
}

.form-field{
  display: inline-block;
  padding: 5px;
  margin-top:20px;
}

.form-error{
  display:block;
  color:rgb(237,67,55);
  font-size: 0.9em;
  font-weight: 600;
}

.button{
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 5px 10px;

}`;

export default AreaCadastro;