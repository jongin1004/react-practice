import React from 'react'; 

class TOC extends React.Component {
  // shouldComponentUpdate 최적화를 위해 사용함
  // newProps를 받아올 수 있기 때문에, 기존값과 변경이 있을 경우에만 아래의 render()를 실행할 수 있도록
  // return 값이 true면 render가 실행되고, false면 실행되지 않는다.
  // 이 기능을 사용하기 위해서, state에 값을 추가하는 경우에는 push를 사용하는 것 보단 concat을 사용해야한다.
  shouldComponentUpdate(newProps) {            
    if (this.props.content === newProps.content) {
      console.log('no');
      return false;
    }

    return true;
  }

  render() {    
    let lists = [];
    let data = this.props.content;
    for (let i = 0; i < data.length; i++) {
      lists.push(
        <li key={data[i].id}>
          <a 
            href={"/content/"+data[i].id}
            onClick={function(id, e) {            
              e.preventDefault();
              this.props.onChangePage(id);
            }.bind(this, data[i].id - 1)}
          >
            {data[i].title}
          </a>
        </li>);
    }

    return (
      <nav>
        <ul>        
          {lists}
        </ul>
      </nav>
    );
  }
}
// function TOC(props) {
//   let lists = [];
//   let data = props.content;
//   for (let i = 0; i < data.length; i++) {
//     lists.push(
//       <li key={data[i].id}>
//         <a 
//           href={"/content/"+data[i].id}
//           onClick={function(id, e) {            
//             e.preventDefault();
//             props.onChangePage(id);
//           }.bind(this, data[i].id - 1)}
//         >
//           {data[i].title}
//         </a>
//       </li>);
//   }
//   return (
//     <nav>
//       <ul>        
//         {lists}
//       </ul>
//     </nav>
//   );
// }

export default TOC;