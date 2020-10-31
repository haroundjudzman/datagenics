import styled from "styled-components"

export const FooterWrapper = styled.footer`
    grid-column: 1 / 15;
    min-height: 11.25rem;
    background: #0B3C5D;
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

export const FooterSocialWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;

    p {
        text-align: center;
        flex: 0 0 100%;
    }
`

export const FooterSocialIcons = styled.div`
    flex: 0 0 100%;
    margin-bottom: 2rem;

    img {
        padding: 0 1rem;
        fill: #F7F7FF;
        transition: filter 0.3s ease;
    }

    img:hover, img:focus {
        filter: brightness(50%);
    }
`