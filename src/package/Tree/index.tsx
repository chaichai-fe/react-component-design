import { TreeStyle } from './style'
import { createContext, useContext, useState } from 'react'

// 每个树形节点对象的类型
type Node = {
  id: string
  title: string
  expand?: boolean
  children?: Node[]
}

// Tree props type
type TreeProps = {
  data: Node[]
}

// 查找要设置的节点并修改expand字段
function setExtend(data: Node[], id: string, isExpand: boolean) {
  data.forEach((item) => {
    if (item.id === id) {
      return (item.expand = isExpand)
    }
    if (item.children) {
      setExtend(item.children, id, isExpand)
    }
  })
}

const expandCtx = createContext<
  ((id: string, isExpand: boolean) => void) | null
>(null)

const Tree = (props: TreeProps) => {
  const [data, setAData] = useState(() => props.data)

  // 1. 在顶层组件中准备操作展开数据的方法
  const onExpand = (id: string, isExpand: boolean) => {
    // 查找设置对应项的值
    const _data = JSON.parse(JSON.stringify(data)) as Node[]
    setExtend(_data, id, isExpand)
    setAData(_data)
  }

  return (
    <div className={TreeStyle}>
      <div className="treeContainer">
        {/* 2. 通过context机制透传给任意一个底层组件  */}
        <expandCtx.Provider value={onExpand}>
          {data.map((item) => (
            <TreeNode node={item} key={item.id} />
          ))}
        </expandCtx.Provider>
      </div>
    </div>
  )
}

// TreeNode prop type
type TreeNodeProps = {
  node: Node
}

const TreeNode = (props: TreeNodeProps) => {
  const { node } = props
  // 3. 底层组件获取修改数据的方法 实现功能
  const onExpand = useContext(expandCtx)!
  return (
    <ul className="treeUl">
      <li className="treeLi">
        {node.children && !node.expand && (
          <span
            className="expandBtn"
            onClick={() => onExpand(node.id, !node.expand)}>
            +
          </span>
        )}
        {node.children && node.expand && (
          <span
            className="expandBtn"
            onClick={() => onExpand(node.id, !node.expand)}>
            -
          </span>
        )}
        <span>{node.title}</span>
      </li>
      {/* 如果还有子节点就递归渲染TreeNode */}
      {node.expand &&
        node.children &&
        node.children.map((item) => <TreeNode node={item} key={item.id} />)}
    </ul>
  )
}

export default Tree
