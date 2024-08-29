export default function SubMenu({arr}) {
  return (
    <ul className="sub_menu">
      {arr.map(item => (
         <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}