import React from "react";
import CuponCard from "./components/CuponCard";
import ProfileCard from "./components/ProfileCard";
import Card from "./components/Card";
import * as S from "./styles";
import cardCategories from "../../utils/cardCategories";

interface Item {
  id: number;
  title: string;
  info: string;
}

const Profile: React.FC = () => {
  return (
    <S.Container>
      <ProfileCard title="Gustavo Santana" info="Seus dados" />
      <CuponCard
        title="Ganhe 10R$ indicando o Ifood"
        info="Convide seus amigos"
      />
      <S.List
        pagingEnabled
        keyExtractor={(item: any) => String(item.id).trim()}
        renderItem={({ item }: any) => (
          <Card title={item.title} info={item.info} />
        )}
        data={cardCategories}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </S.Container>
  );
};

export default Profile;
