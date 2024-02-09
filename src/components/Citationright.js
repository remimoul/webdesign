import man from '../assets/images/people.png'

function Citationright() {
  return (
    <div className="border-top border-bottom border-3 border-dark w-50 p-3 ">
    
      <div className="border border-3 border-dark p-3 rounded h5">
      <p>I've missed more than 9,000 shots in my career. I've lost almost 300 games. Twenty-six times I've been trusted to take the game-winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.</p>
      <p>- MICHAEL JORDAN</p>
     
    </div>
    <div className="border border-3 border-dark mt-4 rounded h-50">
      <div className='d-flex justify-content-center'>
        <img src={man} alt='littleman'></img>
      </div>
    
    </div>
    
<div className='d-flex justify-content-center'>

  <p>21</p>
    <div className="progress mt-5 w-50 border border-3 border-dark">
  <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{backgroundColor:"#DF80AC"}}></div>
</div>
</div>
    </div>
  );
}   export default Citationright;