import styled from 'styled-components';
import { cores } from '../../styles';

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${cores.secundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`;

export const PesquisarButton = styled.button`
  background-color: ${cores.primaria};
  border: 1px solid ${cores.primaria};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${cores.secundaria};
  margin-left: 8px;
  cursor: pointer;
`;

export const CampoPesquisa = styled.input`
  padding: 0 16px;
  outline-color: ${cores.primaria};
`;
