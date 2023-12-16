import Header from "@/components/Header";
import { initSchemaDatabase } from "../../api";

async function Main() {
      await initSchemaDatabase();
      return (
      <div>
        <Header title="Início"/>
        <div className="p-5">
          <p className="text-3xl font-bold">Sobre o desenvolvimento...</p>
          <p>
            Opa! Tudo bem? Meu nome é Matheus Augusto e eu realizei esta avaliação na intenção de aprender o máximo possível sobre NextJS e Typescript. A parte mais difícil foi absorver, em menos de 5 dias, todo esse ecossistema/arquitura do NextJS, que por sua vez, não é muito diferente de outros frameworks de libs reativas. Em questão do Typescript, não senti dificuldade. Sobre a API, como gosto bastante de PHP, decidi fazer na mão meu próprio ecossistema para API, construi uma espécie de migration, fiz todo processo de models, controllers, etc. Bom, espero, pelo menos, conseguir alguma atenção com esta avaliação. Muito obrigado!
          </p>
        </div>
     </div>
    );
}

export default Main;