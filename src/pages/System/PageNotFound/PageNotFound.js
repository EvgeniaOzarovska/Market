import { history, Routes } from '../../../router';
import { css } from '@emotion/css';


export const PageNotFound = () => (
  <div
    className={css`
      height: 100%;
      width: 100%;
    `}
    onClick={() => history.push(Routes.Auth.Home)}
  >
    <p
      className={css`
        font-size: 42px;
        text-align: center;
        margin-top: 200px;
        color: darkgray;
        background: #ffffff;
        text-shadow: 2px 2px 0 black;
      `}
    >
      PAGE NOT FOUND
    </p>
  </div>
);
