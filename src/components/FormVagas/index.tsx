import React, { FormEvent, useState } from 'react'

import { FormContainer, PesquisarButton, CampoPesquisa } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void;
};

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('');

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    aoPesquisar(termo.toLocaleLowerCase());
  };

  return (
    <FormContainer onSubmit={aoEnviarForm}>
      <CampoPesquisa
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <PesquisarButton type="submit">
        Pesquisar
      </PesquisarButton>
    </FormContainer>
  );
};

export default FormVagas;
