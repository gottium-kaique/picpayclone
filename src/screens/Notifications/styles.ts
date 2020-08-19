import styled from "styled-components/native"

export const Wrapper = styled.ScrollView`
  flex: 1;
  background: #1e222b;
`

export const Header = styled.View`
  height: 50px;
  padding: 12px 20px;
  background: #000;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
`

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 20px;
`

export const ConfigButton = styled.TouchableOpacity`
  padding: 20px;
`

export const ConfigButtonText = styled.Text`
  color: #10c86e;
`