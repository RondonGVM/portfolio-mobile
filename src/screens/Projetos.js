import { View, Text } from "react-native";
import ProjetoCard from "./components/ProjetoCard";

export default function Projetos() {
  return (
    <>
      <View>
        <Text>Página de Projetos</Text>
      </View>
      <View>
        <ProjetoCard
          nome="teste"
          descricao="testando"
          githubLink="https://google.com"
        />
      </View>
    </>
  );
}
