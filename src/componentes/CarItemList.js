import {Link} from 'react-router-dom';
import Productos from './Productos';






    

const  Data = [{
producto: "Almendras",
precio: 2000,
stock: 2,
peso: 1000,
img:<Link>https://www.bing.com/images/search?view=detailV2&ccid=FS3Z7xCU&id=6A0370137FC4D0EA52BADAC692B792AA88EEE089&thid=OIP.FS3Z7xCU5MNO09JlY6ngGAHaEp&mediaurl=https%3a%2f%2fstatic.comunicae.com%2fphotos%2fnotas%2f1162696%2f1476948969_almendras_2.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.152dd9ef1094e4c34ed3d26563a9e018%3frik%3dieDuiKqSt5LG2g%26pid%3dImgRaw%26r%3d0&exph=1600&expw=2550&q=alemendras&simid=607994015987673876&FORM=IRPRST&ck=6D753863BD73ACEA8DD8E33857C36002&selectedIndex=0&ajaxhist=0&ajaxserp=0 </Link> }
];


const  CarItemList = () => {
return(

    Data.map =((item,index)=>
          <Productos
            key = {index}
            producto = {item.nombre}
            precio = {item.precio}
            stock = {item.stock}
            peso = {item.peso}
            img = {item.img}/>
            
)
)
}

export default CarItemList
