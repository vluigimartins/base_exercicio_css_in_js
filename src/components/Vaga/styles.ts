import styled from 'styled-components';
import { cores } from '../../styles';

export const VagaLink = styled.a`
  border: 1px solid ${cores.secundaria};
  background-color: ${cores.primaria};
  color: ${cores.secundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`

export const VagaItem = styled.li`
  border: 1px solid ${cores.primaria};
  background-color: ${cores.secundaria};
  color: ${cores.primaria};
  padding: 16px;
  transition: all ease .3s;
  border-radius: 8px;

  &:hover {
    background-color: ${cores.primaria};
    color: ${cores.secundaria};

  ${VagaLink} {
    border-color: ${cores.primaria};
    background-color: ${cores.secundaria};
    color: ${cores.primaria};
  }
}
  `

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`


