import React from "react"
import Notification from "../../components/Notification"
import { Header, HeaderTitle, Wrapper, ConfigButton, ConfigButtonText } from "./styles"

const Notifications = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderTitle>
          Notificações
        </HeaderTitle>
        <ConfigButton>
          <ConfigButtonText>
            Configurar
          </ConfigButtonText>
        </ConfigButton>
      </Header>
      <Notification 
        description="Receba 20% de volta em qualquer pagamento, SÓ ESSE FDS! Toque aqui para saber mais" 
        date="Ontem às 16:00"
      />
      <Notification 
        description="Receba 20% de volta em qualquer pagamento, SÓ ESSE FDS! Toque aqui para saber mais" 
        date="Ontem às 16:00"
      />
      <Notification 
        description="Receba 20% de volta em qualquer pagamento, SÓ ESSE FDS! Toque aqui para saber mais" 
        date="Ontem às 16:00"
      />
    </Wrapper>
  )
}

export default Notifications