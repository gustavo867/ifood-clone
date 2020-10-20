import React from "react";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Fontisto,
} from "@expo/vector-icons";

interface Props {
  icon: string;
}

const IconName: React.FC<Props> = ({ icon }) => {
  if (icon === "Chats")
    return (
      <MaterialCommunityIcons name="chat-outline" size={24} color="#FFF" />
    );
  if (icon === "Notificações")
    return (
      <MaterialCommunityIcons name="bell-outline" size={24} color="#FFF" />
    );
  if (icon === "Carteira")
    return (
      <MaterialCommunityIcons name="card-text-outline" size={24} color="#FFF" />
    );
  if (icon === "Cupons")
    return <FontAwesome name="ticket" size={24} color="#FFF" />;
  if (icon === "Favoritos")
    return (
      <MaterialCommunityIcons name="heart-outline" size={24} color="#FFF" />
    );
  if (icon === "Formas de pagamento")
    return (
      <MaterialCommunityIcons name="card-text-outline" size={24} color="#FFF" />
    );
  if (icon === "Endereços")
    return <MaterialCommunityIcons name="pin-outline" size={24} color="#FFF" />;
  if (icon === "Doações")
    return <Fontisto name="heart-eyes" size={24} color="#FFF" />;
  return <Fontisto name="heart-eyes" size={24} color="#FFF" />;
};

export default IconName;
