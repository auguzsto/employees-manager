import Header from "@/components/Header";
import { initSchemaDatabase } from "../../api";

async function Main() {
      await initSchemaDatabase();
      return (
      <div>
        <Header title="Início"/>
     </div>
    );
}

export default Main;