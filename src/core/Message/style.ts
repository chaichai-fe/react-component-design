import { css } from '@emotion/css'

const MessageStyle = css`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  .adm-message {
    padding: 8px 12px;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    display: flex;
    justify-content: center;
    word-wrap: break-word;
    border-radius: 8px;
    border: 1px solid #ccc;
    transition: transform 0.4s ease;
    transform: translateY(-200%);
    &-show {
      transform: translateY(0%);
    }

    &-info {
      background-color: #e6f4ff;
      border-color: #91caff;
    }

    &-success {
      background-color: #f6ffed;
      border-color: #b7eb8f;
    }

    &-error {
      background-color: #fff2f0;
      border-color: #ffccc7;
    }

    &-warning {
      background-color: #fffbe6;
      border-color: #ffe58f;
    }
  }
`
export { MessageStyle }
