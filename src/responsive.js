import { css } from 'styled-components';

export const mobile = (props) => {
    return css`
        @media screen and (max-width: 576px) {
          ${props}
        }
    `;
}
export const smallSize = (props) => {
    return css`
    @media screen and (max-width: 1024px) and (min-device-width: 576px) {
      ${props}
    }
    `;
}