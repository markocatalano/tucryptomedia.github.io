import logo from './logo.svg';
import './App.css';
import './components/NavBar/NavBar';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCount } from './components/Contador/ItemCount';
import btcMedias from './assets/btcMedias.webp'
import ethMedias from './assets/ethMedias.webp'
import tronMedias from './assets/tronMedias.webp'
import neoMedias from './assets/neoMedias.webp'
import { ItemDetailContainer } from './components/ItemDetailContainer/itemDetailContainer';



function App() {

  const agregar=(productosAlCarrito)=>{
    console.log('funcion agregar', productosAlCarrito);
  }

  const agregar2=()=>{
    console.log('funcion agregar items');
  }


  return (
    <div className="App">
      <header>
        <NavBar/>
        <ItemListContainer agregarCarrito={agregar2}></ItemListContainer>
      </header>
      <div className='d-flex flex-row m-5'>
        <div className='p-2'>
        <ItemCount stock={10} inicial={1} agregarCarrito={agregar} imagen={btcMedias} nombre='MediasBTC'></ItemCount>
        </div>
        <div className='p-2'>
        <ItemCount stock={10} inicial={1} agregarCarrito={agregar} imagen={ethMedias} nombre='MediasETH'></ItemCount>
        </div>
        <div className='p-2'>
        <ItemCount stock={10} inicial={1} agregarCarrito={agregar} imagen={tronMedias} nombre='MediasTron'></ItemCount>
        </div>
        <div className='p-2'>
        <ItemCount stock={10} inicial={1} agregarCarrito={agregar} imagen={neoMedias} nombre='MediasNeo'></ItemCount>
        </div>
      </div>
      <main>
        <ItemDetailContainer></ItemDetailContainer>
      </main>
    </div>
  );
}

export default App;
