import React from "react"
import { Wrapper, Description, Date, Content } from "./styles"

interface NotificationProps {
  description: string
  date: string
}

const Notification: React.FC <NotificationProps> = ({ description, date }) => (
  <Wrapper activeOpacity={0.6}>
    <Content>
      <Description>
        {description}
      </Description>
      <Date>
        {date}
      </Date>
    </Content>
  </Wrapper>
)

export default Notification