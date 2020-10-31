import styled from "styled-components"

export const P = styled.p`
  margin: ${props => props.margin ? props.margin : 0};
  font-size: ${props => {
    switch (props.size) {
      case "medium":
        return "1.125rem"
      case "small":
        return "1rem"
      case "xSmall":
        return "0.875rem"
      default:
        return "1.125rem"
    }
  }};
  line-height: 1.3;
  text-decoration: ${props => props.textDecoration
    ? props.textDecoration : "none"
  };
  font-weight: ${props => {
    switch (props.weight) {
      case "normal":
        return 400
      case "bold":
        return 700
      default:
        return 400
    }
  }};
  color: ${props => {
    switch (props.color) {
      case "main1":
        return props.theme.colors.main1
      case "main2":
        return props.theme.colors.main2
      case "main3":
        return props.theme.colors.main3
      case "dark1":
        return props.theme.colors.dark1
      case "light1":
        return props.theme.colors.light1
      default:
        return props.theme.colors.dark1
    }
  }};
  text-align: ${props => props.textAlign 
    ? props.textAlign : "left"
  };
`

export const H1 = styled.h1`
  font-size: 2.25rem;
  line-height: 1.3;
  color: ${props => {
    switch (props.color) {
      case "main1":
        return props.theme.colors.main1
      case "main2":
        return props.theme.colors.main2
      case "main3":
        return props.theme.colors.main3
      case "dark1":
        return props.theme.colors.dark1
      case "light1":
        return props.theme.colors.light1
      default:
        return props.theme.colors.dark1
    }
  }};
  font-weight: 700;
  text-align: ${props => props.textAlign 
    ? props.textAlign : "left"
  };
  margin: ${props => props.margin ? props.margin : 0};
`

export const H2 = styled.h2`
  font-size: 1.5rem;
  line-height: 1.3;
  color: ${props => {
    switch (props.color) {
      case "main1":
        return props.theme.colors.main1
      case "main2":
        return props.theme.colors.main2
      case "main3":
        return props.theme.colors.main3
      case "dark1":
        return props.theme.colors.dark1
      case "light1":
        return props.theme.colors.light1
      default:
        return props.theme.colors.dark1
    }
  }};
  font-weight: 400;
  text-align: ${props => props.textAlign 
    ? props.textAlign : "left"
  };
  margin: ${props => props.margin ? props.margin : 0};
  font-style: italic;
`