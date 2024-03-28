import { css } from '@emotion/css'

const counterStyle = css`
  border-radius: 4px;
  font-size: 14px;
  display: inline-block;
  border: 1px solid #dcdfe6;
  height: 40px;
  line-height: 40px;
  user-select: none;
  overflow: hidden;

  .count {
    display: inline-block;
    text-align: center;
    width: 40px;
  }

  .decrease,
  .increase {
    display: inline-block;
    width: 40px;
    height: 100%;
    text-align: center;
    background: #f5f7fa;
    color: #606266;
    cursor: pointer;
    font-size: 13px;
    cursor: pointer;
    border: none;
  }
`

export default counterStyle
