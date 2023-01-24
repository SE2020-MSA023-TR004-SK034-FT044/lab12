import logo from './logo.svg';
import './App.css';
import Basic from './components/form';
import FlatList from "flatlist-react";

function App() {

  const Students = [{name:'test4', status : 'inactive'},{name:'test3', status : 'active'},{name:'test2', status : 'active'},{name:'test1', status : 'inactive'}]
  return (
    <div style={{margin :100}}>
    <div style={{flex : 1}}>
    <div style={{padding : 10, borderRadius : 10, backgroundColor : "#658864"}}>
<Basic list={Students}/>
    </div>
<h1>List of Students</h1>
    <FlatList
    list={Students}
    renderItem={item => 
      (
        <div style={{ margin : 10,display : 'flex',flexDirection : 'row',backgroundColor:"#DDDDDD", justifyContent : 'space-between'}}>
<h4 style={{color : '#658864', padding: 10}}>
{item.name}
</h4>
<h5 style={{color : '#658864',padding: 10}}>
{item.status}
</h5>
        </div>
      )
    }
    />
    </div>
    </div>
  );
}

export default App;
