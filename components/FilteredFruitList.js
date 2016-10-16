const React = require('react');
const { Component } = require('react');

const FilteredFruitList = (props) => {
  const fruitList = 
    props.filter
    ? props.fruit.filter( froot => froot.fruit_type === props.filter )
    : props.fruit
  
  return (
    <ul className="fruit-list">
      {
        fruitList.map( (froot, i) =>
          <li key={i}>{ froot.char }</li>
        )
      }
    </ul>
  )
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
}


//   constructor(props) {
//     super(props);

//     this.state = {
//       items: []
//     };
//   }

//   componentWillMount() {
//     fetch('/api/fruit')
//       .then(res => res.json())
//       .then(fruit => this.setState({ items: fruit}));
//   }

//   render() {
//     const list = !this.props.filter ? this.state.items :
//       this.state.items.filter(i => i.fruit_type == this.props.filter);

//     return (
//       <ul className="fruit-list">
//         {list.map((i,idx) => <li key={idx}>{i.char}</li>)}
//       </ul>
//     );
//   }
// }

module.exports = FilteredFruitList;

