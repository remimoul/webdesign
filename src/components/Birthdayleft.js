import Cercle from '../assets/images/Ellipse.svg'
import Happybirthday from '../assets/images/Group.svg'

function Birthdayleft() {
  return (
    <>
    <div className="container border border-3 border-dark w-50 p-3 flex-column " style={{backgroundColor:"#DF80AC"}}>
      <div className='d-flex justify-content-center align-items-center p-5 mb-2 position-relative'>
      <img src={Cercle} alt="Cercle"></img>
      <img className='position-absolute' src={Happybirthday} alt="happybirthday" />
        
      </div>
      <div>
        <p className='d-flex justify-content-center' style={{fontSize:"55px"}}>MAX RICHET</p>
      </div>

    </div>
 
    </>
  );
}   export default Birthdayleft;


